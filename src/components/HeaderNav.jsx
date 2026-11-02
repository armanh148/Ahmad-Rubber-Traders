import { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP = '923116103661';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: '4-Steps', href: '#steps' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Industries', href: '#industries' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Contact', href: '#contact' },
];

export default function HeaderNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative z-30 w-full flex items-center justify-between py-4 sm:py-6 px-4 sm:px-8 lg:px-12">
      {/* Brand Logo */}
      <a
        href="#home"
        onClick={(e) => handleNav(e, '#home')}
        className="flex items-center gap-2.5 sm:gap-3 group"
      >
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-extrabold text-base sm:text-lg shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24">
            <path d="M7 2a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5h1V7a5 5 0 0 0-5-5zm10 0a5 5 0 0 0-5 5v5h1a5 5 0 0 0 5-5 5 5 0 0 0-1-5zm-5 10H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5v-5zm1 0v5a5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5h-5z" />
          </svg>
        </div>
        <div className="text-white">
          <div className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight leading-none">
            Ahmad Rubber
          </div>
          <div className="text-sky-300 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-0.5">
            Traders · Lahore
          </div>
        </div>
      </a>

      {/* Desktop & Laptop Nav Links (lg:flex) */}
      <div className="hidden lg:flex items-center gap-5 xl:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNav(e, link.href)}
            className="text-white/85 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors relative py-1 group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Right Pill CTA (Tablet & Desktop) */}
      <div className="hidden sm:flex items-center gap-3">
        <a
          href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20factory%20quote.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 text-xs font-extrabold uppercase tracking-wider px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 group"
        >
          <span>Get a Quote</span>
          <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight size={11} />
          </div>
        </a>
      </div>

      {/* Mobile & Tablet Drawer Trigger (hidden on lg) */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden p-2 text-white bg-white/15 backdrop-blur-md rounded-xl border border-white/20 active:scale-95 transition-transform"
        aria-label="Toggle Navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile & Tablet Drawer */}
      {mobileOpen && (
        <div className="absolute top-16 sm:top-20 inset-x-2 sm:inset-x-4 bg-slate-950/98 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/20 shadow-2xl text-white space-y-2 lg:hidden animate-fadeIn z-50">
          <div className="grid grid-cols-2 gap-1 sm:gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-slate-200 hover:text-sky-400 font-bold text-xs sm:text-sm py-2 px-2.5 rounded-lg hover:bg-white/5 uppercase tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20factory%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-full shadow-lg"
            >
              <MessageCircle size={15} />
              <span>Chat on WhatsApp (+92 311 6103661)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
