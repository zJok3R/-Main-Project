"use client";

// Footer-Link, der den Cookie-Banner wieder öffnet (zur Änderung der Wahl).
export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("omnaut:open-cookie-settings"))
      }
      className="transition-colors duration-200 hover:text-ink"
    >
      {label}
    </button>
  );
}
