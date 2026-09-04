import type { Metadata } from "next";
import Link from "next/link";
import { brand, guarantees, packages, processSteps, referenzen } from "@/lib/site-data";
import { PriceCard } from "@/components/price-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: `${brand.name} — KI-Implementierung für den Mittelstand`,
  description: brand.claim,
};

export default function HomePage() {
  const featured = packages.filter((p) => p.featured);

  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-16 sm:pb-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary-strong">
            KI-Implementierung · DACH
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            KI für deinen Betrieb.
            <br />
            Festpreis. Produktiv. Kein Hype.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            {brand.claim}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-strong"
            >
              Kostenloser KI-Check
            </Link>
            <Link
              href="/leistungen"
              className="rounded-full border border-line bg-canvas px-6 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface"
            >
              Leistungen & Preise
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted">
            {guarantees.map((g) => (
              <li key={g}>✓ {g}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Drei Einstiege, ein Versprechen
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Klarer Preis, klarer Umfang, klares Ergebnis — vor dem ersten Euro.
            Jedes Paket listet transparent, was drin ist und was bewusst nicht.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <PriceCard key={p.id} pkg={p} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            <Link
              href="/leistungen"
              className="font-medium text-primary-strong hover:underline"
            >
              Alle 8 Pakete ansehen →
            </Link>
          </p>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Vom Check zum Betrieb
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.nr} className="rounded-2xl border border-line bg-surface p-5">
                <p className="text-xs font-semibold text-primary-strong">
                  {s.nr} · {s.duration}
                </p>
                <h3 className="mt-2 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Ergebnisse, keine Versprechen
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Drei typische Mittelstandskonstellationen als ehrlich
            gekennzeichnete Beispielrechnung — keine echten Kundenprojekte,
            aber der Zahlenrahmen, den solche Projekte liefern.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {referenzen.map((r) => (
              <div
                key={r.branche}
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-strong">
                  {r.paket}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                  {r.kennzahl}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {r.kennzahlLabel}
                </p>
                <p className="mt-3 text-xs text-muted">{r.branche}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            <Link
              href="/referenzen"
              className="font-medium text-primary-strong hover:underline"
            >
              Alle Referenzen ansehen →
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="In 30 Minuten wissen, ob KI sich bei dir lohnt."
        text="Kostenloser KI-Check: Scorecard, drei Quick Wins, ehrliche Empfehlung — auch wenn sie lautet: Lass es."
      />
    </main>
  );
}
