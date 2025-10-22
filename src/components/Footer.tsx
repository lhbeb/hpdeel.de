import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#313a4b] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logosvg.svg" 
                alt="HappyDeel Logo" 
                width={192}
                height={40}
                className="w-48 brightness-0 invert"
              />
            </Link>
            <p className="mb-4">
              Ihr vertrauenswürdiges Ziel für hochwertige Elektronik und Gebrauchtgegenstände.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#0046be] mr-2" />
                <a href="tel:+4989123456789" className="hover:text-[#0046be] transition-colors duration-300">
                  +49 89 123456789
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#0046be] mr-2" />
                <a href="mailto:kontakt@happydeel.de" className="hover:text-[#0046be] transition-colors duration-300">
                  kontakt@happydeel.de
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#0046be] mr-2 mt-1" />
                <span>Musterstraße 123, 80331 München, Deutschland</span>
              </div>
              <div className="pt-2">
                <a 
                  href="https://www.instagram.com/happydeelcom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-[#0046be] transition-colors duration-300"
                  aria-label="Folgen Sie uns auf Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#0046be] transition-colors duration-300">Startseite</Link></li>
              <li><Link href="/#products" className="hover:text-[#0046be] transition-colors duration-300">Produkte</Link></li>
              <li><Link href="/#featured" className="hover:text-[#0046be] transition-colors duration-300">Empfohlen</Link></li>
              <li><Link href="/track" className="hover:text-[#0046be] transition-colors duration-300">Bestellung verfolgen</Link></li>
              <li><Link href="/contact" className="hover:text-[#0046be] transition-colors duration-300">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Richtlinien & Informationen</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-[#0046be] transition-colors duration-300">Datenschutz</Link></li>
              <li><Link href="/terms" className="hover:text-[#0046be] transition-colors duration-300">Allgemeine Geschäftsbedingungen</Link></li>
              <li><Link href="/about" className="hover:text-[#0046be] transition-colors duration-300">Über uns</Link></li>
              <li><Link href="/return-policy" className="hover:text-[#0046be] transition-colors duration-300">Rückgabe & Widerrufsbelehrung</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-[#0046be] transition-colors duration-300">Versandbedingungen</Link></li>
              <li><Link href="/contact" className="hover:text-[#0046be] transition-colors duration-300">Kundenservice</Link></li>
              <li><Link href="/cookies" className="hover:text-[#0046be] transition-colors duration-300">Cookie-Richtlinie</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center">
              <Image 
                src="/secure-checkout.png?v=2" 
                alt="Sicherer Checkout" 
                width={392}
                height={63}
                className="h-16 w-auto max-w-full object-contain" 
              />
            </div>
            <p className="text-center">© 2024 HappyDeel. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;