import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT, LINKS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Reusable SVG Icon for Coffee
const CoffeeIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('PL');
  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white relative">
      
      {/* Scroll To Top Button */}
      <ScrollToTop />

      {/* 1. HEADER AREA */}
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* 2. BRANDING AREA (HERO) */}
      <Hero t={t} />

      {/* 3. PAGE SECTIONS */}
      <main className="w-full max-w-7xl mx-auto px-6 pb-20 space-y-32">
        
        {/* Section: O MARCE / ABOUT */}
        <section id="about" className="flex flex-col items-center text-center space-y-6 pt-20 max-w-4xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">
            01 — {t.nav.about}
          </h2>
          <h3 className="text-3xl md:text-4xl font-light leading-tight max-w-2xl">
            {t.sections.about.title}
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-lg">
            {t.sections.about.content}
          </p>
        </section>

        {/* Section: SKLEP / SHOP */}
        <section id="shop" className="flex flex-col items-center text-center space-y-12 pt-20">
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">
              02 — {t.nav.shop}
            </h2>
            <h3 className="text-3xl font-semibold">
              {t.sections.shop.title}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {t.sections.shop.content}
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {t.sections.shop.products.map((product) => (
              <div key={product.id} className="flex flex-col items-start text-left group cursor-pointer">
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/5] bg-gray-100 mb-4 flex items-center justify-center relative overflow-hidden">
                   <span className="text-9xl font-black text-gray-200 select-none group-hover:scale-110 transition-transform duration-500">
                     {product.id}
                   </span>
                   {/* Overlay on hover (optional luxury touch) */}
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                
                {/* Product Info */}
                <h4 className="font-bold text-sm tracking-wide uppercase">{product.name}</h4>
                <span className="text-xs text-gray-500 mt-1 mb-4">{product.price}</span>
                
                {/* CTA Link styled with border-bottom */}
                <a 
                  href={LINKS.SHOP} 
                  className="inline-block border-b border-black pb-0.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-gray-600 hover:border-gray-600 transition-colors"
                >
                  {product.linkLabel}
                </a>
              </div>
            ))}
          </div>

          {/* Main Shop Link */}
          <div className="pt-8">
            <a 
              href={LINKS.SHOP} 
              className="inline-block px-8 py-3 bg-gray-50 border border-gray-200 text-xs font-bold tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              {t.sections.shop.mainCta}
            </a>
          </div>
        </section>

        {/* Section: NEWSLETTER */}
        <section id="newsletter" className="flex flex-col items-center text-center space-y-6 pt-20 max-w-4xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">
            03 — {t.nav.newsletter}
          </h2>
          <h3 className="text-3xl font-light">
            {t.sections.newsletter.title}
          </h3>
          <p className="text-gray-500 mb-4 max-w-md">{t.sections.newsletter.content}</p>
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t.sections.newsletter.placeholder} 
              className="flex-1 bg-transparent border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
            />
            <button 
              type="submit" 
              className="bg-black text-white px-8 py-3 text-xs font-bold tracking-widest hover:bg-gray-800 transition-colors"
            >
              {t.sections.newsletter.button}
            </button>
          </form>
        </section>

        {/* Section: DONATION */}
        <section id="donate" className="flex flex-col items-center text-center space-y-8 pt-20 pb-10 max-w-4xl mx-auto">
          <div className="w-12 h-[1px] bg-gray-200 mb-4"></div>
          <h3 className="text-xl md:text-2xl font-medium">
            {t.sections.donate.title}
          </h3>
          <a 
            href={LINKS.DONATE}
            className="flex items-center bg-black text-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <CoffeeIcon />
            {t.sections.donate.button}
          </a>
        </section>

        {/* Section: CONTACT (Simple) */}
        <section id="contact" className="flex flex-col items-center text-center pt-10 pb-10">
           <a href={LINKS.CONTACT} className="text-gray-400 hover:text-black transition-colors text-sm tracking-widest">
             {t.sections.contact.title}
           </a>
        </section>

      </main>

      {/* 4. FOOTER */}
      <Footer t={t} />

    </div>
  );
};

export default App;