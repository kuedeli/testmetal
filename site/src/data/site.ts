export const site = {
  name: 'metal-works.ch',
  tagline: 'Feuer. Stahl. Ingenieurskunst.',
  description:
    'Design, Handwerk und Engineering vereint. Individuelle Grills, Feuerringe, Feuerschalen und Gartenausstattung aus massivem Stahl — vom Polymechaniker und Ingenieur aus der Schweiz.',
  owner: {
    name: 'Fabian Schmitter',
    title: 'Polymechaniker EFZ · Dipl. Masch.-Ing. FH · MBA Luzern',
  },
  contact: {
    phone: '+41 77 495 41 59',
    phoneDisplay: '077 495 41 59',
    email: 'fabian.schmitter@gmail.com',
    address: {
      street: 'Oberwilerstrasse 13',
      city: '8918 Unterlunkhofen',
      country: 'Schweiz',
    },
  },
  patent: 'EP 3 795 857 A1',
  patentTitle: 'Torsionsfedervorrichtung, Lager und Schwingungsdämpfer',
} as const;

export const nav = [
  { label: 'Produkte', href: '/produkte/' },
  { label: 'Garten & Möbel', href: '/garten-moebel/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Kontakt', href: '/kontakt/' },
] as const;

export const pillars = [
  {
    key: 'design',
    kicker: '01',
    title: 'Design',
    lead: 'Form folgt Funktion. Klare geometrische Linien, kein Geschnörkel — nur Material, Proportion und Präzision.',
    points: [
      'Reduzierte, geometrische Formensprache',
      'Hochwertige Verarbeitung in jedem Detail',
      'Ausschliesslich Stahl und ausgesuchtes Holz',
    ],
  },
  {
    key: 'engineering',
    kicker: '02',
    title: 'Engineering',
    lead: 'Thermische Berechnungen, FEM-Simulationen und jahrelange Konstruktionserfahrung. Patentbeteiligungen in der Maschinenindustrie inklusive.',
    points: [
      'CAD-Konstruktion und FEM-Simulation',
      'Festigkeits- und Wärmeberechnungen',
      'Patentbeteiligung EP 3 795 857 A1',
    ],
  },
  {
    key: 'handwerk',
    kicker: '03',
    title: 'Handwerk',
    lead: 'Vom Zuschnitt bis zur Oberflächenbehandlung alles aus einer Hand. Jedes Stück entsteht in der eigenen Werkstatt.',
    points: [
      'Eigenfertigung — kein Zwischenhändler',
      'Jahrzehnte an Metallverarbeitungs-Erfahrung',
      'Individuell, termintreu, mit Qualitätsbewusstsein',
    ],
  },
] as const;
