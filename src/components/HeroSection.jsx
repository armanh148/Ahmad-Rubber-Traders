import HeaderNav from './HeaderNav';
import { ArrowRight, Star, ShieldCheck, Factory, Truck, CheckCircle2 } from 'lucide-react';

const WHATSAPP = '923116103661';

const trustBadges = [
  { label: '100% Vulcanized', sub: 'Natural & Synthetic' },
  { label: 'Direct Factory', sub: 'Lahore Depot' },
  { label: 'All-Pakistan', sub: 'Fast Cargo' },
  { label: '4.9★ Rated', sub: '77 Reviews' },
];

export default function HeroSection() {
  return (
    <section id="home" className="px-2 sm:px-6 lg:px-10 pt-2 sm:pt-4 pb-8 sm:pb-12 bg-slate-50">
      <div className="max-w-[1600px] mx-auto relative rounded-2xl sm:rounded-3xl lg:rounded-[44px] overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between shadow-2xl border border-slate-900/30">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1800&q=88&fit=crop"
          alt="Heavy Industrial Logistics Cargo"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.12]"
        />

        {/* Multi-layered Vignette Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-transparent to-slate-950/50 pointer-events-none" />

        {/* 1. Integrated Navbar */}
        <HeaderNav />

        {/* 2. Center / Bottom Content Grid */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12 pt-8 sm:pt-16 grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left Column: Rating Stars + 3-Line Statement */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* 5-Star Rating Pill */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold shadow-md">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="#eab308" className="text-yellow-400" />
                ))}
              </div>
              <span className="font-extrabold text-white text-xs sm:text-sm">4.9★</span>
              <span className="text-slate-200 hidden sm:inline">· Verified on Google Maps (77 Reviews)</span>
              <span className="text-slate-200 sm:hidden">· 77 Reviews</span>
            </div>

            {/* 3-Line Statement with fluid typography */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] tracking-tight">
              Fast Delivery.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200">
                Trusted Service.
              </span><br />
              Smart Pricing.
            </h1>

            {/* Bottom Circular Trust Badges */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-white/90">
              {trustBadges.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-white/15 text-[11px] sm:text-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span className="font-extrabold text-white">{b.label}</span>
                  <span className="text-slate-400 font-normal hidden md:inline">· {b.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Subtitle + CTA Buttons */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 lg:pl-6">
            <p className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
              Pakistan's trusted manufacturer of{' '}
              <strong className="text-white font-bold">17mm vulcanized dairy cow mats</strong>,{' '}
              <strong className="text-white font-bold">EVA interlocking flooring sheets</strong>, and{' '}
              <strong className="text-white font-bold">milking parlor drainage mats</strong>. Built for extreme bovine wear, zero hoof slips, and direct wholesale pricing.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              {/* White Pill Button with Arrow */}
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-6 sm:px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all active:scale-95 group"
              >
                <span>Request Quote</span>
                <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight size={12} />
                </div>
              </a>

              {/* Direct WhatsApp Call */}
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20want%20to%20order%20mats.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sky-600/90 hover:bg-sky-500 text-white font-bold px-6 sm:px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all backdrop-blur-md border border-sky-400/40 shadow-lg active:scale-95"
              >
                <span>Direct WhatsApp</span>
              </a>
            </div>

            <div className="text-[11px] sm:text-xs text-sky-200/90 font-medium flex items-center gap-2 pt-1">
              <Truck size={14} className="text-sky-400 flex-shrink-0" />
              <span>Prompt Cargo Dispatch to All Pakistan Dairy Hubs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
