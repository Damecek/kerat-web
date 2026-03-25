import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(process.cwd());
const legacyDir = path.join(rootDir, "ftp-mirror/kerat.cz/kerat_cz");
const targetAssetsDir = path.join(rootDir, "src/assets/media");
const targetDataDir = path.join(rootDir, "src/data");
const targetGalleryData = path.join(targetDataDir, "gallery-data.json");

const staticAssets = [
  "F1.jpg",
  "F5.jpg",
  "F24.jpg",
  "F67.jpg",
  "F73.jpg",
  "F76.jpg",
  "F101.jpg",
  "F107.jpg",
  "F120.jpg",
  "F128.jpg",
  "F129.jpg",
  "F145.jpg",
  "F165.jpg",
  "F255.jpg",
  "dilna1.jpg",
  "dilna2.jpg",
  "dilna5.jpg",
  "srdce_dvojak_hrnek.jpeg",
  "ulice.jpg",
  "vzorkovna1.jpg",
  "vzorkovna2.jpg",
  "kachel1.jpg",
  "kachel3.jpg",
  "kachel4.jpg",
  "kachel6.jpg",
  "kachel7.jpg",
  "kachel8.jpg",
  "kachel9.jpg",
  "kachel10.jpg",
  "kachel11.jpg",
  "kachel12.jpg",
  "kachel13.jpg",
  "kachel14.jpg",
  "kachel15.jpg",
  "kachel16.jpg",
  "kachel17.jpg",
  "kachel18.jpg",
  "kachel19.jpg",
  "kachel20.jpg",
  "kachel21.jpg",
  "kachel22.jpg",
  "kachel23.jpg",
  "kachel24.jpg",
  "kachel25.jpg",
  "kachel26.jpg",
  "kachel28.jpg",
  "kachel31.jpg",
  "kachel32.jpg",
  "kachel33.jpg",
  "kachel34.jpg",
  "kachel35.jpg",
  "kachel36.jpg",
  "kachel37.jpg",
  "kachel38.jpg",
  "kachel39.jpg",
  "kachel40.jpg"
];

const galleryPageCounts = {
  A: 5,
  B: 9,
  C: 6,
  D: 2,
  E: 3,
  F: 3,
  G: 3,
  H: 4,
  I: 4,
  J: 4,
  K: 3,
  L: 3,
  M: 10,
  N: 2
};

const localeSuffixes = {
  cs: "",
  en: "_eng",
  de: "_ger"
};

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function decodeLegacyFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  return new TextDecoder("windows-1250").decode(buffer);
}

function stripHtml(html) {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/?(?:font|b|i|em|strong|span|p)[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function isGalleryCaption(text) {
  if (!text) return false;
  const blacklist = [
    "zpět",
    "další",
    "back",
    "next",
    "weiter",
    "zurück",
    "hlavni",
    "historie",
    "index",
    "wesentliches"
  ];
  return !blacklist.includes(text.toLowerCase());
}

function extractGalleryItemsFromHtml(html) {
  const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((match) => match[1]);
  const items = [];

  for (let index = 0; index < rows.length; index += 1) {
    const imageCells = [...rows[index].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)]
      .map((match) => match[1])
      .map((cell) => {
        const imageMatch = cell.match(/<img[^>]+src="([^"]+)"/i);
        return imageMatch ? imageMatch[1] : null;
      })
      .filter((src) => src && !src.toLowerCase().includes("spiral") && !src.toLowerCase().endsWith(".gif"));

    if (!imageCells.length) continue;

    const nextRow = rows[index + 1] ?? "";
    const captions = [...nextRow.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)]
      .map((match) => stripHtml(match[1]))
      .filter(isGalleryCaption);

    imageCells.forEach((image, imageIndex) => {
      items.push({
        image,
        caption: captions[imageIndex] || ""
      });
    });
  }

  return items;
}

function getGalleryData() {
  const assetsToCopy = new Set(staticAssets);
  const galleryData = {};

  for (const [locale, suffix] of Object.entries(localeSuffixes)) {
    galleryData[locale] = {};
    for (const [letter, pageCount] of Object.entries(galleryPageCounts)) {
      const items = [];
      const seen = new Set();

      for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
        const filePath = path.join(legacyDir, `foto${letter}${pageNumber}${suffix}.htm`);
        if (!fs.existsSync(filePath)) continue;

        const pageItems = extractGalleryItemsFromHtml(decodeLegacyFile(filePath));
        for (const item of pageItems) {
          if (!legacyAssetExists(item.image)) continue;
          const key = `${item.image}:${item.caption}`;
          if (seen.has(key)) continue;
          seen.add(key);
          items.push(item);
          assetsToCopy.add(item.image);
        }
      }

      galleryData[locale][letter] = {
        coverImage: items[0]?.image || "",
        itemCount: items.length,
        items
      };
    }
  }

  return { galleryData, assetsToCopy };
}

function copyAsset(fileName) {
  const sourcePath = path.join(legacyDir, fileName);
  const targetPath = path.join(targetAssetsDir, fileName);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing legacy asset: ${fileName}`);
  }
  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
}

function legacyAssetExists(fileName) {
  return fs.existsSync(path.join(legacyDir, fileName));
}

ensureDir(targetAssetsDir);
ensureDir(targetDataDir);

const { galleryData, assetsToCopy } = getGalleryData();
fs.rmSync(targetAssetsDir, { recursive: true, force: true });
ensureDir(targetAssetsDir);

for (const fileName of [...assetsToCopy].sort()) {
  copyAsset(fileName);
}

fs.writeFileSync(targetGalleryData, `${JSON.stringify(galleryData, null, 2)}\n`, "utf8");

console.log(
  `Migrated ${assetsToCopy.size} assets and wrote ${path.relative(rootDir, targetGalleryData)}`
);
