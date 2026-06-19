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
  { label: "Elektrisch rijden", href: "/elektrisch-rijden" },
  { label: "Werkplaats", href: "/werkplaats" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export const business = {
  name: "Groenendijk | Garage & Occasions",
  shortName: "Groenendijk",
  phone: "+31 50 123 45 67",
  phoneHref: "tel:+31501234567",
  whatsapp: "31623687249",
  whatsappHref: "https://wa.me/31623687249",
  email: "info@garagegroenendijk.nl",
  address: {
    street: "Hoofdstraat 12",
    city: "Appingedam",
    postal: "9901 AB",
    country: "Nederland",
  },
  hours: [
    { day: "Maandag – vrijdag", time: "08:00 – 18:00" },
    { day: "Zaterdag", time: "09:00 – 16:00" },
    { day: "Zondag", time: "Gesloten" },
  ],
  social: {
    facebook: "https://facebook.com/garagegroenendijk",
    instagram: "https://instagram.com/garagegroenendijk",
  },
  viaBovag: "https://www.viabovag.nl/occasions/groenendijk-garage-occasions",
  mapsEmbed:
    "https://www.google.com/maps?q=Hoofdstraat+12+Appingedam&output=embed",
};

export const usps = [
  {
    title: "Persoonlijk advies",
    text: "Je krijgt advies van mensen die je auto kennen, geen verkooppraatje uit een script.",
  },
  {
    title: "BOVAG-keurmerk",
    text: "Gecertificeerd lid van BOVAG, dus je staat er nooit alleen voor bij vragen of problemen.",
  },
  {
    title: "Reactie binnen 24 uur",
    text: "Stuur ons een bericht via WhatsApp of mail en je hoort dezelfde of volgende werkdag van ons.",
  },
];

export type Service = {
  title: string;
  description: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    title: "APK-keuring",
    description: "Snelle en betrouwbare APK-keuring, met eerlijk advies als er iets gerepareerd moet worden.",
    priceFrom: "vanaf €39,95",
  },
  {
    title: "Onderhoud",
    description: "Periodiek onderhoud volgens fabrieksvoorschrift, voor elk merk en bouwjaar.",
    priceFrom: "vanaf €99,-",
  },
  {
    title: "Reparatie",
    description: "Van een rammelend geluidje tot een grote reparatie — we leggen altijd eerst uit wat er aan de hand is.",
    priceFrom: "op offerte",
  },
  {
    title: "Banden & uitlijning",
    description: "Bandenwissel, balanceren en uitlijnen, zodat je veilig en zuinig onderweg bent.",
    priceFrom: "vanaf €25,- per band",
  },
  {
    title: "Airco-service",
    description: "Controle en bijvullen van je airco, zodat je het hele jaar comfortabel rijdt.",
    priceFrom: "vanaf €69,95",
  },
  {
    title: "Schade-inspectie",
    description: "Wij beoordelen schade en regelen waar mogelijk de afhandeling met je verzekeraar.",
    priceFrom: "op afspraak",
  },
];

export const evFaq = [
  {
    question: "Is een elektrische occasion betrouwbaar?",
    answer:
      "Ja. Wij controleren bij elke elektrische occasion de accustatus, laadcapaciteit en historie, zodat je niet voor verrassingen komt te staan.",
  },
  {
    question: "Wat kost het opladen van een elektrische auto?",
    answer:
      "Thuis laden kost gemiddeld €0,10 tot €0,30 per kWh, wat neerkomt op ongeveer €3 tot €6 per 100 kilometer. Bij snelladers langs de weg ligt dat hoger.",
  },
  {
    question: "Hoe ver kom ik op een volle accu?",
    answer:
      "Dat verschilt per model, maar de meeste elektrische occasions in ons aanbod komen tussen de 300 en 500 km op een volle lading (WLTP).",
  },
  {
    question: "Kan ik mijn huidige auto inruilen voor een elektrische?",
    answer:
      "Zeker, we maken graag een eerlijke inruilwaardering van je huidige auto en denken mee over welke elektrische occasion bij je past.",
  },
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
