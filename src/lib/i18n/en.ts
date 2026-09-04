// Zentrale englische Texte der Website — Übersetzung von de.ts.
// Struktur identisch zu de.ts (via `satisfies typeof de` abgesichert).

import type { de } from "./de";

export const en = {
  brand: {
    tagline: "AI implementation for mid-sized businesses",
    claim:
      "AI agents, workflows, and automation for mid-sized businesses — at a fixed price, GDPR-compliant, production-ready instead of pilot.",
  },
  nav: [
    { href: "/leistungen", label: "Services & Pricing" },
    { href: "/prozess", label: "Process" },
    { href: "/referenzen", label: "Case Studies" },
    { href: "/ueber", label: "About Us" },
    { href: "/kontakt", label: "Contact" },
  ],
  header: { cta: "Free AI Check" },
  theme: {
    toLight: "Activate light mode",
    toDark: "Activate dark mode",
  },
  cta: { defaultLabel: "Book your free AI Check" },
  footer: {
    legal: [
      { href: "/impressum", label: "Legal Notice" },
      { href: "/datenschutz", label: "Privacy Policy" },
      { href: "/widerruf", label: "Withdrawal Policy" },
      { href: "/agb", label: "Terms & Conditions" },
    ],
    cookieSettings: "Cookie Settings",
    rights: "All prices include VAT.",
    aiNote: "This website was created with AI assistance.",
  },
  home: {
    kicker: "AI Implementation · DACH",
    titleA: "AI for your business.",
    titleB: "Fixed price. Production-ready. No hype.",
    ctaPrimary: "Free AI Check",
    ctaSecondary: "Services & Pricing",
    guarantees: [
      "Fixed price & predictability",
      "GDPR & EU AI Act covered",
      "EU hosting",
      "Documented handover — no lock-in",
    ],
    packagesHeading: "Three entry points, one promise",
    packagesIntro:
      "Clear price, clear scope, clear outcome — before the first euro. Every package transparently lists what's included and what's deliberately not.",
    packagesLink: "See all 8 packages →",
    processHeading: "From check to operations",
    refsHeading: "Results, not promises",
    refsIntro:
      "Three typical mid-market scenarios as clearly labeled sample calculations — not real client projects, but the numbers these projects deliver.",
    refsLink: "See all case studies →",
    ctaTitle: "Know in 30 minutes whether AI pays off for you.",
    ctaText:
      "Free AI Check: scorecard, three quick wins, an honest recommendation — even when it says: Don't bother.",
  },
  packages: {
    "ki-check": {
      name: "AI Check",
      priceUnit: "free",
      duration: "30 minutes",
      audience: "Owners and managing directors, 10–250 employees",
      teaser:
        "Scorecard covering data, processes, and compliance — plus three prioritized quick wins. Honest, even when the answer is: Not yet.",
      includes: [
        "30-minute initial call (video)",
        "Quick scorecard: data, processes, compliance",
        "Three prioritized quick wins",
        "Recommendation: start — with what — or wait",
      ],
      excluded: ["Implementation", "Contracts", "Obligations"],
    },
    "ki-workshop": {
      name: "AI Workshop",
      priceUnit: "one-time",
      duration: "1 day",
      audience: "Teams that want clarity before investing",
      teaser:
        "Find use cases in your real processes, estimate effort and ROI, and leave with a prioritized roadmap.",
      includes: [
        "Full-day workshop, on-site or remote (up to 12 people)",
        "Use-case identification on real processes",
        "Effort and ROI estimate per use case",
        "Prioritized roadmap",
        "Follow-up document",
      ],
      excluded: ["Implementation", "License costs", "Travel expenses (at cost)"],
    },
    "ki-audit": {
      name: "AI Audit",
      priceUnit: "one-time",
      duration: "2–4 weeks",
      audience: "Companies before their first major AI investment",
      teaser:
        "Data, processes, legal: rigorously reviewed. The result is a report with budget plan and roadmap — not sales slides.",
      includes: [
        "Screening of 2–3 core processes",
        "Data quality check (the real bottleneck)",
        "GDPR / AI Act classification",
        "Technology recommendation: build vs. platform",
        "Roadmap with budget planning",
      ],
      excluded: ["Implementation", "External certifications"],
    },
    "workflow-automation": {
      name: "Workflow Automation",
      priceUnit: "one-time",
      duration: "2–4 weeks",
      audience:
        "Teams with manual routine work: inquiries, invoices, email overload",
      teaser:
        "Three processes automated on n8n, GDPR-compliant hosting, connected to your tools — with documentation and training.",
      includes: [
        "3 workflows (e.g. inquiry → CRM, invoice → accounting, email triage)",
        "n8n setup with EU hosting",
        "Integration of existing tools",
        "Documentation + training",
        "30 days of refinements",
      ],
      excluded: [
        "Additional workflows (€1,900 each)",
        "Systems without an interface (individual quote)",
      ],
    },
    "ki-chatbot": {
      name: "AI Chatbot",
      priceUnit: "one-time",
      duration: "3–6 weeks",
      audience: "Companies with recurring customer questions",
      teaser:
        "GDPR-compliant chatbot based on your content — for your website or Teams/Slack. Including knowledge base setup and a test phase.",
      includes: [
        "Concept & dialog design",
        "Knowledge base built from your documents",
        "Integration with website or Teams/Slack",
        "GDPR-compliant hosting (EU)",
        "Test phase + handover, 30 days of refinements",
      ],
      excluded: [
        "Voice/avatar",
        "Complex backend integrations (individual quote)",
      ],
    },
    "rag-knowledge-agent": {
      name: "RAG / Knowledge Agent",
      priceUnit: "one-time",
      duration: "4–8 weeks",
      audience:
        "Companies with distributed knowledge: manuals, wikis, ERP notes",
      teaser:
        "Internal knowledge base with source citations: answers from your documents, role-based access, evaluation set against hallucination.",
      includes: [
        "Data preparation & cleaning (core of the price)",
        "Retrieval pipeline with source citations",
        "Access rights & roles",
        "Evaluation set against hallucination",
        "Handover + training, 60 days of refinements",
      ],
      excluded: [
        "Migration of entire DMS systems (individual quote)",
        "Ongoing content maintenance (→ Operations Retainer)",
      ],
    },
    "multi-agent": {
      name: "Multi-Agent System",
      priceUnit: "one-time",
      duration: "8–16 weeks",
      audience: "Cross-process automation with multiple agents",
      teaser:
        "Multiple agents, one process: from inquiry to close — with human-in-the-loop approvals and staged rollout.",
      includes: [
        "Process analysis & orchestration design",
        "Agent development (LangGraph or platform)",
        "Human-in-the-loop approvals",
        "Monitoring & evaluation",
        "Staged rollout, 90 days of refinements",
      ],
      excluded: [
        "Systems without an interface (individual quote)",
        "Ongoing operations (→ Operations Retainer)",
      ],
    },
    "betriebs-retainer": {
      name: "Operations Retainer",
      priceUnit: "/ month",
      duration: "ongoing",
      audience: "All customers with production systems",
      teaser:
        "Monitoring, updates, bug fixes, and a monthly review — so your system stays productive, not just built.",
      includes: [
        "Monitoring & alerting",
        "LLM and tool updates",
        "Bug fixes",
        "Monthly review with improvement suggestions",
        "Development budget per tier",
      ],
      excluded: ["Large new features (separate quote)"],
    },
  },
  packagesPage: {
    title: "Services & Pricing",
    metaDescription:
      "Eight fixed-price packages for AI implementation: from the free AI Check to workflow automation and multi-agent systems.",
    intro:
      "Eight packages, clear prices. Each package states what's included — and what's deliberately not. Anything that doesn't fit gets an honest assessment in the free AI Check.",
    bookHeading: "Book directly",
    bookIntro:
      "Card payment via Stripe, fixed price incl. VAT. With your explicit consent, we begin before the withdrawal period expires — scheduling follows by email.",
    faqHeading: "Frequently asked questions",
    ctaTitle: "Not sure which package fits?",
    ctaText:
      "The free AI Check gives you an honest recommendation — including the option \"Not yet\".",
  },
  faqs: [
    {
      q: "Why fixed prices instead of hourly rates?",
      a: "Predictability on both sides: you know the cost before the first euro — we carry the estimation risk. When the scope is unclear, we run an audit first; after that, the price is set.",
    },
    {
      q: "What is not included in the price?",
      a: "Each package transparently lists what is deliberately excluded under \"Not included\". License costs for external tools (e.g. n8n Cloud, Microsoft) are usually paid by you directly to the provider.",
    },
    {
      q: "How fast does it go?",
      a: "We typically start within two weeks. The duration is stated on every package: from 30 minutes (AI Check) to 16 weeks (Multi-Agent System).",
    },
    {
      q: "Where do you stand on GDPR and the EU AI Act?",
      a: "EU hosting is standard, data processing agreements are documented, access is role-based. We do not implement high-risk applications under the AI Act — and we say so openly.",
    },
    {
      q: "Which technology do you use?",
      a: "n8n for workflow automation, LangGraph/LangSmith for custom builds, Microsoft Copilot Studio in M365 environments. No lock-in: self-hosting is possible, everything is handed over documented.",
    },
    {
      q: "What happens if it doesn't work out?",
      a: "Every stage ends with a milestone. If something doesn't fit, we can stop right there — you only pay for what was delivered and accepted.",
    },
  ],
  process: {
    title: "From check to operations",
    metaDescription:
      "From the free AI Check through audit and build to operations — four stages, each with a milestone and the option to stop.",
    intro:
      "Four stages, each with a concrete outcome. After every stage you decide whether to continue — no pressure and no hidden follow-up costs.",
    steps: [
      {
        title: "AI Check",
        duration: "30 minutes",
        description:
          "Free initial call: we review your data, processes, and compliance basics — and tell you honestly whether AI is worth it for you.",
        deliverables: ["Scorecard", "3 prioritized quick wins", "Recommendation"],
      },
      {
        title: "Audit & Roadmap",
        duration: "2–4 weeks",
        description:
          "A solid foundation: what pays off, what it costs, what is allowed. Data quality is usually the real bottleneck — we check it first.",
        deliverables: ["Audit report", "Budget plan", "Prioritized roadmap"],
      },
      {
        title: "Build",
        duration: "per package",
        description:
          "Implementation in stages with weekly progress. Every stage ends with a milestone — you can stop at any time and only pay for what was delivered.",
        deliverables: ["Working system", "Documentation", "Training"],
      },
      {
        title: "Operations",
        duration: "ongoing",
        description:
          "Monitoring, updates, and refinements. Optionally as a retainer — or you take over after handover.",
        deliverables: ["Monthly report", "Updates", "Further development"],
      },
    ],
    ctaTitle: "The first stage is the start — and it costs nothing.",
    ctaText:
      "The AI Check takes 30 minutes. After that, you know whether — and with what — it's worth it.",
  },
  references: {
    title: "Case Studies",
    metaDescription:
      "Sample projects from typical mid-market scenarios: workflow automation, RAG knowledge base, AI chatbot — with measurable results.",
    intro:
      "Measurable results count. The following cases show the structure, approach, and outcome range of typical projects.",
    honestPrefix: "Honest upfront:",
    honestText:
      "Omnaut is a young agency — these cases are sample calculations from typical mid-market scenarios, not real client projects. Your project can be the first real reference.",
    caseLabels: {
      initial: "Starting point:",
      implementation: "Implementation:",
    },
    cases: [
      {
        branche: "Manufacturing company, 120 employees",
        paket: "RAG / Knowledge Agent",
        kennzahl: "–73 %",
        kennzahlLabel: "search time per person per day",
        ausgangslage:
          "Manuals, wikis, and ERP notes spread across five systems — answers to technical questions took days.",
        umsetzung:
          "Data preparation from five sources, retrieval pipeline with source citations, role-based access for production and sales.",
        ergebnisse: [
          "Search time cut from 45 to 12 minutes per person per day",
          "Answers available without interrupting subject-matter experts",
        ],
        dauer: "5 weeks",
      },
      {
        branche: "Trading office, 25 employees",
        paket: "Workflow Automation",
        kennzahl: "9 hrs/week",
        kennzahlLabel: "manual work saved",
        ausgangslage:
          "Inquiries, invoices, and email sorting done by hand — three colleagues, nine hours per week.",
        umsetzung:
          "Three n8n workflows: inquiry → CRM, invoice → accounting, email triage with AI classification.",
        ergebnisse: [
          "9 hours per week saved",
          "ROI in under four months",
        ],
        dauer: "3 weeks",
      },
      {
        branche: "Service provider, 60 employees",
        paket: "AI Chatbot",
        kennzahl: "90 %",
        kennzahlLabel: "inquiries answered automatically",
        ausgangslage:
          "Hotline with 200 recurring questions — customers waiting, team blocked.",
        umsetzung:
          "Chatbot on website and Teams, knowledge base from 200 FAQs, GDPR-compliant EU hosting, escalation rules.",
        ergebnisse: [
          "90 % of inquiries answered automatically",
          "Hotline capacity freed up for real cases",
        ],
        dauer: "4 weeks",
      },
    ],
    ctaTitle: "Your project as the first real reference.",
    ctaText:
      "Let's talk about your use case — in the free AI Check, with no obligation.",
  },
  about: {
    title: "About Us",
    metaDescription:
      "Why Omnaut: fixed price instead of time tracking, production instead of pilots, handover instead of dependency — for companies without their own AI team.",
    intro:
      "We build AI for companies that don't have their own AI department: 10 to 250 employees, clear processes, real problems. Our promise: fixed price instead of time tracking, production instead of pilots, handover instead of dependency.",
    principlesHeading: "Four principles",
    principles: [
      {
        title: "Fixed price instead of tickets",
        text: "The price is set before the first day of work. We carry the estimation risk — not you.",
      },
      {
        title: "Production instead of pilots",
        text: "A pilot that never goes live costs more than none. We build through to operations.",
      },
      {
        title: "Enablement instead of dependency",
        text: "Documentation and training are included in every package. You can always continue on your own — but you don't have to.",
      },
      {
        title: "Honesty instead of hype",
        text: "If AI doesn't pay off for you, we say so. Your trust is our most valuable asset — not the next project.",
      },
    ],
    techHeading: "Technology that fits the mid-market",
    tech: [
      {
        tool: "n8n",
        rolle: "Workflow automation with a self-hosting option — GDPR-friendly, no lock-in.",
      },
      {
        tool: "LangGraph + LangSmith",
        rolle: "Custom agents with evaluation against hallucination and documented quality measurement.",
      },
      {
        tool: "Microsoft Copilot Studio",
        rolle: "Agents directly in the M365 environment — where the mid-market already works.",
      },
      {
        tool: "EU Hosting",
        rolle: "German or European data centers are the standard, not an option.",
      },
    ],
    ctaTitle: "Get to know us in the free AI Check.",
    ctaText:
      "30 minutes, no obligation, an honest assessment — after that, you decide.",
  },
  contact: {
    title: "Contact",
    metaDescription:
      "Book a free AI Check or request a package directly — usually answered within one business day.",
    intro:
      "For the free AI Check or a package inquiry: fill in the form or write to us directly. We usually answer within one business day.",
    emailLabel: "Email:",
  },
  contactForm: {
    name: "Name *",
    namePlaceholder: "First and last name",
    company: "Company",
    companyPlaceholder: "Company name",
    email: "Email *",
    emailPlaceholder: "name@company.com",
    topic: "Topic",
    topicPlaceholder: "— Please choose —",
    other: "Other",
    message: "Message",
    messagePlaceholder: "What would you like to automate or solve?",
    submit: "Send inquiry",
    note: "Submitting opens your email client with a pre-filled message. We use your data solely to answer your inquiry.",
    sentA: "Your email client is opening. If nothing happens, write directly to",
    subject: "AI Inquiry",
    general: "General",
    bodyName: "Name",
    bodyCompany: "Company",
    bodyEmail: "Email",
    bodyTopic: "Topic",
  },
  cookie: {
    ariaLabel: "Cookie Settings",
    title: "Cookies & Privacy",
    text: "We use technically necessary cookies for checkout (Stripe) and to store your consent. Optional: anonymous visitor statistics to improve the site.",
    essentialTitle: "Essential",
    essentialText: "Checkout & consent storage. Always active.",
    statsTitle: "Statistics",
    statsText: "anonymous visitor numbers to improve the site.",
    acceptAll: "Accept all",
    saveSelection: "Save selection",
    detailsIn: "Details in the",
    privacyLabel: "Privacy Policy",
  },
  checkout: {
    secure: "Secure payment",
    order: "Your order",
    beginNote:
      "Start before the withdrawal period expires — with your explicit consent",
    subtotal: "Subtotal",
    total: "Total",
    vatWith: "incl. 19% VAT ({vat})",
    vatPlain: "incl. statutory VAT",
    payIntro:
      "After confirming, Stripe opens the payment page — pay by card, Apple Pay, or Google Pay. We never store card data.",
    withdrawalA:
      "I explicitly agree that execution begins before the withdrawal period expires. I understand that my",
    withdrawalLink: "right of withdrawal",
    withdrawalB: "expires once execution begins.",
    termsA: "I accept the",
    termsLink: "Terms & Conditions",
    termsB: "and have read the",
    privacyLink: "Privacy Policy",
    termsC: ".",
    orderButton: "Place binding order",
    checkHint: "Please tick both boxes above to place your order.",
    totalIncl: "Total {total} incl. VAT",
    footerNote:
      "Payments are processed securely via Stripe. We never store card data.",
  },
  success: {
    successTitle: "Payment successful",
    processingTitle: "Payment is being processed",
    successText:
      "Thank you for your purchase of {product}. Your Stripe payment receipt is on its way by email.",
    fallbackProduct: "your AI Workshop",
    processingText:
      "As soon as your payment is confirmed, you'll receive your Stripe confirmation by email.",
    back: "Back to the homepage",
  },
  notFound: {
    title: "Page not found",
    text: "This address doesn't exist — the link may have changed or the page may have moved.",
    back: "Back to the homepage",
    toContact: "Go to contact",
  },
  priceCard: {
    for: "For:",
    notIncluded: "Not included:",
    book: "Book now",
    inquire: "Request now",
  },
  legal: {
    back: "← Back to checkout",
    placeholderStrong: "⚠️ Placeholder.",
    placeholderText:
      "This content is not legally valid text. Replace it with a legal text generator (e.g. eRecht24, IT-Recht-Kanzlei) or a lawyer's review before going live.",
    agb: {
      title: "General Terms and Conditions",
      metaTitle: "Terms & Conditions",
      intro:
        "These General Terms and Conditions apply to all contracts for the services offered on this website by Omnaut (Max Gaube, Bonhoefferplatz 24, 01157 Dresden, kontakt@omnaut.de) with consumers and businesses.",
      scopeH: "1. Scope",
      scopeP:
        "Only these Terms and Conditions apply. Deviating terms of the customer are not accepted unless we expressly agree to them in writing.",
      conclusionH: "2. Conclusion of Contract",
      conclusionP:
        "The presentation of services on this website does not constitute a legally binding offer. The contract is concluded by clicking \"Place binding order\" and completing payment via Stripe. You will receive confirmation by email. The contract language is German.",
      pricesH: "3. Prices and Payment",
      pricesP:
        "All prices include statutory VAT. Payment is processed via Stripe.",
      serviceH: "4. Services / Digital Content",
      serviceP:
        "The scope and duration of the service are defined by the service description of the booked package. Digital content is provided after payment is received.",
      withdrawalH: "5. Right of Withdrawal",
      withdrawalP: "The",
      withdrawalLink: "withdrawal policy",
      note: "Note: Before selling complex project services, a legal review of these terms is recommended.",
    },
    datenschutz: {
      title: "Privacy Policy",
      metaTitle: "Privacy Policy",
      intro:
        "This policy informs you in accordance with Art. 13 GDPR about the processing of personal data when visiting this website and using the services offered.",
      controllerH: "Controller",
      controllerLines: [
        "Max Gaube",
        "Omnaut (sole proprietorship)",
        "Bonhoefferplatz 24, 01157 Dresden",
        "Email: kontakt@omnaut.de",
      ],
      hostingH: "Hosting (Vercel)",
      hostingP:
        "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (EU server location, Frankfurt region). When the site is accessed, Vercel processes technical access data on our behalf (including IP address, browser type, date and time of access) in server log files. Processing is based on Art. 6(1)(f) GDPR (legitimate interest in secure and stable operation). A data processing agreement exists with Vercel; Vercel is certified under the EU-U.S. Data Privacy Framework.",
      contactH: "Contact",
      contactP:
        "The contact form opens your email client with a pre-filled message. Your details are not routed through our servers; they are processed only when you send the email and it reaches us. The legal basis is Art. 6(1)(b) GDPR (contract initiation) or Art. 6(1)(f) GDPR (handling your inquiry). We delete the data as soon as your inquiry has been fully handled and no statutory retention obligations apply.",
      stripeH: "Payment Processing via Stripe",
      stripeP:
        "For payment processing we use Stripe (Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Ireland). When you pay, the necessary data (including payment method, amount, transaction data) is transmitted directly to Stripe via Stripe's hosted checkout page (Payment Link) and processed there — card data never reaches our servers. Data may be transferred to the USA; Stripe is certified under the EU-U.S. Data Privacy Framework. On the payment pages, Stripe sets technically necessary cookies (e.g. for fraud prevention and session management). The legal basis is Art. 6(1)(b) GDPR (performance of contract). Details in Stripe's privacy policy: https://stripe.com/de/privacy.",
      webhookH: "Payment Status (Webhook)",
      webhookP:
        "To process your order, Stripe processes payment status events (e.g. \"Payment successful\") on our behalf. This involves transaction data such as payment amount, time, and status. The legal basis is Art. 6(1)(b) GDPR.",
      resendH: "Email Delivery (Resend)",
      resendP:
        "For transactional emails (order confirmation after payment) we use Resend (Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA) as delivery provider. This involves processing the email address provided at payment as well as order data (product, amount). Data may be transferred to the USA; the transfer is based on EU Standard Contractual Clauses, and a data processing agreement exists with Resend. The legal basis is Art. 6(1)(b) GDPR (performance of contract).",
      cookiesH: "Cookies & Consent",
      cookiesP:
        "On your first visit, a cookie banner asks for your consent.",
      cookiesEssential: {
        strong: "Technically necessary cookies",
        rest: "are set by Stripe as part of payment processing (see above) as well as to store your cookie consent itself (\"omnaut-consent\", 180-day lifetime). These are required for operation and cannot be deselected (legal basis: § 25(2) No. 2 TTDSG).",
      },
      cookiesStats: {
        strong: "Optional statistics cookies",
        rest: "(anonymous visitor statistics to improve the website) are set only with your consent (§ 25(1) TTDSG, Art. 6(1)(a) GDPR). You can change or withdraw your choice at any time via the \"Cookie Settings\" link in the footer.",
      },
      retentionH: "Storage Duration",
      retentionP:
        "Personal data is deleted as soon as the purpose of processing ceases and no statutory retention obligations (in particular commercial and tax law, § 147 AO, § 257 HGB) apply.",
      rightsH: "Your Rights",
      rightsP:
        "You have the right to access, rectification, erasure, restriction of processing, data portability, and objection to processing. An email to kontakt@omnaut.de is sufficient to exercise these rights. You also have the right to lodge a complaint with a data protection supervisory authority (responsible for us: the Saxon Data Protection Commissioner).",
    },
    impressum: {
      title: "Legal Notice (Impressum)",
      metaTitle: "Legal Notice",
      ddg: "Information pursuant to § 5 DDG (Digital Services Act).",
      providerH: "Provider",
      providerLines: [
        "Max Gaube",
        "Omnaut (sole proprietorship)",
        "Bonhoefferplatz 24",
        "01157 Dresden",
        "Germany",
      ],
      contactH: "Contact",
      emailLabel: "Email:",
      responsibleH: "Responsible for content pursuant to § 18(2) MStV",
      responsibleP: "Max Gaube, address as above",
      disputeH: "EU Dispute Resolution",
      disputeA: "EU platform for online dispute resolution:",
      disputeB:
        "We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
    },
    widerruf: {
      title: "Withdrawal Policy",
      metaTitle: "Withdrawal Policy",
      rightH: "Right of Withdrawal",
      rightP1:
        "You have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period is fourteen days from the day the contract is concluded.",
      rightP2:
        "To exercise your right of withdrawal, you must inform us — Max Gaube, Omnaut, Bonhoefferplatz 24, 01157 Dresden, kontakt@omnaut.de — of your decision to withdraw from this contract by means of an unequivocal statement (e.g. a letter sent by post or an email). You may use the model withdrawal form, but it is not mandatory.",
      rightP3:
        "To meet the withdrawal deadline, it is sufficient that you send the notice of exercising your right of withdrawal before the withdrawal period expires.",
      expiryH: "Expiry of the Right of Withdrawal for Digital Content",
      expiryP:
        "For a contract for the supply of digital content not on a tangible medium, the right of withdrawal expires if you have expressly agreed that performance of the contract begins before the withdrawal period expires, and you have confirmed your knowledge that you lose your right of withdrawal by consenting to the start of performance (§ 356(5) BGB). We obtain this consent at checkout via checkbox.",
      consequencesH: "Effects of Withdrawal",
      consequencesP:
        "If you withdraw from this contract, we must reimburse all payments we have received from you without undue delay and no later than fourteen days from the day we receive notice of your withdrawal. We use the same payment method you used for the original transaction, unless expressly agreed otherwise with you; in no case will you be charged fees for this reimbursement.",
    },
  },
} satisfies typeof de;
