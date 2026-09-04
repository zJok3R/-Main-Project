import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";
import { pageAlternates } from "@/lib/i18n/alternates";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  return {
    title: t.legal.impressum.metaTitle,
    robots: { index: false },
    alternates: pageAlternates(locale, "/impressum"),
  };
}

export default async function ImpressumPage() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const d = t.legal.impressum;

  return (
    <LegalPage title={d.title}>
      <p>{d.ddg}</p>

      <h2>{d.providerH}</h2>
      <p>
        {d.providerLines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <h2>{d.contactH}</h2>
      <p>
        {d.emailLabel} <a href="mailto:kontakt@omnaut.de">kontakt@omnaut.de</a>
      </p>

      <h2>{d.responsibleH}</h2>
      <p>{d.responsibleP}</p>

      <h2>{d.disputeH}</h2>
      <p>
        {d.disputeA}{" "}
        <a href="https://ec.europa.eu/consumers/odr/" rel="noopener">
          ec.europa.eu/consumers/odr
        </a>
        . {d.disputeB}
      </p>
    </LegalPage>
  );
}
