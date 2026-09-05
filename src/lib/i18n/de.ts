// Zentrale deutsche Texte der Website. Alle sichtbaren Texte laufen über
// diese Datei bzw. die englische Schwester en.ts — in Seiten und
// Komponenten wird nichts mehr hartkodiert. Locale-neutrale Daten
// (Preise, IDs, Branding) stehen in src/lib/site-data.ts.

export const de = {
  brand: {
    tagline: "KI-Implementierung für den Mittelstand",
    claim:
      "AI Agents, Workflows und Automatisierung für den Mittelstand — zum Festpreis, DSGVO-konform, produktiv statt Pilot.",
  },
  nav: [
    { href: "/leistungen", label: "Leistungen & Preise" },
    { href: "/prozess", label: "Prozess" },
    { href: "/referenzen", label: "Referenzen" },
    { href: "/ueber", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  header: { cta: "Kostenloser KI-Check" },
  theme: {
    toLight: "Hellmodus aktivieren",
    toDark: "Dunkelmodus aktivieren",
  },
  cta: { defaultLabel: "Kostenlosen KI-Check vereinbaren" },
  footer: {
    legal: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
      { href: "/widerruf", label: "Widerrufsbelehrung" },
      { href: "/agb", label: "AGB" },
      { href: "/kuendigung", label: "Vertrag kündigen" },
    ],
    cookieSettings: "Cookie-Einstellungen",
    rights: "Alle Preise inkl. MwSt.",
    aiNote: "Diese Website wurde mit KI-Unterstützung erstellt.",
  },
  home: {
    kicker: "KI-Implementierung · DACH",
    titleA: "KI für deinen Betrieb.",
    titleB: "Festpreis. Produktiv. Kein Hype.",
    ctaPrimary: "Kostenloser KI-Check",
    ctaSecondary: "Leistungen & Preise",
    guarantees: [
      "Festpreis & Planbarkeit",
      "DSGVO & AI Act im Blick",
      "EU-Hosting",
      "Dokumentiert übergeben — kein Lock-in",
    ],
    packagesHeading: "Drei Einstiege, ein Versprechen",
    packagesIntro:
      "Klarer Preis, klarer Umfang, klares Ergebnis — vor dem ersten Euro. Jedes Paket listet transparent, was drin ist und was bewusst nicht.",
    packagesLink: "Alle 8 Pakete ansehen →",
    processHeading: "Vom Check zum Betrieb",
    refsHeading: "Ergebnisse, keine Versprechen",
    refsIntro:
      "Drei typische Mittelstandskonstellationen als ehrlich gekennzeichnete Beispielrechnung — keine echten Kundenprojekte, aber der Zahlenrahmen, den solche Projekte liefern.",
    refsLink: "Alle Referenzen ansehen →",
    ctaTitle: "In 30 Minuten wissen, ob KI sich bei dir lohnt.",
    ctaText:
      "Kostenloser KI-Check: Scorecard, drei Quick Wins, ehrliche Empfehlung — auch wenn sie lautet: Lass es.",
  },
  packages: {
    "ki-check": {
      name: "KI-Check",
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
    "ki-workshop": {
      name: "KI-Workshop",
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
    },
    "ki-audit": {
      name: "KI-Audit",
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
    },
    "workflow-automation": {
      name: "Workflow-Automation",
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
    },
    "ki-chatbot": {
      name: "KI-Chatbot",
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
      excluded: [
        "Voice/Avatar",
        "Komplexe Backend-Anbindungen (Einzelangebot)",
      ],
    },
    "rag-knowledge-agent": {
      name: "RAG / Knowledge-Agent",
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
    "multi-agent": {
      name: "Multi-Agent-System",
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
    "betriebs-retainer": {
      name: "Betriebs-Retainer",
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
  },
  packagesPage: {
    title: "Leistungen & Preise",
    metaDescription:
      "Acht Festpreis-Pakete für KI-Implementierung: vom kostenlosen KI-Check über Workflow-Automation bis zum Multi-Agent-System.",
    intro:
      "Acht Pakete, klare Preise. Jedes Paket nennt, was drin ist — und was bewusst nicht. Was hier nicht passt, schätzen wir im kostenlosen KI-Check ehrlich ein.",
    bookHeading: "Direkt buchen",
    bookIntro:
      "Kartenzahlung über Stripe, Festpreis inkl. MwSt. Mit deiner ausdrücklichen Zustimmung beginnen wir vor Ablauf der Widerrufsfrist — die Terminabsprache folgt per E-Mail.",
    faqHeading: "Häufige Fragen",
    ctaTitle: "Unklar, welches Paket passt?",
    ctaText:
      "Der kostenlose KI-Check gibt dir eine ehrliche Empfehlung — inklusive der Option „Noch nicht“.",
  },
  faqs: [
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
  ],
  process: {
    title: "Vom Check zum Betrieb",
    metaDescription:
      "Vom kostenlosen KI-Check über Audit und Build bis zum Betrieb — vier Etappen, jede mit Meilenstein und Abbruchmöglichkeit.",
    intro:
      "Vier Etappen, jede mit konkretem Ergebnis. Nach jeder Etappe entscheidet ihr, ob es weitergeht — es gibt keinen Zwang und keine versteckten Folgekosten.",
    steps: [
      {
        title: "KI-Check",
        duration: "30 Minuten",
        description:
          "Kostenloses Erstgespräch: Wir prüfen Datenlage, Prozesse und Compliance-Grundlagen — und sagen ehrlich, ob sich KI bei euch lohnt.",
        deliverables: ["Scorecard", "3 priorisierte Quick Wins", "Empfehlung"],
      },
      {
        title: "Audit & Roadmap",
        duration: "2–4 Wochen",
        description:
          "Belastbare Grundlage: Was lohnt sich, was kostet es, was ist erlaubt. Datenqualität ist meist der eigentliche Engpass — wir prüfen ihn zuerst.",
        deliverables: ["Audit-Bericht", "Budgetplan", "Priorisierte Roadmap"],
      },
      {
        title: "Build",
        duration: "je Paket",
        description:
          "Umsetzung in Etappen mit wöchentlichem Fortschritt. Jede Etappe endet mit einem Meilenstein — Abbruch jederzeit möglich, gezahlt wird nur Geliefertes.",
        deliverables: ["Lauffähiges System", "Dokumentation", "Einweisung"],
      },
      {
        title: "Betrieb",
        duration: "laufend",
        description:
          "Monitoring, Updates und Nachbesserung. Optional als Retainer — oder ihr übernehmt nach Übergabe selbst.",
        deliverables: ["Monatsreport", "Updates", "Weiterentwicklung"],
      },
    ],
    ctaTitle: "Start ist die erste Etappe — und sie kostet nichts.",
    ctaText: "Der KI-Check dauert 30 Minuten. Danach weißt du, ob und womit es sich lohnt.",
  },
  references: {
    title: "Referenzen",
    metaDescription:
      "Beispiel-Projekte aus typischen Mittelstands-Konstellationen: Workflow-Automation, RAG-Wissensbasis, KI-Chatbot — mit messbaren Ergebnissen.",
    intro:
      "Messbare Ergebnisse zählen. Die folgenden Fälle zeigen Struktur, Vorgehen und Ergebnisrahmen typischer Projekte.",
    honestPrefix: "Ehrlich vorweg:",
    honestText:
      "Omnaut ist eine junge Agentur — diese Fälle sind Beispielrechnungen aus typischen Mittelstandskonstellationen, keine echten Kundenprojekte. Dein Projekt kann das erste echte Referenzstück werden.",
    caseLabels: {
      initial: "Ausgangslage:",
      implementation: "Umsetzung:",
    },
    cases: [
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
    ],
    ctaTitle: "Dein Projekt als erstes echtes Referenzstück.",
    ctaText: "Sprechen wir über deinen Use Case — im kostenlosen KI-Check, ohne Verpflichtung.",
  },
  about: {
    title: "Über uns",
    metaDescription:
      "Warum Omnaut: Festpreis statt Ticket-Uhr, Produktion statt Pilot, Übergabe statt Abhängigkeit — für Unternehmen ohne eigene KI-Abteilung.",
    intro:
      "Wir bauen KI für Unternehmen, die keine eigene KI-Abteilung haben: 10 bis 250 Mitarbeitende, klare Prozesse, echte Probleme. Unser Versprechen: Festpreis statt Ticket-Uhr, Produktion statt Pilot, Übergabe statt Abhängigkeit.",
    principlesHeading: "Vier Prinzipien",
    principles: [
      {
        title: "Festpreis statt Ticket",
        text: "Der Preis steht vor dem ersten Arbeitstag. Das Schätzrisiko tragen wir — nicht ihr.",
      },
      {
        title: "Produktion statt Piloten",
        text: "Ein Pilot, der nie produktiv wird, ist teurer als keiner. Wir bauen bis in den Betrieb.",
      },
      {
        title: "Befähigen statt Abhängigkeit",
        text: "Dokumentation und Einweisung stecken in jedem Paket. Ihr könnt jederzeit selbst weiter — müsst aber nicht.",
      },
      {
        title: "Ehrlichkeit statt Hype",
        text: "Wenn KI bei euch nichts bringt, sagen wir es. Unser wertvollstes Gut ist euer Vertrauen, nicht das nächste Projekt.",
      },
    ],
    techHeading: "Technik, die zum Mittelstand passt",
    tech: [
      {
        tool: "n8n",
        rolle: "Workflow-Automation mit Self-Hosting-Option — DSGVO-freundlich, ohne Lock-in.",
      },
      {
        tool: "LangGraph + LangSmith",
        rolle: "Individuelle Agenten mit Evaluation gegen Halluzination und dokumentierter Qualitätsmessung.",
      },
      {
        tool: "Microsoft Copilot Studio",
        rolle: "Agenten direkt im M365-Umfeld — dort, wo der Mittelstand schon arbeitet.",
      },
      {
        tool: "EU-Hosting",
        rolle: "Deutsche bzw. europäische Rechenzentren sind Standard, nicht Option.",
      },
    ],
    ctaTitle: "Lernt uns im kostenlosen KI-Check kennen.",
    ctaText: "30 Minuten, keine Verpflichtung, ehrliche Einschätzung — danach entscheidet ihr.",
  },
  contact: {
    title: "Kontakt",
    metaDescription:
      "Kostenlosen KI-Check vereinbaren oder direkt ein Paket anfragen — Antwort in der Regel innerhalb eines Werktags.",
    intro:
      "Für den kostenlosen KI-Check oder eine Paket-Anfrage: Formular ausfüllen oder direkt schreiben. Antwort in der Regel innerhalb eines Werktags.",
    emailLabel: "E-Mail:",
  },
  contactForm: {
    name: "Name *",
    namePlaceholder: "Vor- und Nachname",
    company: "Firma",
    companyPlaceholder: "Firmenname",
    email: "E-Mail *",
    emailPlaceholder: "name@firma.de",
    topic: "Thema",
    topicPlaceholder: "— Bitte wählen —",
    other: "Sonstiges",
    message: "Nachricht",
    messagePlaceholder: "Was wollt ihr automatisieren oder lösen?",
    submit: "Anfrage senden",
    note: "Die Anfrage öffnet dein E-Mail-Programm mit vorausgefüllter Nachricht. Deine Daten verwenden wir ausschließlich zur Beantwortung.",
    sentA:
      "Dein E-Mail-Programm öffnet sich. Falls nichts passiert, schreib direkt an",
    subject: "KI-Anfrage",
    general: "Allgemein",
    bodyName: "Name",
    bodyCompany: "Firma",
    bodyEmail: "E-Mail",
    bodyTopic: "Thema",
  },
  cancel: {
    title: "Vertrag kündigen",
    metaDescription:
      "Laufenden Vertrag (z. B. Betriebs-Retainer) online kündigen — einfach und formlos.",
    intro:
      "Hier kannst du deinen laufenden Vertrag (z. B. Betriebs-Retainer) kündigen. Die Kündigung öffnet dein E-Mail-Programm mit einer vorausgefüllten Nachricht an uns.",
    name: "Name *",
    namePlaceholder: "Vor- und Nachname",
    email: "E-Mail *",
    emailPlaceholder: "name@firma.de",
    contract: "Vertrag",
    contractPlaceholder: "z. B. Betriebs-Retainer oder Kundennummer",
    message: "Nachricht",
    messagePlaceholder: "Optional: Grund oder Hinweise",
    submit: "Kündigung senden",
    note: "Beim Absenden öffnet sich dein E-Mail-Programm. Die Kündigung wird wirksam, sobald sie uns per E-Mail zugeht.",
    sentA: "Dein E-Mail-Programm öffnet sich. Falls nichts passiert, schreib direkt an",
    subject: "Vertragskündigung",
    bodyName: "Name",
    bodyEmail: "E-Mail",
    bodyContract: "Vertrag",
    bodyMessage: "Nachricht",
  },
  cookie: {
    ariaLabel: "Cookie-Einstellungen",
    title: "Cookies & Datenschutz",
    text: "Wir verwenden technisch notwendige Cookies für den Checkout (Stripe) und zur Speicherung deiner Einwilligung. Optional: anonyme Besucherstatistik, um die Seite zu verbessern.",
    essentialTitle: "Notwendig",
    essentialText: "Checkout & Einwilligungsspeicherung. Immer aktiv.",
    statsTitle: "Statistik",
    statsText: "anonyme Besucherzahlen zur Verbesserung der Seite.",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    saveSelection: "Auswahl speichern",
    detailsIn: "Details in der",
    privacyLabel: "Datenschutzerklärung",
  },
  checkout: {
    secure: "Sichere Bezahlung",
    order: "Deine Bestellung",
    beginNote:
      "Beginn vor Ablauf der Widerrufsfrist — mit deiner ausdrücklichen Zustimmung",
    subtotal: "Zwischensumme",
    total: "Gesamt",
    vatWith: "inkl. 19% MwSt. ({vat})",
    vatPlain: "inkl. gesetzl. MwSt.",
    payIntro:
      "Nach dem Bestätigen öffnet Stripe die Zahlungsseite — dort bezahlst du per Karte, Apple Pay oder Google Pay. Wir speichern keine Kartendaten.",
    withdrawalA:
      "Ich stimme ausdrücklich zu, dass vor Ablauf der Widerrufsfrist mit der Ausführung begonnen wird. Mir ist bekannt, dass mein",
    withdrawalLink: "Widerrufsrecht",
    withdrawalB: "mit Beginn der Ausführung erlischt.",
    termsA: "Ich akzeptiere die",
    termsLink: "AGB",
    termsB: "und habe die",
    privacyLink: "Datenschutzerklärung",
    termsC: "gelesen.",
    orderButton: "Zahlungspflichtig bestellen",
    checkHint: "Bitte setze oben beide Häkchen, um zu bestellen.",
    totalIncl: "Gesamtbetrag {total} inkl. MwSt.",
    footerNote:
      "Zahlungen werden sicher über Stripe abgewickelt. Wir speichern keine Kartendaten.",
  },
  success: {
    successTitle: "Zahlung erfolgreich",
    processingTitle: "Zahlung wird bearbeitet",
    successText:
      "Danke für deinen Kauf von {product}. Deine Zahlungsbestätigung von Stripe ist per E-Mail unterwegs.",
    fallbackProduct: "deinem KI-Workshop",
    processingText:
      "Sobald die Zahlung bestätigt ist, erhältst du deine Bestätigung von Stripe per E-Mail.",
    back: "Zurück zur Startseite",
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Diese Adresse gibt es nicht — vielleicht wurde der Link geändert oder die Seite ist umgezogen.",
    back: "Zurück zur Startseite",
    toContact: "Zum Kontakt",
  },
  priceCard: {
    for: "Für:",
    notIncluded: "Nicht enthalten:",
    book: "Jetzt buchen",
    inquire: "Anfrage stellen",
    vatNote: "inkl. MwSt.",
  },
  legal: {
    back: "← Zurück zum Checkout",
    agb: {
      title: "Allgemeine Geschäftsbedingungen",
      metaTitle: "AGB",
      intro:
        "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die auf dieser Website angebotenen Leistungen von Omnaut (Max Gaube, Bonhoefferplatz 24, 01157 Dresden, kontakt@omnaut.de) gegenüber Verbrauchern und Unternehmern.",
      scopeH: "1. Geltungsbereich",
      scopeP:
        "Es gelten ausschließlich diese AGB. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, wir stimmen ihnen ausdrücklich schriftlich zu.",
      conclusionH: "2. Vertragsschluss",
      conclusionP:
        "Die Darstellung der Leistungen auf dieser Website stellt kein rechtlich bindendes Angebot dar. Mit Klick auf „Zahlungspflichtig bestellen“ und erfolgreicher Zahlung über Stripe kommt der Vertrag zustande. Du erhältst eine Bestätigung per E-Mail. Vertragssprache ist Deutsch.",
      pricesH: "3. Preise und Zahlung",
      pricesP:
        "Alle Preise verstehen sich inkl. der gesetzlichen Umsatzsteuer. Die Zahlung wird über Stripe abgewickelt.",
      serviceH: "4. Leistung / digitale Inhalte",
      serviceP:
        "Umfang und Dauer der Leistung ergeben sich aus der Leistungsbeschreibung des jeweils gebuchten Pakets. Digitale Inhalte werden nach Zahlungseingang bereitgestellt.",
      withdrawalH: "5. Widerrufsrecht",
      withdrawalP: "Es gilt die",
      withdrawalLink: "Widerrufsbelehrung",
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      metaTitle: "Datenschutzerklärung",
      intro:
        "Diese Erklärung informiert gemäß Art. 13 DSGVO über die Verarbeitung personenbezogener Daten beim Besuch dieser Website und bei der Nutzung der angebotenen Leistungen.",
      controllerH: "Verantwortlicher",
      controllerLines: [
        "Max Gaube",
        "Omnaut (Einzelunternehmen)",
        "Bonhoefferplatz 24, 01157 Dresden",
        "E-Mail: kontakt@omnaut.de",
      ],
      hostingH: "Hosting (Vercel)",
      hostingP:
        "Diese Website wird über Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet (Serverstandort EU, Region Frankfurt). Beim Aufruf der Seite verarbeitet Vercel in unserem Auftrag technische Zugriffsdaten (u. a. IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs) in Server-Logfiles. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb). Mit Vercel besteht ein Auftragsverarbeitungsvertrag; Vercel ist unter dem EU-U.S. Data Privacy Framework zertifiziert.",
      contactH: "Kontaktaufnahme",
      contactP:
        "Das Kontaktformular öffnet dein E-Mail-Programm mit einer vorausgefüllten Nachricht. Deine Angaben werden dabei nicht über unsere Server geleitet; verarbeitet werden sie erst, wenn du die E-Mail absendest und sie uns erreicht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung/Vertrag) bzw. lit. f DSGVO (Bearbeitung deiner Anfrage). Wir löschen die Daten, sobald deine Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      stripeH: "Zahlungsabwicklung über Stripe",
      stripeP:
        "Für die Zahlungsabwicklung nutzen wir Stripe (Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland). Bei einer Zahlung werden die dafür erforderlichen Daten (u. a. Zahlungsmittel, Betrag, Transaktionsdaten) direkt über die von Stripe bereitgestellte Checkout-Seite (Payment Link) an Stripe übermittelt und dort verarbeitet — die Kartendaten erreichen unsere Server nicht. Dabei kann es zu einer Übermittlung in die USA kommen; Stripe ist unter dem EU-U.S. Data Privacy Framework zertifiziert. Auf den Bezahlseiten setzt Stripe technisch notwendige Cookies (z. B. zur Betrugsprävention und zur Sitzungssteuerung). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Vertrags). Einzelheiten in der Datenschutzerklärung von Stripe: https://stripe.com/de/privacy.",
      webhookH: "Zahlungsstatus (Webhook)",
      webhookP:
        "Zur Abwicklung deiner Bestellung verarbeitet Stripe in unserem Auftrag Zahlungsstatus-Ereignisse (z. B. „Zahlung erfolgreich“). Verarbeitet werden dabei Transaktionsdaten wie Zahlungsbetrag, Zeitpunkt und Status. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
      resendH: "E-Mail-Versand (Resend)",
      resendP:
        "Für Transaktions-E-Mails (Bestellbestätigung nach Zahlungseingang) nutzen wir Resend (Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA) als Versanddienstleister. Verarbeitet werden dabei die bei der Zahlung angegebene E-Mail-Adresse sowie Bestelldaten (Produkt, Betrag). Dabei kann es zu einer Übermittlung in die USA kommen; die Übermittlung erfolgt auf Grundlage von EU-Standardvertragsklauseln, mit Resend besteht ein Auftragsverarbeitungsvertrag. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Vertrags).",
      cookiesH: "Cookies & Einwilligung",
      cookiesP:
        "Beim ersten Besuch fragt ein Cookie-Banner deine Einwilligung ab.",
      cookiesEssential: {
        strong: "Technisch notwendige Cookies",
        rest: "werden im Rahmen der Zahlungsabwicklung durch Stripe gesetzt (siehe oben) sowie zur Speicherung deiner Cookie-Einwilligung selbst („omnaut-consent“, Laufzeit 180 Tage). Diese sind für den Betrieb erforderlich und nicht abwählbar (Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TTDSG).",
      },
      cookiesStats: {
        strong: "Optionale Statistik-Cookies",
        rest: "(anonyme Besucherstatistik zur Verbesserung der Website) setzen wir nur mit deiner Einwilligung (§ 25 Abs. 1 TTDSG, Art. 6 Abs. 1 lit. a DSGVO). Du kannst deine Wahl jederzeit über den Link „Cookie-Einstellungen“ im Footer ändern oder widerrufen.",
      },
      retentionH: "Speicherdauer",
      retentionP:
        "Personenbezogene Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten (insbesondere handels- und steuerrechtliche, § 147 AO, § 257 HGB) entgegenstehen.",
      rightsH: "Deine Rechte",
      rightsP:
        "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung. Zur Ausübung genügt eine E-Mail an kontakt@omnaut.de. Zudem hast du ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde (zuständig für uns: der Sächsische Datenschutzbeauftragte).",
    },
    impressum: {
      title: "Impressum",
      metaTitle: "Impressum",
      ddg: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).",
      providerH: "Anbieter",
      providerLines: [
        "Max Gaube",
        "Omnaut (Einzelunternehmen)",
        "Bonhoefferplatz 24",
        "01157 Dresden",
        "Deutschland",
      ],
      contactH: "Kontakt",
      emailLabel: "E-Mail:",
      responsibleH: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      responsibleP: "Max Gaube, Anschrift wie oben",
      disputeH: "EU-Streitschlichtung",
      disputeA: "Plattform der EU zur Online-Streitbeilegung:",
      disputeB:
        "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    widerruf: {
      title: "Widerrufsbelehrung",
      metaTitle: "Widerrufsbelehrung",
      rightH: "Widerrufsrecht",
      rightP1:
        "Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.",
      rightP2:
        "Um dein Widerrufsrecht auszuüben, musst du uns — Max Gaube, Omnaut, Bonhoefferplatz 24, 01157 Dresden, kontakt@omnaut.de — mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür das Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.",
      rightP3:
        "Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.",
      expiryH: "Erlöschen des Widerrufsrechts bei digitalen Inhalten",
      expiryP:
        "Bei einem Vertrag über die Lieferung von nicht auf einem körperlichen Datenträger befindlichen digitalen Inhalten erlischt das Widerrufsrecht, wenn du ausdrücklich zugestimmt hast, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen wird, und du deine Kenntnis davon bestätigt hast, dass du durch deine Zustimmung mit Beginn der Ausführung das Widerrufsrecht verlierst (§ 356 Abs. 5 BGB). Diese Zustimmung holen wir im Checkout per Kontrollkästchen ein.",
      consequencesH: "Folgen des Widerrufs",
      consequencesP:
        "Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.",
    },
  },
};
