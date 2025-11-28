import React from 'react';
import { TranslationStructure } from '../types';

interface FooterProps {
  t: TranslationStructure;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
        <span className="text-xl font-bold tracking-tighter">DEEKAY</span>
        <p className="text-[10px] text-gray-500 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;