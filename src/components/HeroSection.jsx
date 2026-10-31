import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Award, Factory } from 'lucide-react';

const WHATSAPP = '923116103661';

const heroFeatures = [
  {
    num: '01',
    title: 'DIRECT FACTORY WHOLESALE',
    desc: 'Unmatched manufacturer rates straight from Lahore.',
  },
  {
    num: '02',
    title: '17MM VULCANIZED RUBBER',
    desc: 'Heavy anti-slip shock absorption for livestock.',
  },
  {
    num: '03',
    title: 'ALL-PAKISTAN LOGISTICS',
    desc: 'Direct cargo dispatch to all dairy farming hubs.',
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#f8f9fa] bg-grid-industrial overflow-hidden border-b border-zinc-200">
      {/* Giant faint architectural watermark behind hero */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none select-none opacity-5 font-heading text-[180px] lg:text-[260px] font-black uppercase text-zinc-900 tracking-tighter leading-none whitespace-nowrap">
        INDUSTRY
      </div>

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-12 lg:py-20 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT CONTENT (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7 z-10">
          {/* Subtle Tag */}
          <div
            className="inline-flex items-center gap-2.5 bg-white border border-zinc-300/80 px-3.5 py-1.5 shadow-xs w-fit"
            data-reveal="up"
          >
            <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-zinc-900 text-xs font-black tracking-[0.2em] uppercase font-heading">
              Ahmad Rubber Traders — Fleming Road, Lahore
            </span>
          </div>

          {/* Heavy Condensed Industrial Headline (Matching Reference) */}
          <h1
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-950 uppercase leading-[0.95] tracking-tight"
            data-reveal="up"
            style={{ '--reveal-delay': '90ms' }}
          >
            RELIABLE DAIRY FARM<br />
            <span className="text-orange-500 drop-shadow-xs">RUBBER &amp; FLOORING</span><br />
            <span className="text-zinc-900">SOLUTIONS.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
            data-reveal="up"
            style={{ '--reveal-delay': '170ms' }}
          >
            Specialized manufacturing &amp; direct wholesale supply of{' '}
            <strong className="text-zinc-950 font-bold">heavy-duty rubber cow mats</strong>,{' '}
            <strong className="text-zinc-950 font-bold">EVA interlocking sheets</strong>, and{' '}
            <strong className="text-zinc-950 font-bold">milking parlor mats</strong> engineered to prevent cattle slip injuries,
            maintain hygiene, and withstand extreme agricultural wear.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            data-reveal="up"
            style={{ '--reveal-delay': '250ms' }}
          >
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-shine inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>Request Bulk Quote</span>
              <div className="w-6 h-6 bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} />
              </div>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20want%20to%20place%20a%20direct%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 group"
            >
              <MessageCircle size={16} className="text-emerald-400 icon-motion" />
              <span>Direct WhatsApp Order</span>
            </a>
          </div>

          {/* Bottom 3-Card Feature Bar (Exact match to reference bottom boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-300/80">
            {heroFeatures.map((feat, i) => (
              <div
                key={feat.num}
                className="hover-lift bg-white border border-zinc-200 p-4 relative group hover:border-orange-500 shadow-xs hover:shadow-lg"
                data-reveal="up"
                style={{ '--reveal-delay': `${330 + i * 90}ms` }}
              >
                <div className="text-orange-500 font-heading font-black text-2xl leading-none mb-1 transition-transform duration-300 group-hover:translate-x-1">
                  {feat.num}
                </div>
                <div className="font-heading font-black text-sm uppercase text-zinc-950 tracking-wide leading-tight">
                  {feat.title}
                </div>
                <div className="text-zinc-500 text-xs mt-1 leading-snug">
                  {feat.desc}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL: Industrial Engineer + Overlapping Spark Card (5 cols) */}
        <div
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
          data-reveal="right"
          style={{ '--reveal-delay': '220ms' }}
        >
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Main Portrait Frame */}
            <div className="group relative overflow-hidden border-4 border-white shadow-2xl bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=85&fit=crop"
                alt="Industrial rubber plant operator"
                className="w-full h-[520px] sm:h-[580px] object-cover object-top filter contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* High-contrast industrial gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Orange Industrial Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 pointer-events-none border-b-2 border-l-2 border-orange-500" />

              {/* Rating Stamp inside photo */}
              <div className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-3 shadow-xl">
                <div className="font-heading text-3xl font-black leading-none">4.9★</div>
                <div className="text-[10px] font-black uppercase tracking-wider text-black mt-0.5">
                  Google Maps Verified
                </div>
                <div className="text-[11px] font-bold text-white leading-none">77 Genuine Reviews</div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 border border-zinc-200 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-orange-600 text-[10px] font-extrabold uppercase tracking-widest font-heading">
                    Wholesale Warehouse
                  </div>
                  <div className="font-heading font-black text-zinc-950 text-base sm:text-lg uppercase">
                    34 Jamia St, Fleming Rd, Lahore
                  </div>
                </div>
                <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center flex-shrink-0">
                  <Factory size={20} />
                </div>
              </div>
            </div>

            {/* Overlapping Sparks Thumbnail Card (Exact Reference Feature) */}
            <div className="hidden sm:flex animate-float absolute -bottom-8 -left-8 bg-zinc-950 border-2 border-zinc-700 p-2 shadow-2xl w-48 flex-col gap-2 z-20 hover:border-orange-500 transition-colors duration-300">
              <div className="relative h-24 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                  alt="Industrial manufacturing sparks"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <span className="absolute top-1 left-1 bg-orange-500 text-black text-[9px] font-black uppercase px-1.5 py-0.5">
                  100% RAW
                </span>
              </div>
              <div className="text-white font-heading font-bold text-xs uppercase px-1 pb-1">
                Vulcanized Rubber Testing Facility
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Ticker Ribbon (Full Width) */}
      <div className="bg-orange-500 py-3 overflow-hidden border-y-2 border-zinc-900">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 font-heading font-black text-sm uppercase tracking-[0.2em] text-zinc-950">
              <span>★ 17MM HEAVY-DUTY COW MATS</span>
              <span className="opacity-40">◆</span>
              <span>★ EVA INTERLOCKING FLOOR SHEETS</span>
              <span className="opacity-40">◆</span>
              <span>★ MILKING PARLOR WATERPROOF MATS</span>
              <span className="opacity-40">◆</span>
              <span>★ DIRECT FACTORY WHOLESALE RATES</span>
              <span className="opacity-40">◆</span>
              <span>★ ALL PAKISTAN CARGO DISPATCH</span>
              <span className="opacity-40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
