# Produkt X — Checkout

Single-purpose Stripe checkout for one digital product ("Produkt X").

- **Register:** Product UI — design serves the transaction. Earned familiarity (Stripe/Linear-grade trust), restrained color.
- **Surface:** one focused checkout — order summary + embedded Stripe Payment Element. Light theme, daylight commerce.
- **Brand:** ochre/honey primary (OKLCH hue 77) on a pure-white canvas. Warmth lives in the brand color + typography, not the background.
- **Stack:** Next.js 16 (App Router), Tailwind v4, Stripe Payment Element.
- **State:** prices are introduced later via `STRIPE_PRICE_ID`. Until then the payment panel shows an honest "awaiting price" state — no mock data.
