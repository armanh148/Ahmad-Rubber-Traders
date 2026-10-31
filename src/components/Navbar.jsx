import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';

const WHATSAPP = '923116103661';
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Excellence', href: '#excellence' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'Experts', href: '#team' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('scroll', fn);
      window.removeEventListener('resize', fn);
    };
  }, []);

  const goto = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-zinc-200'
          : 'bg-white border-b border-zinc-200'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => goto(e, '#home')} className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 bg-orange-500 flex items-center justify-center font-black text-white text-2xl tracking-tighter shadow-md shadow-orange-500/30 group-hover:bg-orange-600 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
            ART
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950 uppercase tracking-tight leading-none">
              Ahmad Rubber Traders
            </div>
            <div className="text-orange-600 text-[10px] font-extrabold tracking-[0.25em] uppercase mt-1">
              Industrial Flooring &amp; Mats · Lahore
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => goto(e, l.href)}
              className="text-zinc-700 hover:text-orange-600 font-bold text-xs uppercase tracking-[0.15em] transition-colors relative py-1.5 group"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20factory-rate%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 text-xs uppercase tracking-widest transition-all shadow-md shadow-orange-500/25 active:scale-95 group btn-shine"
          >
            <MessageCircle size={15} className="icon-motion" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-zinc-900 hover:text-orange-600 p-2 border border-zinc-300 rounded-sm"
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 border-t border-zinc-200 shadow-xl' : 'max-h-0'
        } bg-white`}
      >
        <div className="px-6 py-5 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => goto(e, l.href)}
              className="block text-zinc-900 hover:text-orange-600 py-2.5 font-bold text-sm uppercase tracking-wider border-b border-zinc-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-orange-500 text-white font-extrabold px-4 py-3 text-xs uppercase tracking-widest mt-3 shadow-md"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp (+92 311 6103661)</span>
          </a>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)] transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
    </nav>
  );
}
