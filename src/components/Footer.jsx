import { Phone, MessageCircle, MapPin, ExternalLink, ChevronRight, Star, Clock } from 'lucide-react';

const WHATSAPP = '923116103661';
const YEAR = new Date().getFullYear();

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Product Solutions', href: '#solutions' },
  { label: 'Specifications & Pricing', href: '#products' },
  { label: 'Industrial Experts', href: '#team' },
  { label: 'Bulk Calculator', href: '#calculator' },
  { label: 'Customer Reviews', href: '#reviews' },
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
      {/* Orange pre-footer banner */}
      <div className="border-b border-black/10 bg-orange-500">
        <div className="shell flex flex-col items-start justify-between gap-6 py-8 md:flex-row md:items-center">
          <div data-reveal="up">
            <div className="font-heading text-2xl font-black uppercase leading-none tracking-tight text-black sm:text-3xl">
              Ready to upgrade your farm flooring?
            </div>
            <div className="mt-2 text-xs font-bold text-zinc-950/80 sm:text-sm">
              Factory wholesale rates · Immediate dispatch from Wachowali Bazaar, Lahore
            </div>
          </div>
          <div
            className="flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center md:w-auto"
            data-reveal="up"
            style={{ '--reveal-delay': '100ms' }}
          >
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20am%20ready%20to%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group flex items-center justify-center gap-2 bg-zinc-950 px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-zinc-900 active:scale-95"
            >
              <MessageCircle size={15} className="text-emerald-400 icon-motion" />
              <span>Instant WhatsApp inquiry</span>
            </a>
            <a
              href="tel:+923116103661"
              className="flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              <Phone size={14} />
              <span>+92 311 6103661</span>
            </a>
          </div>
        </div>
      </div>

      <div className="gradient-divider" />

      {/* Main footer */}
      <div className="relative">
        {/* Watermark */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
          <span className="block whitespace-nowrap text-center font-heading text-[100px] font-black uppercase leading-none tracking-tighter text-zinc-900/40 sm:text-[150px] lg:text-[200px]">
            AHMAD RUBBER
          </span>
        </div>

        <div className="shell relative grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4" data-reveal="up">
            <div className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center bg-orange-500 shadow-lg transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                <span className="font-heading text-xl font-black tracking-tighter text-white">ART</span>
              </div>
              <div className="leading-none">
                <div className="font-heading text-xl font-extrabold uppercase tracking-tight text-white">
                  Ahmad Rubber Traders
                </div>
                <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-orange-500">
                  Industrial flooring · Lahore
                </div>
              </div>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-zinc-400 sm:text-sm">
              Pakistan's trusted supplier of heavy-duty dairy cow mats, high-density EVA flooring
              sheets, and milking parlor mats. Direct factory wholesale rates.
            </p>

            <div className="flex items-center gap-3 border border-zinc-800 bg-zinc-900/70 p-3.5">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#eab308" className="text-yellow-500" />
                ))}
              </span>
              <span className="text-sm font-black text-white">4.9 / 5</span>
              <span className="text-[11px] text-zinc-400">77 verified Maps reviews</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
              <Clock size={12} className="text-orange-500" />
              <span>Mon – Sat · 9:00 AM – 7:30 PM</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4 lg:col-span-2" data-reveal="up" style={{ '--reveal-delay': '80ms' }}>
            <div className="border-b border-zinc-800 pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => goto(e, l.href)}
                    className="group flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-orange-400"
                  >
                    <ChevronRight
                      size={11}
                      className="text-orange-500 transition-transform group-hover:translate-x-0.5"
                    />
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4 lg:col-span-3" data-reveal="up" style={{ '--reveal-delay': '160ms' }}>
            <div className="border-b border-zinc-800 pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Rubber products
            </div>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    onClick={(e) => goto(e, '#products')}
                    className="group flex items-start gap-1.5 text-xs font-medium leading-relaxed text-zinc-400 transition-colors hover:text-orange-400"
                  >
                    <ChevronRight
                      size={11}
                      className="mt-0.5 flex-shrink-0 text-orange-500 transition-transform group-hover:translate-x-0.5"
                    />
                    <span>{p}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 lg:col-span-3" data-reveal="up" style={{ '--reveal-delay': '240ms' }}>
            <div className="border-b border-zinc-800 pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Physical location
            </div>

            <div className="space-y-3.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-orange-500" />
                <span className="leading-relaxed">
                  34 Jamia Street, Fleming Road,
                  <br />
                  Wachowali Bazaar, Lahore, Punjab
                </span>
              </div>

              <a
                href="tel:+923116103661"
                className="flex items-center gap-2.5 transition-colors hover:text-orange-400"
              >
                <Phone size={14} className="flex-shrink-0 text-orange-500" />
                <span className="font-mono font-bold text-white">+92 311 6103661</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-emerald-400"
              >
                <MessageCircle size={14} className="flex-shrink-0 text-emerald-500" />
                <span className="font-bold text-white">WhatsApp business active</span>
              </a>

              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:border-orange-500 hover:bg-zinc-800"
                >
                  <MapPin size={12} className="text-orange-500 icon-motion" />
                  <span>Open in Google Maps</span>
                  <ExternalLink
                    size={10}
                    className="opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-zinc-900 bg-black/60">
        <div className="shell flex flex-col items-center justify-between gap-3 py-5 text-[11px] text-zinc-500 sm:flex-row">
          <div>© {YEAR} Ahmad Rubber Traders, Lahore. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Verified on Google Maps &amp; WhatsApp
            </span>
            <span className="hidden font-mono uppercase tracking-wider text-zinc-600 sm:inline">
              Factory direct
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

