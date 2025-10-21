import React from 'react';
import { MapPin, Truck, DollarSign, RefreshCw } from 'lucide-react';

interface ShippingInfoProps {
  className?: string;
}

function getDeliveryRange() {
  const today = new Date();
  const start = new Date(today);
  const end = new Date(today);
  start.setDate(today.getDate() + 5);
  end.setDate(today.getDate() + 8);
  // If the months are the same, show as "20-23 July", else "30 July - 2 August"
  if (start.getMonth() === end.getMonth()) {
    return `${start.getDate()}-${end.getDate()} ${start.toLocaleString('de-DE', { month: 'long' })}`;
  } else {
    return `${start.getDate()} ${start.toLocaleString('de-DE', { month: 'long' })} - ${end.getDate()} ${end.toLocaleString('de-DE', { month: 'long' })}`;
  }
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({ className = '' }) => {
  const deliveryRange = getDeliveryRange();
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {/* Shipping Destination */}
      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-8 h-8 bg-[#0046be] rounded-lg mr-2 flex-shrink-0">
            <MapPin className="h-4 w-4 text-white" />
          </div>
          <p className="text-sm font-semibold text-gray-900">Versand:</p>
        </div>
        <div className="ml-10">
          <p className="text-sm text-gray-700 font-medium">
          Versand aus Deutschland 🇩🇪 mit schnellem nationalen und internationalem Versand
          </p>
        </div>
      </div>
      {/* Delivery Time */}
      <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-md">
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-8 h-8 bg-green-600 rounded-lg mr-2 flex-shrink-0">
            <Truck className="h-4 w-4 text-white" />
          </div>
          <p className="text-sm font-semibold text-gray-900">Voraussichtliche Lieferung:</p>
        </div>
        <div className="ml-10">
          <p className="text-sm text-gray-700 font-medium">Erhalten Sie Ihre Bestellung bis {deliveryRange}</p>
          <p className="text-xs text-gray-500 mt-1">KOSTENLOSER Versand verfügbar</p>
        </div>
      </div>
      {/* Stock / Low Stock Card */}
      <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:shadow-md">
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-8 h-8 bg-yellow-600 rounded-lg mr-2 flex-shrink-0">
            {/* Stock icon (box) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M2 7l10-4 10 4" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
          </div>
          <p className="text-sm font-semibold text-gray-900 flex items-center">
            Auf Lager
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-2"></span>
          </p>
        </div>
        <div className="ml-10">
          <p className="text-sm text-gray-700 font-medium">Seltene Gelegenheit</p>
          <p className="text-xs text-gray-500 mt-1">nur noch 1 Stück verfügbar</p>
        </div>
      </div>
      {/* Returns */}
      <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-md">
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-lg mr-2 flex-shrink-0">
            <RefreshCw className="h-4 w-4 text-white" />
          </div>
          <p className="text-sm font-semibold text-gray-900">Rückgabe:</p>
        </div>
        <div className="ml-10">
          <p className="text-sm text-gray-700 font-medium">30-Tage-Rückgaberecht</p>
          <p className="text-xs text-gray-500 mt-1">Rückgaberecht ohne Ärger</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;