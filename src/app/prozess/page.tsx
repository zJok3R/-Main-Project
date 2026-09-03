import type { Metadata } from "next";
import { processSteps } from "@/lib/site-data";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Prozess",
  description:
    "Vom kostenlosen KI-Check über Audit und Build bis zum Betrieb — vier Etappen, jede mit Meilenstein und Abbruchmöglichkeit.",
};

export default function ProzessPage() {
  return (
    <main className="flex-1">
      <section className="px-5 pb-12 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
            Vom Check zum Betrieb
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Vier Etappen, jede mit konkretem Ergebnis. Nach jeder Etappe
            entscheidet ihr, ob es weitergeht — es gibt keinen Zwang und keine
            versteckten Folgekosten.
          </p>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          {processSteps.map((s) => (
            <article
              key={s.nr}
              className="grid gap-4 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-[4rem_1fr]"
            >
              <p className="text-2xl font-semibold text-primary-strong">
                {s.nr}
              </p>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold text-ink">{s.title}</h2>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {s.duration}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-line bg-canvas px-3 py-1 text-xs text-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Start ist die erste Etappe — und sie kostet nichts."
        text="Der KI-Check dauert 30 Minuten. Danach weißt du, ob und womit es sich lohnt."
      />
    </main>
  );
}
