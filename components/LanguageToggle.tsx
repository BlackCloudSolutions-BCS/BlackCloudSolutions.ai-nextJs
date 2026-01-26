'use client';

import { useState, useEffect } from 'react';
import useLanguage from '@/hooks/Language/useLanguage';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // UK Flag SVG
  const UKFlag = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      className="w-8 h-5 rounded-sm shadow-md"
    >
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v15 z v-15 h30 z"/>
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );

  // UAE Flag SVG
  const UAEFlag = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 600"
      className="w-8 h-5 rounded-full shadow-md"
    >
      <rect width="400" height="600" fill="#FF0000" />
      <rect x="400" width="800" height="200" fill="#00732F" />
      <rect x="400" y="200" width="800" height="200" fill="#FFFFFF" />
      <rect x="400" y="400" width="800" height="200" fill="#000000" />
    </svg>
  );

  if (!mounted) {
    return (
      <button
        className="flex cursor-pointer items-center justify-center p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-[#D7BC6D]/30 hover:bg-white/10 hover:border-[#D7BC6D]/50 hover:scale-110 transition-all duration-300"
        aria-label="Toggle language"
      >
        <UAEFlag />
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex cursor-pointer items-center justify-center p-2  backdrop-blur-sm hover:scale-110 transition-all duration-300"
      aria-label="Toggle language"
      title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      {language === 'en' ? <UAEFlag /> : <UKFlag />}
    </button>
  );
}

