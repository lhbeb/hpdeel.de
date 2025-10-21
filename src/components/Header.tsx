"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { getCartCount } from '@/utils/cart';
import type { Product } from '@/types/product';
import ClientOnly from './ClientOnly';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateCartCount = () => {
      if (typeof window !== 'undefined') {
        setCartCount(getCartCount());
      }
    };
    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const promotionalBarHeight = 40; // Height of the promotional bar
        
        if (scrollTop > promotionalBarHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleCartClick = () => {
    if (cartCount > 0) {
      router.push('/checkout');
    }
  };
  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      {/* Promotional bar - not sticky */}
      <div className="bg-[#ffef02] text-[#313a4b] py-2">
        <div className="container mx-auto px-4 text-center font-medium">
          Versand in ganz Deutschland und Österreich
        </div>
      </div>
      
      {/* Navigation bar - smart sticky */}
      <header 
        ref={headerRef}
        className={`bg-white shadow-sm transition-all duration-300 ${
          isSticky 
            ? 'fixed top-0 left-0 right-0 z-50' 
            : 'relative'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logosvg.svg" 
                alt="HappyDeel Logo"
                width={192}
                height={40}
                priority
                className="w-48"
              />
            </Link>
            <nav className="hidden lg:flex space-x-8 font-heading">
              <Link href="/" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300">Startseite</Link>
              <Link href="/#products" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300">Produkte</Link>
              <Link href="/#featured" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300">Empfohlen</Link>
              <Link href="/track" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300">Bestellung verfolgen</Link>
              <Link href="/contact" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300">Kontakt</Link>
            </nav>
            <div className="hidden lg:flex items-center space-x-4 relative">
              <button
                onClick={() => setIsSearchOpen((v) => !v)}
                className="text-[#313a4b] hover:text-[#0046be] transition-colors duration-300"
                aria-label="Produkte suchen"
              >
                <Search className="h-5 w-5" />
              </button>
              <button onClick={handleCartClick} className="relative text-[#313a4b] hover:text-[#0046be] transition-colors duration-300 ml-2" aria-label={`Warenkorb ${cartCount > 0 ? `mit ${cartCount} Artikeln` : '(leer)'}`}>
                <ShoppingCart className="h-5 w-5" />
                <ClientOnly>
                  <span className={`absolute -top-2 -right-2 bg-[#0046be] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-opacity duration-300 ${cartCount > 0 ? 'opacity-100' : 'opacity-0'}`}>{cartCount}</span>
                </ClientOnly>
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen((v) => !v)}
                className="text-[#313a4b] hover:text-[#0046be] transition-colors duration-300"
                aria-label="Produkte suchen"
              >
                <Search className="h-5 w-5" />
              </button>
              <button onClick={handleCartClick} className="relative text-[#313a4b] hover:text-[#0046be] transition-colors duration-300" aria-label={`Warenkorb ${cartCount > 0 ? `mit ${cartCount} Artikeln` : '(leer)'}`}>
                <ShoppingCart className="h-5 w-5" />
                <ClientOnly>
                  <span className={`absolute -top-2 -right-2 bg-[#0046be] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-opacity duration-300 ${cartCount > 0 ? 'opacity-100' : 'opacity-0'}`}>{cartCount}</span>
                </ClientOnly>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#313a4b] hover:text-[#0046be] transition-colors duration-300"
                aria-label="Mobile-Menü umschalten"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            {/* SearchBar overlay */}
            <SearchBar open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 font-heading">
                <Link href="/" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300" onClick={handleMobileMenuClose}>Startseite</Link>
                <Link href="/#products" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300" onClick={handleMobileMenuClose}>Produkte</Link>
                <Link href="/#featured" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300" onClick={handleMobileMenuClose}>Empfohlen</Link>
                <Link href="/track" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300" onClick={handleMobileMenuClose}>Bestellung verfolgen</Link>
                <Link href="/contact" className="text-[#313a4b] hover:text-[#0046be] font-medium transition-colors duration-300" onClick={handleMobileMenuClose}>Kontakt</Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default Header;