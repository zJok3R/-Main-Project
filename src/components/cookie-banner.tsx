"use client";

import { useEffect, useState } from "react";

// Cookie-Consent-Banner (TTDSG/DSGVO).
//
// Kategorien:
// - essential: technisch notwendig (Stripe-Zahlungssession, Consent-Speicherung)
// - stats:     anonyme Besucherstatistik (optional — Dienst wird bei Bedarf
//              hier eingebunden, siehe README "Analytics")
//
// Die Einwilligung wird als Cookie `omnaut-consent` gespeichert (180 Tage).
// Einbindung neuer Statistik-Dienste: nach `save()` das Event
// `omnaut:consent` abfangen und nur bei `detail.stats === true` laden.

const CONSENT_COOKIE = "omnaut-consent";
const CONSENT_DAYS = 180;

function readConsent(): { essential: boolean; stats: boolean } | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)`),
  );
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

function writeConsent(stats: boolean) {
  const value = encodeURIComponent(JSON.stringify({ essential: true, stats }));
  const expires = new Date(
    Date.now() + CONSENT_DAYS * 24 * 60 * 60 * 1000,
  ).toUTCString();
  document.cookie = `${CONSENT_COOKIE}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

export function CookieBanner() {
  // Lazy initialisiert: auf dem Server unsichtbar, nach der Hydration nur
  // sichtbar, wenn noch keine Einwilligung gespeichert ist.
  const [consent] = useState<{ essential: boolean; stats: boolean } | null>(
    () => readConsent(),
  );
  const [open, setOpen] = useState(false);
  const [stats, setStats] = useState(false);

  function save(chosenStats: boolean) {
    writeConsent(chosenStats);
    setOpen(false);
    // Einbindepunkt für optionale Dienste (z. B. Analytics-Script):
    window.dispatchEvent(
      new CustomEvent("omnaut:consent", {
        detail: { essential: true, stats: chosenStats },
      }),
    );
  }

  // Footer-Link "Cookie-Einstellungen" öffnet den Banner erneut.
  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("omnaut:open-cookie-settings", onOpen);
    return () =>
      window.removeEventListener("omnaut:open-cookie-settings", onOpen);
  }, []);

  if (!open && consent !== null) return null;

  return (
    <div
      suppressHydrationWarning
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-2xl border border-line bg-canvas p-5 panel-shadow"
      role="dialog"
      aria-label="Cookie-Einstellungen"
    >
      <h2 className="text-sm font-semibold text-ink">Cookies &amp; Datenschutz</h2>
      <p className="mt-2 text-xs leading-relaxed text-muted">
        Wir verwenden technisch notwendige Cookies für den Checkout (Stripe)
        und zur Speicherung deiner Einwilligung. Optional: anonyme
        Besucherstatistik, um die Seite zu verbessern.
      </p>

      <div className="mt-4 space-y-2 text-xs">
        <label className="flex items-start gap-2.5 text-ink">
          <input type="checkbox" checked disabled className="consent-check mt-0.5 h-4 w-4" />
          <span>
            <strong>Notwendig</strong> — Checkout &amp; Einwilligungsspeicherung.
            Immer aktiv.
          </span>
        </label>
        <label className="flex items-start gap-2.5 text-ink">
          <input
            type="checkbox"
            checked={stats}
            onChange={(e) => setStats(e.target.checked)}
            className="consent-check mt-0.5 h-4 w-4"
          />
          <span>
            <strong>Statistik</strong> — anonyme Besucherzahlen zur
            Verbesserung der Seite.
          </span>
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => save(true)}
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-on-primary transition-colors duration-200 hover:bg-primary-strong"
        >
          Alle akzeptieren
        </button>
        <button
          type="button"
          onClick={() => save(stats)}
          className="rounded-full border border-line px-4 py-2 text-xs font-medium text-ink transition-colors duration-200 hover:bg-surface"
        >
          Auswahl speichern
        </button>
        <p className="pt-1 text-center text-[0.7rem] leading-relaxed text-muted">
          Details in der{" "}
          <a href="/datenschutz" className="text-ink underline underline-offset-2">
            Datenschutzerklärung
          </a>
          .
        </p>
      </div>
    </div>
  );
}
