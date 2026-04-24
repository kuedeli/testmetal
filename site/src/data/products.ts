export type Option = { label: string; priceAdd: number; note?: string };

export type ProductVariant = { label: string; price: number; description?: string };

export type Product = {
  slug: string;
  category: 'feuer' | 'garten';
  name: string;
  subtitle: string;
  tagline: string;
  basePrice: number;
  priceLabel?: string;
  heroImage: string;
  thumbImage: string;
  gallery: string[];
  lead: string;
  story?: string;
  specs: { label: string; value: string }[];
  variants?: ProductVariant[];
  options?: Option[];
  highlights: string[];
  comparison?: { label: string; ours: string; theirs: string };
};

const IMG = '/images';

export const products: Product[] = [
  {
    slug: 'feuerkugel-klassik',
    category: 'feuer',
    name: 'Feuerkugel Klassik',
    subtitle: 'mit Grillring',
    tagline: 'Die klassische Halbkugel. 6 mm Wandstärke. Für ein Feuer, das steht.',
    basePrice: 2250,
    heroImage: `${IMG}/feuerkugeln_368edd_7d7579fc40964818ab033182037607d9_mv2_jpg.jpg`,
    thumbImage: `${IMG}/angebot1_368edd_3317fe1d4880401aba72f346b4b8e1ba_mv2_jpg.jpg`,
    gallery: [
      `${IMG}/angebot1_368edd_3317fe1d4880401aba72f346b4b8e1ba_mv2_jpg.jpg`,
      `${IMG}/angebot1_368edd_03314d3ca4e1496f91a69ac1f480fadb_mv2_jpg.jpg`,
      `${IMG}/angebot1_368edd_4ee4f6c67d564cc084199328f808b265_mv2_jpg.jpg`,
      `${IMG}/feuerkugeln_368edd_7440378e7d0041a595ef5b86207c0c80_mv2_jpg.jpg`,
      `${IMG}/feuerkugeln_368edd_4c2badd3a2784638b3591f7bfc2fe0ad_mv2_jpg.jpg`,
      `${IMG}/feuerkugeln_368edd_363ff6306bc74a969d24e7a0a30be77e_mv2_jpg.jpg`,
    ],
    lead:
      'Grillieren, Braten und Pizzabacken in einem Stück. Die klassische Feuerkugel von metal-works.ch wird mit Wanddicken von 6 mm gefertigt — dort, wo andere bei 2 bis 5 mm enden. Kein Verziehen, kein Nachgeben, selbst nach Jahren im Einsatz.',
    story:
      'Die Oberfläche wird sandgestrahlt für die charakteristische Rostpatina, die viele Mitbewerber gar nicht anbieten. Der Grillring ist 1 cm dick, die Oberfläche geschliffen — und zwischen Ring und Schale liegt eine präzise Fuge, damit überflüssiges Öl innen abläuft, statt die Aussenhaut zu beschmutzen.',
    specs: [
      { label: 'Durchmesser', value: '1 m (80 cm auf Anfrage)' },
      { label: 'Wandstärke Halbkugel', value: '6 mm' },
      { label: 'Grillring', value: '1 cm, geschliffen' },
      { label: 'Oberfläche', value: 'sandgestrahlt — Rostdesign' },
      { label: 'Aufbau', value: 'modular, transportierbar' },
      { label: 'Herstellung', value: 'eigenhändig in der Schweiz' },
    ],
    variants: [
      { label: 'Mit Grillring + Schlitzen + Pizzaeinsatz', price: 2750, description: 'Komplett-Set mit Schamotteinsatz' },
      { label: 'Mit Grillring + Schlitzen', price: 2350 },
      { label: 'Mit Grillring (ohne Schlitze)', price: 2250, description: 'Einstieg' },
    ],
    options: [
      { label: 'Abdeckung Aluminium', priceAdd: 200 },
      { label: 'Abdeckung Edelstahl', priceAdd: 300 },
      { label: 'Schwenkarm + Grillrost', priceAdd: 350 },
      { label: 'Hocker Stahl rostig', priceAdd: 125, note: 'pro Stück' },
      { label: 'Hocker Stahl pulverbeschichtet', priceAdd: 180, note: 'pro Stück' },
      { label: 'Grillring in Chromstahl', priceAdd: 600, note: 'ohne Garantie' },
    ],
    highlights: [
      '6 mm Wandstärke — kein Verziehen im Betrieb',
      'Sandgestrahlte Oberfläche für edle Rostpatina',
      'Modulare Bauweise — leicht zu transportieren',
      'Öl-Ablauffuge zwischen Ring und Schale',
    ],
    comparison: {
      label: 'Wandstärke',
      ours: '6 mm',
      theirs: '2 – 5 mm',
    },
  },

  {
    slug: 'feuerkugel-asymmetrisch',
    category: 'feuer',
    name: 'Feuerkugel Asymmetrisch',
    subtitle: 'mit Schlitzen & Feldküchen-Funktion',
    tagline: 'Mehr Hitzezonen, mehr Fläche. Der Grillring, der mitdenkt.',
    basePrice: 2150,
    heroImage: `${IMG}/angebot2_368edd_07853538dd954f87b27b7748912d0889_mv2_jpg.jpg`,
    thumbImage: `${IMG}/angebot2_368edd_07853538dd954f87b27b7748912d0889_mv2_jpg.jpg`,
    gallery: [
      `${IMG}/angebot2_368edd_07853538dd954f87b27b7748912d0889_mv2_jpg.jpg`,
      `${IMG}/angebot2_368edd_2ba61a96090e4a2083b5e0ad1b316628_mv2_jpg.jpg`,
      `${IMG}/angebot2_368edd_3a8c84f6f679422babeae334c0b8ce68_mv2_jpg.jpg`,
      `${IMG}/angebot2_368edd_a1bb7e50252e4908bab88401db50105b_mv2_jpg.jpg`,
      `${IMG}/angebot2_368edd_a24b640c822143dc905d3a410b669146_mv2_jpg.jpg`,
    ],
    lead:
      'Die Weiterentwicklung der klassischen Feuerkugel. Der asymmetrische Grillring schafft mehr Hitzezonen und mehr nutzbare Grillfläche. Eine zusätzliche Öffnung erlaubt die direkte Befeuerung eines Kochtopfes — so wird die Feuerkugel zur Feldküche.',
    story:
      'Klassisches Grillieren, Braten, Kochen und Backen in einem Gerät. Die asymmetrische Geometrie entsteht aus funktionalem Denken: unterschiedliche Hitzeintensitäten für gleichzeitiges Anbraten und sanftes Garen. Vom gelernten Metallbauer und Ingenieur eigenhändig hergestellt.',
    specs: [
      { label: 'Durchmesser', value: '1 m' },
      { label: 'Wandstärke Halbkugel', value: '6 mm' },
      { label: 'Grillring', value: '1 cm, geschliffen, asymmetrisch' },
      { label: 'Öffnung', value: 'Direkte Befeuerung Kochtopf' },
      { label: 'Aufbau', value: 'modular' },
    ],
    variants: [
      { label: 'Asymmetrisch + Schlitzen + Pizzaeinsatz', price: 2650, description: 'Inkl. Schamotte' },
      { label: 'Asymmetrisch + Schlitzen', price: 2250 },
      { label: 'Asymmetrisch ohne Schlitze', price: 2150 },
    ],
    options: [
      { label: 'Abdeckung Aluminium', priceAdd: 200 },
      { label: 'Abdeckung Edelstahl', priceAdd: 300 },
      { label: 'Schwenkarm + Grillrost', priceAdd: 350 },
      { label: 'Schwenkarm + Kessel + Halter', priceAdd: 350 },
      { label: 'Hocker Stahl rostig', priceAdd: 125, note: 'Filzauflage +40.-' },
      { label: 'Hocker Stahl pulverbeschichtet', priceAdd: 180, note: 'pro Stück' },
      { label: 'Rundbank Stahl', priceAdd: 750 },
    ],
    highlights: [
      'Einzigartiges asymmetrisches Ring-Design',
      'Mehr Hitzezonen für gleichzeitiges Garen',
      'Zusatzöffnung für Kochtopf-Befeuerung',
      'Auch als Feldküche einsetzbar',
    ],
  },

  {
    slug: 'feuerkubus',
    category: 'feuer',
    name: 'Feuerkubus',
    subtitle: 'mit Grillplatte / Teppanyaki',
    tagline: 'Quadratisch. Monolithisch. 90 × 90 cm Grillfläche auf ergonomischen 80 cm.',
    basePrice: 2700,
    heroImage: `${IMG}/feuerkubus_368edd_4b9b60e3f1ca47edb74e823085543c33_mv2_jpg.jpg`,
    thumbImage: `${IMG}/feuerkubus_368edd_4b9b60e3f1ca47edb74e823085543c33_mv2_jpg.jpg`,
    gallery: [
      `${IMG}/feuerkubus_368edd_4b9b60e3f1ca47edb74e823085543c33_mv2_jpg.jpg`,
      `${IMG}/feuerkubus_368edd_720515ea86b94c299d6db0a75fb45c77_mv2_jpg.jpg`,
      `${IMG}/feuerkubus_368edd_75cf85dfe5b34304b0e75f0ef4449918_mv2_jpg.jpg`,
      `${IMG}/feuerkubus_368edd_8478b61baaf94328947bbb9d0ee332c4_mv2_jpg.jpg`,
      `${IMG}/feuerkubus_368edd_9e4e1f00ec864c93bbad57a0e732abb6_mv2_jpg.jpg`,
      `${IMG}/feuerkubus_368edd_af6e90aec9df4cfbb57157c1dfbcd715_mv2_jpg.jpg`,
      `${IMG}/feuerkubus_368edd_e45d0ce7299344c7abbb6829bd75af99_mv2_jpg.jpg`,
      `${IMG}/feuerkubus_368edd_ee9c685b66674c8ab24448ea51e95a93_mv2_jpg.jpg`,
    ],
    lead:
      'Ein Eyecatcher in kubischer Form. Ergonomische Höhe, enorme Grillfläche, massive Bauart: der Feuerkubus ist das Statement-Stück unter den Outdoor-Grills — auch in erhöhter Variante erhältlich.',
    story:
      'Der Grundkörper ist aus 5 mm dickem Stahl gefertigt, die geteilte Grillplatte aus 10 mm. Ein Segment mit Schlitzen, eines als Vollfläche (Teppanyaki). Individuelle Abmessungen, Designs und Lackierungen sind auf Kundenwunsch möglich.',
    specs: [
      { label: 'Grillfläche', value: '90 × 90 cm' },
      { label: 'Grillhöhe', value: '80 cm (ergonomisch)' },
      { label: 'Grundkörper', value: '5 mm Stahl' },
      { label: 'Grillplatte', value: '10 mm Stahl, geteilt (Schlitze + Vollfläche)' },
    ],
    options: [
      { label: 'Abdeckung Chromstahl', priceAdd: 350 },
      { label: 'Schwenkarm + Grillrost', priceAdd: 350 },
      { label: 'Schwenkarm + Kessel + Halter', priceAdd: 350 },
      { label: 'Pizzabackeinsatz', priceAdd: 450 },
    ],
    highlights: [
      '90 × 90 cm Grillfläche — genug für eine ganze Runde',
      '10 mm Grillplatten: Schlitze oder Teppanyaki',
      'Ergonomische 80 cm Arbeitshöhe',
      'Auch in erhöhter Form erhältlich',
    ],
  },

  {
    slug: 'feuerschale',
    category: 'feuer',
    name: 'Feuerschale',
    subtitle: 'mit Grillplatte',
    tagline: 'Kochen, braten und grillieren in einem. Das multifunktionale Herz des Abends.',
    basePrice: 1100,
    heroImage: `${IMG}/feuerschale_368edd_5cb07a58ed314991bdcf31ac7581828a_mv2_jpg.jpg`,
    thumbImage: `${IMG}/feuerschale_368edd_5cb07a58ed314991bdcf31ac7581828a_mv2_jpg.jpg`,
    gallery: [
      `${IMG}/feuerschale_368edd_5cb07a58ed314991bdcf31ac7581828a_mv2_jpg.jpg`,
      `${IMG}/feuerschale_368edd_6cad07ebc317484c871dbf2b133de911_mv2_jpg.jpg`,
      `${IMG}/feuerschale_368edd_753674be5cf445c89740902fe3c7dc4e_mv2_jpg.jpg`,
      `${IMG}/feuerschale_368edd_bc7a4ca1a07848f6ac2f7dae85b12601_mv2_jpg.jpg`,
    ],
    lead:
      'Die edle, multifunktionale Feuerschale mit Grillring. Aus 5 mm starkem, hitzebeständig lackiertem Stahl — mit abnehmbarer 10 mm Grillplatte. Der offene Ring sorgt für Sauerstoff: das Holz brennt rauchfrei, die Flamme bleibt sichtbar.',
    story:
      'Bereiten Sie Fleisch, Gemüse und Beilagen direkt über den Flammen zu. Kochen Sie im Kessel. Backen Sie Pizza. Der Zugang zum Feuer ist offen — das macht die Feuerschale zum geselligen Mittelpunkt, nicht zum versteckten Geheimnis.',
    specs: [
      { label: 'Durchmesser', value: '1 m' },
      { label: 'Schale', value: '5 mm Stahl, hitzebeständig lackiert' },
      { label: 'Grillplatte', value: '10 mm, abnehmbar' },
      { label: 'Grillring', value: 'offen für Sauerstoffzufuhr' },
    ],
    options: [
      { label: 'Schwenkarm + Grillrost', priceAdd: 350 },
      { label: 'Schwenkarm + Kessel + Halter', priceAdd: 350 },
      { label: 'Schwenkarm Kombi (Grillrost + Kessel)', priceAdd: 500 },
      { label: 'Abdeckung Chromstahl', priceAdd: 300 },
      { label: 'Abdeckung Aluminium', priceAdd: 200 },
    ],
    highlights: [
      'Grillen + Kochen + Braten in einem',
      'Abnehmbare 10 mm Grillplatte',
      'Rauchfreie Verbrennung durch offenen Ring',
      'Sichtbare Flamme für Atmosphäre',
    ],
  },
];

export const gartenProducts: Product[] = [
  {
    slug: 'rundbank',
    category: 'garten',
    name: 'Rundbank / Holzlager',
    subtitle: 'nach Mass',
    tagline: 'Sitzen und Holzlagern in einem Stück massivem Stahl.',
    basePrice: 750,
    heroImage: `${IMG}/holzlager_368edd_0497a6492c1648799bee06c328cfe515_mv2_jpg.jpg`,
    thumbImage: `${IMG}/holzlager_368edd_0497a6492c1648799bee06c328cfe515_mv2_jpg.jpg`,
    gallery: [
      `${IMG}/holzlager_368edd_0497a6492c1648799bee06c328cfe515_mv2_jpg.jpg`,
      `${IMG}/holzlager_368edd_1372764acf86461db8316d3713c2dedc_mv2_jpg.jpg`,
      `${IMG}/holzlager_368edd_2a87a3bd856944dc99f5e7c5e0a33d3b_mv2_jpg.jpg`,
      `${IMG}/holzlager_368edd_4aa2941817fc4a8cbd9bb9b7b33b8b81_mv2_jpg.jpg`,
      `${IMG}/holzlager_368edd_ca1d10339a44431384a3c139832e76e7_mv2_jpg.jpg`,
      `${IMG}/holzlager_368edd_de68652a66084b42a5a1590d4cd02596_mv2_jpg.jpg`,
      `${IMG}/holzlager_368edd_e731ca03abf44be1b3ffa9226473d9bd_mv2_jpg.jpg`,
      `${IMG}/holzlager_368edd_f0a68fabe56f49db8de8bceb9222da8a_mv2_d_3968_2976_s_4_.jpg`,
    ],
    lead:
      'Hochwertige, stabile Rundbank aus 5 mm dickem Stahl, die gleichzeitig als Holzlager dient. Nach Mass hergestellt — Form, Winkel und Oberfläche ganz nach Ihren Vorstellungen.',
    specs: [
      { label: 'Material', value: '5 mm Stahl' },
      { label: 'Form', value: 'Viertelkreis 1,25 m · 40 cm Höhe' },
      { label: 'Oberflächen', value: 'pulverbeschichtet, lackiert, roh, Chromstahl' },
      { label: 'Individuelle Masse', value: 'auf Anfrage' },
    ],
    options: [
      { label: 'Filz-Sitzauflage', priceAdd: 150 },
    ],
    highlights: [
      'Massiv: 5 mm Stahl',
      'Doppelt genutzt: Sitzbank + Holzlager',
      'Oberfläche frei wählbar',
      'Individuelle Masse möglich',
    ],
  },
  {
    slug: 'moebel',
    category: 'garten',
    name: 'Möbel im Industriedesign',
    subtitle: 'Stahl + Altholz · Chromstahl + Glas',
    tagline: 'Unikate. 100 % Eigenkonstruktion, 100 % Eigenfertigung.',
    basePrice: 0,
    priceLabel: 'Auf Anfrage',
    heroImage: `${IMG}/moebel_368edd_8246d637a524404e9924e57ac52f9fca_mv2_jpg.jpg`,
    thumbImage: `${IMG}/moebel_368edd_8246d637a524404e9924e57ac52f9fca_mv2_jpg.jpg`,
    gallery: [
      `${IMG}/moebel_368edd_8246d637a524404e9924e57ac52f9fca_mv2_jpg.jpg`,
      `${IMG}/moebel_368edd_04c4814674454f20b31a267264bd50ac_mv2_d_4032_3024_s_4_.jpg`,
      `${IMG}/moebel_368edd_179b88f0589d4d2da367497885c525b2_mv2_d_4032_3024_s_4_.jpg`,
      `${IMG}/moebel_368edd_17b9664769ca4eb282af51a9b6e9f451_mv2_d_4032_3024_s_4_.jpg`,
      `${IMG}/moebel_368edd_1ef7fe0a84b44dbaa9c3670e400cad29_mv2_d_4032_3024_s_4_.jpg`,
      `${IMG}/moebel_368edd_3ea67587ff7a4d148b9aeb9da2ab6688_mv2_d_4032_3024_s_4_.jpg`,
      `${IMG}/moebel_368edd_4683814eeb844256b6ebfb36320981e4_mv2_d_1440_1440_s_2_.jpg`,
      `${IMG}/moebel_368edd_53671a4d8fbd4c7f860d70178eabf009_mv2_d_4032_3024_s_4_.jpg`,
      `${IMG}/moebel_368edd_59c18b70f0af43a6982c48e5bc619c0c_mv2_d_4032_3024_s_4_.jpg`,
      `${IMG}/moebel_368edd_669859494aab4cc48716ed612ba2bce2_mv2_d_1440_1440_s_2_.jpg`,
      `${IMG}/moebel_368edd_770a6265956b440f891a271cfe35849f_mv2_d_3024_4032_s_4_.jpg`,
      `${IMG}/moebel_368edd_8649a824d5e54a198e35b6fdf6e5acba_mv2_d_4032_3024_s_4_.jpg`,
    ],
    lead:
      'Baustahl trifft Altholz. Chromstahl trifft Glas. Die schlichte Erscheinungsform macht den Unterschied: einfache, ehrliche Materialien, hochwertig kombiniert — echte Hingucker für Wohnraum und Terrasse.',
    specs: [
      { label: 'Stahl', value: 'roh oder gewachst' },
      { label: 'Altholz', value: 'naturbelassen, geölt oder gewachst' },
      { label: 'Oberfläche Holz', value: 'gebürstet oder geschliffen' },
      { label: 'Produktion', value: 'Unikat auf Anfrage' },
    ],
    highlights: [
      'Massive Baustahl-Konstruktion',
      'Altholz mit charaktervoller Faserung',
      'Alternativ: Chromstahl + Glas',
      'Jedes Stück ein Einzelstück',
    ],
  },
  {
    slug: 'springbrunnen',
    category: 'garten',
    name: 'Springbrunnen',
    subtitle: 'Stahl · solarbetrieben',
    tagline: 'Wasser, das durch 6 mm Stahl läuft.',
    basePrice: 750,
    heroImage: `${IMG}/springbrunnen_368edd_949454c4ff6b4bc980e016fccbe5a4dc_mv2_jpg.jpg`,
    thumbImage: `${IMG}/springbrunnen_368edd_949454c4ff6b4bc980e016fccbe5a4dc_mv2_jpg.jpg`,
    gallery: [
      `${IMG}/springbrunnen_368edd_949454c4ff6b4bc980e016fccbe5a4dc_mv2_jpg.jpg`,
    ],
    lead:
      'Hochwertiger Springbrunnen aus massivem 6 mm Stahl — mit solarbetriebener Pumpe. Extrem langlebig, schön in der Patina, autark im Betrieb.',
    specs: [
      { label: 'Material', value: '6 mm Stahl' },
      { label: 'Durchmesser', value: '1 m' },
      { label: 'Höhe', value: 'ca. 53 cm' },
      { label: 'Pumpe', value: 'solarbetrieben' },
    ],
    highlights: [
      '6 mm Stahl — massiv und langlebig',
      'Solarbetrieb — kein Stromanschluss nötig',
      'Individuelle Masse möglich',
    ],
  },
];

export const allProducts = [...products, ...gartenProducts];
export const getProduct = (slug: string) => allProducts.find((p) => p.slug === slug);
