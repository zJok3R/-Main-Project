// Zentrale, sprachneutrale Daten der Website: Branding und Paket-Kenndaten.
// Alle sichtbaren Texte (Namen, Beschreibungen, Listen) stehen in den
// Wörterbüchern src/lib/i18n/de.ts bzw. en.ts — Preise und IDs hier.
//
// ARBEITSTITEL: "Omnaut" ist der aktuelle Markenname. Umbenennen =
// brand.name hier ändern; alles andere folgt automatisch.

export const brand = {
  name: "Omnaut",
  email: "kontakt@omnaut.de",
};

export const packageIds = [
  "ki-check",
  "ki-workshop",
  "ki-audit",
  "workflow-automation",
  "ki-chatbot",
  "rag-knowledge-agent",
  "multi-agent",
  "betriebs-retainer",
] as const;

export type PackageId = (typeof packageIds)[number];

export type BasePackage = {
  id: PackageId;
  price: string;
  featured?: boolean;
  buyable?: boolean;
  priceCents?: number;
};

export const packages: BasePackage[] = [
  { id: "ki-check", price: "0 €" },
  {
    id: "ki-workshop",
    price: "2.900 €",
    featured: true,
    buyable: true,
    priceCents: 290000,
  },
  { id: "ki-audit", price: "6.900 €", featured: true },
  { id: "workflow-automation", price: "ab 7.900 €", featured: true },
  { id: "ki-chatbot", price: "ab 11.900 €" },
  { id: "rag-knowledge-agent", price: "ab 19.900 €" },
  { id: "multi-agent", price: "ab 34.900 €" },
  { id: "betriebs-retainer", price: "490–1.900 €" },
];

// Vollständig lokalisiertes Paket, wie es die Karten-UI braucht:
// Basis-Felder (id, price, featured, buyable) aus dieser Datei plus
// Textfelder aus dem Wörterbuch.
export type LocalizedPackage = BasePackage & {
  name: string;
  priceUnit?: string;
  duration: string;
  audience: string;
  teaser: string;
  includes: string[];
  excluded: string[];
};
