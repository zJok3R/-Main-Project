import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/locales";

const BASE = "https://www.omnaut.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/leistungen",
    "/prozess",
    "/referenzen",
    "/ueber",
    "/kontakt",
    "/agb",
    "/datenschutz",
    "/impressum",
    "/widerruf",
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.7,
      alternates: {
        languages: {
          de: `${BASE}/de${route}`,
          en: `${BASE}/en${route}`,
        },
      },
    })),
  );
}
