import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "Widerrufsbelehrung — Produkt X" };

export default function WiderrufPage() {
  return (
    <LegalPage title="Widerrufsbelehrung">
      <h2>Widerrufsrecht</h2>
      <p>
        Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
        Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem
        Tag des Vertragsabschlusses.
      </p>
      <p>
        Um dein Widerrufsrecht auszuüben, musst du uns ([Name, Anschrift,
        E-Mail]) mittels einer eindeutigen Erklärung (z. B. ein mit der Post
        versandter Brief oder eine E-Mail) über deinen Entschluss, diesen
        Vertrag zu widerrufen, informieren.
      </p>

      <h2>Erlöschen des Widerrufsrechts bei digitalen Inhalten</h2>
      <p>
        Bei einem Vertrag über die Lieferung von nicht auf einem körperlichen
        Datenträger befindlichen digitalen Inhalten erlischt das Widerrufsrecht,
        wenn du ausdrücklich zugestimmt hast, dass mit der Ausführung des
        Vertrags vor Ablauf der Widerrufsfrist begonnen wird, und du deine
        Kenntnis davon bestätigt hast, dass du durch deine Zustimmung mit Beginn
        der Ausführung das Widerrufsrecht verlierst (§ 356 Abs. 5 BGB). Diese
        Zustimmung holen wir im Checkout per Kontrollkästchen ein.
      </p>

      <h2>Folgen des Widerrufs</h2>
      <p>
        [Standard-Formulierung zur Rückzahlung gemäß Muster-Widerrufsbelehrung
        einsetzen.]
      </p>

      <p>
        <strong>Platzhalter:</strong> Verbindliche Formulierung inklusive
        Muster-Widerrufsformular über einen Generator oder Anwalt einsetzen.
      </p>
    </LegalPage>
  );
}
