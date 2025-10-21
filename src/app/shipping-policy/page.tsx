export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Versandbedingungen</h1>
        <div className="prose max-w-none text-gray-600">
          <p className="text-lg mb-6">
            Bei HappyDeel bemühen wir uns darum, allen unseren Kunden schnelle und zuverlässige Versanddienste anzubieten. Hier ist alles, was Sie über unsere Versandbedingungen wissen müssen.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kostenloser Versand</h2>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li>VERSANDKOSTENFREI bei allen Bestellungen in Deutschland und Österreich</li>
            <li>Kein Mindestbestellwert erforderlich</li>
            <li>DHL oder Deutsche Post für inländische Sendungen</li>
            <li>DHL für internationale Sendungen</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lieferzeiten</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="font-medium text-gray-900 mb-4">Geschätzte Lieferzeit:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Bearbeitungszeit:</span>
                <span>1 Werktag</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Inlandsversand (Deutschland):</span>
                <span>2-4 Werktage</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Österreich-Versand:</span>
                <span>3-5 Werktage</span>
              </div>
              <div className="border-t pt-4">
                <span className="font-medium">Gesamte voraussichtliche Zeit:</span>
                <ul className="list-disc pl-6 mt-2">
                  <li>Deutsche Bestellungen: 3-5 Werktage</li>
                  <li>Österreichische Bestellungen: 4-6 Werktage</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sendungsverfolgung</h2>
          <p className="mb-6">
            Sobald Ihre Bestellung versandt wird, erhalten Sie:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Versandbestätigungs-E-Mail</li>
            <li>Sendungsverfolgungsnummer</li>
            <li>Geschätztes Lieferdatum</li>
            <li>Link zur Sendungsverfolgung</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Versandbeschränkungen</h2>
          <p className="mb-6">
            Bitte beachten Sie die folgenden Versandbeschränkungen:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Wir versenden derzeit nur nach Deutschland und Österreich</li>
            <li>Einige Artikel können zusätzliche Versandanforderungen haben</li>
            <li>Postfachadressen werden für die meisten Artikel akzeptiert</li>
            <li>APO/FPO-Adressen werden unterstützt</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Paketschutz</h2>
          <p className="mb-6">
            Alle Sendungen enthalten:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Vollständiger Versicherungsschutz</li>
            <li>Unterschriftsbestätigung für Bestellungen über 500€</li>
            <li>Wetterbeständige Verpackung</li>
            <li>Schutzmaterialien für zerbrechliche Gegenstände</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontaktinformationen</h2>
          <p>
            Bei versandbezogenen Fragen oder Anliegen kontaktieren Sie uns bitte:
          </p>
          <ul className="list-none mt-4">
            <li>Telefon: +49 89 123456789</li>
            <li>E-Mail: kontakt@happydeel.de</li>
            <li>Öffnungszeiten: Montag - Freitag, 9:00 - 17:00 Uhr</li>
          </ul>
          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Wichtiger Hinweis</h3>
            <p className="text-sm">
              Die Lieferzeiten können durch Zoll, Wetterbedingungen oder andere unvorhergesehene Umstände beeinflusst werden. Wir halten Sie über Verzögerungen bei Ihrer Bestellung auf dem Laufenden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}