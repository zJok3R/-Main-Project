import Link from "next/link";
import { brand } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitch } from "@/components/language-switch";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";

export async function SiteHeader() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const lang = hasLocale(locale) ? locale : "de";

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3">
        <Link
          href={`/${lang}`}
          className="text-lg font-semibold tracking-tight text-ink"
        >
          {brand.name}
        </Link>
        <nav className="hidden flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted sm:flex">
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${lang}${item.href}`}
              className="transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle ariaLight={t.theme.toLight} ariaDark={t.theme.toDark} />
          <Link
            href={`/${lang}/kontakt`}
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-strong"
          >
            {t.header.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
