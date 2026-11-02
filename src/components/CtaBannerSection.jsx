import { ArrowRight, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function CtaBannerSection() {
  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Sky-Blue High-Impact Rounded Banner Card (Responsive for all screen sizes) */}
        <div className="relative rounded-3xl sm:rounded-[36px] lg:rounded-[44px] bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white p-6 sm:p-10 lg:p-16 overflow-hidden shadow-2xl border border-sky-400/40 reveal-scale">
          {/* Subtle geometric dot pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1.5px, transparent 1.5px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext, and Pill CTA Buttons */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-white border border-white/30 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span>Ready Stock in Wachowali, Lahore Depot</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Ready to Upgrade Your<br />
                Livestock Flooring Operations?
              </h2>

              <p className="text-sky-100 text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg font-normal">
                Direct factory pricing, custom mat cuts, and reliable cargo delivery to all major cities across Pakistan. Speak directly with our technical team today.
              </p>

              {/* Pill CTA Buttons in 1 Line on All Screens */}
              <div className="flex flex-row items-center gap-2 sm:gap-3 pt-1">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20am%20ready%20to%20order%20mats.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-3.5 sm:px-8 py-3 sm:py-4 rounded-full text-[11px] sm:text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all active:scale-95 group whitespace-nowrap"
                >
                  <MessageCircle size={15} className="text-emerald-600 flex-shrink-0" />
                  <span>WhatsApp Order</span>
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                    <ArrowRight size={11} />
                  </div>
                </a>

                <a
                  href="tel:+923116103661"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-3 sm:px-7 py-3 sm:py-4 rounded-full text-[11px] sm:text-xs uppercase tracking-wider transition-colors backdrop-blur-md border border-white/30 whitespace-nowrap"
                >
                  <Phone size={13} className="flex-shrink-0" />
                  <span>Call Direct</span>
                </a>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-sky-100 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-white" /> Direct Wholesale Rates
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-white" /> Pan-Pakistan Cargo Delivery
                </span>
              </div>
            </div>

            {/* Right Column: Visual Industrial Cargo Container Graphic */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Crane cable line (visible on sm+) */}
                <div className="hidden sm:block absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-16 bg-slate-900/70 z-20" />
                <div className="hidden sm:block absolute -top-16 left-1/4 w-0.5 h-16 bg-slate-900/50 z-20" />
                <div className="hidden sm:block absolute -top-16 right-1/4 w-0.5 h-16 bg-slate-900/50 z-20" />

                {/* Orange Hanging Container Card with Brand Name */}
                <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-white shadow-2xl border-2 sm:border-4 border-orange-400/80 z-10">
                  <div className="flex items-center justify-between border-b border-white/25 pb-2.5 mb-3.5">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-orange-200 font-bold">
                      CONTAINER ID: ART-LHR-2026
                    </span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase">
                      HEAVY LOAD
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-orange-200 font-extrabold">
                      DIRECT LOGISTICS DISPATCH
                    </div>
                    <div className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-white drop-shadow-sm">
                      Ahmad Rubber
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-orange-100">
                      Traders · Wachowali, Lahore
                    </div>
                  </div>

                  {/* Corrugated container lines */}
                  <div className="mt-4 pt-3 border-t border-white/20 grid grid-cols-6 gap-1.5 sm:gap-2 opacity-50">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-8 sm:h-10 bg-black/20 rounded-xs" />
                    ))}
                  </div>
                </div>

                {/* Stacked containers below */}
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:gap-3.5">
                  <div className="bg-emerald-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white shadow-lg text-[10px] sm:text-xs font-extrabold text-center border sm:border-2 border-emerald-500">
                    <span>17MM COW MATS</span>
                  </div>
                  <div className="bg-amber-400 text-slate-950 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg text-[10px] sm:text-xs font-extrabold text-center border sm:border-2 border-amber-300">
                    <span>EVA TILES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
