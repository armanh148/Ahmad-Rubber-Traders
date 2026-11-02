import { ArrowRight, Star, ShieldCheck, Factory, Truck } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function HeroSection() {
  return (
    <section id="home" className="px-4 sm:px-6 lg:px-10 pt-4 pb-12 bg-slate-50">
      {/* Big Rounded Hero Banner Container */}
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-8 sm:p-12 lg:p-16 shadow-2xl">
        {/* Background Image: Aerial Cargo / Logistics & Factory */}
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=85&fit=crop"
          alt="Heavy Industrial Logistics Cargo"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78]"
        />

        {/* Gradient overlays for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40" />

        {/* Top Trust Pill & Badges inside Hero */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-medium">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#eab308" className="text-yellow-400" />
              ))}
            </div>
            <span className="font-bold">4.9★</span>
            <span className="text-slate-300">· 77 Verified Google Maps Reviews</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-sky-400" /> 100% Vulcanized Rubber
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1.5">
              <Factory size={14} className="text-sky-400" /> Direct Lahore Factory
            </span>
          </div>
        </div>

        {/* Middle / Bottom Content Grid */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-end pt-16 sm:pt-24">
          {/* Left: Punchy 3-Line Heading (Exact Reference Style) */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
              Fast Delivery.<br />
              <span className="text-sky-400">Trusted Quality.</span><br />
              Smart Pricing.
            </h1>
          </div>

          {/* Right: Subtext & Rounded Pill Button */}
          <div className="lg:col-span-5 space-y-5 lg:pl-6">
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              Pakistan's trusted wholesale supplier of heavy-duty 17mm dairy cow mats,
              high-density EVA interlocking flooring, and milking parlor mats. Built for
              maximum livestock durability and direct factory savings.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <span>Request Quote</span>
                <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center">
                  <ArrowRight size={12} />
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20want%20to%20order%20cow%20mats.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600/90 hover:bg-sky-600 text-white font-semibold px-6 py-3.5 rounded-full text-xs transition-all backdrop-blur-sm border border-sky-400/30"
              >
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Client / Trust strip */}
        <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-white">Trusted by 500+ Dairy Operations:</span>
            <span className="hidden sm:inline">Punjab Livestock</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Sindh Commercial Farms</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">KP Agro Co-ops</span>
          </div>

          <div className="flex items-center gap-2 text-sky-300 font-semibold">
            <Truck size={14} />
            <span>Prompt All-Pakistan Dispatch from Wachowali, Lahore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
