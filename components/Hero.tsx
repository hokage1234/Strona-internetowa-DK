import React from 'react';
import { TranslationStructure } from '../types';
import { LINKS } from '../constants';

interface HeroProps {
  t: TranslationStructure;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      
      {/* Element A: Logo DEEKAY */}
      <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none select-none">
        DEEKAY
      </h1>

      {/* Element B: Przycisk Forum / Forum Button */}
      <a 
        href={LINKS.FORUM}
        className="group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white text-xs md:text-sm font-bold tracking-[0.2em] overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-xl"
      >
        <span className="relative z-10">{t.hero.forumButton}</span>
      </a>

    </section>
  );
};

export default Hero;