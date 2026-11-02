import { ArrowRight, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function CtaBannerSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Sky-Blue High-Impact Rounded Banner Card (Exact Reference Recreation) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle geometric pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading, Subtext, and Pill CTA Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-white border border-white/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready Stock Available in Lahore Depot</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Ready to Upgrade Your<br />
                Livestock Flooring Operations?
              </h2>

              <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
                Direct factory pricing, custom mat cuts, and reliable cargo delivery to all major cities across Pakistan. Speak directly with our technical team today.
              </p>

              {/* Pill CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20am%20ready%20to%20order%20mats.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-95"
                >
                  <MessageCircle size={15} className="text-emerald-600" />
                  <span>Start WhatsApp Order</span>
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <ArrowRight size={12} />
                  </div>
                </a>

                <a
                  href="tel:+923116103661"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3.5 rounded-full text-xs transition-colors backdrop-blur-sm border border-white/30"
                >
                  <Phone size={14} />
                  <span>+92 311 6103661</span>
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-sky-100 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-white" /> Direct Factory Wholesale
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-white" /> All-Pakistan Dispatch
                </span>
              </div>
            </div>

            {/* Right Column: Visual Industrial Cargo Container Graphic (Signature Reference Image Look) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Crane cable line */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-16 bg-slate-800/80 z-20" />
                <div className="absolute -top-16 left-1/4 w-0.5 h-16 bg-slate-800/60 z-20" />
                <div className="absolute -top-16 right-1/4 w-0.5 h-16 bg-slate-800/60 z-20" />

                {/* Orange Hanging Container Card with Brand Name */}
                <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 rounded-2xl p-6 text-white shadow-2xl border-4 border-orange-400 z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-orange-200">
                      CONTAINER ID: ART-LHR-2026
                    </span>
                    <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold">
                      HEAVY LOAD
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-orange-200 font-bold">
                      DIRECT LOGISTICS DISPATCH
                    </div>
                    <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-sm">
                      Ahmad Rubber
                    </div>
                    <div className="text-xs font-semibold text-orange-100">
                      Traders · Wachowali, Lahore
                    </div>
                  </div>

                  {/* Corrugated container lines */}
                  <div className="mt-4 pt-3 border-t border-white/20 grid grid-cols-6 gap-1.5 opacity-60">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-8 bg-black/20 rounded-xs" />
                    ))}
                  </div>
                </div>

                {/* Stacked containers below */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="bg-emerald-600 rounded-xl p-3 text-white shadow-md text-xs font-bold text-center">
                    <span>17MM VULCANIZED</span>
                  </div>
                  <div className="bg-amber-400 text-slate-900 rounded-xl p-3 shadow-md text-xs font-bold text-center">
                    <span>EVA INTERLOCKING</span>
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

