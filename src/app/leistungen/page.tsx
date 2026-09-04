import type { Metadata } from "next";
import { faqs, packages } from "@/lib/site-data";
import { PriceCard } from "@/components/price-card";
import { Checkout } from "@/components/checkout";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description:
    "Acht Festpreis-Pakete für KI-Implementierung: vom kostenlosen KI-Check über Workflow-Automation bis zum Multi-Agent-System.",
};

export default function LeistungenPage() {
  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            Leistungen & Preise
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Acht Pakete, klare Preise. Jedes Paket nennt, was drin ist — und
            was bewusst nicht. Was hier nicht passt, schätzen wir im
            kostenlosen KI-Check ehrlich ein.
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {packages.map((p) => (
            <PriceCard key={p.id} pkg={p} />
          ))}
        </div>
      </section>

      <section id="direkt-buchen" className="px-5 py-12 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Direkt buchen
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            Kartenzahlung über Stripe, Festpreis inkl. MwSt. Mit deiner
            ausdrücklichen Zustimmung beginnen wir vor Ablauf der
            Widerrufsfrist — die Terminabsprache folgt per E-Mail.
          </p>
          <div className="mt-8">
            <Checkout productName="KI-Workshop" />
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Häufige Fragen
          </h2>
          <div className="mt-6 grid gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-xl border border-line bg-surface px-5 py-4"
              >
                <summary className="cursor-pointer text-sm font-medium text-ink">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Unklar, welches Paket passt?"
        text="Der kostenlose KI-Check gibt dir eine ehrliche Empfehlung — inklusive der Option „Noch nicht“."
      />
    </main>
  );
}
