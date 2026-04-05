export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  km: number;
  fuel: "benzine" | "diesel" | "elektrisch" | "hybride";
  transmission: "automaat" | "handgeschakeld";
  price: number;
  image: string;
  color: string;
  description: string;
  specs: { label: string; value: string }[];
};

export const cars: Car[] = [
  {
    id: "volkswagen-golf-8",
    make: "Volkswagen",
    model: "Golf 8 Life",
    year: 2022,
    km: 26000,
    fuel: "benzine",
    transmission: "automaat",
    price: 24950,
    image: "/golfje.jpeg",
    color: "Diepzwart metallic",
    description: "Een prachtige Golf 8 in uitstekende staat. Volledig dealer onderhouden, eerste eigenaar. Rijdt als nieuw met alle moderne veiligheids- en rijhulpsystemen.",
    specs: [
      { label: "Bouwjaar", value: "2022" },
      { label: "Kilometerstand", value: "26.000 km" },
      { label: "Brandstof", value: "Benzine" },
      { label: "Transmissie", value: "Automaat" },
      { label: "Vermogen", value: "150 pk" },
      { label: "Kleur", value: "Diepzwart metallic" },
      { label: "APK", value: "07-2026" },
      { label: "Deuren", value: "5" },
    ],
  },
  {
    id: "tesla-model-3",
    make: "Tesla",
    model: "Model 3 Long Range",
    year: 2021,
    km: 41000,
    fuel: "elektrisch",
    transmission: "automaat",
    price: 32500,
    image: "/tesla.jpg",
    color: "Pearl White",
    description: "Tesla Model 3 Long Range met indrukwekkende actieradius van 580 km. Inclusief autopilot, premium audio en glazen panoramadak. Laadkosten slechts €3 per 100 km.",
    specs: [
      { label: "Bouwjaar", value: "2021" },
      { label: "Kilometerstand", value: "41.000 km" },
      { label: "Brandstof", value: "Elektrisch" },
      { label: "Actieradius", value: "580 km (WLTP)" },
      { label: "Vermogen", value: "351 pk" },
      { label: "Kleur", value: "Pearl White" },
      { label: "APK", value: "03-2026" },
      { label: "Laadtijd", value: "~45 min (Supercharger)" },
    ],
  },
  {
    id: "bmw-3serie",
    make: "BMW",
    model: "3 Serie 320i",
    year: 2020,
    km: 58000,
    fuel: "benzine",
    transmission: "automaat",
    price: 28750,
    image: "/bmw320.jpg",
    color: "Alpinwit metallic",
    description: "Sportieve BMW 320i in topconditie. M-sport pakket, LED koplampen en navigatiesysteem. Volledig NAP, twee sleutels en dealer onderhouden.",
    specs: [
      { label: "Bouwjaar", value: "2020" },
      { label: "Kilometerstand", value: "58.000 km" },
      { label: "Brandstof", value: "Benzine" },
      { label: "Transmissie", value: "Automaat" },
      { label: "Vermogen", value: "184 pk" },
      { label: "Kleur", value: "Alpinwit metallic" },
      { label: "APK", value: "11-2025" },
      { label: "Pakket", value: "M-Sport" },
    ],
  },
  {
    id: "kia-niro-ev",
    make: "Kia",
    model: "Niro EV ExecutiveLine",
    year: 2022,
    km: 32000,
    fuel: "elektrisch",
    transmission: "automaat",
    price: 27900,
    image: "/kia.jpg",
    color: "Gravity Blue",
    description: "Kia Niro EV met volledig elektrische aandrijving en 7 jaar fabrieksgarantie. Perfecte gezinsauto met ruime bagageruimte en modern interieur.",
    specs: [
      { label: "Bouwjaar", value: "2022" },
      { label: "Kilometerstand", value: "32.000 km" },
      { label: "Brandstof", value: "Elektrisch" },
      { label: "Actieradius", value: "463 km (WLTP)" },
      { label: "Vermogen", value: "204 pk" },
      { label: "Kleur", value: "Gravity Blue" },
      { label: "APK", value: "04-2027" },
      { label: "Garantie", value: "7 jaar fabrieksgarantie" },
    ],
  },
  {
    id: "audi-a3-sportback",
    make: "Audi",
    model: "A3 Sportback 35 TFSI",
    year: 2021,
    km: 47000,
    fuel: "benzine",
    transmission: "automaat",
    price: 26400,
    image: "/audi.jpg",
    color: "Grijs metallic",
    description: "Stijlvolle Audi A3 Sportback met premium afwerking. Virtual Cockpit, Bang & Olufsen audio en parkeersensoren rondom. Bijzonder rijke uitrusting.",
    specs: [
      { label: "Bouwjaar", value: "2021" },
      { label: "Kilometerstand", value: "47.000 km" },
      { label: "Brandstof", value: "Benzine" },
      { label: "Transmissie", value: "Automaat (S-Tronic)" },
      { label: "Vermogen", value: "150 pk" },
      { label: "Kleur", value: "Navarra Blauw metallic" },
      { label: "APK", value: "09-2026" },
      { label: "Audio", value: "Bang & Olufsen" },
    ],
  },
  {
    id: "toyota-rav4-hybrid",
    make: "Toyota",
    model: "RAV4 2.5 Hybrid",
    year: 2021,
    km: 54000,
    fuel: "hybride",
    transmission: "automaat",
    price: 33200,
    image: "/toyota.jpg",
    color: "Super White",
    description: "Betrouwbare Toyota RAV4 Hybrid – laag verbruik, hoog comfort. Ideaal voor rijders die zuinig willen rijden zonder volledig elektrisch te gaan.",
    specs: [
      { label: "Bouwjaar", value: "2021" },
      { label: "Kilometerstand", value: "54.000 km" },
      { label: "Brandstof", value: "Hybride" },
      { label: "Verbruik", value: "5,8 l/100 km" },
      { label: "Vermogen", value: "218 pk (combined)" },
      { label: "Kleur", value: "Super White" },
      { label: "APK", value: "06-2026" },
      { label: "Aandrijving", value: "4x4 AWD" },
    ],
  },
];

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Occasions", href: "/occasions" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export const reviews = [
  {
    name: "Mark van der Berg",
    location: "Amsterdam",
    rating: 5,
    text: "Geweldig geholpen bij de aankoop van mijn BMW. Transparant, eerlijk en snel geregeld. Rijdt als een droom!",
  },
  {
    name: "Sarah Klaassen",
    location: "Utrecht",
    rating: 5,
    text: "Mijn eerste elektrische auto gekocht via Garage Groenendijk. Ze hebben me alles uitgelegd over laden en gebruik. Super service!",
  },
  {
    name: "Pieter Hoffman",
    location: "Den Haag",
    rating: 5,
    text: "Familiebedrijf met een hart. Geen druk, geen trucjes. Gewoon eerlijk advies en een eerlijke prijs.",
  },
  {
    name: "Linda de Vries",
    location: "Rotterdam",
    rating: 5,
    text: "Tesla gekocht en binnen twee dagen rijdend. WhatsApp contact was super makkelijk en snel. Absolute aanrader!",
  },
];
