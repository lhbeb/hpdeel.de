import React from 'react';

const PrivacyPolicyPage = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Datenschutzrichtlinie</h1>
      <div className="prose max-w-none text-gray-600">
        <p className="text-lg mb-6">
          Bei HappyDeel nehmen wir Ihre Privatsphäre ernst. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Informationen, die wir sammeln</h2>
        <p>Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, wenn Sie:</p>
        <ul className="list-disc pl-6 mt-4 mb-6">
          <li>Ein Konto erstellen</li>
          <li>Einen Kauf tätigen</li>
          <li>Sich für unseren Newsletter anmelden</li>
          <li>Unseren Kundenservice kontaktieren</li>
          <li>An Umfragen oder Werbeaktionen teilnehmen</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wie wir Ihre Informationen verwenden</h2>
        <p>Wir können die gesammelten Informationen verwenden, um:</p>
        <ul className="list-disc pl-6 mt-4 mb-6">
          <li>Ihre Bestellungen zu bearbeiten und auszuführen</li>
          <li>Ihnen Bestellbestätigungen und Updates zu senden</li>
          <li>Auf Ihre Kommentare und Fragen zu antworten</li>
          <li>Ihnen Marketingkommunikation zu senden (mit Ihrer Zustimmung)</li>
          <li>Unsere Website und Dienste zu verbessern</li>
          <li>Rechtlichen Verpflichtungen nachzukommen</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Weitergabe von Informationen</h2>
        <p>
          Wir verkaufen, handeln oder übertragen Ihre persönlichen Informationen nicht ohne Ihre Zustimmung an Dritte, außer an vertrauenswürdige Dritte, die uns bei der Betreibung unserer Website, der Durchführung unseres Geschäfts oder der Bedienung unterstützen.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Datensicherheit</h2>
        <p>
          Wir implementieren angemessene Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Informationen. Allerdings ist keine Methode der Übertragung über das Internet oder der elektronischen Speicherung zu 100% sicher.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kontaktinformationen</h2>
        <p>
          Bei Fragen zu dieser Datenschutzrichtlinie kontaktieren Sie uns bitte:
        </p>
        <ul className="list-none mt-4">
          <li>Telefon: +49 89 123456789</li>
          <li>E-Mail: kontakt@happydeel.de</li>
          <li>Adresse: Musterstraße 123, 80331 München, Deutschland</li>
        </ul>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage; 