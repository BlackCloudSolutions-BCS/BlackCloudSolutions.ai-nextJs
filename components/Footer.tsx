import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-8 md:p-12 lg:p-16 border-t border-[#D7BC6D]/20 bg-gradient-to-b from-transparent to-black/30">
      <div className="mx-auto max-w-screen-xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Black Cloud Solutions</h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              A revolutionary approach to navigating the complex UAE regulatory landscape, powered by advanced AI and semantic technology. Enabling enterprises to operate with confidence in an ever-evolving legal environment.
            </p>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              <span className="text-[#D7BC6D] font-semibold">ThakAI©</span> is designed for informational purposes and should complement, not replace, professional legal counsel.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/black-cloud-solutions" target="_blank" rel="noopener noreferrer" className="text-[#D7BC6D] hover:text-[#E5D08A] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Twitter and Facebook icons disabled */}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-[#D7BC6D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-gray-300 hover:text-[#D7BC6D] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-300 hover:text-[#D7BC6D] transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm text-gray-300 hover:text-[#D7BC6D] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-[#D7BC6D] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/app" className="text-sm text-gray-300 hover:text-[#D7BC6D] transition-colors">
                  Launch App
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-[#D7BC6D] transition-colors">
                  Schedule Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Privacy</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We do not retain confidential info. Each client operates on separate, isolated tenants with enterprise-grade security.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-[#D7BC6D]/20">
          <p className="text-sm text-gray-400">
            © 2025 Black Cloud Solutions – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
