import React from 'react';
import { Language, TranslationStructure } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationStructure;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  // Funkcja przewijania do sekcji / Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LEWY RÓG: Zmiana Języka / LEFT CORNER: Language Toggle */}
        <div className="flex items-center space-x-2 text-sm font-semibold tracking-widest">
          <button 
            onClick={() => setLang('PL')} 
            className={`transition-colors duration-300 ${lang === 'PL' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
          >
            PL
          </button>
          <span className="text-gray-300">|</span>
          <button 
            onClick={() => setLang('EN')} 
            className={`transition-colors duration-300 ${lang === 'EN' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
          >
            EN
          </button>
        </div>

        {/* PRAWY RÓG: Menu Nawigacji / RIGHT CORNER: Navigation Menu */}
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em]">
          <button onClick={() => scrollToSection('about')} className="hover:text-gray-500 transition-colors uppercase">
            {t.nav.about}
          </button>
          <button onClick={() => scrollToSection('shop')} className="hover:text-gray-500 transition-colors uppercase">
            {t.nav.shop}
          </button>
          <button onClick={() => scrollToSection('newsletter')} className="hover:text-gray-500 transition-colors uppercase">
            {t.nav.newsletter}
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-500 transition-colors uppercase">
            {t.nav.contact}
          </button>
        </div>

        {/* Menu mobilne (proste) / Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Można dodać ikonę hamburgera tutaj w przyszłości */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;