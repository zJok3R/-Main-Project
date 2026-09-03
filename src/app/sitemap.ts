import type { MetadataRoute } from "next";

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

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
