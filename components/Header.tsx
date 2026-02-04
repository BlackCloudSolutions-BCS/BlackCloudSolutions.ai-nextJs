'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-12 bg-black/30 backdrop-blur-md border-b border-[#D7BC6D]/20">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ThakAI</span>
            <img src="/assets/logo-thakai.jpg" alt="ThakAI Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 bg-white/5 backdrop-blur-sm border border-[#D7BC6D]/30 hover:bg-white/10 hover:border-[#D7BC6D]/50 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#D7BC6D]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link href="/" className={`text-sm font-semibold transition-colors duration-300 px-4 py-2 rounded-xl ${isActive('/') ? 'text-[#D7BC6D] bg-white/10 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white hover:text-[#D7BC6D] hover:bg-white/5'}`}>Home</Link>
          <Link href="/features" className={`text-sm font-semibold transition-colors duration-300 px-4 py-2 rounded-xl ${isActive('/features') ? 'text-[#D7BC6D] bg-white/10 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white hover:text-[#D7BC6D] hover:bg-white/5'}`}>Features</Link>
          <Link href="/news" className={`text-sm font-semibold transition-colors duration-300 px-4 py-2 rounded-xl ${isActive('/news') ? 'text-[#D7BC6D] bg-white/10 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white hover:text-[#D7BC6D] hover:bg-white/5'}`}>News</Link>
          <Link href="/about-us" className={`text-sm font-semibold transition-colors duration-300 px-4 py-2 rounded-xl ${isActive('/about-us') ? 'text-[#D7BC6D] bg-white/10 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white hover:text-[#D7BC6D] hover:bg-white/5'}`}>About Us</Link>
          <Link href="/contact" className={`text-sm font-semibold transition-colors duration-300 px-4 py-2 rounded-xl ${isActive('/contact') ? 'text-[#D7BC6D] bg-white/10 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white hover:text-[#D7BC6D] hover:bg-white/5'}`}>Contact</Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/app" className="rounded-2xl bg-gradient-to-r from-[#D7BC6D] to-[#CBA344] px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-all duration-300">
            Launch App
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-black p-6 sm:max-w-sm border-l border-[#D7BC6D]/30">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">ThakAI</span>
                  <img src="/assets/logo-thakai.jpg" alt="ThakAI Logo" className="h-8 w-auto" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-xl p-2.5 bg-white/5 border border-[#D7BC6D]/30 hover:bg-white/10 hover:border-[#D7BC6D]/50 transition-all duration-300"
                >
                  <span className="sr-only">Close menu</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-[#D7BC6D]">
                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="mt-8 flow-root">
                <div className="space-y-3">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-base font-semibold backdrop-blur-sm border transition-all duration-300 ${isActive('/') ? 'text-[#D7BC6D] bg-white/10 border-[#D7BC6D]/50 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white bg-white/5 border-[#D7BC6D]/30 hover:bg-white/10 hover:text-[#D7BC6D] hover:border-[#D7BC6D]/50'}`}>Home</Link>
                  <Link href="/features" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-base font-semibold backdrop-blur-sm border transition-all duration-300 ${isActive('/features') ? 'text-[#D7BC6D] bg-white/10 border-[#D7BC6D]/50 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white bg-white/5 border-[#D7BC6D]/30 hover:bg-white/10 hover:text-[#D7BC6D] hover:border-[#D7BC6D]/50'}`}>Features</Link>
                  <Link href="/news" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-base font-semibold backdrop-blur-sm border transition-all duration-300 ${isActive('/news') ? 'text-[#D7BC6D] bg-white/10 border-[#D7BC6D]/50 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white bg-white/5 border-[#D7BC6D]/30 hover:bg-white/10 hover:text-[#D7BC6D] hover:border-[#D7BC6D]/50'}`}>News</Link>
                  <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-base font-semibold backdrop-blur-sm border transition-all duration-300 ${isActive('/about-us') ? 'text-[#D7BC6D] bg-white/10 border-[#D7BC6D]/50 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white bg-white/5 border-[#D7BC6D]/30 hover:bg-white/10 hover:text-[#D7BC6D] hover:border-[#D7BC6D]/50'}`}>About Us</Link>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-base font-semibold backdrop-blur-sm border transition-all duration-300 ${isActive('/contact') ? 'text-[#D7BC6D] bg-white/10 border-[#D7BC6D]/50 drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]' : 'text-white bg-white/5 border-[#D7BC6D]/30 hover:bg-white/10 hover:text-[#D7BC6D] hover:border-[#D7BC6D]/50'}`}>Contact</Link>
                  <Link href="/app" onClick={() => setMobileMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-base font-semibold bg-gradient-to-r from-[#D7BC6D] to-[#CBA344] text-white text-center mt-6 hover:scale-105 transition-all duration-300 shadow-lg">Launch App</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
