"use client";

// Footer-Link, der den Cookie-Banner wieder öffnet (zur Änderung der Wahl).
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("omnaut:open-cookie-settings"))
      }
      className="transition-colors duration-200 hover:text-ink"
    >
      Cookie-Einstellungen
    </button>
  );
}
