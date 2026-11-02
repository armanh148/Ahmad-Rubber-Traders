import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

const WHATSAPP = '923116103661';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: '4-Step Process', href: '#steps' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Client Reviews', href: '#reviews' },
  { label: 'Bulk Calculator', href: '#calculator' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, '#home')}
          className="flex items-center gap-3.5 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform">
            ART
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight">
              Ahmad Rubber Traders
            </div>
            <div className="text-sky-600 text-[11px] font-bold tracking-wider uppercase">
              Factory Depot · Lahore
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-slate-600 hover:text-sky-600 text-xs font-bold uppercase tracking-wider transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Pill CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20factory%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md shadow-sky-600/25 hover:shadow-lg hover:shadow-sky-600/35 transition-all active:scale-95 group"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight size={12} />
            </div>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-sky-600 transition-colors rounded-xl border border-slate-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-slate-800 hover:text-sky-600 font-bold text-sm py-2.5 border-b border-slate-100 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-full mt-3 shadow-md"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp (+92 311 6103661)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

