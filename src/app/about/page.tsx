import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Über HappyDeel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose max-w-none text-gray-600">
            <p className="text-lg mb-6">
              Willkommen bei HappyDeel, Ihrem erstklassigen Ziel für hochwertige Elektronik und Fotogeräte. Seit unserer Gründung widmen wir uns der Bereitstellung außergewöhnlicher Produkte zu wettbewerbsfähigen Preisen für Fotografen und Technikbegeisterte.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unsere Mission</h2>
            <p className="mb-6">
              Bei HappyDeel glauben wir, dass jeder Zugang zu hochwertiger Fotografieausrüstung haben sollte. Unsere Mission ist es, Profis und Enthusiasten erstklassige Kameras und Zubehör zu erschwinglichen Preisen anzubieten und gleichzeitig einen unübertroffenen Kundenservice zu bieten.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Was uns auszeichnet</h2>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Sorgfältige Auswahl: Jedes Produkt wird sorgfältig auf Qualität und Wert geprüft</li>
              <li>Expertenunterstützung: Unser Team aus Fotografieexperten steht Ihnen jederzeit zur Verfügung</li>
              <li>Wettbewerbsfähige Preise: Wir bieten die besten Preise ohne Kompromisse bei der Qualität</li>
              <li>Schneller & kostenloser Versand: Genießen Sie kostenlosen Versand auf alle Bestellungen in Deutschland und Europa</li>
              <li>Zufriedenheitsgarantie: 30-tägige problemlose Rückgaberegelung</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unsere Werte</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Qualität: Wir machen nie Kompromisse bei der Produktqualität</li>
              <li>Integrität: Ehrliche und transparente Geschäftspraktiken</li>
              <li>Kundenorientierung: Ihre Zufriedenheit ist unsere höchste Priorität</li>
              <li>Innovation: Mit neuester Technologie immer einen Schritt voraus</li>
            </ul>
          </div>
          <div>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unternehmensstatistiken</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#0046be]">5000+</div>
                  <div className="text-gray-600">Zufriedene Kunden</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#0046be]">1000+</div>
                  <div className="text-gray-600">Verkaufte Produkte</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#0046be]">99%</div>
                  <div className="text-gray-600">Zufriedenheitsrate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#0046be]">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Adresse:</div>
                  <div className="text-gray-600">Musterstraße 123, 80331 München, Deutschland</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Telefon:</div>
                  <div className="text-gray-600">+49 89 123456789</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">E-Mail:</div>
                  <div className="text-gray-600">kontakt@happydeel.de</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Geschäftszeiten:</div>
                  <div className="text-gray-600">Montag - Freitag: 9:00 - 17:00 Uhr</div>
                  <div className="text-gray-600">Samstag: 10:00 - 15:00 Uhr</div>
                  <div className="text-gray-600">Sonntag: Geschlossen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}