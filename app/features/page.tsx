export default function Features() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px]">
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

        <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
          <div className="mx-auto max-w-5xl lg:text-center">
            <h2 className="text-base font-bold text-white mb-4">Purpose-Built <span className="text-[#D7BC6D]">Legal Intelligence</span></h2>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-[#D7BC6D] sm:text-6xl lg:text-7xl leading-tight">
              <span className="text-white">Features </span> <span className="drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Overview</span>
            </h1>
            <p className="mt-8 text-base text-gray-300 lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Explore the capabilities that make <span className="text-[#D7BC6D] font-semibold">ThakAlذكا</span> a powerful partner in <span className="text-[#D7BC6D] font-semibold">navigating complex regulations </span>and fulfill business needs within minutes, <span className="text-[#D7BC6D] font-semibold">saving you time and money.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative isolate px-6 py-8 lg:px-12">
        <div className="mx-auto max-w-8xl">
          {/* Workspace Section */}
            <section className="py-8">
              <div className="gap-12 items-start px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
                <div className="font-light text-gray-400 text-base lg:text-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-pretty text-white sm:text-4xl lg:text-5xl leading-tight">
                    Workspace <span className="font-bold text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Dashboard</span>
                  </h2>
                  <dd className="mt-6 text-base text-gray-300 leading-relaxed">
                    <span className="text-[#D7BC6D] font-semibold">ThakAlذكا</span>'s Workspace is a <span className="text-[#D7BC6D] font-semibold">customizable environment built</span> to fit the way your organization works. You can structure it by domain, sector, or project, ensuring that <span className="text-[#D7BC6D] font-semibold">regulations, documents, and insights</span> are always organized and accessible.<br /><br /> With precise control over knowledge and context, teams can collaborate seamlessly while maintaining clarity and compliance.
                  </dd>

                  <div className="space-y-4 mt-8">
                    <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                      <dt className="inline font-bold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        Customizable <span className="text-[#D7BC6D]">Organization</span>
                      </dt>
                      <dd className="inline text-sm text-gray-300"> - Structure by domain, sector, or project.</dd>
                    </div>
                    <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                      <dt className="inline font-bold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        Seamless <span className="text-[#D7BC6D]">Collaboration</span>
                      </dt>
                      <dd className="inline text-sm text-gray-300"> - Teams work together with shared context</dd>
                    </div>
                    <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                      <dt className="inline font-bold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        Always <span className="text-[#D7BC6D]">Accessible</span>
                      </dt>
                      <dd className="inline text-sm text-gray-300"> - Regulations and documents at your fingertips</dd>
                    </div>
                  </div>
                </div>
                {/* <div className="self-stretch flex mt-8">
                  <img className="w-full h-full rounded-2xl shadow-[0px_0px_40px_rgba(215,188,109,0.4)] border border-[#D7BC6D]/50 hover:shadow-[0px_0px_60px_rgba(215,188,109,0.6)] transition-all duration-500 object-cover" src="/assets/workspace.png" alt="workspace dashboard" />
                </div> */}
                <div className="mt-8">
                    <img className="w-full rounded-lg" src="./assets/ui1.png" alt="office content 1" />
                </div>
              </div>
            </section>

            {/* Real Time News Feed Section */}
            <div className="py-24 sm:py-16">
              <div className="mx-auto max-w-screen-xl px-6 lg:px-12 lg:flex bg-gradient-to-br from-[#D7BC6D]/5 to-[#CBA344]/5 backdrop-blur-sm border border-[#D7BC6D]/30 rounded-3xl p-12 hover:border-[#D7BC6D]/50 transition-all duration-300">
                <div className="mx-auto max-w-xl lg:text-start">
                  <h2 className="text-base font-bold text-[#D7BC6D]">Continuous Stream of Knowledge</h2>
                  <h2 className="mb-4 mt-2 text-3xl tracking-tight font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                    Real Time <span className="font-bold text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">News Feed</span>
                  </h2>
                  <p className="mt-6 text-base text-gray-300 leading-relaxed">
                    Stay ahead with instant updates on the latest regulatory changes, government announcements, and industry developments. By transforming scattered updates into a continuous stream of relevant knowledge, <span className="text-[#D7BC6D] font-semibold">ThakAlذكا empowers businesses to act quickly and with confidence.</span>
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-8 lg:mt-0 lg:max-w-4xl text-gray-400 font-light text-base lg:pl-12">
                  <div className="space-y-4">
                    <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                      <dt className="inline font-bold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        Instant <span className="text-[#D7BC6D]">Updates</span>
                      </dt>
                      <dd className="inline text-sm text-gray-300"> - Latest regulatory changes delivered immediately to your workspace.</dd>
                    </div>
                    <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                      <dt className="inline font-bold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        Curated <span className="text-[#D7BC6D]">Insights</span>
                      </dt>
                      <dd className="inline text-sm text-gray-300"> - Government announcements and industry developments filtered for relevance.</dd>
                    </div>
                    <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                      <dt className="inline font-bold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                        Never Miss <span className="text-[#D7BC6D]">Critical Info</span>
                      </dt>
                      <dd className="inline text-sm text-gray-300"> - Continuous stream of knowledge empowers quick, confident action.</dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automated Drafting Section */}
              <section className="mt-24">
                <div className="gap-12 items-center px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:px-6">
                  <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-3xl p-6">
                    <img className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" src="/assets/ui2.png" alt="dashboard image" />
                  </div>
                  <div className="mt-8 md:mt-0">
                    <h2 className="text-base font-bold text-[#D7BC6D]">Aligned with legal standards</h2>
                    <h2 className="mb-4 mt-2 text-3xl tracking-tight font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                      Automated <span className="text-[#D7BC6D] font-bold drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Document Drafting</span>
                    </h2>
                    <p className="mb-6 font-light text-gray-300 text-base lg:text-lg leading-relaxed">
                      <span className="text-[#D7BC6D] font-semibold">ThakAlذكا</span> simplifies complex paperwork by generating tailored drafts for policies, contracts, and compliance documents in minutes. Using AI-driven templates mapped to UAE regulations, it ensures accuracy, consistency, and alignment with the latest legal standards.
                    </p>
                    <div className="space-y-6">
                      <div className="relative pl-20 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                        <dt className="inline font-bold text-white">
                          <div className="absolute left-6 flex size-12 items-center justify-center text-3xl font-bold text-[#D7BC6D] drop-shadow-[0px_0px_20px_rgba(215,188,109,0.7)]">
                            90%
                          </div>
                        </dt>
                        <dd className="text-base text-gray-200 leading-relaxed">
                          Time Saved <span className="text-[#D7BC6D]">on document creation</span>
                        </dd>
                      </div>
                      <div className="relative pl-20 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                        <dt className="inline font-bold text-white">
                          <div className="absolute left-6 flex size-12 items-center justify-center text-3xl font-bold text-[#D7BC6D] drop-shadow-[0px_0px_20px_rgba(215,188,109,0.7)]">
                            99%
                          </div>
                        </dt>
                        <dd className="text-base text-gray-200 leading-relaxed">
                          Accuracy <span className="text-[#D7BC6D]">on Legal compliance rate</span>
                        </dd>
                      </div>
                      <div className="relative pl-20 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                        <dt className="inline font-bold text-white">
                          <div className="absolute left-6 flex size-12 items-center justify-center text-2xl font-bold text-[#D7BC6D] drop-shadow-[0px_0px_20px_rgba(215,188,109,0.7)]">
                            5min
                          </div>
                        </dt>
                        <dd className="text-base text-gray-200 leading-relaxed">
                          Draft Time <span className="text-[#D7BC6D]">average completion</span>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Smart Database Search Section */}
          <div className="py-16">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <p className="relative mt-2 text-3xl font-bold tracking-tight text-pretty text-white sm:text-4xl lg:text-5xl leading-tight">
                  Smart Database<span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]"> Search Section</span>
                </p>
                <p className="relative mt-4 text-2xl font-bold tracking-tight text-pretty text-white sm:text-3xl lg:text-4xl leading-tight">
                  Intelligent<span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]"> Document Discovery</span>
                </p>
                <p className="relative mt-6 text-base text-gray-300 lg:text-lg max-w-4xl mx-auto leading-relaxed">
                  <span className="text-[#D7BC6D] font-semibold">Quickly locate important</span> details across vast collections of <span className="text-[#D7BC6D] font-semibold">contracts, emails and documents. Our Smart Database Search</span> interprets your queries and delivers accurate, relevant results in <span className="text-[#D7BC6D] font-semibold">seconds.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 text-white text-sm mt-16 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                    <dt className="font-bold text-[#D7BC6D] text-lg mb-2">Natural Language Queries</dt>
                    <dd className="text-gray-300 leading-relaxed">Search using everyday language instead of complex legal terms</dd>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                    </svg>
                    <dt className="font-bold text-[#D7BC6D] text-lg mb-2">Intelligent Filtering</dt>
                    <dd className="text-gray-300 leading-relaxed">AI-powered filtering delivers only the most relevant results.</dd>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    <dt className="font-bold text-[#D7BC6D] text-lg mb-2">Instant Results</dt>
                    <dd className="text-gray-300 leading-relaxed">Get accurate answers in seconds, not hours of manual review</dd>
                  </div>
                </div>
              </div>
              <h2 className="relative text-base font-semibold text-white mt-20 border-l-4 border-[#D7BC6D] pl-4 bg-white/5 backdrop-blur-sm rounded-r-2xl p-6 max-w-4xl mx-auto leading-relaxed">
                By removing the burden of manual review, it <span className="text-[#D7BC6D]">frees up time for higher-value strategic & creative work</span>
              </h2>
            </div>
          </div>

          {/* Compliance Monitoring Section */}
          <div className="py-16">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-bold text-[#D7BC6D]">Complex compliance to simple process</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-pretty text-white sm:text-4xl lg:text-5xl lg:text-balance leading-tight">
                Compliance  <span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Monitor</span>
              </p>
              <p className="mt-6 text-base text-gray-300 lg:text-lg leading-relaxed">
                <span className="text-[#D7BC6D] font-semibold">ThakAlذكا</span>'s Compliance Monitor transforms complex compliance tracking into a simple, automated process, protecting organizations from costly oversights and ensuring peace of mind.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
                <div className="relative pl-20 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <dt className="text-base font-bold text-white">
                    <div className="absolute top-6 left-6 flex size-12 items-center justify-center text-4xl font-bold text-[#D7BC6D] drop-shadow-[0px_0px_30px_rgba(215,188,109,0.8)]">
                      01
                    </div>
                    Continuous <span className="text-[#D7BC6D]">Scanning</span>
                  </dt>
                  <dd className="mt-2 text-base text-gray-400 leading-relaxed">
                    Automatically monitors regulatory updates across all relevant jurisdictions and industries.
                  </dd>
                </div>
                <div className="relative pl-20 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <dt className="text-base font-bold text-white">
                    <div className="absolute top-6 left-6 flex size-12 items-center justify-center text-4xl font-bold text-[#D7BC6D] drop-shadow-[0px_0px_30px_rgba(215,188,109,0.8)]">
                      02
                    </div>
                    Impact <span className="text-[#D7BC6D]">Analysis</span>
                  </dt>
                  <dd className="mt-2 text-base text-gray-400 leading-relaxed">
                    Identifies specific changes that directly affect your business operations.
                  </dd>
                </div>
                <div className="relative pl-20 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <dt className="text-base font-bold text-white">
                    <div className="absolute top-6 left-6 flex size-12 items-center justify-center text-4xl font-bold text-[#D7BC6D] drop-shadow-[0px_0px_30px_rgba(215,188,109,0.8)]">
                      03
                    </div>
                    Risk <span className="text-[#D7BC6D]">Flagging</span>
                  </dt>
                  <dd className="mt-2 text-base text-gray-400 leading-relaxed">
                    Highlights compliance gaps and potential risks before they become problems.
                  </dd>
                </div>
                <div className="relative pl-20 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <dt className="text-base font-bold text-white">
                    <div className="absolute top-6 left-6 flex size-12 items-center justify-center text-4xl font-bold text-[#D7BC6D] drop-shadow-[0px_0px_30px_rgba(215,188,109,0.8)]">
                      04
                    </div>
                    Clear <span className="text-[#D7BC6D]">Guidance</span>
                  </dt>
                  <dd className="mt-2 text-base text-gray-400 leading-relaxed">
                    Provides actionable steps to maintain alignment with evolving requirements.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Knowledge Base and Document Reader Section */}
          <div className="py-16">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="relative text-base font-bold text-[#D7BC6D]">
                  Complex legal texts to clear insightful data
                </h2>
                <p className="relative mt-2 text-3xl font-bold tracking-tight text-pretty text-white sm:text-4xl lg:text-5xl leading-tight">
                  Knowledge Base & <span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Document Reader</span>
                </p>
                <p className="relative mt-6 text-base text-gray-300 lg:text-lg max-w-4xl mx-auto leading-relaxed">
                  Access <span className="text-[#D7BC6D] font-semibold">ThakAlذكا</span>'s comprehensive legal knowledge base, complete with definitions, references, and cross-linked sources <span className="text-[#D7BC6D] font-semibold">covering UAE regulations</span>. Paired with an advanced document reader, it transforms dense legal texts into an accessible, searchable, and easy-to-analyze format.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white text-sm mt-16 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                    <dt className="font-bold text-[#D7BC6D] text-lg mb-2">Comprehensive Database</dt>
                    <dd className="text-gray-300 leading-relaxed">Complete UAE regulatory coverage with cross-references</dd>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <dt className="font-bold text-[#D7BC6D] text-lg mb-2">Advanced Search</dt>
                    <dd className="text-gray-300 leading-relaxed">Quick access to relevant legal information</dd>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <dt className="font-bold text-[#D7BC6D] text-lg mb-2">Smart Analysis</dt>
                    <dd className="text-gray-300 leading-relaxed">Transforms complex legal text into clear insights</dd>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-[#D7BC6D] mx-auto mb-4 drop-shadow-[0px_0px_20px_rgba(215,188,109,0.5)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <dt className="font-bold text-[#D7BC6D] text-lg mb-2">Advanced Document Reader</dt>
                    <dd className="text-gray-300 leading-relaxed">Accessible and easy to read legal texts</dd>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-8">
                  <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-3xl p-6 border border-[#D7BC6D]/30 hover:scale-105 transition-all duration-300">
                    <img className="w-full rounded-2xl shadow-2xl" src="/assets/ui3.png" alt="office content 1" />
                  </div>
                  <div className="bg-gradient-to-br from-[#D7BC6D]/10 to-[#CBA344]/10 rounded-3xl p-6 border border-[#D7BC6D]/30 hover:scale-105 transition-all duration-300">
                    <video autoPlay muted loop playsInline className="w-full rounded-2xl shadow-2xl">
                      <source src="/assets/landing.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chatbot Section */}
          <section className="py-16">
            <div className="gap-12 items-center px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:px-6">
              <div className="bg-gradient-to-br">
                <img className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" src="/assets/ui2c.png" alt="dashboard image" />
              </div>
              <div className="mt-8 md:mt-0">
                <h2 className="text-base font-bold text-[#D7BC6D]">Your digital legal partner</h2>
                <h2 className="mb-4 mt-2 text-3xl tracking-tight font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                  Legal Assistant <span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Chatbot</span>
                </h2>
                <p className="relative mt-6 text-base text-gray-300 lg:text-lg leading-relaxed">
                  Access <span className="text-[#D7BC6D] font-semibold">ThakAlذكا Legal Assistant</span> is an intelligent AI chatbot designed to handle everything from regulatory research to task execution. Whether you need quick answers, step-by-step guidance, or support in drafting and compliance, it delivers precise responses instantly.
                </p>
                <div className="space-y-4 mt-8">
                  <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                    <dt className="inline font-bold text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      24/7 <span className="text-[#D7BC6D]">Availability</span>
                    </dt>
                    <dd className="inline text-sm text-gray-400"> - Round-the-clock digital legal partner ready to assist.</dd>
                  </div>
                  <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                    <dt className="inline font-bold text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                      Expert-Level <span className="text-[#D7BC6D]">Intelligence</span>
                    </dt>
                    <dd className="inline text-sm text-gray-400"> - AI-powered responses with legal accuracy</dd>
                  </div>
                  <div className="relative pl-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#D7BC6D]/20 hover:bg-white/10 hover:border-[#D7BC6D]/40 transition-all duration-300">
                    <dt className="inline font-bold text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute top-4 left-4 size-6 text-[#D7BC6D] drop-shadow-[0px_0px_10px_rgba(215,188,109,0.5)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                      Instant <span className="text-[#D7BC6D]">Results</span>
                    </dt>
                    <dd className="inline text-sm text-gray-400"> - Immediate answers and guidance when you need them.</dd>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
}
