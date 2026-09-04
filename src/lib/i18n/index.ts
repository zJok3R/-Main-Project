// Server-seitiger Zugriff auf die Wörterbücher. `lang` ist ein
// Root-Parameter (app/[lang]) und damit aus jeder Server-Komponente
// ohne Prop-Drilling abrufbar. Client-Komponenten importieren diese
// Datei NICHT — sie bekommen Strings als Props vom Server-Parent.

import { notFound } from "next/navigation";
import { lang as getLang } from "next/root-params";
import { de } from "./de";
import { en } from "./en";
import { hasLocale } from "./locales";
import type { Locale } from "./locales";

export type Dictionary = typeof de;

export const dictionaries: Record<Locale, Dictionary> = { de, en };

export { hasLocale } from "./locales";
export type { Locale } from "./locales";
export { locales } from "./locales";

export async function getDictionary(): Promise<Dictionary> {
  const locale = await getLang();
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale];
}

// Wörterbuch ohne notFound-Fallback — für Randfälle wie not-found.tsx,
// wo ein ungültiger Lang-Parameter nicht erneut notFound() auslösen darf.
export async function getDictionaryOr(locale: string | undefined) {
  return hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
}
