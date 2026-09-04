// Unterstützte Sprachen. Bewusst ohne next/*-Imports, damit auch
// Metadaten-Routen (sitemap) und andere serverfreie Module sie nutzen können.
export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export function hasLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}
