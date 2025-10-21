import React from 'react';

const CookiesPage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie-Richtlinie</h1>
      <div className="prose max-w-none text-gray-600">
        <p className="text-lg mb-6">
          Diese Cookie-Richtlinie erklärt, wie HappyDeel Cookies und ähnliche Tracking-Technologien auf unserer Website verwendet. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß dieser Richtlinie zu.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Was sind Cookies?</h2>
        <p className="mb-6">
          Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden weit verbreitet eingesetzt, um Websites effizienter zu machen und Website-Betreibern nützliche Informationen zu liefern.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Arten von Cookies, die wir verwenden</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Essenzielle Cookies</h3>
            <p>Diese Cookies sind notwendig, damit die Website ordnungsgemäß funktioniert. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Performance-Cookies</h3>
            <p>Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Funktionalitäts-Cookies</h3>
            <p>Diese Cookies ermöglichen es der Website, sich an von Ihnen getroffene Entscheidungen zu erinnern und erweiterte, persönlichere Funktionen bereitzustellen.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Targeting-Cookies</h3>
            <p>Diese Cookies können durch Werbepartner über unsere Website gesetzt werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante Werbung auf anderen Websites zu zeigen.</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookie-Verwaltung</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-medium text-gray-900 mb-4">Wie Sie Cookies steuern können</h3>
          <p className="mb-4">Sie können Cookies nach Belieben steuern und/oder löschen. Sie können:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Alle Cookies aus Ihrem Browser löschen</li>
            <li>Ihren Browser so einstellen, dass das Platzieren von Cookies verhindert wird</li>
            <li>Cookies akzeptieren oder ablehnen, wenn Sie dazu aufgefordert werden</li>
          </ul>
          <p className="mt-4 text-sm">
            Bitte beachten Sie, dass die Einschränkung von Cookies Ihre Erfahrung auf unserer Website beeinträchtigen und den Zugriff auf bestimmte Funktionen einschränken kann.
          </p>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies von Drittanbietern</h2>
        <p className="mb-6">
          Wir können Dienste von Drittanbietern nutzen, die Cookies verwenden, darunter:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Google Analytics (für Website-Analysen)</li>
          <li>PayPal (für Zahlungsabwicklung)</li>
          <li>Social-Media-Plattformen (für Teilen und Interaktion)</li>
          <li>Werbe-Partner (für gezielte Werbung)</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Aktualisierungen dieser Richtlinie</h2>
        <p className="mb-6">
          Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Revisionsdatum veröffentlicht.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontakt</h2>
        <p>
          Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:
        </p>
        <ul className="list-none mt-4">
          <li>Telefon: +49 89 123456789</li>
          <li>E-Mail: kontakt@happydeel.de</li>
          <li>Öffnungszeiten: Montag - Freitag, 9:00 - 17:00 Uhr</li>
        </ul>
        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Wichtiger Hinweis</h3>
          <p className="text-sm">
            Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß dieser Richtlinie zu. Wenn Sie die Verwendung von Cookies nicht akzeptieren, sollten Sie Ihre Browser-Einstellungen entsprechend anpassen.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CookiesPage; 