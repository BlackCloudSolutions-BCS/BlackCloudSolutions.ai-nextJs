'use client'

import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative w-full min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative isolate px-6 pt-32 pb-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            {/* Launch Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/30 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-[#D7BC6D]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <span className="text-sm font-semibold text-[#D7BC6D]">Launching Q4 2025</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#D7BC6D]">ThakAI</span>
                <span className="text-[#D7BC6D]">ذكا</span>
                <span className="text-white"> is Coming</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're crafting something extraordinary—a platform designed to redefine legal intelligence in the Emirates. Be among the first to experience the future of regulatory compliance.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-2xl p-8 text-center hover:border-[#D7BC6D]/50 hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#D7BC6D] mx-auto mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5 6.75m0 0L17.25 13.5M10.5 6.75v10.5" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Intelligence</h3>
                <p className="text-sm text-gray-400">AI-Powered</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-2xl p-8 text-center hover:border-[#D7BC6D]/50 hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#D7BC6D] mx-auto mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Security</h3>
                <p className="text-sm text-gray-400">Enterprise</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-2xl p-8 text-center hover:border-[#D7BC6D]/50 hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#D7BC6D] mx-auto mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Focused</h3>
                <p className="text-sm text-gray-400">UAE</p>
              </div>
            </div>

            {/* Email Waitlist */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-3xl p-8 lg:p-10">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#D7BC6D]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <h3 className="text-lg font-bold text-white">Get Early Access</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Join our exclusive waitlist for priority access, early pricing, and first-hand updates on our development progress.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 bg-black/50 border border-[#D7BC6D]/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D7BC6D]/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-[#D7BC6D] to-[#CBA344] rounded-2xl font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(215,188,109,0.4)] flex items-center justify-center gap-2"
                  >
                    Join Waitlist
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* What's Coming */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-white mb-8">What's Coming</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-full hover:border-[#D7BC6D]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#D7BC6D]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-gray-300">Smart Workspace</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-full hover:border-[#D7BC6D]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#D7BC6D]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-gray-300">AI Legal Assistant</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-full hover:border-[#D7BC6D]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#D7BC6D]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-gray-300">Real-Time Monitoring</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-full hover:border-[#D7BC6D]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#D7BC6D]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-gray-300">Automated Drafting</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-[#D7BC6D]/20 rounded-full hover:border-[#D7BC6D]/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#D7BC6D]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-gray-300">Compliance Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
