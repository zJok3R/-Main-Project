"use client";

import { useState, useSyncExternalStore } from "react";

// Dark-Mode-Switch. Zustand wird in localStorage gemerkt; das Einblenden vor
// dem Hydrieren übernimmt das Inline-Script in app/layout.tsx (kein Flackern).
// Der Initialzustand wird einmalig lazy aus dem DOM gelesen.
//
// Bis zum Mount wird ein gleich großer Platzhalter gerendert: Der echte
// Zustand (classList) ist serverseitig nicht bekannt. Würde der Switch sofort
// mit dem Client-Zustand rendern, entstünde bei Dark-Mode-Nutzern ein
// Hydration-Mismatch (aria-checked hell/dunkel).
export function ThemeToggle({
  ariaLight,
  ariaDark,
}: {
  ariaLight: string;
  ariaDark: string;
}) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [dark, setDark] = useState<boolean>(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("omnaut-theme", next ? "dark" : "light");
    } catch {
      // localStorage nicht verfügbar (z. B. Privatmodus) — nur visuell togglen.
    }
    setDark(next);
  }

  if (!mounted) {
    return (
      <span aria-hidden="true" className="inline-block h-6 w-11 shrink-0" />
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={dark ? ariaLight : ariaDark}
      onClick={toggle}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border transition-colors duration-200 ${
        dark ? "border-primary bg-primary" : "border-line bg-surface-2"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full transition-transform duration-200 ${
          dark
            ? "translate-x-[1.4rem] bg-on-primary"
            : "translate-x-1 bg-muted"
        }`}
      />
    </button>
  );
}
