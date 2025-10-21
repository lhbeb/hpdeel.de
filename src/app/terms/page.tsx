import React from 'react';

const TermsPage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Allgemeine Geschäftsbedingungen</h1>
      <div className="prose max-w-none text-gray-600">
        <p className="text-lg mb-6">
          Willkommen bei HappyDeel. Durch den Zugriff auf unsere Website oder die Nutzung unserer Dienste erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontobedingungen</h2>
        <ul className="list-disc pl-6 mt-4 mb-6">
          <li>Sie müssen mindestens 18 Jahre alt sein, um diesen Service nutzen zu können</li>
          <li>Sie müssen beim Erstellen eines Kontos genaue und vollständige Informationen angeben</li>
          <li>Sie sind für die Sicherheit Ihres Kontos verantwortlich</li>
          <li>Sie müssen uns unverzüglich über jeden unbefugten Zugriff informieren</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Versandbedingungen</h2>
        <p>
          Für alle Bestellungen innerhalb Deutschlands und Österreichs:
        </p>
        <ul className="list-disc pl-6 mt-4 mb-6">
          <li>Die Standardlieferung dauert 3-5 Werktage</li>
          <li>Versandkostenfrei bei allen Bestellungen</li>
          <li>Bestellungen werden innerhalb von 1 Werktag bearbeitet</li>
          <li>Tracking-Informationen werden per E-Mail bereitgestellt</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Produktbedingungen</h2>
        <ul className="list-disc pl-6 mt-4 mb-6">
          <li>Alle Produktbeschreibungen sind nach bestem Wissen genau</li>
          <li>Wir behalten uns das Recht vor, Produkte zu ändern oder einzustellen</li>
          <li>Preise können ohne vorherige Ankündigung geändert werden</li>
          <li>Wir garantieren nicht für die Verfügbarkeit von Produkten</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Zahlungsbedingungen</h2>
        <p>
          Wir akzeptieren folgende Zahlungsmethoden:
        </p>
        <ul className="list-disc pl-6 mt-4 mb-6">
          <li>Kredit-/Debitkarten (Visa, Mastercard, American Express)</li>
          <li>PayPal</li>
          <li>Shop Pay</li>
          <li>Apple Pay</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haftungsbeschränkung</h2>
        <p>
          HappyDeel haftet nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden, die aus der Nutzung unserer Dienste entstehen.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontaktinformationen</h2>
        <p>
          Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen kontaktieren Sie uns bitte:
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

export default TermsPage; 