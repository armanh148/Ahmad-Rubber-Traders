import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight, Phone } from 'lucide-react';

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
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);

      let current = '#home';
      links.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 140) current = href;
      });
      setActive(current);
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
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-zinc-200 bg-white/92 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-zinc-200 bg-white'
      }`}
    >
      <div className="shell flex h-[76px] items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => goto(e, '#home')} className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center bg-orange-500 shadow-[0_8px_24px_-10px_rgba(249,115,22,0.9)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-11 sm:w-11">
            <span className="font-heading text-lg font-black tracking-tighter text-white sm:text-xl">ART</span>
            <span className="absolute -right-1 -top-1 h-2 w-2 bg-zinc-950" />
          </div>
          <div className="min-w-0 leading-none">
            <div className="truncate font-heading text-base font-extrabold uppercase tracking-tight text-zinc-950 sm:text-2xl">
              Ahmad Rubber Traders
            </div>
            <div className="mt-1.5 hidden text-[9px] font-extrabold uppercase tracking-[0.26em] text-orange-600 sm:block">
              Industrial Flooring &amp; Mats · Lahore
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => goto(e, l.href)}
              className={`relative px-2.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] transition-colors ${
                active === l.href
                  ? 'text-orange-700'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
              aria-current={active === l.href ? 'page' : undefined}
            >
              {l.label}
              <span
                className={`absolute inset-x-2.5 bottom-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                  active === l.href ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+923116103661"
            aria-label="Call Ahmad Rubber Traders"
            className="hidden h-10 w-10 items-center justify-center border border-zinc-200 text-zinc-600 transition-colors hover:border-orange-500 hover:text-orange-600 xl:flex"
          >
            <Phone size={15} />
          </a>

          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20factory-rate%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 bg-zinc-950 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-orange-500 hover:text-black sm:inline-flex"
          >
            <MessageCircle size={14} className="text-emerald-400 transition-colors group-hover:text-black" />
            <span>Factory quote</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center border border-zinc-300 text-zinc-900 transition-colors hover:border-orange-500 hover:text-orange-600 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden border-zinc-200 bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-[520px] border-t shadow-2xl' : 'max-h-0'
        }`}
      >
        <div className="shell space-y-1 py-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => goto(e, l.href)}
              className={`flex items-center justify-between border-b border-zinc-100 py-3 text-sm font-extrabold uppercase tracking-wider transition-colors ${
                active === l.href ? 'text-orange-600' : 'text-zinc-900 hover:text-orange-600'
              }`}
              aria-current={active === l.href ? 'page' : undefined}
            >
              <span>{l.label}</span>
              <ArrowUpRight size={15} className="opacity-40" />
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-orange-500 px-4 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-md"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp (+92 311 6103661)</span>
          </a>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </nav>
  );
}
