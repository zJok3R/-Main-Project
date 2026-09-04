// Zentrale Daten der Website: Branding, Navigation, Preise, Prozess, FAQ.
// Preise und Pakete NUR hier ändern — Komponenten und Seiten lesen
// ausschließlich aus dieser Datei. Seiten-spezifische Texte (z. B.
// Beispiel-Fälle) stehen in den jeweiligen Seiten-Dateien.
//
// ARBEITSTITEL: "Omnaut" ist der aktuelle Markenname. Umbenennen =
// brand.name hier ändern; alles andere folgt automatisch.

export const brand = {
  name: "Omnaut",
  claim:
    "AI Agents, Workflows und Automatisierung für den Mittelstand — zum Festpreis, DSGVO-konform, produktiv statt Pilot.",
  email: "kontakt@omnaut.de",
  linkedin: "https://www.linkedin.com/company/omnaut", // nach Profilanlage ersetzen
};

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/leistungen", label: "Leistungen & Preise" },
  { href: "/prozess", label: "Prozess" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export const guarantees = [
  "Festpreis & Planbarkeit",
  "DSGVO & AI Act im Blick",
  "EU-Hosting",
  "Dokumentiert übergeben — kein Lock-in",
];

export type PricePackage = {
  id: string;
  name: string;
  price: string;
  priceUnit?: string;
  duration: string;
  audience: string;
  teaser: string;
  includes: string[];
  excluded: string[];
  featured?: boolean;
};

export const packages: PricePackage[] = [
  {
    id: "ki-check",
    name: "KI-Check",
    price: "0 €",
    priceUnit: "kostenlos",
    duration: "30 Minuten",
    audience: "Inhaberinnen und Geschäftsführer, 10–250 Mitarbeitende",
    teaser:
      "Scorecard zu Daten, Prozessen und Compliance — plus drei priorisierte Quick Wins. Ehrlich, auch wenn die Antwort lautet: Noch nicht.",
    includes: [
      "30-minütiges Erstgespräch (Video)",
      "Kurz-Scorecard: Daten, Prozesse, Compliance",
      "Drei priorisierte Quick Wins",
      "Empfehlung: starten — womit — oder warten",
    ],
    excluded: ["Umsetzung", "Verträge", "Verpflichtungen"],
  },
  {
    id: "ki-workshop",
    name: "KI-Workshop",
    price: "2.900 €",
    priceUnit: "einmalig",
    duration: "1 Tag",
    audience: "Teams, die vor der Investition Klarheit wollen",
    teaser:
      "Use Cases an euren echten Prozessen finden, Aufwand und ROI schätzen, priorisierte Roadmap mitnehmen.",
    includes: [
      "Ganztägiger Workshop, vor Ort oder remote (bis 12 Personen)",
      "Use-Case-Identifikation an realen Prozessen",
      "Aufwands- und ROI-Schätzung je Use Case",
      "Priorisierte Roadmap",
      "Nachbereitungsdokument",
    ],
    excluded: ["Umsetzung", "Lizenzkosten", "Reisekosten (nach Aufwand)"],
    featured: true,
  },
  {
    id: "ki-audit",
    name: "KI-Audit",
    price: "6.900 €",
    priceUnit: "einmalig",
    duration: "2–4 Wochen",
    audience: "Unternehmen vor der ersten größeren KI-Investition",
    teaser:
      "Daten, Prozesse, Recht: belastbar geprüft. Ergebnis ist ein Bericht mit Budgetplan und Roadmap — keine Verkaufsfolien.",
    includes: [
      "Screening von 2–3 Kernprozessen",
      "Datenqualitäts-Check (der eigentliche Engpass)",
      "DSGVO-/AI-Act-Einordnung",
      "Technologie-Empfehlung: Eigenbau vs. Plattform",
      "Roadmap mit Budgetplanung",
    ],
    excluded: ["Umsetzung", "Externe Zertifizierungen"],
    featured: true,
  },
  {
    id: "workflow-automation",
    name: "Workflow-Automation",
    price: "ab 7.900 €",
    priceUnit: "einmalig",
    duration: "2–4 Wochen",
    audience: "Teams mit manueller Routine: Anfragen, Rechnungen, E-Mail-Flut",
    teaser:
      "Drei Prozesse automatisiert auf n8n, DSGVO-konform gehostet, an eure Tools angebunden — mit Dokumentation und Einweisung.",
    includes: [
      "3 Workflows (z. B. Anfrage → CRM, Rechnung → Buchhaltung, E-Mail-Triage)",
      "n8n-Setup mit EU-Hosting",
      "Anbindung bestehender Tools",
      "Dokumentation + Einweisung",
      "30 Tage Nachbesserung",
    ],
    excluded: [
      "Weitere Workflows (je 1.900 €)",
      "Systeme ohne Schnittstelle (Einzelangebot)",
    ],
    featured: true,
  },
  {
    id: "ki-chatbot",
    name: "KI-Chatbot",
    price: "ab 11.900 €",
    priceUnit: "einmalig",
    duration: "3–6 Wochen",
    audience: "Firmen mit wiederkehrenden Kundenfragen",
    teaser:
      "DSGVO-konformer Chatbot auf Basis eurer Inhalte — für Website oder Teams/Slack. Inklusive Wissensbasis-Aufbau und Testphase.",
    includes: [
      "Konzeption & Dialog-Design",
      "Wissensbasis-Aufbau aus euren Unterlagen",
      "Anbindung Website oder Teams/Slack",
      "DSGVO-konformes Hosting (EU)",
      "Testphase + Übergabe, 30 Tage Nachbesserung",
    ],
    excluded: ["Voice/Avatar", "Komplexe Backend-Anbindungen (Einzelangebot)"],
  },
  {
    id: "rag-knowledge-agent",
    name: "RAG / Knowledge-Agent",
    price: "ab 19.900 €",
    priceUnit: "einmalig",
    duration: "4–8 Wochen",
    audience: "Firmen mit verteiltem Wissen: Handbücher, Wikis, ERP-Notizen",
    teaser:
      "Interne Wissensbasis mit Quellenangabe: Antworten aus euren Dokumenten, Zugriffsrechte pro Rolle, Evaluations-Set gegen Halluzination.",
    includes: [
      "Datenaufbereitung & -bereinigung (Kern des Preises)",
      "Retrieval-Pipeline mit Quellenangaben",
      "Zugriffsrechte & Rollen",
      "Evaluations-Set gegen Halluzination",
      "Übergabe + Schulung, 60 Tage Nachbesserung",
    ],
    excluded: [
      "Migration ganzer DMS-Systeme (Einzelangebot)",
      "Laufende Content-Pflege (→ Betriebs-Retainer)",
    ],
  },
  {
    id: "multi-agent",
    name: "Multi-Agent-System",
    price: "ab 34.900 €",
    priceUnit: "einmalig",
    duration: "8–16 Wochen",
    audience: "Prozessübergreifende Automatisierung mit mehreren Agenten",
    teaser:
      "Mehrere Agenten, ein Prozess: von der Anfrage bis zum Abschluss — mit Human-in-the-Loop-Freigaben und stufenweiser Einführung.",
    includes: [
      "Prozessanalyse & Orchestrierungs-Design",
      "Agenten-Entwicklung (LangGraph oder Plattform)",
      "Human-in-the-Loop-Freigaben",
      "Monitoring & Evaluation",
      "Stufenweise Einführung, 90 Tage Nachbesserung",
    ],
    excluded: [
      "Systeme ohne Schnittstelle (Einzelangebot)",
      "Laufender Betrieb (→ Betriebs-Retainer)",
    ],
  },
  {
    id: "betriebs-retainer",
    name: "Betriebs-Retainer",
    price: "490–1.900 €",
    priceUnit: "/ Monat",
    duration: "laufend",
    audience: "Alle Kunden mit produktiven Systemen",
    teaser:
      "Monitoring, Updates, Fehlerbehebung und monatliches Review — damit euer System produktiv bleibt, nicht nur gebaut ist.",
    includes: [
      "Monitoring & Alarmierung",
      "LLM- und Tool-Updates",
      "Fehlerbehebung",
      "Monatliches Review mit Verbesserungsvorschlägen",
      "Weiterentwicklungs-Budget je Stufe",
    ],
    excluded: ["Große neue Funktionen (eigenes Angebot)"],
  },
];

export type ProcessStep = {
  nr: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
};

export const processSteps: ProcessStep[] = [
  {
    nr: "01",
    title: "KI-Check",
    duration: "30 Minuten",
    description:
      "Kostenloses Erstgespräch: Wir prüfen Datenlage, Prozesse und Compliance-Grundlagen — und sagen ehrlich, ob sich KI bei euch lohnt.",
    deliverables: ["Scorecard", "3 priorisierte Quick Wins", "Empfehlung"],
  },
  {
    nr: "02",
    title: "Audit & Roadmap",
    duration: "2–4 Wochen",
    description:
      "Belastbare Grundlage: Was lohnt sich, was kostet es, was ist erlaubt. Datenqualität ist meist der eigentliche Engpass — wir prüfen ihn zuerst.",
    deliverables: ["Audit-Bericht", "Budgetplan", "Priorisierte Roadmap"],
  },
  {
    nr: "03",
    title: "Build",
    duration: "je Paket",
    description:
      "Umsetzung in Etappen mit wöchentlichem Fortschritt. Jede Etappe endet mit einem Meilenstein — Abbruch jederzeit möglich, gezahlt wird nur Geliefertes.",
    deliverables: ["Lauffähiges System", "Dokumentation", "Einweisung"],
  },
  {
    nr: "04",
    title: "Betrieb",
    duration: "laufend",
    description:
      "Monitoring, Updates und Nachbesserung. Optional als Retainer — oder ihr übernehmt nach Übergabe selbst.",
    deliverables: ["Monatsreport", "Updates", "Weiterentwicklung"],
  },
];

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "Warum Festpreise statt Stundensatz?",
    a: "Planbarkeit auf beiden Seiten: Ihr wisst vor dem ersten Euro, was es kostet — wir tragen das Schätzrisiko. Bei unklarem Umfang machen wir vorab ein Audit, danach steht der Preis fest.",
  },
  {
    q: "Was ist nicht im Preis enthalten?",
    a: "Jedes Paket listet unter „Nicht enthalten“ transparent, was bewusst außen vor bleibt. Lizenzkosten externer Tools (z. B. n8n Cloud, Microsoft) zahlt ihr in der Regel direkt an den Anbieter.",
  },
  {
    q: "Wie schnell geht es?",
    a: "Start in der Regel innerhalb von zwei Wochen. Die Dauer steht bei jedem Paket: von 30 Minuten (KI-Check) bis 16 Wochen (Multi-Agent-System).",
  },
  {
    q: "Wie steht ihr zu DSGVO und EU AI Act?",
    a: "EU-Hosting ist Standard, Auftragsverarbeitung dokumentiert, Zugriffe rollenbasiert. Hochrisiko-Anwendungen im Sinne des AI Act setzen wir nicht um — das sagen wir offen.",
  },
  {
    q: "Welche Technik nutzt ihr?",
    a: "n8n für Workflow-Automation, LangGraph/LangSmith für Individualbauten, Microsoft Copilot Studio im M365-Umfeld. Kein Lock-in: Self-Hosting möglich, alles wird dokumentiert übergeben.",
  },
  {
    q: "Was passiert, wenn es nicht klappt?",
    a: "Jede Etappe endet mit einem Meilenstein. Passt etwas nicht, können wir an der Stelle stoppen — gezahlt wird nur, was geliefert und abgenommen wurde.",
  },
];

export type Referenz = {
  branche: string;
  paket: string;
  kennzahl: string;
  kennzahlLabel: string;
  ausgangslage: string;
  umsetzung: string;
  ergebnisse: string[];
  dauer: string;
};

// Ehrlichkeits-Regel: Junge Agentur. Die Fälle sind klar gekennzeichnete
// Beispielrechnungen (illustrativ) — Struktur, Vorgehen und Zahlenrahmen
// aus typischen Mittelstandsprojekten, keine echten Kundenprojekte.
export const referenzen: Referenz[] = [
  {
    branche: "Produktionsunternehmen, 120 Mitarbeitende",
    paket: "RAG / Knowledge-Agent",
    kennzahl: "–73 %",
    kennzahlLabel: "Suchzeit pro Tag und Kopf",
    ausgangslage:
      "Handbücher, Wikis und ERP-Notizen auf fünf Systeme verteilt — Antworten auf Fachfragen dauern Tage.",
    umsetzung:
      "Datenaufbereitung aus fünf Quellen, Retrieval-Pipeline mit Quellenangabe, Rollenrechte für Produktion und Vertrieb.",
    ergebnisse: [
      "Suchzeit von 45 auf 12 Minuten pro Tag und Kopf",
      "Auskunftsfähigkeit ohne Störung von Fachexperten",
    ],
    dauer: "5 Wochen",
  },
  {
    branche: "Handelsbüro, 25 Mitarbeitende",
    paket: "Workflow-Automation",
    kennzahl: "9 Std./Woche",
    kennzahlLabel: "manuelle Arbeit eingespart",
    ausgangslage:
      "Anfragen, Rechnungen und E-Mail-Sortierung manuell — drei Kollegen, neun Stunden pro Woche.",
    umsetzung:
      "Drei n8n-Workflows: Anfrage → CRM, Rechnung → Buchhaltung, E-Mail-Triage mit KI-Klassifikation.",
    ergebnisse: [
      "9 Stunden pro Woche eingespart",
      "ROI nach unter vier Monaten",
    ],
    dauer: "3 Wochen",
  },
  {
    branche: "Dienstleister, 60 Mitarbeitende",
    paket: "KI-Chatbot",
    kennzahl: "90 %",
    kennzahlLabel: "Anfragen automatisch beantwortet",
    ausgangslage:
      "Hotline mit 200 wiederkehrenden Fragen — Kunden warten, Team blockiert.",
    umsetzung:
      "Chatbot auf Website und Teams, Wissensbasis aus 200 FAQs, DSGVO-konformes EU-Hosting, Eskalationsregeln.",
    ergebnisse: [
      "90 % der Anfragen automatisch beantwortet",
      "Hotline-Kapazität für echte Fälle frei",
    ],
    dauer: "4 Wochen",
  },
];
