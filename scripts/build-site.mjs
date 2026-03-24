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
        description: "Moderní prezentace ručně vyráběné dekorativní i užitkové keramiky. Objevte sortiment, glazury, příběh dílny a přejděte do obchodu KERAT."
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
        name: "Čajové soupravy",
        image: "F128.jpg",
        description: "Soupravy pro pomalé stolování, čajové rituály a dárkové příležitosti."
      },
      {
        slug: "mugs",
        name: "Hrnky",
        image: "F101.jpg",
        description: "Ručně tvarované hrnky, oblíbené dárkové kusy i každodenní keramika."
      },
      {
        slug: "aroma",
        name: "Aroma lampy a svícny",
        image: "F24.jpg",
        description: "Keramika pro atmosféru interiéru, světlo, vůni a dekorativní akcent."
      },
      {
        slug: "gifts",
        name: "Dárky",
        image: "F73.jpg",
        description: "Vtipná keramika, dárkové předměty a drobnosti s osobitým charakterem."
      },
      {
        slug: "banks",
        name: "Kasičky a popelníky",
        image: "F76.jpg",
        description: "Tradiční i nápadité tvary, které si zákazníci z původního katalogu dobře pamatují."
      },
      {
        slug: "tableware",
        name: "Keramika na stůl",
        image: "F120.jpg",
        description: "Servírování, stolní doplňky a užitková keramika pro každodenní provoz."
      },
      {
        slug: "kitchen",
        name: "Keramika do kuchyně",
        image: "F145.jpg",
        description: "Pekáčky, dózy, kořenky a další funkční kusy do domácnosti i na chalupu."
      },
      {
        slug: "decor",
        name: "Dekorace a vázy",
        image: "F129.jpg",
        description: "Bytové doplňky, vázy, zvonky a další dekorativní keramika s glazovaným povrchem."
      },
      {
        slug: "hospitality",
        name: "Pro restaurace a hospody",
        image: "F255.jpg",
        description: "Odolné kusy pro gastro provoz, servírování a originální atmosféru podniku."
      },
      {
        slug: "dining",
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
      closing: "Otevírací doba z legacy webu uvádí pondělí až pátek 8-17 a večer či víkend po dohodě. Tento model zachováváme jako kontaktní informaci i v nové prezentaci."
    },
    contactPage: {
      title: "Kontaktujte dílnu KERAT",
      lead: "Chcete vybrat konkrétní keramiku, domluvit zakázku nebo přejít rovnou do obchodu? Ozvěte se přímo do atelieru nebo pokračujte do online nabídky."
    },
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
        description: "Modern presentation of handmade decorative and utility pottery. Explore collections, glazes, workshop story and the KERAT online shop."
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
      { slug: "tea-sets", name: "Tea sets", image: "F128.jpg", description: "Sets designed for slow serving, tea rituals and premium gift moments." },
      { slug: "mugs", name: "Mugs", image: "F101.jpg", description: "Hand-shaped mugs for everyday use and memorable gifts." },
      { slug: "aroma", name: "Aroma lamps and candle holders", image: "F24.jpg", description: "Ceramics that build atmosphere through fragrance, light and surface texture." },
      { slug: "gifts", name: "Gifts", image: "F73.jpg", description: "Playful pieces, gift ceramics and small objects with a strong handmade identity." },
      { slug: "banks", name: "Piggy banks and ashtrays", image: "F76.jpg", description: "Classic and unusual shapes retained from the original catalogue." },
      { slug: "tableware", name: "Tableware", image: "F120.jpg", description: "Serving pieces and tabletop accessories for daily use." },
      { slug: "kitchen", name: "Kitchen pottery", image: "F145.jpg", description: "Roasters, storage jars, spice sets and other useful pieces for home or cottage." },
      { slug: "decor", name: "Decor and vases", image: "F129.jpg", description: "Interior accents, vases, bells and decorative glazed ceramics." },
      { slug: "hospitality", name: "For restaurants and pubs", image: "F255.jpg", description: "Durable ceramics for hospitality spaces and original presentation." },
      { slug: "dining", name: "Dining sets", image: "F5.jpg", description: "Coordinated sets for table service in matching glazes and shapes." }
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
      closing: "The legacy website lists opening hours as Monday to Friday 8 am to 5 pm, with evenings and weekends by arrangement."
    },
    contactPage: {
      title: "Contact the KERAT workshop",
      lead: "Need help choosing pottery, planning a custom order or visiting the online shop? Reach the workshop directly or continue to the external storefront."
    },
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
        description: "Moderne Präsentation handgefertigter Gebrauchs- und Dekorkeramik. Entdecken Sie Sortiment, Glasuren, Werkstattgeschichte und den Online-Shop von KERAT."
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
      { slug: "tea-sets", name: "Teesets", image: "F128.jpg", description: "Sets für ruhige Tischmomente, Teezeremonien und hochwertige Geschenke." },
      { slug: "mugs", name: "Tassen", image: "F101.jpg", description: "Handgeformte Tassen für den Alltag und als beliebtes Geschenk." },
      { slug: "aroma", name: "Aromalampen und Kerzenständer", image: "F24.jpg", description: "Keramik für Duft, Licht und wohnliche Atmosphäre." },
      { slug: "gifts", name: "Geschenke", image: "F73.jpg", description: "Verspielte Keramikobjekte und kleine Stücke mit eigenem Charakter." },
      { slug: "banks", name: "Spardosen und Aschenbecher", image: "F76.jpg", description: "Traditionelle und ungewöhnliche Formen aus dem ursprünglichen Katalog." },
      { slug: "tableware", name: "Tischkeramik", image: "F120.jpg", description: "Servierkeramik und Zubehör für den täglichen Gebrauch." },
      { slug: "kitchen", name: "Küchenkeramik", image: "F145.jpg", description: "Bräter, Dosen, Gewürzsets und weitere nützliche Stücke für Haus und Ferienhaus." },
      { slug: "decor", name: "Dekor und Vasen", image: "F129.jpg", description: "Wohnaccessoires, Vasen, Glocken und dekorative glasierte Keramik." },
      { slug: "hospitality", name: "Für Restaurants und Gaststätten", image: "F255.jpg", description: "Robuste Keramik für Gastronomie und originelle Präsentation." },
      { slug: "dining", name: "Speisesets", image: "F5.jpg", description: "Abgestimmte Sets für ein einheitliches Tischbild." }
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
      closing: "Die Angaben des alten Webs nennen Öffnungszeiten Montag bis Freitag von 8 bis 17 Uhr, abends und am Wochenende nach Vereinbarung."
    },
    contactPage: {
      title: "Kontakt zur Werkstatt KERAT",
      lead: "Sie möchten Keramik auswählen, eine Sonderanfertigung besprechen oder direkt zum Shop wechseln? Kontaktieren Sie die Werkstatt direkt oder gehen Sie weiter zum externen Angebot."
    },
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

function depthFor(locale, pageKey) {
  if (locale === "cs") {
    return pageKey === "home" ? 0 : 1;
  }
  return pageKey === "home" ? 1 : 2;
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
            <img src="${assetHref("srdce_dvojak_hrnek.jpeg", currentDepth)}" alt="${escapeHtml(t.labels.heroImageAlt)}">
          </figure>
          <figure class="hero-card hero-card-small">
            <img src="${assetHref("dilna5.jpg", currentDepth)}" alt="${escapeHtml(t.labels.processAlt)}">
          </figure>
          <figure class="hero-card hero-card-small hero-card-offset">
            <img src="${assetHref("vzorkovna1.jpg", currentDepth)}" alt="${escapeHtml(t.labels.showroomAlt)}">
          </figure>
        </div>
      </div>
    </section>
  `;
}

function renderCategories(locale, currentDepth, featured = false) {
  const t = locales[locale];
  const cards = t.categories
    .map(
      (category) => `
        <article class="category-card">
          <img src="${assetHref(category.image, currentDepth)}" alt="${escapeHtml(category.name)}">
          <div class="category-card-body">
            <h3>${escapeHtml(category.name)}</h3>
            <p>${escapeHtml(category.description)}</p>
          </div>
        </article>
      `
    )
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
          <img src="${assetHref(glaze.image, currentDepth)}" alt="${escapeHtml(`${name} ${t.nav.glazes}`)}">
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
          <img src="${assetHref("dilna1.jpg", currentDepth)}" alt="${escapeHtml(t.labels.processAlt)}">
          <img src="${assetHref("dilna2.jpg", currentDepth)}" alt="${escapeHtml(t.labels.processAlt)}">
          <img src="${assetHref("vzorkovna2.jpg", currentDepth)}" alt="${escapeHtml(t.labels.showroomAlt)}">
          <img src="${assetHref("ulice.jpg", currentDepth)}" alt="${escapeHtml(t.labels.contactHeading)}">
        </div>
      </div>
    </section>
  `;
}

function renderTrust(locale) {
  const t = locales[locale];
  return `
    <section class="section trust-section">
      <div class="shell">
        <div class="section-heading narrow">
          <p class="eyebrow">${escapeHtml(t.homeSections.trustTitle)}</p>
          <h2>${escapeHtml(t.homeSections.trustTitle)}</h2>
        </div>
        <div class="trust-grid">
          ${t.homeSections.trust
            .map(
              (item) => `
                <article class="trust-card">
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
            <p>${escapeHtml(contact.company)}</p>
            <p>${escapeHtml(contact.person)}</p>
            <p>${escapeHtml(contact.street)}</p>
            <p>${escapeHtml(contact.city)}, ${escapeHtml(contact.postalCode)}</p>
            <p><a href="${contact.phoneHref}">${escapeHtml(contact.phoneDisplay)}</a></p>
            <p><a href="mailto:${contact.emailPrimary}">${escapeHtml(contact.emailPrimary)}</a></p>
            <p><a href="mailto:${contact.emailSecondary}">${escapeHtml(contact.emailSecondary)}</a></p>
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

function renderPageBody(locale, pageKey, currentDepth) {
  if (pageKey === "home") {
    return [
      renderHero(locale, currentDepth),
      renderCategories(locale, currentDepth, true),
      renderGlazes(locale, currentDepth, true),
      renderStory(locale, currentDepth, true),
      renderTrust(locale),
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
    "@type": "Store",
    name: contact.company,
    image: `${siteUrl}${assetUrl("srdce_dvojak_hrnek.jpeg")}`,
    url: absoluteUrl(locale, "home"),
    telephone: contact.phoneDisplay,
    email: contact.emailPrimary,
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

  return `
    <script type="application/ld+json">${JSON.stringify(breadcrumbList)}</script>
    <script type="application/ld+json">${JSON.stringify(business)}</script>
  `;
}

function renderPage(locale, pageKey) {
  const localeData = locales[locale];
  const page = localeData.pages[pageKey];
  const depth = depthFor(locale, pageKey);
  const root = relativeRoot(depth);
  const alternateLinks = Object.keys(locales)
    .map(
      (code) =>
        `<link rel="alternate" hreflang="${locales[code].lang}" href="${absoluteUrl(code, pageKey)}">`
    )
    .join("\n");

  return `<!doctype html>
<html lang="${localeData.lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <link rel="canonical" href="${absoluteUrl(locale, pageKey)}">
    ${alternateLinks}
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
}

const sitemapEntries = [];
for (const locale of Object.keys(locales)) {
  for (const pageKey of pageOrder) {
    sitemapEntries.push(
      `  <url>\n    <loc>${absoluteUrl(locale, pageKey)}</loc>\n    <lastmod>${buildDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${pageKey === "home" ? "1.0" : "0.8"}</priority>\n  </url>`
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
