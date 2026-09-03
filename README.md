# Omnaut — Landingpage & Checkout

Next.js (App Router) Landingpage für Omnaut: KI-Implementierung für den
Mittelstand. Enthält Festpreis-Pakete, Stripe-Checkout (PaymentElement) und
einen signatur-verifizierten Webhook.

## Entwicklung

```bash
npm install
npm run dev        # nur localhost (127.0.0.1), Port via -p <port>
```

## Produktion

```bash
npm run build
npm start          # Port via PORT=<port>
```

## Deployment auf Vercel

1. Repo zu GitHub pushen und in Vercel importieren (Framework: Next.js, Root: Repo-Root).
2. `vercel.json` pinnt die Region auf `fra1` (EU-Hosting).
3. Domain `omnaut.de` in Vercel verbinden (TLS automatisch).
4. Umgebungsvariablen in Vercel setzen (Project → Settings → Environment Variables):

| Variable | Wert | Woher |
|---|---|---|
| `STRIPE_SECRET_KEY` | `sk_...` (Test) bzw. `rk_live_...` (Live, restricted) | Stripe Dashboard → API Keys |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_...` | Stripe Dashboard → API Keys |
| `STRIPE_PRICE_ID` | `price_...` | Stripe Dashboard → Produktkatalog |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` | Stripe Dashboard → Webhooks → Signing Secret |

5. Webhook in Stripe registrieren:
   - URL: `https://www.omnaut.de/api/webhook`
   - Events: `payment_intent.succeeded`, `payment_intent.payment_failed`

## Sicherheit

- CSP/Security-Header in `next.config.ts` (Stripe-Domains enthalten).
- `/api/checkout`: Rate-Limit (20/min/IP), Betrag serverseitig aus Stripe-Price,
  Idempotenz via `checkoutId`.
- `/api/webhook`: Signatur-Verifikation (`constructEvent`) + Event-Dedup.
- `/api/health`: Uptime-Check.
- Pre-Commit-Secret-Scan: `.githooks/pre-commit` (gitleaks optional, grep-Fallback).
  Aktiviert via `git config core.hooksPath .githooks`.
- Audit-Reports: `.gstack/security-reports/` (gitignored).

## Stripe-Testkarten

- Erfolg: `4242 4242 4242 4242`, beliebiges Ablaufdatum, beliebige CVC.
- 3DS-Test: `4000 0025 0000 3155`.
- Details: https://docs.stripe.com/testing
