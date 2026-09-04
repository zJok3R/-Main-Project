// Server-only Fulfillment-Mails über Resend (REST-API, keine Dependency).
// NIE in eine Client-Komponente importieren — RESEND_API_KEY ist geheim.
//
// Voraussetzung: Domain (omnaut.de) einmalig in Resend verifizieren,
// dann RESEND_API_KEY + MAIL_FROM in .env setzen.

const RESEND_URL = "https://api.resend.com/emails";

export type FulfillmentMail = {
  to: string;
  amountCents: number;
  productName: string;
  customerName?: string;
};

function formatPrice(amountCents: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(amountCents / 100);
}

async function sendMail(params: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;

  if (!apiKey || !from) {
    throw new Error("MAIL_NOT_CONFIGURED");
  }

  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [params.to],
      subject: params.subject,
      html: params.html,
      ...(params.replyTo ? { reply_to: params.replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`RESEND_${res.status}: ${text.slice(0, 200)}`);
  }
}

// Bestätigungs-Mail an den Kunden — versprochen auf /success:
// "Deine Zahlungsbestätigung von Stripe ist per E-Mail unterwegs."
export async function sendCustomerConfirmation(mail: FulfillmentMail) {
  const amount = formatPrice(mail.amountCents);
  const anrede = mail.customerName ? `Hallo ${mail.customerName},` : "Hallo,";

  await sendMail({
    to: mail.to,
    subject: `Deine Zahlung für ${mail.productName} ist eingegangen`,
    html: `
      <div style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
        <p>${anrede}</p>
        <p>
          vielen Dank — deine Zahlung über <strong>${amount}</strong> für den
          <strong>${mail.productName}</strong> ist bei uns eingegangen.
        </p>
        <p>
          <strong>So geht es weiter:</strong> Wir melden uns innerhalb von
          einem Werktag per E-Mail zur Terminabsprache bei dir.
        </p>
        <p>
          Fragen vorab? Schreib an
          <a href="mailto:kontakt@omnaut.de">kontakt@omnaut.de</a>.
        </p>
        <p style="margin-top: 24px; color: #777; font-size: 13px;">
          Omnaut · KI-Implementierung für den Mittelstand
        </p>
      </div>
    `,
    replyTo: "kontakt@omnaut.de",
  });
}

// Interne Benachrichtigung — damit sofort jemand die Terminabsprache anstößt.
export async function sendOwnerNotification(mail: FulfillmentMail) {
  const amount = formatPrice(mail.amountCents);
  const kunde = mail.customerName
    ? `${mail.customerName} (${mail.to})`
    : mail.to;

  await sendMail({
    to: "kontakt@omnaut.de",
    subject: `Neue Zahlung: ${mail.productName} — ${amount}`,
    html: `
      <div style="font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
        <p>
          Neue ${mail.productName}-Zahlung über <strong>${amount}</strong>.
        </p>
        <p>Kunde: ${kunde}</p>
        <p>
          Nächster Schritt: Terminabsprache innerhalb eines Werktags.
        </p>
      </div>
    `,
  });
}
