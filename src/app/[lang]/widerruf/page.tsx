import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.legal.widerruf.metaTitle,
    robots: { index: false },
    alternates: pageAlternates(locale, "/widerruf"),
  };
}

export default async function WiderrufPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const d = t.legal.widerruf;

  return (
    <LegalPage title={d.title}>
      <h2>{d.rightH}</h2>
      <p>{d.rightP1}</p>
      <p>{d.rightP2}</p>
      <p>{d.rightP3}</p>

      <h2>{d.expiryH}</h2>
      <p>{d.expiryP}</p>

      <h2>{d.consequencesH}</h2>
      <p>{d.consequencesP}</p>
    </LegalPage>
  );
}
