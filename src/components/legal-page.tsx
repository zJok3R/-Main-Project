import Link from "next/link";
import type { ReactNode } from "react";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";

// Geteilte Hülle für die Rechtsseiten (Impressum, Datenschutz, AGB, Widerruf).
export async function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const lang = hasLocale(locale) ? locale : "de";

  return (
    <main className="flex flex-1 justify-center px-5 py-12 sm:py-16">
      <article className="legal w-full max-w-2xl">
        <Link
          href={`/${lang}`}
          className="text-xs font-medium text-primary-strong hover:underline"
        >
          {t.legal.back}
        </Link>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-ink">
          {title}
        </h1>

        <div className="mt-8">{children}</div>
      </article>
    </main>
  );
}
