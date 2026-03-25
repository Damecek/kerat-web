import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(process.cwd());
const assetBase = "/ftp-mirror/kerat.cz/kerat_cz";
const shopUrl = "https://www.fler.cz/kerat-keramika";
const siteUrl = "https://www.kerat.cz";
const buildDate = "2026-03-24";

const contact = {
  company: "KERAT Keramika",
  person: "Petr Štěpánek",
  street: "Stavitelská 6 / 1099",
  city: "Praha 6 Dejvice",
  postalCode: "160 00",
  country: "CZ",
  phoneDisplay: "+420 602 376 670",
  phoneHref: "tel:+420602376670",
  emailPrimary: "stepanek@kerat.cz",
  emailSecondary: "kerat@kerat.cz",
  openingHours: "Mon-Fri 08:00-17:00, evenings and weekends by arrangement",
  legacyHours: "Pondělí až pátek 8:00-17:00, večer a víkend po dohodě."
};

const glazeShared = [
  { id: 1, image: "kachel19.jpg", stock: true },
  { id: 2, image: "kachel17.jpg", stock: true },
  { id: 3, image: "kachel20.jpg", stock: true },
  { id: 4, image: "kachel18.jpg", stock: true },
  { id: 5, image: "kachel34.jpg", stock: false },
  { id: 6, image: "kachel4.jpg", stock: false },
  { id: 7, image: "kachel26.jpg", stock: false },
  { id: 8, image: "kachel23.jpg", stock: false },
  { id: 9, image: "kachel22.jpg", stock: false },
  { id: 10, image: "kachel25.jpg", stock: false },
  { id: 11, image: "kachel21.jpg", stock: false },
  { id: 12, image: "kachel24.jpg", stock: false },
  { id: 13, image: "kachel32.jpg", stock: false },
  { id: 14, image: "kachel31.jpg", stock: true },
  { id: 15, image: "kachel14.jpg", stock: false },
  { id: 16, image: "kachel13.jpg", stock: false },
  { id: 17, image: "kachel15.jpg", stock: true },
  { id: 18, image: "kachel16.jpg", stock: false },
  { id: 19, image: "kachel33.jpg", stock: false },
  { id: 20, image: "kachel28.jpg", stock: false },
  { id: 21, image: "kachel14.jpg", stock: false },
  { id: 22, image: "kachel13.jpg", stock: false },
  { id: 23, image: "kachel15.jpg", stock: false },
  { id: 24, image: "kachel16.jpg", stock: false },
  { id: 25, image: "kachel8.jpg", stock: false },
  { id: 26, image: "kachel6.jpg", stock: false },
  { id: 27, image: "kachel7.jpg", stock: false },
  { id: 28, image: "kachel1.jpg", stock: false },
  { id: 29, image: "kachel2.jpg", stock: false },
  { id: 30, image: "kachel3.jpg", stock: true },
  { id: 31, image: "kachel10.jpg", stock: false },
  { id: 32, image: "kachel11.jpg", stock: false },
  { id: 33, image: "kachel12.jpg", stock: false },
  { id: 34, image: "kachel9.jpg", stock: false },
  { id: 35, image: "kachel40.jpg", stock: true },
  { id: 36, image: "kachel36.jpg", stock: true },
  { id: 37, image: "kachel35.jpg", stock: true },
  { id: 38, image: "kachel38.jpg", stock: true },
  { id: 39, image: "kachel37.jpg", stock: true },
  { id: 40, image: "kachel39.jpg", stock: false }
];

const sharedCategories = [
  { slug: "tea-sets", image: "F128.jpg" },
  { slug: "mugs", image: "F101.jpg" },
  { slug: "aroma", image: "F24.jpg" },
  { slug: "gifts", image: "F73.jpg" },
  { slug: "banks", image: "F76.jpg" },
  { slug: "tableware", image: "F120.jpg" },
  { slug: "kitchen", image: "F145.jpg" },
  { slug: "decor", image: "F129.jpg" },
  { slug: "hospitality", image: "F255.jpg" },
  { slug: "dining", image: "F5.jpg" }
];

const locales = {
  cs: {
    code: "cs",
    lang: "cs-CZ",
    localeLabel: "CZ",
    pathPrefix: "",
    homeSlug: "",
    siteName: "KERAT Keramika",
    shopLabel: "Přejít do obchodu",
    contactLabel: "Napsat e-mail",
    nav: {
      home: "Domů",
      products: "Sortiment",
      glazes: "Glazury",
      story: "O nás",
      contact: "Kontakt"
    },
    pages: {
      home: {
        slug: "",
        title: "Kerat Keramika | Ručně vyráběná keramika z Prahy",
        description: "KERAT Keramika Praha – ručně vyráběná užitková a dekorativní keramika. 270+ výrobků, 40 glazur, rodinná tradice od 18. století. Hrnky, čajové soupravy, zakázky, restaurace."
      },
      products: {
        slug: "sortiment",
        title: "Sortiment | Kerat Keramika",
        description: "Čajové soupravy, hrnky, aroma lampy, kuchyňská a stolní keramika, dárky i reklamní keramika od KERAT."
      },
      glazes: {
        slug: "glazury",
        title: "Glazury | Kerat Keramika",
        description: "Kompletní přehled 40 glazur KERAT včetně nejžádanějších skladových designů."
      },
      story: {
        slug: "o-nas",
        title: "O nás | Kerat Keramika",
        description: "Rodinná keramická tradice, dílna v Dejvicích, učni, vzorkovna a poctivá výroba s vysokým podílem ruční práce."
      },
      contact: {
        slug: "kontakt",
        title: "Kontakt | Kerat Keramika",
        description: "Kontakt na KERAT Keramika v Praze 6 Dejvicích. Telefon, e-mail, adresa a odkaz do obchodu."
      }
    },
    hero: {
      eyebrow: "Ručně vyráběná keramika z Prahy",
      title: "Keramika, která spojuje řemeslo, tradici a každodenní radost z používání.",
      lead: "V KERATu vyrábíme dekorativní i užitkovou keramiku s vysokým podílem ruční práce. Nabízíme široký sortiment pro domov, dárky, restaurace i zakázkovou výrobu.",
      stats: [
        "více než 270 originálních výrobků",
        "40 glazur v celém sortimentu",
        "rodinná tradice sahající do 18. století"
      ]
    },
    homeSections: {
      featuredTitle: "Vybraný sortiment",
      featuredLead: "Původní fotokatalog jsme přeuspořádali do přehledných kategorií, aby zákazník rychle našel to, co hledá.",
      glazeTitle: "Barevnost, která prodává",
      glazeLead: "Celý sortiment vyrábíme ve 40 barevných možnostech. Skladem držíme 12 nejžádanějších designů: 1, 2, 3, 4, 14, 17, 30, 35, 36, 37, 38 a 39.",
      storyTitle: "Rodinná dílna a osobní přístup",
      storyLead: "Zkušenosti předávané generacemi, vlastní receptury glazur a vzorkovna v Praze 6. Zákazník u nás nenakupuje anonymně, ale přímo od lidí, kteří keramiku vyrábějí.",
      trustTitle: "Proč nakupovat u KERAT",
      trustHeading: "Poctivá keramika přímo od výrobce",
      trust: [
        {
          title: "Poctivá výroba",
          body: "Dvakrát pálená, vysoce slinutá keramika vypalovaná na 1140 až 1160 °C."
        },
        {
          title: "Široký výběr",
          body: "Od čajových souprav a hrnků přes dekorace až po firemní a zakázkové kusy."
        },
        {
          title: "Jistota dopravy",
          body: "Jednotlivé objednávky posíláme poštou nebo Zásilkovnou, větší objednávky řešíme individuálně."
        }
      ]
    },
    productsIntro: {
      title: "Sortiment pro domov, dárky i zakázky",
      lead: "Naše produkce obsahuje stovky výrobků s vysokým podílem ruční práce. Vedle klasických kolekcí vyrábíme také reklamní keramiku, firemní loga a zakázkové motivy."
    },
    categories: [
      {
        slug: "tea-sets",
        letter: "A",
        name: "Čajové soupravy",
        image: "F128.jpg",
        description: "Soupravy pro pomalé stolování, čajové rituály a dárkové příležitosti."
      },
      {
        slug: "mugs",
        letter: "B",
        name: "Hrnky",
        image: "F101.jpg",
        description: "Ručně tvarované hrnky, oblíbené dárkové kusy i každodenní keramika."
      },
      {
        slug: "aroma",
        letter: "C",
        name: "Aroma lampy a svícny",
        image: "F24.jpg",
        description: "Keramika pro atmosféru interiéru, světlo, vůni a dekorativní akcent."
      },
      {
        slug: "others",
        letter: "D",
        name: "Ostatní",
        image: "F165.jpg",
        description: "Směs originálních kusů, dekorací a drobných kolekcí, které se nevejdou do jedné škatulky."
      },
      {
        slug: "gifts",
        letter: "E",
        name: "Dárky",
        image: "F73.jpg",
        description: "Vtipná keramika, dárkové předměty a drobnosti s osobitým charakterem."
      },
      {
        slug: "banks",
        letter: "F",
        name: "Kasičky a popelníky",
        image: "F76.jpg",
        description: "Tradiční i nápadité tvary, které si zákazníci z původního katalogu dobře pamatují."
      },
      {
        slug: "tableware",
        letter: "G",
        name: "Keramika na stůl",
        image: "F120.jpg",
        description: "Servírování, stolní doplňky a užitková keramika pro každodenní provoz."
      },
      {
        slug: "small-objects",
        letter: "H",
        name: "Drobnosti",
        image: "F107.jpg",
        description: "Menší keramické kusy, které fungují jako dárek, dekorace i praktický detail."
      },
      {
        slug: "kitchen",
        letter: "I",
        name: "Keramika do kuchyně",
        image: "F145.jpg",
        description: "Pekáčky, dózy, kořenky a další funkční kusy do domácnosti i na chalupu."
      },
      {
        slug: "for-him",
        letter: "J",
        name: "Pro pány",
        image: "F67.jpg",
        description: "Dárkové a užitkové kusy s robustnějším charakterem a motivy pro muže."
      },
      {
        slug: "for-her",
        letter: "K",
        name: "Pro dámy",
        image: "F1.jpg",
        description: "Jemnější tvary, svícny, aroma keramika a dárky vhodné jako osobní pozornost."
      },
      {
        slug: "vases",
        letter: "L",
        name: "Vázy",
        image: "F129.jpg",
        description: "Glazované vázy a dekorativní nádoby pro interiér i aranžování."
      },
      {
        slug: "hospitality",
        letter: "M",
        name: "Pro restaurace a hospody",
        image: "F255.jpg",
        description: "Odolné kusy pro gastro provoz, servírování a originální atmosféru podniku."
      },
      {
        slug: "dining",
        letter: "N",
        name: "Jídelní sety",
        image: "F5.jpg",
        description: "Sady pro kompletní stolování ve sjednocených glazurách a tvarech."
      }
    ],
    glazeNames: [
      "Káva",
      "Nefrit",
      "Zelinkavá",
      "Písek",
      "Cihla",
      "Letní obloha",
      "Sníh",
      "Minerál",
      "Laguna",
      "Smaragd",
      "Káva s mlékem",
      "Noc",
      "Mořská vlna",
      "Noční oceán",
      "Kakao",
      "Tráva",
      "Led",
      "Borovice",
      "Pepř",
      "Chrpa",
      "Modrá imprese",
      "Hnědá imprese",
      "Zelená imprese",
      "Bílá imprese",
      "Hnědý sníh",
      "Zelený sníh",
      "Modrý sníh",
      "Pouštní bouře",
      "Džungle",
      "Pláž",
      "Zelená imprese",
      "Písková imprese",
      "Nefritová imprese",
      "Kávová imprese",
      "Modrobílá",
      "Medově zelená",
      "Med",
      "Medově modrá",
      "Medově hnědá",
      "Modrohnědá"
    ],
    glazeCopy: {
      title: "40 glazur, 12 skladových favoritů",
      lead: "Barevné možnosti jsou součástí identity značky KERAT. Celý sortiment lze objednat v lesklých, matných i kombinovaných glazurách."
    },
    story: {
      title: "Tradice, dílna a vzorkovna",
      intro: "Řemeslo se v rodině Štěpánků předává po generace. Začátkem roku 1991 vznikl vlastní atelier v Dejvicích a od té doby se výroba i vzorkovna průběžně rozvíjejí.",
      blocks: [
        {
          title: "Rodinné řemeslo",
          body: "Zkušenosti sahají až do konce 18. století. Důraz zůstává na ruční práci, vlastních glazurách a keramice, která má sloužit i zdobit."
        },
        {
          title: "Učni a předávání zkušeností",
          body: "Od roku 1993 probíhá spolupráce s odborným učilištěm. Dílnou prošly celé generace učňů a řemeslo tak žije dál."
        },
        {
          title: "Osobní přístup",
          body: "Vzorkovna a atelier v Praze 6 umožňují osobní konzultaci, výběr glazur i přímé představení sortimentu."
        }
      ],
      closing: "Vzorkovna a atelier jsou otevřeny pondělí až pátek 8:00–17:00, večer a víkend po dohodě. Přijďte se podívat, prohlédnout sortiment a vybrat glazuru osobně."
    },
    contactPage: {
      title: "Kontaktujte dílnu KERAT",
      lead: "Chcete vybrat konkrétní keramiku, domluvit zakázku nebo přejít rovnou do obchodu? Ozvěte se přímo do atelieru nebo pokračujte do online nabídky."
    },
    faq: {
      eyebrow: "Máte otázky?",
      title: "Časté dotazy",
      items: [
        {
          q: "Jak mohu objednat keramiku KERAT?",
          a: "Keramiku objednáte přes náš online obchod na Fler.cz nebo nás kontaktujte přímo e-mailem na stepanek@kerat.cz. Větší a zakázkové objednávky řešíme individuálně."
        },
        {
          q: "Je možná zakázková výroba s vlastním motivem nebo logem?",
          a: "Ano, zakázkovou výrobu nabízíme. Realizujeme firemní loga, reklamní keramiku i individuální motivy. Kontaktujte nás pro nacenění a podrobnosti."
        },
        {
          q: "Které glazury jsou dostupné skladem?",
          a: "Skladem držíme 12 nejpoptávanějších designů: glazury č. 1, 2, 3, 4, 14, 17, 30, 35, 36, 37, 38 a 39. Ostatních 28 glazur vyrábíme na objednávku."
        },
        {
          q: "Mohu navštívit vzorkovnu osobně?",
          a: "Vzorkovna a atelier v Praze 6 Dejvicích jsou otevřeny pondělí až pátek 8:00–17:00. Večerní a víkendní návštěvy domluvte předem telefonicky nebo e-mailem."
        }
      ]
    },
    ctaStripText: "Hledáte unikátní keramiku nebo zakázku na míru?",
    ctas: {
      primary: "Do online obchodu",
      secondary: "Kontaktovat atelier",
      tertiary: "Zobrazit glazury"
    },
    labels: {
      localeSwitch: "Jazyky",
      shopBadge: "Externí obchod",
      stocked: "Skladem",
      fullPalette: "Na objednávku",
      heroImageAlt: "Ukázka ručně vyráběné keramiky KERAT",
      showroomAlt: "Vzorkovna a dílna KERAT",
      processAlt: "Řemeslná výroba keramiky v atelieru KERAT",
      contactHeading: "Atelier a vzorkovna",
      breadcrumbs: {
        home: "Domů",
        products: "Sortiment",
        glazes: "Glazury",
        story: "O nás",
        contact: "Kontakt"
      }
    }
  },
  en: {
    code: "en",
    lang: "en",
    localeLabel: "EN",
    pathPrefix: "en",
    homeSlug: "en",
    siteName: "KERAT Pottery",
    shopLabel: "Visit the shop",
    contactLabel: "Send an email",
    nav: {
      home: "Home",
      products: "Products",
      glazes: "Glazes",
      story: "Story",
      contact: "Contact"
    },
    pages: {
      home: {
        slug: "",
        title: "KERAT Pottery | Handmade ceramics from Prague",
        description: "KERAT Pottery Prague – handmade decorative and utility ceramics. 270+ products, 40 glazes, family tradition since the 18th century. Mugs, tea sets, custom orders, hospitality."
      },
      products: {
        slug: "products",
        title: "Products | KERAT Pottery",
        description: "Tea sets, mugs, aroma lamps, kitchen pottery, tableware, gifts and custom ceramics from KERAT."
      },
      glazes: {
        slug: "glazes",
        title: "Glazes | KERAT Pottery",
        description: "Browse all 40 KERAT glaze options, including the most popular stocked designs."
      },
      story: {
        slug: "story",
        title: "Story | KERAT Pottery",
        description: "Family pottery tradition, Prague workshop, apprentices, showroom and handmade production quality."
      },
      contact: {
        slug: "contact",
        title: "Contact | KERAT Pottery",
        description: "Contact KERAT Pottery in Prague 6 Dejvice. Phone, email, address and direct link to the online shop."
      }
    },
    hero: {
      eyebrow: "Handmade pottery from Prague",
      title: "Ceramics that bring craft, tradition and everyday pleasure together.",
      lead: "KERAT creates decorative and utility pottery with a high share of hand work. The collection covers home use, gifts, hospitality and custom production.",
      stats: [
        "more than 270 original products",
        "40 glaze options across the assortment",
        "family tradition reaching back to the 18th century"
      ]
    },
    homeSections: {
      featuredTitle: "Featured collection",
      featuredLead: "The legacy photo catalogue has been reorganized into clear customer-facing categories.",
      glazeTitle: "Glazes that shape the brand",
      glazeLead: "The complete assortment is available in 40 colour options. The most popular stocked designs are 1, 2, 3, 4, 14, 17, 30, 35, 36, 37, 38 and 39.",
      storyTitle: "Family workshop with personal service",
      storyLead: "Generational know-how, in-house glaze recipes and a showroom in Prague 6 create a direct buying experience instead of anonymous retail.",
      trustTitle: "Why customers choose KERAT",
      trustHeading: "Quality pottery, direct from the maker",
      trust: [
        {
          title: "Careful production",
          body: "Double-fired, highly sintered pottery fired at 1140 to 1160 °C."
        },
        {
          title: "Wide assortment",
          body: "From tea sets and mugs to decorative ceramics, hospitality pieces and custom orders."
        },
        {
          title: "Reliable delivery",
          body: "Individual orders are shipped by post or collection network, while larger orders are handled individually."
        }
      ]
    },
    productsIntro: {
      title: "Collections for home, gifting and custom work",
      lead: "The assortment includes hundreds of items with a high amount of hand finishing. KERAT also produces promotional ceramics, company logos and custom motifs."
    },
    categories: [
      { slug: "tea-sets", letter: "A", name: "Tea sets", image: "F128.jpg", description: "Sets designed for slow serving, tea rituals and premium gift moments." },
      { slug: "mugs", letter: "B", name: "Mugs", image: "F101.jpg", description: "Hand-shaped mugs for everyday use and memorable gifts." },
      { slug: "aroma", letter: "C", name: "Aroma lamps and candle holders", image: "F24.jpg", description: "Ceramics that build atmosphere through fragrance, light and surface texture." },
      { slug: "others", letter: "D", name: "Others", image: "F165.jpg", description: "A broader mix of distinctive decorative and utility pieces from the original catalogue." },
      { slug: "gifts", letter: "E", name: "Gifts", image: "F73.jpg", description: "Playful pieces, gift ceramics and small objects with a strong handmade identity." },
      { slug: "banks", letter: "F", name: "Piggy banks and ashtrays", image: "F76.jpg", description: "Classic and unusual shapes retained from the original catalogue." },
      { slug: "tableware", letter: "G", name: "Tableware", image: "F120.jpg", description: "Serving pieces and tabletop accessories for daily use." },
      { slug: "small-objects", letter: "H", name: "Small objects", image: "F107.jpg", description: "Small ceramic details that work as gifts, accents and practical pieces." },
      { slug: "kitchen", letter: "I", name: "Kitchen pottery", image: "F145.jpg", description: "Roasters, storage jars, spice sets and other useful pieces for home or cottage." },
      { slug: "for-him", letter: "J", name: "For men", image: "F67.jpg", description: "Gift and utility ceramics with a stronger, more robust character." },
      { slug: "for-her", letter: "K", name: "For women", image: "F1.jpg", description: "Softer shapes, aroma ceramics and decorative pieces selected for gifting." },
      { slug: "vases", letter: "L", name: "Vases", image: "F129.jpg", description: "Glazed vases and decorative vessels for interiors and floral styling." },
      { slug: "hospitality", letter: "M", name: "For restaurants and pubs", image: "F255.jpg", description: "Durable ceramics for hospitality spaces and original presentation." },
      { slug: "dining", letter: "N", name: "Dining sets", image: "F5.jpg", description: "Coordinated sets for table service in matching glazes and shapes." }
    ],
    glazeNames: [
      "Coffee",
      "Dark jade",
      "Green",
      "Sand",
      "Brick",
      "Summer sky",
      "Snow",
      "Mineral",
      "Laguna",
      "Emerald",
      "Coffee and milk",
      "Night",
      "Sea wave",
      "Night ocean",
      "Cocoa",
      "Grass",
      "Ice",
      "Pine",
      "Pepper",
      "Cornflower",
      "Blue impression",
      "Brown impression",
      "Green impression",
      "White impression",
      "Brown snow",
      "Green snow",
      "Blue snow",
      "Desert storm",
      "Jungle",
      "Beach",
      "Green impression",
      "Sand impression",
      "Dark jade impression",
      "Coffee impression",
      "Blue and white",
      "Honey green",
      "Honey",
      "Honey blue",
      "Honey brown",
      "Blue and brown"
    ],
    glazeCopy: {
      title: "40 glazes, 12 stocked favourites",
      lead: "Glaze variety is a core part of the KERAT offer. The whole assortment can be ordered in glossy, matte and combined glaze finishes."
    },
    story: {
      title: "Tradition, workshop and showroom",
      intro: "The Štěpánek family has passed pottery craft from generation to generation. A dedicated workshop opened in Dejvice in 1991 and has continued expanding its production and showroom ever since.",
      blocks: [
        { title: "Family craft", body: "The know-how goes back to the late 18th century, with a lasting focus on hand work, custom glaze recipes and useful decorative ceramics." },
        { title: "Apprentices and continuity", body: "Since 1993 the workshop has cooperated with a vocational school and helped new generations learn the trade." },
        { title: "Direct customer service", body: "The Prague 6 showroom allows visitors to see the assortment, compare glazes and discuss custom production directly with the makers." }
      ],
      closing: "The showroom and workshop are open Monday to Friday, 08:00–17:00, with evenings and weekends by arrangement. Come and see the collection and choose glazes in person."
    },
    contactPage: {
      title: "Contact the KERAT workshop",
      lead: "Need help choosing pottery, planning a custom order or visiting the online shop? Reach the workshop directly or continue to the external storefront."
    },
    faq: {
      eyebrow: "Questions?",
      title: "Frequently asked questions",
      items: [
        {
          q: "How can I order KERAT pottery?",
          a: "You can order through our online shop on Fler.cz or contact us directly at stepanek@kerat.cz. Larger and custom orders are handled individually."
        },
        {
          q: "Is custom production with a logo or motif possible?",
          a: "Yes, we offer custom production including company logos, promotional ceramics and individual motifs. Contact us for pricing and details."
        },
        {
          q: "Which glazes are available from stock?",
          a: "We keep 12 of the most popular designs in stock: glazes no. 1, 2, 3, 4, 14, 17, 30, 35, 36, 37, 38 and 39. The remaining 28 glazes are made to order."
        },
        {
          q: "Can I visit the showroom in person?",
          a: "The showroom and workshop in Prague 6 Dejvice are open Monday to Friday, 08:00–17:00. Evening and weekend visits can be arranged in advance by phone or email."
        }
      ]
    },
    ctaStripText: "Looking for unique pottery or a custom order?",
    ctas: {
      primary: "Go to the online shop",
      secondary: "Contact the workshop",
      tertiary: "Browse glazes"
    },
    labels: {
      localeSwitch: "Languages",
      shopBadge: "External shop",
      stocked: "Stocked",
      fullPalette: "Made to order",
      heroImageAlt: "Sample of handmade KERAT pottery",
      showroomAlt: "KERAT showroom and workshop",
      processAlt: "Pottery making process inside the KERAT workshop",
      contactHeading: "Workshop and showroom",
      breadcrumbs: {
        home: "Home",
        products: "Products",
        glazes: "Glazes",
        story: "Story",
        contact: "Contact"
      }
    }
  },
  de: {
    code: "de",
    lang: "de",
    localeLabel: "DE",
    pathPrefix: "de",
    homeSlug: "de",
    siteName: "KERAT Keramik",
    shopLabel: "Zum Shop",
    contactLabel: "E-Mail senden",
    nav: {
      home: "Start",
      products: "Sortiment",
      glazes: "Glasuren",
      story: "Geschichte",
      contact: "Kontakt"
    },
    pages: {
      home: {
        slug: "",
        title: "KERAT Keramik | Handgefertigte Keramik aus Prag",
        description: "KERAT Keramik Prag – handgefertigte Gebrauchs- und Dekorationskeramik. 270+ Produkte, 40 Glasuren, Familientradition seit dem 18. Jahrhundert. Tassen, Teesets, Sonderanfertigungen."
      },
      products: {
        slug: "sortiment",
        title: "Sortiment | KERAT Keramik",
        description: "Teesets, Tassen, Aromalampen, Küchenkeramik, Tischkeramik, Geschenke und Sonderanfertigungen von KERAT."
      },
      glazes: {
        slug: "glasuren",
        title: "Glasuren | KERAT Keramik",
        description: "Alle 40 Glasurvarianten von KERAT inklusive der beliebtesten Lagerdesigns."
      },
      story: {
        slug: "geschichte",
        title: "Geschichte | KERAT Keramik",
        description: "Familientradition, Werkstatt in Prag, Lehrlinge, Ausstellungsraum und handwerkliche Fertigung."
      },
      contact: {
        slug: "kontakt",
        title: "Kontakt | KERAT Keramik",
        description: "Kontakt zu KERAT Keramik in Prag 6 Dejvice. Telefon, E-Mail, Adresse und direkter Link zum Online-Shop."
      }
    },
    hero: {
      eyebrow: "Handgefertigte Keramik aus Prag",
      title: "Keramik, die Handwerk, Tradition und tägliche Nutzung miteinander verbindet.",
      lead: "KERAT fertigt dekorative und gebrauchbare Keramik mit hohem Anteil an Handarbeit. Das Sortiment richtet sich an Zuhause, Geschenke, Gastronomie und Sonderanfertigungen.",
      stats: [
        "mehr als 270 originelle Produkte",
        "40 Glasuren im gesamten Sortiment",
        "Familientradition seit dem 18. Jahrhundert"
      ]
    },
    homeSections: {
      featuredTitle: "Ausgewähltes Sortiment",
      featuredLead: "Der frühere Fotokatalog wurde in klare, verkaufsstarke Kategorien für heutige Kunden gegliedert.",
      glazeTitle: "Glasuren mit Wiedererkennungswert",
      glazeLead: "Das komplette Sortiment wird in 40 Farbvarianten hergestellt. Besonders gefragt und auf Lager sind die Designs 1, 2, 3, 4, 14, 17, 30, 35, 36, 37, 38 und 39.",
      storyTitle: "Familienwerkstatt mit persönlichem Service",
      storyLead: "Überliefertes Wissen, eigene Glasurrezepturen und ein Ausstellungsraum in Prag 6 schaffen ein direktes Kauferlebnis statt anonymem Handel.",
      trustTitle: "Warum KERAT überzeugt",
      trustHeading: "Hochwertige Keramik direkt vom Hersteller",
      trust: [
        {
          title: "Sorgfältige Produktion",
          body: "Doppelt gebrannte, hochgesinterte Keramik bei 1140 bis 1160 °C."
        },
        {
          title: "Breites Sortiment",
          body: "Von Teesets und Tassen bis zu Dekorkeramik, Gastronomieartikeln und Sonderanfertigungen."
        },
        {
          title: "Verlässliche Lieferung",
          body: "Einzelbestellungen werden per Post oder Abholnetz versendet, größere Aufträge individuell abgestimmt."
        }
      ]
    },
    productsIntro: {
      title: "Sortiment für Zuhause, Geschenke und Sonderwünsche",
      lead: "Das Angebot umfasst Hunderte Produkte mit hohem Anteil an Handarbeit. Zusätzlich entstehen Werbekeramik, Firmenlogos und individuelle Motive auf Bestellung."
    },
    categories: [
      { slug: "tea-sets", letter: "A", name: "Teesets", image: "F128.jpg", description: "Sets für ruhige Tischmomente, Teezeremonien und hochwertige Geschenke." },
      { slug: "mugs", letter: "B", name: "Tassen", image: "F101.jpg", description: "Handgeformte Tassen für den Alltag und als beliebtes Geschenk." },
      { slug: "aroma", letter: "C", name: "Aromalampen und Kerzenständer", image: "F24.jpg", description: "Keramik für Duft, Licht und wohnliche Atmosphäre." },
      { slug: "others", letter: "D", name: "Sonstiges", image: "F165.jpg", description: "Ein vielfältiger Mix charakterstarker Stücke aus dem ursprünglichen Katalog." },
      { slug: "gifts", letter: "E", name: "Geschenke", image: "F73.jpg", description: "Verspielte Keramikobjekte und kleine Stücke mit eigenem Charakter." },
      { slug: "banks", letter: "F", name: "Spardosen und Aschenbecher", image: "F76.jpg", description: "Traditionelle und ungewöhnliche Formen aus dem ursprünglichen Katalog." },
      { slug: "tableware", letter: "G", name: "Tischkeramik", image: "F120.jpg", description: "Servierkeramik und Zubehör für den täglichen Gebrauch." },
      { slug: "small-objects", letter: "H", name: "Kleinigkeiten", image: "F107.jpg", description: "Kleine Keramikstücke als Geschenk, Detail oder dekorativer Akzent." },
      { slug: "kitchen", letter: "I", name: "Küchenkeramik", image: "F145.jpg", description: "Bräter, Dosen, Gewürzsets und weitere nützliche Stücke für Haus und Ferienhaus." },
      { slug: "for-him", letter: "J", name: "Für Herren", image: "F67.jpg", description: "Geschenk- und Gebrauchskeramik mit kräftigerem, markanterem Charakter." },
      { slug: "for-her", letter: "K", name: "Für Damen", image: "F1.jpg", description: "Feinere Formen, Aromakeramik und dekorative Stücke zum Verschenken." },
      { slug: "vases", letter: "L", name: "Vasen", image: "F129.jpg", description: "Glasierte Vasen und dekorative Gefäße für Innenräume und Arrangements." },
      { slug: "hospitality", letter: "M", name: "Für Restaurants und Gaststätten", image: "F255.jpg", description: "Robuste Keramik für Gastronomie und originelle Präsentation." },
      { slug: "dining", letter: "N", name: "Speisesets", image: "F5.jpg", description: "Abgestimmte Sets für ein einheitliches Tischbild." }
    ],
    glazeNames: [
      "Kaffee",
      "Nefrit",
      "Grünkaffee",
      "Sand",
      "Ziegel",
      "Sommerhimmel",
      "Schnee",
      "Mineral",
      "Lagune",
      "Smaragd",
      "Kaffee mit Milch",
      "Nacht",
      "Meereswelle",
      "Nächtlicher Ozean",
      "Kakao",
      "Gras",
      "Eis",
      "Kiefer",
      "Pfeffer",
      "Kornblume",
      "Blaue Impression",
      "Braune Impression",
      "Grüne Impression",
      "Weiße Impression",
      "Brauner Schnee",
      "Grüner Schnee",
      "Blauer Schnee",
      "Wüstensturm",
      "Dschungel",
      "Strand",
      "Grünkaffee Impression",
      "Sand Impression",
      "Nefrit Impression",
      "Kaffee Impression",
      "Blauweiß",
      "Grüner Honig",
      "Honig",
      "Blauer Honig",
      "Brauner Honig",
      "Blaubraun"
    ],
    glazeCopy: {
      title: "40 Glasuren, 12 Lagerfavoriten",
      lead: "Die Farbvielfalt gehört wesentlich zur Marke KERAT. Das gesamte Sortiment kann in glänzenden, matten und kombinierten Glasuren bestellt werden."
    },
    story: {
      title: "Tradition, Werkstatt und Ausstellungsraum",
      intro: "Das Handwerk wird in der Familie Štěpánek seit Generationen weitergegeben. 1991 entstand die eigene Werkstatt in Dejvice, die seitdem Produktion und Ausstellungsraum stetig erweitert hat.",
      blocks: [
        { title: "Familienhandwerk", body: "Das Wissen reicht bis ins späte 18. Jahrhundert zurück und stützt sich auf Handarbeit, eigene Glasurrezepturen und nützliche Dekorkeramik." },
        { title: "Lehrlinge und Weitergabe", body: "Seit 1993 arbeitet die Werkstatt mit einer Berufsschule zusammen und bildet neue Generationen im Handwerk mit aus." },
        { title: "Direkter Kundenkontakt", body: "Im Showroom in Prag 6 können Besucher das Sortiment sehen, Glasuren vergleichen und Sonderwünsche direkt besprechen." }
      ],
      closing: "Showroom und Werkstatt sind Montag bis Freitag von 08:00–17:00 Uhr geöffnet, abends und am Wochenende nach Vereinbarung. Besuchen Sie uns und entdecken Sie das Sortiment persönlich."
    },
    contactPage: {
      title: "Kontakt zur Werkstatt KERAT",
      lead: "Sie möchten Keramik auswählen, eine Sonderanfertigung besprechen oder direkt zum Shop wechseln? Kontaktieren Sie die Werkstatt direkt oder gehen Sie weiter zum externen Angebot."
    },
    faq: {
      eyebrow: "Fragen?",
      title: "Häufig gestellte Fragen",
      items: [
        {
          q: "Wie kann ich KERAT Keramik bestellen?",
          a: "Sie können über unseren Online-Shop auf Fler.cz bestellen oder uns direkt unter stepanek@kerat.cz kontaktieren. Größere und Sonderbestellungen werden individuell abgestimmt."
        },
        {
          q: "Ist eine Sonderanfertigung mit Logo oder eigenem Motiv möglich?",
          a: "Ja, wir bieten Sonderanfertigungen an, einschließlich Firmenlogos, Werbekeramik und individueller Motive. Kontaktieren Sie uns für ein Angebot."
        },
        {
          q: "Welche Glasuren sind ab Lager verfügbar?",
          a: "Wir halten 12 der beliebtesten Designs auf Lager: Glasuren Nr. 1, 2, 3, 4, 14, 17, 30, 35, 36, 37, 38 und 39. Die übrigen 28 Glasuren werden auf Bestellung gefertigt."
        },
        {
          q: "Kann ich den Showroom persönlich besuchen?",
          a: "Showroom und Werkstatt in Prag 6 Dejvice sind Montag bis Freitag von 08:00–17:00 Uhr geöffnet. Abend- und Wochenendbesuche können vorab per Telefon oder E-Mail vereinbart werden."
        }
      ]
    },
    ctaStripText: "Suchen Sie besondere Keramik oder eine Sonderanfertigung?",
    ctas: {
      primary: "Zum Online-Shop",
      secondary: "Werkstatt kontaktieren",
      tertiary: "Glasuren ansehen"
    },
    labels: {
      localeSwitch: "Sprachen",
      shopBadge: "Externer Shop",
      stocked: "Auf Lager",
      fullPalette: "Auf Bestellung",
      heroImageAlt: "Beispiel handgefertigter KERAT Keramik",
      showroomAlt: "Showroom und Werkstatt von KERAT",
      processAlt: "Handwerkliche Keramikproduktion in der KERAT Werkstatt",
      contactHeading: "Werkstatt und Showroom",
      breadcrumbs: {
        home: "Start",
        products: "Sortiment",
        glazes: "Glasuren",
        story: "Geschichte",
        contact: "Kontakt"
      }
    }
  }
};

const pageOrder = ["home", "products", "glazes", "story", "contact"];
const pageKeys = {
  "": "home",
  products: "products",
  glazes: "glazes",
  story: "story",
  contact: "contact"
};

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

const galleryCache = new Map();

function absoluteUrl(locale, pageKey) {
  const localeData = locales[locale];
  const page = localeData.pages[pageKey];
  if (locale === "cs") {
    return page.slug ? `${siteUrl}/${page.slug}/` : `${siteUrl}/`;
  }
  const prefix = `${siteUrl}/${localeData.pathPrefix}`;
  return page.slug ? `${prefix}/${page.slug}/` : `${prefix}/`;
}

function relativeRoot(depth) {
  return depth === 0 ? "." : "../".repeat(depth).replace(/\/$/, "");
}

function assetUrl(fileName) {
  return `${assetBase}/${fileName}`;
}

function assetHref(fileName, depth) {
  return `${relativeRoot(depth)}/${assetBase.replace(/^\//, "")}/${fileName}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

function localeGallerySuffix(locale) {
  if (locale === "en") return "_eng";
  if (locale === "de") return "_ger";
  return "";
}

function getCategoryGallery(locale, category) {
  const cacheKey = `${locale}:${category.letter}`;
  if (galleryCache.has(cacheKey)) {
    return galleryCache.get(cacheKey);
  }

  const suffix = localeGallerySuffix(locale);
  const pages = [];
  const items = [];

  for (let pageNumber = 1; pageNumber <= galleryPageCounts[category.letter]; pageNumber += 1) {
    const filePath = path.join(
      rootDir,
      "ftp-mirror/kerat.cz/kerat_cz",
      `foto${category.letter}${pageNumber}${suffix}.htm`
    );
    if (!fs.existsSync(filePath)) continue;
    const html = decodeLegacyFile(filePath);
    pages.push(filePath);
    items.push(...extractGalleryItemsFromHtml(html));
  }

  const uniqueItems = [];
  const seen = new Set();
  items.forEach((item) => {
    const key = `${item.image}:${item.caption}`;
    if (seen.has(key)) return;
    seen.add(key);
    uniqueItems.push(item);
  });

  const gallery = {
    coverImage: uniqueItems[0]?.image || category.image,
    itemCount: uniqueItems.length,
    items: uniqueItems
  };
  galleryCache.set(cacheKey, gallery);
  return gallery;
}

function pagePath(locale, pageKey) {
  const localeData = locales[locale];
  const slug = localeData.pages[pageKey].slug;
  if (locale === "cs") {
    return slug ? path.join(rootDir, slug, "index.html") : path.join(rootDir, "index.html");
  }
  return slug
    ? path.join(rootDir, localeData.pathPrefix, slug, "index.html")
    : path.join(rootDir, localeData.pathPrefix, "index.html");
}

function categoryPagePath(locale, category) {
  const localeData = locales[locale];
  if (locale === "cs") {
    return path.join(rootDir, localeData.pages.products.slug, category.slug, "index.html");
  }
  return path.join(rootDir, localeData.pathPrefix, localeData.pages.products.slug, category.slug, "index.html");
}

function depthFor(locale, pageKey) {
  if (locale === "cs") {
    return pageKey === "home" ? 0 : 1;
  }
  return pageKey === "home" ? 1 : 2;
}

function categoryDepth(locale) {
  return locale === "cs" ? 2 : 3;
}

function navHref(locale, pageKey, currentDepth) {
  const root = relativeRoot(currentDepth);
  const localeData = locales[locale];
  const page = localeData.pages[pageKey];
  if (locale === "cs") {
    return page.slug ? `${root}/${page.slug}/` : `${root}/`;
  }
  return page.slug ? `${root}/${localeData.pathPrefix}/${page.slug}/` : `${root}/${localeData.pathPrefix}/`;
}

function categoryHref(locale, category, currentDepth) {
  const root = relativeRoot(currentDepth);
  const localeData = locales[locale];
  if (locale === "cs") {
    return `${root}/${localeData.pages.products.slug}/${category.slug}/`;
  }
  return `${root}/${localeData.pathPrefix}/${localeData.pages.products.slug}/${category.slug}/`;
}

function localeHref(targetLocale, pageKey, currentDepth) {
  return navHref(targetLocale, pageKey, currentDepth);
}

function makeBreadcrumbs(locale, pageKey, currentDepth) {
  const labels = locales[locale].labels.breadcrumbs;
  const crumbs = [`<a href="${navHref(locale, "home", currentDepth)}">${labels.home}</a>`];
  if (pageKey !== "home") {
    crumbs.push(`<span>${labels[pageKey]}</span>`);
  }
  return crumbs.join('<span class="breadcrumb-sep">/</span>');
}

function renderLocaleSwitcher(locale, pageKey, currentDepth) {
  return Object.keys(locales)
    .map((code) => {
      const active = code === locale ? ' aria-current="true"' : "";
      return `<a class="locale-chip"${active} href="${localeHref(code, pageKey, currentDepth)}">${locales[code].localeLabel}</a>`;
    })
    .join("");
}

function renderHeader(locale, pageKey, currentDepth) {
  const t = locales[locale];
  return `
    <header class="site-header">
      <div class="shell header-inner">
        <a class="brand" href="${navHref(locale, "home", currentDepth)}">
          <span class="brand-mark">K</span>
          <span class="brand-copy">
            <span class="brand-name">${escapeHtml(t.siteName)}</span>
            <span class="brand-tag">${escapeHtml(t.hero.eyebrow)}</span>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          ${pageOrder
            .map((key) => {
              const active = key === pageKey ? ' aria-current="page"' : "";
              return `<a${active} href="${navHref(locale, key, currentDepth)}">${escapeHtml(t.nav[key])}</a>`;
            })
            .join("")}
        </nav>
        <div class="header-actions">
          <div class="locale-switcher" aria-label="${escapeHtml(t.labels.localeSwitch)}">
            ${renderLocaleSwitcher(locale, pageKey, currentDepth)}
          </div>
          <a class="button button-primary button-small" href="${shopUrl}" target="_blank" rel="noreferrer">${escapeHtml(t.shopLabel)}</a>
        </div>
      </div>
    </header>
  `;
}

function renderFooter(locale, currentDepth) {
  const t = locales[locale];
  return `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div>
          <h2>${escapeHtml(t.siteName)}</h2>
          <p>${escapeHtml(contact.street)}, ${escapeHtml(contact.city)}</p>
          <p><a href="${contact.phoneHref}">${escapeHtml(contact.phoneDisplay)}</a></p>
          <p><a href="mailto:${contact.emailPrimary}">${escapeHtml(contact.emailPrimary)}</a></p>
        </div>
        <div>
          <h2>${escapeHtml(t.nav.contact)}</h2>
          <p>${escapeHtml(contact.legacyHours)}</p>
          <p><a href="${shopUrl}" target="_blank" rel="noreferrer">${escapeHtml(t.ctas.primary)}</a></p>
        </div>
        <div>
          <h2>${escapeHtml(t.labels.localeSwitch)}</h2>
          <div class="locale-switcher footer-locales">${renderLocaleSwitcher(locale, "home", currentDepth)}</div>
        </div>
      </div>
    </footer>
  `;
}

function renderHero(locale, currentDepth) {
  const t = locales[locale];
  return `
    <section class="hero">
      <div class="shell hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(t.hero.eyebrow)}</p>
          <h1>${escapeHtml(t.hero.title)}</h1>
          <p class="hero-lead">${escapeHtml(t.hero.lead)}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${shopUrl}" target="_blank" rel="noreferrer">${escapeHtml(t.ctas.primary)}</a>
            <a class="button button-secondary" href="${navHref(locale, "contact", locale === "cs" ? 0 : 1)}">${escapeHtml(t.ctas.secondary)}</a>
          </div>
          <ul class="hero-stats">
            ${t.hero.stats.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="hero-visual">
          <figure class="hero-card hero-card-main">
            <img src="${assetHref("srdce_dvojak_hrnek.jpeg", currentDepth)}" alt="${escapeHtml(t.labels.heroImageAlt)}" fetchpriority="high" decoding="async">
          </figure>
          <figure class="hero-card hero-card-small">
            <img src="${assetHref("dilna5.jpg", currentDepth)}" alt="${escapeHtml(t.labels.processAlt)}" fetchpriority="high" decoding="async">
          </figure>
          <figure class="hero-card hero-card-small hero-card-offset">
            <img src="${assetHref("vzorkovna1.jpg", currentDepth)}" alt="${escapeHtml(t.labels.showroomAlt)}" loading="lazy" decoding="async">
          </figure>
        </div>
      </div>
    </section>
  `;
}

function renderCategories(locale, currentDepth, featured = false) {
  const t = locales[locale];
  const cards = t.categories
    .map((category) => {
      const gallery = getCategoryGallery(locale, category);
      const countLabel = locale === "cs" ? "položek" : locale === "en" ? "items" : "Artikel";
      return `
        <a class="category-card category-card-link" href="${categoryHref(locale, category, currentDepth)}">
          <img src="${assetHref(gallery.coverImage, currentDepth)}" alt="${escapeHtml(category.name)}" loading="lazy" decoding="async">
          <div class="category-card-body">
            <div class="category-card-meta">
              <span>${gallery.itemCount} ${countLabel}</span>
              <span class="category-card-arrow">→</span>
            </div>
            <h3>${escapeHtml(category.name)}</h3>
            <p>${escapeHtml(category.description)}</p>
          </div>
        </a>
      `;
    })
    .join("");

  return `
    <section class="section">
      <div class="shell">
        ${
          featured
            ? `<div class="section-heading">
                 <p class="eyebrow">${escapeHtml(t.homeSections.featuredTitle)}</p>
                 <h2>${escapeHtml(t.productsIntro.title)}</h2>
                 <p>${escapeHtml(t.homeSections.featuredLead)}</p>
               </div>`
            : `<div class="section-heading narrow">
                 <p class="eyebrow">${escapeHtml(t.nav.products)}</p>
                 <h1>${escapeHtml(t.productsIntro.title)}</h1>
                 <p>${escapeHtml(t.productsIntro.lead)}</p>
               </div>`
        }
        <div class="category-grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

function renderCategoryGalleryPage(locale, category, currentDepth) {
  const t = locales[locale];
  const gallery = getCategoryGallery(locale, category);
  const breadcrumbLabels = t.labels.breadcrumbs;
  const countLabel = locale === "cs" ? "položek v galerii" : locale === "en" ? "items in the gallery" : "Artikel in der Galerie";
  const breadcrumb = `
    <section class="breadcrumb-bar">
      <div class="shell breadcrumbs">
        <a href="${navHref(locale, "home", currentDepth)}">${breadcrumbLabels.home}</a>
        <span class="breadcrumb-sep">/</span>
        <a href="${navHref(locale, "products", currentDepth)}">${breadcrumbLabels.products}</a>
        <span class="breadcrumb-sep">/</span>
        <span>${escapeHtml(category.name)}</span>
      </div>
    </section>
  `;

  const items = gallery.items
    .map(
      (item) => `
        <article class="product-card">
          <img src="${assetHref(item.image, currentDepth)}" alt="${escapeHtml(item.caption || category.name)}" loading="lazy" decoding="async">
          <div class="product-card-body">
            <p>${escapeHtml(item.caption || category.name)}</p>
          </div>
        </article>
      `
    )
    .join("");

  return `
    ${breadcrumb}
    <section class="section">
      <div class="shell category-detail">
        <div class="section-heading narrow">
          <p class="eyebrow">${escapeHtml(t.nav.products)}</p>
          <h1>${escapeHtml(category.name)}</h1>
          <p>${escapeHtml(category.description)}</p>
          <p class="category-detail-meta">${gallery.itemCount} ${countLabel}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${shopUrl}" target="_blank" rel="noreferrer">${escapeHtml(t.ctas.primary)}</a>
            <a class="button button-secondary" href="${navHref(locale, "contact", currentDepth)}">${escapeHtml(t.ctas.secondary)}</a>
          </div>
        </div>
        <div class="product-gallery">
          ${items}
        </div>
      </div>
    </section>
  `;
}

function renderGlazeCards(locale, currentDepth, limit = null) {
  const t = locales[locale];
  const items = glazeShared.slice(0, limit ?? glazeShared.length);
  return items
    .map((glaze, index) => {
      const name = t.glazeNames[index];
      const badge = glaze.stock ? t.labels.stocked : t.labels.fullPalette;
      const badgeClass = glaze.stock ? "badge-stocked" : "badge-order";
      return `
        <article class="glaze-card">
          <img src="${assetHref(glaze.image, currentDepth)}" alt="${escapeHtml(`${name} ${t.nav.glazes}`)}" loading="lazy" decoding="async">
          <div class="glaze-card-body">
            <div class="glaze-meta">
              <span class="glaze-id">#${glaze.id}</span>
              <span class="badge ${badgeClass}">${escapeHtml(badge)}</span>
            </div>
            <h3>${escapeHtml(name)}</h3>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderGlazes(locale, currentDepth, featured = false) {
  const t = locales[locale];
  const content = featured
    ? {
        eyebrow: t.homeSections.glazeTitle,
        title: t.glazeCopy.title,
        lead: t.homeSections.glazeLead
      }
    : {
        eyebrow: t.nav.glazes,
        title: t.glazeCopy.title,
        lead: `${t.glazeCopy.lead} ${t.homeSections.glazeLead}`
      };
  return `
    <section class="section glaze-section">
      <div class="shell">
        <div class="section-heading narrow">
          <p class="eyebrow">${escapeHtml(content.eyebrow)}</p>
          <h${featured ? "2" : "1"}>${escapeHtml(content.title)}</h${featured ? "2" : "1"}>
          <p>${escapeHtml(content.lead)}</p>
        </div>
        <div class="glaze-grid">
          ${renderGlazeCards(locale, currentDepth, featured ? 8 : null)}
        </div>
        ${
          featured
            ? `<div class="section-cta">
                 <a class="button button-secondary" href="${navHref(locale, "glazes", locale === "cs" ? 0 : 1)}">${escapeHtml(t.ctas.tertiary)}</a>
               </div>`
            : ""
        }
      </div>
    </section>
  `;
}

function renderStory(locale, currentDepth, featured = false) {
  const t = locales[locale];
  return `
    <section class="section story-section">
      <div class="shell story-grid">
        <div class="story-copy">
          <p class="eyebrow">${escapeHtml(featured ? t.homeSections.storyTitle : t.nav.story)}</p>
          <h${featured ? "2" : "1"}>${escapeHtml(t.story.title)}</h${featured ? "2" : "1"}>
          <p>${escapeHtml(featured ? t.homeSections.storyLead : t.story.intro)}</p>
          <div class="story-points">
            ${t.story.blocks
              .map(
                (block) => `
                  <article>
                    <h3>${escapeHtml(block.title)}</h3>
                    <p>${escapeHtml(block.body)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
          ${
            featured
              ? `<a class="button button-secondary" href="${navHref(locale, "story", locale === "cs" ? 0 : 1)}">${escapeHtml(t.nav.story)}</a>`
              : `<p class="story-closing">${escapeHtml(t.story.closing)}</p>`
          }
        </div>
        <div class="story-gallery">
          <img src="${assetHref("dilna1.jpg", currentDepth)}" alt="${escapeHtml(t.labels.processAlt)}" loading="lazy" decoding="async">
          <img src="${assetHref("dilna2.jpg", currentDepth)}" alt="${escapeHtml(t.labels.processAlt)}" loading="lazy" decoding="async">
          <img src="${assetHref("vzorkovna2.jpg", currentDepth)}" alt="${escapeHtml(t.labels.showroomAlt)}" loading="lazy" decoding="async">
          <img src="${assetHref("ulice.jpg", currentDepth)}" alt="${escapeHtml(t.labels.contactHeading)}" loading="lazy" decoding="async">
        </div>
      </div>
    </section>
  `;
}

const trustIcons = [
  `<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/></svg>`,
  `<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>`,
  `<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>`
];

function renderTrust(locale) {
  const t = locales[locale];
  return `
    <section class="section trust-section">
      <div class="shell">
        <div class="section-heading narrow">
          <p class="eyebrow">${escapeHtml(t.homeSections.trustTitle)}</p>
          <h2>${escapeHtml(t.homeSections.trustHeading)}</h2>
        </div>
        <div class="trust-grid">
          ${t.homeSections.trust
            .map(
              (item, i) => `
                <article class="trust-card">
                  ${trustIcons[i] ?? ""}
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.body)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderContact(locale, asPage = false, currentDepth = 0) {
  const t = locales[locale];
  return `
    <section class="section contact-section">
      <div class="shell">
        <div class="section-heading narrow">
          <p class="eyebrow">${escapeHtml(t.nav.contact)}</p>
          <h${asPage ? "1" : "2"}>${escapeHtml(t.contactPage.title)}</h${asPage ? "1" : "2"}>
          <p>${escapeHtml(t.contactPage.lead)}</p>
        </div>
        <div class="contact-grid">
          <div class="contact-card">
            <h2>${escapeHtml(t.labels.contactHeading)}</h2>
            <address>
              <p>${escapeHtml(contact.company)}</p>
              <p>${escapeHtml(contact.person)}</p>
              <p>${escapeHtml(contact.street)}</p>
              <p>${escapeHtml(contact.city)}, ${escapeHtml(contact.postalCode)}</p>
              <p><a href="${contact.phoneHref}">${escapeHtml(contact.phoneDisplay)}</a></p>
              <p><a href="mailto:${contact.emailPrimary}">${escapeHtml(contact.emailPrimary)}</a></p>
              <p><a href="mailto:${contact.emailSecondary}">${escapeHtml(contact.emailSecondary)}</a></p>
            </address>
          </div>
          <div class="contact-card">
            <h2>${escapeHtml(t.homeSections.storyTitle)}</h2>
            <p>${escapeHtml(contact.legacyHours)}</p>
            <p><span class="map-placeholder">Praha 6 Dejvice</span></p>
            <div class="contact-actions">
              <a class="button button-primary" href="${shopUrl}" target="_blank" rel="noreferrer">${escapeHtml(t.ctas.primary)}</a>
              <a class="button button-secondary" href="mailto:${contact.emailPrimary}">${escapeHtml(t.contactLabel)}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFaq(locale) {
  const t = locales[locale];
  const { faq } = t;
  return `
    <section class="section faq-section">
      <div class="shell">
        <div class="section-heading narrow">
          <p class="eyebrow">${escapeHtml(faq.eyebrow)}</p>
          <h2>${escapeHtml(faq.title)}</h2>
        </div>
        <div class="faq-list">
          ${faq.items
            .map(
              (item) => `
            <details class="faq-item">
              <summary>${escapeHtml(item.q)}</summary>
              <p>${escapeHtml(item.a)}</p>
            </details>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCtaStrip(locale, currentDepth) {
  const t = locales[locale];
  return `
    <section class="cta-strip">
      <div class="shell cta-strip-inner">
        <p>${escapeHtml(t.ctaStripText)}</p>
        <a class="button button-primary" href="${shopUrl}" target="_blank" rel="noreferrer">${escapeHtml(t.ctas.primary)}</a>
      </div>
    </section>
  `;
}

function renderPageBody(locale, pageKey, currentDepth) {
  if (pageKey === "home") {
    return [
      renderHero(locale, currentDepth),
      renderCategories(locale, currentDepth, true),
      renderGlazes(locale, currentDepth, true),
      renderStory(locale, currentDepth, true),
      renderTrust(locale),
      renderFaq(locale),
      renderCtaStrip(locale, currentDepth),
      renderContact(locale, false, currentDepth)
    ].join("");
  }

  const breadcrumb = `
    <section class="breadcrumb-bar">
      <div class="shell breadcrumbs">${makeBreadcrumbs(locale, pageKey, currentDepth)}</div>
    </section>
  `;

  if (pageKey === "products") {
    return `${breadcrumb}${renderCategories(locale, currentDepth, false)}`;
  }
  if (pageKey === "glazes") {
    return `${breadcrumb}${renderGlazes(locale, currentDepth, false)}`;
  }
  if (pageKey === "story") {
    return `${breadcrumb}${renderStory(locale, currentDepth, false)}`;
  }
  return `${breadcrumb}${renderContact(locale, true, currentDepth)}`;
}

function buildStructuredData(locale, pageKey) {
  const pageUrl = absoluteUrl(locale, pageKey);
  const breadcrumbNames = [locales[locale].labels.breadcrumbs.home];
  if (pageKey !== "home") {
    breadcrumbNames.push(locales[locale].labels.breadcrumbs[pageKey]);
  }
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbNames.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: index === 0 ? absoluteUrl(locale, "home") : pageUrl
    }))
  };

  const business = {
    "@context": "https://schema.org",
    "@type": ["Store", "ArtGallery"],
    name: contact.company,
    image: [
      `${siteUrl}${assetUrl("srdce_dvojak_hrnek.jpeg")}`,
      `${siteUrl}${assetUrl("dilna1.jpg")}`,
      `${siteUrl}${assetUrl("vzorkovna1.jpg")}`
    ],
    url: absoluteUrl(locale, "home"),
    telephone: contact.phoneDisplay,
    email: contact.emailPrimary,
    priceRange: "€€",
    currenciesAccepted: "CZK, EUR",
    paymentAccepted: "Cash, Credit Card",
    hasMap: "https://maps.google.com/?q=Stavitelská+6,+Praha+6+Dejvice",
    description: locales[locale].story.intro,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      addressLocality: "Praha 6 Dejvice",
      postalCode: contact.postalCode,
      addressCountry: contact.country
    },
    sameAs: [shopUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00"
      }
    ]
  };

  const scripts = [
    `<script type="application/ld+json">${JSON.stringify(breadcrumbList)}</script>`,
    `<script type="application/ld+json">${JSON.stringify(business)}</script>`
  ];

  if (pageKey === "home") {
    const faqData = locales[locale].faq;
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a
        }
      }))
    };
    scripts.push(`<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`);
  }

  return scripts.join("\n    ");
}

function buildCategoryStructuredData(locale, category) {
  const pageUrl = absoluteCategoryUrl(locale, category);
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locales[locale].labels.breadcrumbs.home,
        item: absoluteUrl(locale, "home")
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locales[locale].labels.breadcrumbs.products,
        item: absoluteUrl(locale, "products")
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: pageUrl
      }
    ]
  };

  return `
    <script type="application/ld+json">${JSON.stringify(breadcrumbList)}</script>
    <script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: category.name,
      url: pageUrl
    })}</script>
  `;
}

function absoluteCategoryUrl(locale, category) {
  const localeData = locales[locale];
  if (locale === "cs") {
    return `${siteUrl}/${localeData.pages.products.slug}/${category.slug}/`;
  }
  return `${siteUrl}/${localeData.pathPrefix}/${localeData.pages.products.slug}/${category.slug}/`;
}

function renderPage(locale, pageKey) {
  const localeData = locales[locale];
  const page = localeData.pages[pageKey];
  const depth = depthFor(locale, pageKey);
  const root = relativeRoot(depth);
  const ogImage = `${siteUrl}${assetUrl("srdce_dvojak_hrnek.jpeg")}`;
  const alternateLinks = [
    `<link rel="alternate" hreflang="x-default" href="${absoluteUrl("cs", pageKey)}">`,
    ...Object.keys(locales).map(
      (code) =>
        `<link rel="alternate" hreflang="${locales[code].lang}" href="${absoluteUrl(code, pageKey)}">`
    )
  ].join("\n");

  const preloadHero = pageKey === "home"
    ? `<link rel="preload" as="image" href="${assetHref("srdce_dvojak_hrnek.jpeg", depth)}">`
    : "";

  return `<!doctype html>
<html lang="${localeData.lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="index,follow">
    <meta name="theme-color" content="#a14d2c">
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <link rel="canonical" href="${absoluteUrl(locale, pageKey)}">
    ${alternateLinks}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${escapeHtml(localeData.siteName)}">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${absoluteUrl(locale, pageKey)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="${localeData.lang}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(page.title)}">
    <meta name="twitter:description" content="${escapeHtml(page.description)}">
    <meta name="twitter:image" content="${ogImage}">
    ${preloadHero}
    <link rel="stylesheet" href="${root}/assets/styles.css">
    ${buildStructuredData(locale, pageKey)}
  </head>
  <body>
    ${renderHeader(locale, pageKey, depth)}
    <main>
      ${renderPageBody(locale, pageKey, depth)}
    </main>
    ${renderFooter(locale, depth)}
  </body>
</html>
`;
}

function renderCategoryPage(locale, category) {
  const localeData = locales[locale];
  const depth = categoryDepth(locale);
  const root = relativeRoot(depth);
  const pageTitle = `${category.name} | ${localeData.siteName}`;
  const pageDescription = category.description;
  const ogImage = `${siteUrl}${assetUrl(getCategoryGallery(locale, category).coverImage)}`;
  const alternateLinks = [
    `<link rel="alternate" hreflang="x-default" href="${absoluteCategoryUrl("cs", locales.cs.categories.find((item) => item.slug === category.slug))}">`,
    ...Object.keys(locales).map((code) => {
      const localizedCategory = locales[code].categories.find((item) => item.slug === category.slug);
      return `<link rel="alternate" hreflang="${locales[code].lang}" href="${absoluteCategoryUrl(code, localizedCategory)}">`;
    })
  ].join("\n");

  return `<!doctype html>
<html lang="${localeData.lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(pageDescription)}">
    <link rel="canonical" href="${absoluteCategoryUrl(locale, category)}">
    ${alternateLinks}
    <link rel="stylesheet" href="${root}/assets/styles.css">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeHtml(pageTitle)}">
    <meta property="og:description" content="${escapeHtml(pageDescription)}">
    <meta property="og:url" content="${absoluteCategoryUrl(locale, category)}">
    <meta property="og:image" content="${ogImage}">
    ${buildCategoryStructuredData(locale, category)}
  </head>
  <body>
    ${renderHeader(locale, "products", depth)}
    <main>
      ${renderCategoryGalleryPage(locale, category, depth)}
    </main>
    ${renderFooter(locale, depth)}
  </body>
</html>
`;
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, content, "utf8");
}

const outputFiles = [];

for (const locale of Object.keys(locales)) {
  for (const pageKey of pageOrder) {
    const filePath = pagePath(locale, pageKey);
    writeFile(filePath, renderPage(locale, pageKey));
    outputFiles.push(filePath);
  }
  for (const category of locales[locale].categories) {
    const filePath = categoryPagePath(locale, category);
    writeFile(filePath, renderCategoryPage(locale, category));
    outputFiles.push(filePath);
  }
}

const sitemapEntries = [];
for (const locale of Object.keys(locales)) {
  for (const pageKey of pageOrder) {
    sitemapEntries.push(
      `  <url>\n    <loc>${absoluteUrl(locale, pageKey)}</loc>\n    <lastmod>${buildDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${pageKey === "home" ? "1.0" : "0.8"}</priority>\n  </url>`
    );
  }
  for (const category of locales[locale].categories) {
    sitemapEntries.push(
      `  <url>\n    <loc>${absoluteCategoryUrl(locale, category)}</loc>\n    <lastmod>${buildDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    );
  }
}

writeFile(
  path.join(rootDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join(
    "\n"
  )}\n</urlset>\n`
);

writeFile(
  path.join(rootDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
);

console.log(`Generated ${outputFiles.length} HTML files plus sitemap.xml and robots.txt`);
