import { Phone, MessageCircle, MapPin, ExternalLink, ChevronRight, Star, Clock } from 'lucide-react';

const WHATSAPP = '923116103661';
const YEAR = new Date().getFullYear();

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Product Solutions', href: '#solutions' },
  { label: 'Specifications & Pricing', href: '#products' },
  { label: 'Industrial Experts', href: '#team' },
  { label: 'Bulk Calculator', href: '#calculator' },
  { label: 'Customer Reviews', href: '#about' },
];

const productLinks = [
  'Heavy-Duty Dairy Cow Mats (17mm)',
  'EVA Interlocking Floor Sheets (10–25mm)',
  'Milking Parlor Drainage Mats (20mm)',
  'Ribbed Rubber Floor Runners (1.2m)',
  'Custom Industrial Cut Rubber Sheets',
];

export default function Footer() {
  const goto = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Orange Pre-Footer Banner (Matching Reference Image) */}
      <div className="bg-orange-500 py-6 px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div data-reveal="up">
            <div className="font-black text-black text-xl sm:text-2xl uppercase tracking-tight">
              Ready To Upgrade Your Dairy Farm Flooring?
            </div>
            <div className="text-zinc-950/80 text-sm font-bold mt-1">
              Direct factory wholesale rates · Immediate dispatch from Wachowali Bazaar, Lahore
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto" data-reveal="up" style={{ '--reveal-delay': '100ms' }}>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20am%20ready%20to%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-900 text-white font-black px-7 py-3.5 text-xs uppercase tracking-widest transition-all rounded-sm shadow-xl hover:-translate-y-0.5 active:scale-95 group"
            >
              <MessageCircle size={16} className="text-emerald-400 icon-motion" />
              <span>Instant WhatsApp Inquiry</span>
            </a>
            <a
              href="tel:+923116103661"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 font-black px-6 py-3.5 text-xs uppercase tracking-widest transition-all rounded-sm shadow-md hover:-translate-y-0.5"
            >
              <Phone size={15} />
              <span>+92 311 6103661</span>
            </a>
          </div>
        </div>
      </div>

      <div className="gradient-divider" />

      {/* Main Footer Container */}
      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-20">
        {/* Giant Watermark Graphic in Background */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
          <span
            className="text-[120px] sm:text-[180px] lg:text-[230px] font-black uppercase text-zinc-900/40 leading-none tracking-tighter whitespace-nowrap block"
            style={{ letterSpacing: '-0.04em' }}
          >
            AHMAD RUBBER
          </span>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5" data-reveal="up">
            <div className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-orange-500 flex items-center justify-center font-black text-white text-xl rounded-sm shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                ART
              </div>
              <div>
                <div className="font-black text-white text-lg tracking-wider uppercase leading-none">
                  Ahmad Rubber
                </div>
                <div className="font-bold text-orange-500 text-[10px] tracking-[0.25em] uppercase mt-1">
                  Traders — Lahore
                </div>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Pakistan's trusted industrial and agricultural supplier of heavy-duty dairy cow mats,
              high-density EVA flooring sheets, and milking parlor mats. Direct from factory wholesale rates.
            </p>

            {/* Google Verified Review Card */}
            <div className="bg-zinc-900/90 border border-zinc-800 p-3.5 rounded-sm flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#eab308" className="text-yellow-500" />
                ))}
              </div>
              <span className="text-white font-black text-sm">4.9 / 5</span>
              <span className="text-zinc-400 text-xs">(77 Verified Reviews on Maps)</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
              <Clock size={13} className="text-orange-500" />
              <span>Business Hours: Mon – Sat (9:00 AM – 7:30 PM)</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-2 space-y-4" data-reveal="up" style={{ '--reveal-delay': '80ms' }}>
            <div className="text-white font-black text-xs uppercase tracking-widest pb-3 border-b border-zinc-800">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => goto(e, l.href)}
                    className="group flex items-center gap-1.5 text-zinc-400 hover:text-orange-400 text-xs font-medium transition-colors"
                  >
                    <ChevronRight size={12} className="text-orange-500 group-hover:translate-x-0.5 transition-transform" />
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4" data-reveal="up" style={{ '--reveal-delay': '160ms' }}>
            <div className="text-white font-black text-xs uppercase tracking-widest pb-3 border-b border-zinc-800">
              Rubber Products
            </div>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    onClick={(e) => goto(e, '#products')}
                    className="group flex items-center gap-1.5 text-zinc-400 hover:text-orange-400 text-xs font-medium transition-colors"
                  >
                    <ChevronRight size={12} className="text-orange-500 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>{p}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Physical Address & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4" data-reveal="up" style={{ '--reveal-delay': '240ms' }}>
            <div className="text-white font-black text-xs uppercase tracking-widest pb-3 border-b border-zinc-800">
              Physical Location
            </div>

            <div className="space-y-3.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  34 Jamia Street, Fleming Road,<br />
                  Wachowali Bazaar, Lahore, Punjab, Pakistan
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-orange-500 flex-shrink-0" />
                <a href="tel:+923116103661" className="hover:text-orange-400 font-mono font-bold text-white transition-colors">
                  +92 311 6103661
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle size={14} className="text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-bold text-white transition-colors"
                >
                  WhatsApp Business Active
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold px-3.5 py-2 text-xs rounded-sm transition-all hover:-translate-y-0.5 group"
                >
                  <MapPin size={13} className="text-orange-500 icon-motion" />
                  <span>Open in Google Maps</span>
                  <ExternalLink size={11} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative border-t border-zinc-900 bg-black/60 px-6 sm:px-10 lg:px-16 xl:px-24 py-5">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div>
            © {YEAR} Ahmad Rubber Traders, Lahore. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified on Google Maps &amp; WhatsApp
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
