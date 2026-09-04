"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOCALES = ["de", "en"] as const;
type SwitchLocale = (typeof LOCALES)[number];
const LOCALE_COOKIE = "omnaut-lang";

// Sprach-Slider im Header: wechselt auf die gleiche Route in der anderen
// Sprache (URL-basiert, /de/… ↔ /en/…). Merkt die Wahl im Cookie, damit
// der Proxy bei zukünftigen Besuchen ohne Präfix die richtige Sprache wählt.
export function LanguageSwitch() {
  const pathname = usePathname();
  const current = pathname.split("/")[1] as SwitchLocale;
  const active: SwitchLocale = LOCALES.includes(current) ? current : "de";
  const rest = pathname.split("/").slice(2).filter(Boolean).join("/");

  // Cookie-Write über State + Effect (react-hooks/immutability): direkte
  // Zuweisung an document.cookie im Handler ist nicht erlaubt.
  const [pendingLocale, setPendingLocale] = useState<SwitchLocale | null>(null);
  useEffect(() => {
    if (!pendingLocale) return;
    document.cookie = `${LOCALE_COOKIE}=${pendingLocale}; path=/; max-age=31536000; SameSite=Lax`;
  }, [pendingLocale]);

  return (
    <div
      role="group"
      aria-label="Language / Sprache"
      className="relative flex h-7 shrink-0 items-center rounded-full border border-line bg-surface-2 p-0.5"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0.5 left-0.5 w-9 rounded-full bg-primary transition-transform duration-200 ${
          active === "en" ? "translate-x-9" : "translate-x-0"
        }`}
      />
      {LOCALES.map((locale) => {
        const target = `/${locale}${rest ? `/${rest}` : ""}`;
        return (
          <Link
            key={locale}
            href={target}
            onClick={() => setPendingLocale(locale)}
            aria-label={locale === "de" ? "Deutsch" : "English"}
            aria-current={locale === active ? "true" : undefined}
            className={`relative z-10 grid h-6 w-9 place-items-center text-[0.65rem] font-bold tracking-wide transition-colors duration-200 ${
              locale === active
                ? "text-on-primary"
                : "text-muted hover:text-ink"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
