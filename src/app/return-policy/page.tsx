export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Rückgabe & Widerrufsbelehrung</h1>
        <div className="prose max-w-none text-gray-600">
          <p className="text-lg mb-6">
            Bei HappyDeel möchten wir, dass Sie mit Ihrem Einkauf vollständig zufrieden sind. Wenn Sie mit Ihrer Bestellung nicht zufrieden sind, helfen wir Ihnen gerne weiter.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rückgabefrist</h2>
          <p>
            Sie haben 30 Tage ab dem Lieferdatum, um Ihren Artikel zurückzugeben. Um für eine Rückgabe berechtigt zu sein, muss Ihr Artikel:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li>Unbenutzt und in dem Zustand sein, in dem Sie ihn erhalten haben</li>
            <li>In der Originalverpackung</li>
            <li>Mit dem Originalbeleg oder Kaufnachweis versehen sein</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rückgabeprozess</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Kontaktieren Sie unser Kundenserviceteam unter +49 89 123456789, um eine Rückgabe einzuleiten</li>
            <li>Verpacken Sie den Artikel sicher in seiner Originalverpackung</li>
            <li>Fügen Sie das mit Ihrer Bestellung gelieferte Rückgabeformular bei</li>
            <li>Versenden Sie den Artikel an die von unserem Kundenserviceteam angegebene Adresse</li>
          </ol>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rückerstattung</h2>
          <p>
            Sobald wir Ihre Rückgabe erhalten und prüfen, senden wir Ihnen eine E-Mail, um Sie zu informieren, dass wir Ihren zurückgegebenen Artikel erhalten haben. Wir werden Sie auch über die Genehmigung oder Ablehnung Ihrer Rückerstattung informieren.
          </p>
          <p className="mt-4">
            Bei Genehmigung wird Ihre Rückerstattung bearbeitet, und eine Gutschrift wird automatisch auf Ihre ursprüngliche Zahlungsmethode innerhalb von 5-10 Werktagen angewandt.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Versand</h2>
          <p>
            Für alle Bestellungen innerhalb Deutschlands bieten wir:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>Standardversand (2-4 Werktage)</li>
            <li>Versandkostenfrei bei allen Bestellungen</li>
            <li>Tracking-Informationen per E-Mail</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontakt</h2>
          <p>
            Wenn Sie Fragen zu unserer Rückgaberegelung haben, kontaktieren Sie uns bitte:
          </p>
          <ul className="list-none mt-4">
            <li>Telefon: +49 89 123456789</li>
            <li>E-Mail: kontakt@happydeel.de</li>
            <li>Öffnungszeiten: Montag - Freitag, 9:00 - 17:00 Uhr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}