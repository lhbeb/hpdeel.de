"use client";

import { notFound, useRouter } from 'next/navigation';
import ProductReviews from '@/components/ProductReviews';
import ShippingInfo from '@/components/ShippingInfo';
import ClientOnly from '@/components/ClientOnly';
import RecommendedProducts from '@/components/RecommendedProducts';
import { addToCart } from '@/utils/cart';
import { preventScrollOnClick } from '@/utils/scrollUtils';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, X, ShoppingCart, Zap, Eye, Users, ZoomIn } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import type { Product } from '@/types/product';
import Image from 'next/image';

interface ProductPageClientProps {
  product: Product | null;
}

export default function ProductPageClient({ product: initialProduct }: ProductPageClientProps) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(initialProduct);
  const [activeImage, setActiveImage] = useState(0);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);
  const [urgencyData, setUrgencyData] = useState({ viewing: 0, addedToCart: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);

  const faqItems = useMemo(() => [
    { question: "Sind die Artikel neu oder gebraucht?", answer: "Wir bieten sowohl neue als auch gebrauchte Artikel an. Der Produktzustand ist in der Beschreibung klar angegeben (z. B. Brandneu, Wie neu, Überholt oder Gebraucht – Guter Zustand)." },
    { question: "Verfügen Produkte über eine Garantie?", answer: "Neue Artikel enthalten in der Regel eine Herstellergarantie. Für gebrauchte Artikel bieten wir eine 30-tägige HappyDeel-Garantie für Rückgaben und Umtausch, sofern nicht anders angegeben." },
    { question: "Kann ich ein Produkt zurückgeben, wenn es meinen Erwartungen nicht entspricht?", answer: "Ja! Wir bieten 30-tägige problemlose Rückgaben an. Der Artikel muss sich im selben Zustand wie beim Erhalt befinden. Lesen Sie unsere Rückgaberegelung für weitere Details." },
    { question: "Wie lange dauert der Versand?", answer: "Die meisten Bestellungen werden innerhalb von 5–8 Werktagen versandt. Die Lieferzeiten variieren je nach Standort, aber Sie können mit einer Lieferung innerhalb von 5–8 Werktagen rechnen." },
    { question: "Gibt es kostenlosen Versand?", answer: "Ja, wir bieten kostenlosen Standardversand für alle Bestellungen an. Expressoptionen sind ebenfalls beim Checkout verfügbar." },
    { question: "Werden Ihre gebrauchten Produkte getestet?", answer: "Absolut. Alle gebrauchten Elektronikartikel durchlaufen eine mehrstufige Inspektion und sind voll funktionsfähig, sofern nicht anders angegeben." },
    { question: "Kann ich den Produktfotos vertrauen?", answer: "Ja — was Sie sehen, ist das, was Sie erhalten. Unsere Fotos zeigen das tatsächliche Produkt (oder eine sehr ähnliche Darstellung für neue Artikel). Wir verwenden keine Stockbilder für gebrauchte Artikel." },
    { question: "Ist Abholung vor Ort möglich?", answer: "Derzeit sind wir ein reiner Online-Shop, aber wir arbeiten daran, Abholoptionen in ausgewählten Städten einzuführen." },
    { question: "Wie kann ich den Kundenservice kontaktieren?", answer: "Sie können uns jederzeit unter kontakt@happydeel.de erreichen oder uns unter +49 89 123456789 anrufen. Wir sind 7 Tage die Woche erreichbar." }
  ], []);

  // Generate urgency data on client side only
  useEffect(() => {
    if (!product) return;

    let hash = 0;
    for (let i = 0; i < product.slug.length; i++) {
      const char = product.slug.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    const seed = Math.abs(hash);
    const viewing = 6 + (seed % 14);
    const addedToCart = Math.max(1, Math.floor(viewing * (0.3 + (seed % 100) / 500)));
    
    setUrgencyData({ viewing, addedToCart });
  }, [product]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = showZoom ? 'hidden' : 'unset';
      return () => { document.body.style.overflow = 'unset'; };
    }
  }, [showZoom]);

  const handleAddToCart = () => {
    if (!product) return;
    setIsAddingToCart(true);
    preventScrollOnClick(() => {
      addToCart(product);
      goToCheckout();
    }, true);
  };

  const handleBuyNow = () => {
    if (!product) return;
    setIsBuyingNow(true);
    preventScrollOnClick(() => {
      addToCart(product);
      goToCheckout();
    }, true);
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev * 1.5, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev / 1.5, 0.5));
  const resetZoom = () => setZoomLevel(1);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distanceX = touchStart.x - touchEnd.x;
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(touchStart.y - touchEnd.y) && Math.abs(distanceX) > 50;
    if (isHorizontalSwipe) {
      setActiveImage(prev => (distanceX > 0 ? (prev < product!.images.length - 1 ? prev + 1 : 0) : (prev > 0 ? prev - 1 : product!.images.length - 1)));
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleImageClick = (index: number) => {
    setActiveImage(index);
    setShowZoom(true);
    setZoomLevel(1);
  };

  const goToCheckout = () => {
    router.push('/checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!product) {
    notFound();
  }
  
  const { slug, title, description, price, images, condition, reviews } = product;
  
  // Convert USD to EUR (assuming 1 USD = 0.93 EUR)
  const priceInEUR = price * 0.93;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
            <div className="relative lg:sticky lg:top-0 lg:self-start">
              <div onClick={() => handleImageClick(activeImage)} className="cursor-zoom-in relative group aspect-[4/3] w-full">
                <Image 
                  src={images[activeImage]} 
                  alt={`${title} - Bild ${activeImage + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                  <ZoomIn className="h-12 w-12 text-white opacity-0 group-hover:opacity-75 transition-opacity" />
                </div>
              </div>
              <div className="mt-4 flex justify-center space-x-2 overflow-x-auto py-2">
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${activeImage === idx ? 'ring-2 ring-[#0046be]' : 'ring-1 ring-gray-200'}`}
                  >
                    <Image src={image} alt={`${title} Vorschaubild ${idx + 1}`} fill sizes="80px" className="object-cover" />
                    {activeImage === idx && <div className="absolute inset-0 bg-white/10"></div>}
                  </button>
                ))}
              </div>
              {images.length > 1 && (
                <>
                  <button onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white/80 hover:bg-[#0046be] hover:text-white p-2 rounded-full transition-all duration-300 z-10">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button onClick={() => setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))} className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-white/80 hover:bg-[#0046be] hover:text-white p-2 rounded-full transition-all duration-300 z-10">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
            
            <div className="lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:pr-4 scrollbar-hide">
              <h1 className="text-3xl font-medium text-gray-900">{title}</h1>
              <div className="mt-2 text-gray-600">{condition}</div>
              <div className="mt-4 text-4xl font-bold text-gray-900">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(priceInEUR)}</div>
              
              <ClientOnly>
                {(urgencyData.viewing > 0 || urgencyData.addedToCart > 0) && (
                  <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="flex items-center text-blue-700"><Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" /><span className="text-xs sm:text-sm font-medium"><span className="hidden xs:inline">{urgencyData.viewing} Personen betrachten</span><span className="xs:hidden">{urgencyData.viewing} betrachten</span></span></div>
                        <div className="flex items-center text-indigo-700"><Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" /><span className="text-xs sm:text-sm font-medium"><span className="hidden xs:inline">{urgencyData.addedToCart} zum Warenkorb hinzugefügt</span><span className="xs:hidden">{urgencyData.addedToCart} im Warenkorb</span></span></div>
                      </div>
                      <div className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div><span className="text-xs text-gray-600 font-medium hidden sm:inline">Live-Aktivität</span></div>
                    </div>
                  </div>
                )}
              </ClientOnly>

              <div className="mt-8 space-y-3">
                <button onClick={handleAddToCart} disabled={isAddingToCart || isBuyingNow} className="w-full bg-[#0046be] hover:bg-[#003494] text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                  {isAddingToCart ? <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>Wird zum Warenkorb hinzugefügt...</> : <><ShoppingCart className="h-5 w-5 mr-2" />In den Warenkorb</>}
                </button>
                <button onClick={handleBuyNow} disabled={isAddingToCart || isBuyingNow} className="w-full bg-white border-2 border-[#0046be] text-[#0046be] hover:bg-blue-50 hover:border-[#003494] hover:text-[#003494] py-4 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                  {isBuyingNow ? <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0046be] mr-2"></div>Wird verarbeitet...</> : <><Zap className="h-5 w-5 mr-2" />Jetzt kaufen</>}
                </button>
              </div>

              <div className="mt-8"><h3 className="text-lg font-semibold text-gray-900 mb-4">Versand & Lieferung</h3><ClientOnly><ShippingInfo /></ClientOnly></div>
              <div className="mt-8"><h2 className="text-xl font-medium text-gray-900 mb-4">Beschreibung</h2><p className="text-gray-600 whitespace-pre-line">{description}</p></div>
            </div>
          </div>

          {/* FAQ Section - Full Width */}
          <div className="mt-16 w-full">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <button onClick={() => setShowFAQ(!showFAQ)} className="w-full flex items-center justify-between text-left text-gray-900 hover:text-[#0046be] transition-colors duration-300">
                <span className="text-xl font-medium">Häufig gestellte Fragen</span>
                <div className="flex items-center space-x-2">
                  {!showFAQ && <span className="text-sm text-[#0046be] font-medium">({faqItems.length - 1} weitere Fragen)</span>}
                  {showFAQ ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </div>
              </button>
              <div className="mt-6 space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className={`border-b border-gray-100 pb-6 last:border-0 ${!showFAQ && index > 0 ? 'hidden' : ''}`}>
                    <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
                    <div className="text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {reviews && reviews.length > 0 && <div className="mt-16"><ProductReviews reviews={reviews} averageRating={product.rating} totalReviews={product.reviewCount} /></div>}
          <RecommendedProducts currentProductSlug={slug} />
        </div>
      </main>

      {showZoom && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50" onClick={() => setShowZoom(false)}>
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <button onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} className="p-2 text-white hover:text-[#0046be] transition-colors duration-200" aria-label="Verkleinern"><span className="text-2xl">−</span></button>
            <button onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} className="p-2 text-white hover:text-[#0046be] transition-colors duration-200" aria-label="Vergrößern"><span className="text-2xl">+</span></button>
            <button onClick={(e) => { e.stopPropagation(); resetZoom(); }} className="p-2 text-white hover:text-[#0046be] transition-colors duration-200" aria-label="Zoom zurücksetzen"><span className="text-lg">⟲</span></button>
            <button onClick={(e) => { e.stopPropagation(); setShowZoom(false); }} className="p-2 text-white hover:text-[#0046be] transition-colors duration-200" aria-label="Zoom-Ansicht schließen"><X className="h-8 w-8" /></button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="relative w-full h-full">
              <Image src={images[activeImage]} alt={`${title} - Bild ${activeImage + 1}`} fill sizes="100vw" className="object-contain transition-transform duration-200" style={{ transform: `scale(${zoomLevel})` }} onClick={(e) => e.stopPropagation()} />
              {images.length > 1 && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1)); setZoomLevel(1); }} className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white/10 hover:bg-[#0046be] p-3 rounded-full text-white transition-colors duration-200" aria-label="Vorheriges Bild"><ChevronLeft className="h-8 w-8" /></button>
                  <button onClick={(e) => { e.stopPropagation(); setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0)); setZoomLevel(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-white/10 hover:bg-[#0046be] p-3 rounded-full text-white transition-colors duration-200" aria-label="Nächstes Bild"><ChevronRight className="h-8 w-8" /></button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}