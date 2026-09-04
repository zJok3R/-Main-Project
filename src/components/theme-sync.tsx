"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

// Stellt den Theme-Klassenstatus nach Client-Navigationen wieder her.
//
// Problem: Bei Client-Navigationen patcht Next.js die html-Attribute mit
// der Server-Version — deren className enthält die "dark"-Klasse nicht
// (der Server kennt das Client-Theme nicht). Beim Sprachwechsel (/de ↔ /en)
// ändert sich zusätzlich das lang-Attribut, wodurch der Patch greift und
// das Theme sichtbar zurückspringt.
//
// Lösung: Nach jeder Navigation wird die "dark"-Klasse aus localStorage
// bzw. Systempräferenz neu gesetzt — im useLayoutEffect, also vor dem
// ersten Paint, ohne sichtbares Flackern. Beim allerersten Mount
// (Hydration, Server-Snapshot false) überspringt der Effekt: da hat das
// Inline-Script im Root-Layout das Theme bereits vor dem Paint gesetzt.
export function ThemeSync() {
  const pathname = usePathname();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useLayoutEffect(() => {
    if (!mounted) return;
    try {
      const stored = localStorage.getItem("omnaut-theme");
      const dark = stored
        ? stored === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", dark);
    } catch {
      // localStorage nicht verfügbar — Systempräferenz via classList oben.
    }
  }, [pathname, mounted]);

  return null;
}
