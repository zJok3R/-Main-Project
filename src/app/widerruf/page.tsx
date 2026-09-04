import { LegalPage } from "@/components/legal-page";

export const metadata = { title: "Widerrufsbelehrung" };

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
        Um dein Widerrufsrecht auszuüben, musst du uns — Max Gaube, Omnaut,
        Bonhoefferplatz 24, 01157 Dresden, kontakt@omnaut.de — mittels einer
        eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder
        eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen,
        informieren. Du kannst dafür das Muster-Widerrufsformular verwenden,
        das jedoch nicht vorgeschrieben ist.
      </p>
      <p>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung
        über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
        absendest.
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
        Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die
        wir von dir erhalten haben, unverzüglich und spätestens binnen
        vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
        deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
        Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der
        ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde
        ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir
        wegen dieser Rückzahlung Entgelte berechnet.
      </p>
    </LegalPage>
  );
}
