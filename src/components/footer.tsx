import Link from "next/link";
import { brand } from "@/lib/site-data";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { lang as getLang } from "next/root-params";
import { dictionaries, hasLocale } from "@/lib/i18n";

export async function Footer() {
  const locale = await getLang();
  const t = hasLocale(locale) ? dictionaries[locale] : dictionaries.de;
  const lang = hasLocale(locale) ? locale : "de";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-muted">
          {t.nav.map((l) => (
            <Link
              key={l.href}
              href={`/${lang}${l.href}`}
              className="transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted">
          {t.footer.legal.map((l) => (
            <Link
              key={l.href}
              href={`/${lang}${l.href}`}
              className="transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <CookieSettingsButton label={t.footer.cookieSettings} />
        </nav>
        <p className="text-xs text-muted">
          © {year} · {brand.name} · {t.footer.rights}
        </p>
        <p className="text-xs text-muted">{t.footer.aiNote}</p>
      </div>
    </footer>
  );
}
