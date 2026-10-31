import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WHATSAPP = '923116103661';

const highlights = [
  'Direct Manufacturer Sourcing — No Middlemen Markup',
  'Heavy Shock Absorption & Anti-Slip Ribbed Texture',
  'Customized Sheet Cutting & Thickness Tolerances',
  'Trusted by 500+ Dairy Farms Across Punjab & Sindh',
];

export default function ExcellenceSection() {
  return (
    <section id="excellence" className="bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 border-b border-zinc-200">
      <div className="w-full">
        {/* Section Pill */}
        <div className="text-center mb-6" data-reveal="up">
          <div className="badge-animated inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-orange-700">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>Industrial Heritage &amp; Capability</span>
          </div>
        </div>

        {/* Big Centered Headline with Inline Thumbnail Badge (Exact Reference Detail) */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 uppercase leading-[1.08] tracking-tight"
            data-reveal="up"
            style={{ '--reveal-delay': '80ms' }}
          >
            DRIVING INDUSTRIAL{' '}
            <span className="inline-flex items-center align-middle mx-1 px-2.5 py-0.5 bg-zinc-900 text-orange-400 border border-zinc-700 text-xs sm:text-sm font-sans font-bold normal-case tracking-normal rounded-sm shadow-xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-1.5 animate-pulse" />
              100% Genuine Rubber
            </span>{' '}
            EXCELLENCE THROUGH ADVANCED TECHNOLOGY, SKILLED EXPERIENCE, AND RELIABLE MANUFACTURING SOLUTIONS.
          </h2>
        </div>

        {/* 2-Column Split: Left Copy & List, Right Collage */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <p
              className="text-zinc-700 text-base sm:text-lg leading-relaxed font-normal"
              data-reveal="left"
            >
              At <strong className="text-zinc-950 font-bold">Ahmad Rubber Traders</strong>, we understand that farm flooring is not merely an accessory — it is the foundation of herd health, cattle lameness prevention, and dairy operation profitability.
            </p>
            <p
              className="text-zinc-600 text-sm sm:text-base leading-relaxed"
              data-reveal="left"
              style={{ '--reveal-delay': '80ms' }}
            >
              Based in Wachowali Bazaar, Fleming Road, Lahore, our manufacturing and wholesale facility supplies heavy-gauge vulcanized rubber mats and EVA foam sheets engineered to endure extreme bovine weights, heavy mechanical scrapers, and daily corrosive washdowns.
            </p>

            {/* Checklist */}
            <div
              className="grid sm:grid-cols-2 gap-3.5 pt-2"
              data-reveal="left"
              style={{ '--reveal-delay': '160ms' }}
            >
              {highlights.map((item) => (
                <div key={item} className="hover-lift group flex items-start gap-2.5 bg-zinc-50 border border-zinc-200 hover:border-orange-400 p-3 rounded-sm hover:shadow-md">
                  <CheckCircle2 size={16} className="text-orange-500 mt-0.5 flex-shrink-0 icon-motion" />
                  <span className="text-zinc-900 text-xs sm:text-sm font-bold leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-3" data-reveal="left" style={{ '--reveal-delay': '240ms' }}>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20tell%20me%20more%20about%20your%20dairy%20mats.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 group"
              >
                <span>Inquire Factory Pricing</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Overlapping Collage (6 cols) */}
          <div className="lg:col-span-6 relative" data-reveal="right" style={{ '--reveal-delay': '160ms' }}>
            <div className="relative">
              {/* Primary Image: Team inspecting with safety gear */}
              <div className="group relative overflow-hidden border-4 border-white shadow-xl bg-zinc-200">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85&fit=crop"
                  alt="Industrial engineers inspecting specifications"
                  className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-heading text-lg font-black uppercase">Technical QC Verification</div>
                  <div className="text-zinc-300 text-xs">Tensile strength &amp; durability tests on every batch</div>
                </div>
              </div>

              {/* Secondary Floating Video/Facility Card (Exact reference match) */}
              <div className="hidden sm:block animate-float absolute -bottom-10 -left-10 bg-zinc-950 text-white p-4 border-2 border-zinc-700 shadow-2xl w-64 z-20 hover:border-orange-500 transition-colors duration-300">
                <div className="relative h-28 overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80"
                    alt="Workshop operations"
                    className="w-full h-full object-cover filter brightness-90 transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-orange-500 text-black flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-black ml-1" />
                    </div>
                  </div>
                </div>
                <div className="font-heading font-black text-xs uppercase tracking-wide text-orange-400">
                  Lahore Wholesale Depot
                </div>
                <div className="text-zinc-400 text-[11px] leading-tight mt-0.5">
                  Over 10,000+ sq ft ready stock inventory
                </div>
              </div>

              {/* Floating Stat Stamp */}
              <div className="hidden sm:block absolute -top-6 -right-6 bg-orange-500 text-white p-4 shadow-xl text-center transition-transform duration-300 hover:scale-105 hover:-rotate-2">
                <div className="font-heading font-black text-3xl leading-none">10+</div>
                <div className="text-[10px] font-black uppercase tracking-wider text-black">Years Serving</div>
                <div className="text-[10px] font-bold text-white">Dairy Industry</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
