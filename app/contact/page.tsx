export default function Contact() {
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl leading-tight mb-6">
          Contact <span className="text-[#D7BC6D] drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">sales</span>
        </h2>
        <p className="mt-6 text-base text-gray-300 lg:text-lg leading-relaxed">
          Transform your business compliance with AI. Get started with <span className="text-[#D7BC6D] font-semibold">ThakAlذكا</span>, the <span className="text-[#D7BC6D] font-semibold">all-in-one legal tech platform</span> designed for every business.
        </p>
      </div>
      <form action="https://formsubmit.co/6b3a45a42f44df7891c82be4f1a5123b" method="POST" className="mx-auto max-w-2xl">
        <div className="bg-gradient-to-br from-[#D7BC6D]/5 to-[#CBA344]/5 backdrop-blur-sm border border-[#D7BC6D]/30 rounded-3xl p-8 lg:p-12 hover:border-[#D7BC6D]/50 transition-all duration-300 shadow-2xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-bold text-[#D7BC6D] mb-2">First name</label>
              <input
                id="first-name"
                type="text"
                name="first-name"
                autoComplete="given-name"
                className="block w-full rounded-2xl bg-white/5 backdrop-blur-sm px-4 py-3 text-base text-white border border-[#D7BC6D]/30 placeholder:text-gray-500 focus:border-[#D7BC6D] focus:ring-2 focus:ring-[#D7BC6D]/50 transition-all duration-300 hover:border-[#D7BC6D]/50"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-bold text-[#D7BC6D] mb-2">Last name</label>
              <input
                id="last-name"
                type="text"
                name="last-name"
                autoComplete="family-name"
                className="block w-full rounded-2xl bg-white/5 backdrop-blur-sm px-4 py-3 text-base text-white border border-[#D7BC6D]/30 placeholder:text-gray-500 focus:border-[#D7BC6D] focus:ring-2 focus:ring-[#D7BC6D]/50 transition-all duration-300 hover:border-[#D7BC6D]/50"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-bold text-[#D7BC6D] mb-2">Company</label>
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="organization"
                className="block w-full rounded-2xl bg-white/5 backdrop-blur-sm px-4 py-3 text-base text-white border border-[#D7BC6D]/30 placeholder:text-gray-500 focus:border-[#D7BC6D] focus:ring-2 focus:ring-[#D7BC6D]/50 transition-all duration-300 hover:border-[#D7BC6D]/50"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-bold text-[#D7BC6D] mb-2">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                className="block w-full rounded-2xl bg-white/5 backdrop-blur-sm px-4 py-3 text-base text-white border border-[#D7BC6D]/30 placeholder:text-gray-500 focus:border-[#D7BC6D] focus:ring-2 focus:ring-[#D7BC6D]/50 transition-all duration-300 hover:border-[#D7BC6D]/50"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold text-[#D7BC6D] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-2xl bg-white/5 backdrop-blur-sm px-4 py-3 text-base text-white border border-[#D7BC6D]/30 placeholder:text-gray-500 focus:border-[#D7BC6D] focus:ring-2 focus:ring-[#D7BC6D]/50 transition-all duration-300 hover:border-[#D7BC6D]/50"
              ></textarea>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="block w-full rounded-2xl bg-gradient-to-r from-[#D7BC6D] to-[#CBA344] px-6 py-4 text-center text-base font-semibold text-white shadow-2xl hover:scale-105 hover:shadow-[0px_0px_40px_rgba(215,188,109,0.6)] transition-all duration-300"
            >
              Let's talk
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
