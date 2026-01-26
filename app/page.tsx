'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import VideoBackground from '@/components/VideoBackground';
import useLanguage from '@/hooks/Language/useLanguage';
import { homeTranslations } from '@/translations/home';

export default function Home() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use English as default during SSR to prevent hydration mismatch
  const currentLanguage = mounted ? language : 'en';
  const t = homeTranslations[currentLanguage];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen pb-32">
        <VideoBackground />

        <div className={`relative isolate px-6 pt-14 lg:px-12 z-20 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
          <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:pt-50 lg:pb-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-4 py-2 text-sm text-white bg-[#D7BC6D]/10 backdrop-blur-sm border border-[#D7BC6D]/30 hover:bg-[#D7BC6D]/20 transition-all duration-300">
                {t.hero.badge} <a href="#" className="font-semibold text-[#D7BC6D]"><span aria-hidden="true" className="absolute inset-0"></span>{t.hero.readMore} <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-center">
              <h1 className={`text-4xl font-bold tracking-tight text-balance text-[#D7BC6D] sm:text-6xl lg:text-7xl ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
                <span className="text-white">{t.hero.title.part1}</span> <span className="drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">{t.hero.title.part2}</span>
              </h1>
              <p className={`mt-8 text-lg font-medium text-pretty text-white sm:text-xl lg:text-2xl leading-relaxed ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
                {t.hero.subtitle}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/app" className={`rounded-2xl bg-gradient-to-r from-[#D7BC6D] to-[#CBA344] px-8 py-4 text-base font-semibold text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 lg:px-10 lg:py-5 lg:text-lg ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.hero.getStarted}</Link>
                <Link href="/features" className={`text-base font-semibold text-white hover:text-[#D7BC6D] transition-colors duration-300 lg:text-lg ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.hero.learnMore} <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-5xl mt-20 pb-20">
            <div className="text-center bg-black/40 backdrop-blur-md rounded-3xl p-8 border-2 border-[#D7BC6D]/50 hover:bg-black/60 hover:scale-105 hover:border-[#D7BC6D] hover:shadow-[0px_0px_30px_rgba(215,188,109,0.4)] transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
              </svg>
              <h3 className={`text-xl font-bold text-[#D7BC6D] mb-2 ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.features.domainAI.title}</h3>
              <p className={`mt-2 text-sm text-gray-300 leading-relaxed ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.features.domainAI.description}</p>
            </div>
            <div className="text-center bg-black/40 backdrop-blur-md rounded-3xl p-8 border-2 border-[#D7BC6D]/50 hover:bg-black/60 hover:scale-105 hover:border-[#D7BC6D] hover:shadow-[0px_0px_30px_rgba(215,188,109,0.4)] transition-all duration-300 shadow-lg">
              <p className="text-[#D7BC6D] mb-4 text-5xl drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)] arabic-text">{t.features.bilingual.greeting}</p>
              <h3 className={`text-xl font-bold text-[#D7BC6D] mb-2 ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.features.bilingual.title}</h3>
              <p className={`mt-2 text-sm text-gray-300 leading-relaxed ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.features.bilingual.description}</p>
            </div>
            <div className="text-center bg-black/40 backdrop-blur-md rounded-3xl p-8 border-2 border-[#D7BC6D]/50 hover:bg-black/60 hover:scale-105 hover:border-[#D7BC6D] hover:shadow-[0px_0px_30px_rgba(215,188,109,0.4)] transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
              </svg>
              <h3 className={`text-xl font-bold text-[#D7BC6D] mb-2 ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.features.semantic.title}</h3>
              <p className={`mt-2 text-sm text-gray-300 leading-relaxed ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.features.semantic.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <div className={`text-center bg-gradient-to-br from-[#D7BC6D]/5 to-[#CBA344]/5 backdrop-blur-sm mx-auto max-w-7xl mt-8 border border-[#D7BC6D]/30 p-10 lg:px-16 rounded-3xl py-16 hover:border-[#D7BC6D]/50 transition-all duration-300 shadow-2xl ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <h2 className={`text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
          {currentLanguage === 'en' ? 'Black Cloud Solutions presents' : 'تقدم بلاك كلاود سوليوشنز'} <span className="sm:text-5xl lg:text-6xl text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]"> ThakAlذكا</span>
        </h2>
        <p className={`mt-8 text-base font-light text-gray-300 sm:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
          {t.mission.description}
        </p>
      </div>

      {/* Features 1 */}
      <div className={`overflow-hidden py-24 sm:py-32 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-start">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className={`text-base font-bold text-white mb-2 ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{currentLanguage === 'en' ? 'Introducing' : 'نقدم لكم'} <span className="text-[#D7BC6D]">ThakAlذكا</span></h2>
                <p className={`mt-2 text-3xl font-bold tracking-tight text-pretty text-white sm:text-4xl lg:text-5xl leading-tight ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{currentLanguage === 'en' ? 'Purpose-Built' : 'مصمم خصيصاً'} <span className="text-[#D7BC6D] drop-shadow-[0px_0px_30px_rgba(215,188,109,0.7)]">{currentLanguage === 'en' ? 'Legal Intelligence' : 'للذكاء القانوني'}</span></p>
                <p className={`mt-6 text-base text-gray-300 lg:text-lg leading-relaxed ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
                  {t.product.description}
                </p>
                <dl className="mt-10 max-w-xl space-y-6 text-base text-gray-400 lg:max-w-none">
                  <div className={`relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300 ${currentLanguage === 'ar' ? 'pr-12 pl-4' : ''}`}>
                    <dt className={`inline font-bold text-white ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`absolute top-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)] ${currentLanguage === 'ar' ? 'right-4' : 'left-4'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                      </svg>
                      {t.product.features.workspace.title}
                    </dt>
                    <dd className={`inline text-gray-300 text-sm ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.product.features.workspace.description}</dd>
                  </div>

                  <div className={`relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300 ${currentLanguage === 'ar' ? 'pr-12 pl-4' : ''}`}>
                    <dt className={`inline font-bold text-white ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`absolute top-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)] ${currentLanguage === 'ar' ? 'right-4' : 'left-4'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                      </svg>
                      {t.product.features.newsFeed.title}
                    </dt>
                    <dd className={`inline text-gray-300 text-sm ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.product.features.newsFeed.description}</dd>
                  </div>

                  <div className={`relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300 ${currentLanguage === 'ar' ? 'pr-12 pl-4' : ''}`}>
                    <dt className={`inline font-bold text-white ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`absolute top-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)] ${currentLanguage === 'ar' ? 'right-4' : 'left-4'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                      {t.product.features.documentDrafting.title}
                    </dt>
                    <dd className={`inline text-gray-300 text-sm ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.product.features.documentDrafting.description}</dd>
                  </div>

                  <div className={`relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300 ${currentLanguage === 'ar' ? 'pr-12 pl-4' : ''}`}>
                    <dt className={`inline font-bold text-white ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`absolute top-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)] ${currentLanguage === 'ar' ? 'right-4' : 'left-4'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                      </svg>
                      {t.product.features.complianceMonitor.title}
                    </dt>
                    <dd className={`inline text-gray-300 text-sm ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>{t.product.features.complianceMonitor.description}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="h-full">
              <img src="/assets/Login.png" alt="Product screenshot" className="w-[140%] h-full max-w-none rounded-2xl shadow-[0px_0px_40px_rgba(215,188,109,0.4)] border border-[#D7BC6D]/50 hover:shadow-[0px_0px_60px_rgba(215,188,109,0.6)] transition-all duration-500 object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className={`mx-auto max-w-7xl px-6 lg:px-12 py-24 sm:py-32 ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="lg:pt-4 lg:pr-8">
          <div className="text-center">
            <p className={`relative mt-2 text-3xl font-bold tracking-tight text-pretty text-white sm:text-4xl lg:text-5xl leading-tight ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
              {currentLanguage === 'en' ? 'Industry' : 'تطبيقات'}<span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]"> {currentLanguage === 'en' ? 'Applications' : 'الصناعة'}</span>
            </p>
            <p className={`relative mt-6 text-base text-gray-300 lg:text-lg max-w-3xl mx-auto leading-relaxed ${currentLanguage === 'ar' ? 'arabic-text' : ''}`}>
              {t.industries.description}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mx-auto mt-16">
              <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-2xl p-4 border border-[#D7BC6D]/30 hover:scale-105 hover:border-[#D7BC6D]/50 transition-all duration-300">
                <img src="/assets/industry1.png" alt="Real Estate UAE" className="rounded-xl w-full shadow-lg" />
              </div>
              <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-2xl p-4 border border-[#D7BC6D]/30 hover:scale-105 hover:border-[#D7BC6D]/50 transition-all duration-300">
                <img src="/assets/industry2.png" alt="Financial Services UAE" className="rounded-xl w-full shadow-lg" />
              </div>
              <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-2xl p-4 border border-[#D7BC6D]/30 hover:scale-105 hover:border-[#D7BC6D]/50 transition-all duration-300">
                <img src="/assets/industry3.png" alt="SMEs UAE" className="rounded-xl w-full shadow-lg" />
              </div>
              <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-2xl p-4 border border-[#D7BC6D]/30 hover:scale-105 hover:border-[#D7BC6D]/50 transition-all duration-300">
                <img src="/assets/industry4.png" alt="Technology UAE" className="rounded-xl w-full shadow-lg" />
              </div>
              <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-2xl p-4 border border-[#D7BC6D]/30 hover:scale-105 hover:border-[#D7BC6D]/50 transition-all duration-300">
                <img src="/assets/industry5.png" alt="Healthcare UAE" className="rounded-xl w-full shadow-lg" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mt-12">
              <div className="p-6 text-center bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-[#D7BC6D]">Financial Services</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">Banking, insurance, and investment compliance</p>
              </div>
              <div className="p-6 text-center bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-[#D7BC6D]">Construction & Real Estate</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">Building codes and property regulations</p>
              </div>
              <div className="p-6 text-center bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-[#D7BC6D]">SMEs</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">Small to medium size businesses</p>
              </div>
              <div className="p-6 text-center bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-[#D7BC6D]">Technology</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">Data protection and cybersecurity requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-40 mt-32 mx-auto max-w-7xl px-6 lg:px-12">
        <h4 className="text-4xl font-bold tracking-tight text-balance text-[#D7BC6D] sm:text-5xl lg:text-6xl mt-20 leading-tight">
          <span className="text-white">Ready to Transform Your</span> <span className="drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Compliance Process</span>
        </h4>
        <p className="mt-8 text-base font-medium text-pretty text-white sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
          A revolutionary approach to navigating the complex <span className="text-[#D7BC6D]">UAE regulatory landscape</span>, powered by <span className="text-[#D7BC6D]">advanced AI and semantic technology.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-6">
          <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 backdrop-blur-sm border border-[#D7BC6D]/30 rounded-3xl p-8 hover:scale-105 hover:border-[#D7BC6D]/50 hover:bg-gradient-to-br hover:from-[#D7BC6D]/20 hover:to-[#CBA344]/20 transition-all duration-300 shadow-xl">
            <h3 className="text-2xl font-bold text-[#D7BC6D] mb-3">Free Trial</h3>
            <p className="mt-2 text-gray-300 text-lg leading-relaxed">Try<span className="text-[#D7BC6D] font-semibold"> ThakAlذكا</span> risk-free for 30 days</p>
          </div>
          <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 backdrop-blur-sm border border-[#D7BC6D]/30 rounded-3xl p-8 hover:scale-105 hover:border-[#D7BC6D]/50 hover:bg-gradient-to-br hover:from-[#D7BC6D]/20 hover:to-[#CBA344]/20 transition-all duration-300 shadow-xl">
            <h3 className="text-2xl font-bold text-[#D7BC6D] mb-3">Expert Support</h3>
            <p className="mt-2 text-gray-300 text-lg leading-relaxed">Dedicated onboarding and training</p>
          </div>
          <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 backdrop-blur-sm border border-[#D7BC6D]/30 rounded-3xl p-8 hover:scale-105 hover:border-[#D7BC6D]/50 hover:bg-gradient-to-br hover:from-[#D7BC6D]/20 hover:to-[#CBA344]/20 transition-all duration-300 shadow-xl">
            <h3 className="text-2xl font-bold text-[#D7BC6D] mb-3">Instant Setup</h3>
            <p className="mt-2 text-gray-300 text-lg leading-relaxed">Get started in under 10 minutes</p>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-6">
          <Link href="/contact" className="rounded-2xl bg-gradient-to-r from-[#D7BC6D] to-[#CBA344] px-10 py-5 text-lg font-semibold text-white shadow-2xl hover:scale-105 hover:shadow-[0px_0px_40px_rgba(215,188,109,0.6)] transition-all duration-300">Schedule Demo</Link>
        </div>
      </div>
    </div>
  );
}
