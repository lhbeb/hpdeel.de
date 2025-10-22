"use client";

import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Bitte geben Sie Ihre E-Mail-Adresse ein');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setIsSuccess(true);
      setEmail('');
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#0046be] to-[#003494] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bleiben Sie auf dem Laufenden
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Abonnieren Sie unseren Newsletter und erfahren Sie als Erster von exklusiven Angeboten, 
            Neuheiten und Sonderaktionen. Treten Sie Tausenden zufriedener Kunden bei!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                  className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0046be] transition-all duration-200"
                  disabled={isSubmitting || isSuccess}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="bg-white text-[#0046be] hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0046be]"></div>
                    Wird abonniert...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="h-5 w-5" />
                    Abonniert!
                  </>
                ) : (
                  <>
                    Abonnieren
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
            
            {error && (
              <p className="text-red-200 text-sm mt-3 text-center">
                {error}
              </p>
            )}
            
            {isSuccess && (
              <p className="text-green-200 text-sm mt-3 text-center">
                Vielen Dank für Ihr Abonnement! Bitte prüfen Sie Ihre E-Mails für die Bestätigung.
              </p>
            )}
          </form>

          <p className="text-blue-200 text-sm mt-6 opacity-80">
            Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection; 