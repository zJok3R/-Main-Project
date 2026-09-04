// Hreflang-Alternaten für Seiten-Metadaten: gleiche Route in beiden Sprachen.
import type { Locale } from "./locales";

export function pageAlternates(locale: string | undefined, path: string) {
  const lang: Locale = locale === "en" ? "en" : "de";
  const slug = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return {
    canonical: `/${lang}${slug}`,
    languages: { de: `/de${slug}`, en: `/en${slug}` },
  };
}
