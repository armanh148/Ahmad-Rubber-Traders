import { useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

const WHATSAPP = '923116103661';

const solutions = [
  {
    id: 1,
    title: 'Heavy-Duty Dairy Cow Mats',
    subtitle: '17mm Vulcanized Anti-Slip Rubber',
    desc: 'Reduces cow lameness, joint swelling & mastitis. Provides heavy shock absorption with grooved underside for moisture drainage.',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=85&fit=crop',
    tag: 'Best Seller',
    specs: '17mm · 1.8 × 0.9m (6×3 ft) · ~12 kg',
  },
  {
    id: 2,
    title: 'EVA Interlocking Flooring Sheets',
    subtitle: 'High-Density Thermal Insulation Tiles',
    desc: 'Lightweight, closed-cell foam puzzle tiles that isolate cold damp concrete. Ideal for barns, feed alleys, warehouses and commercial gyms.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85&fit=crop',
    tag: 'Modular Tiles',
    specs: '10–25mm · 60 × 60cm · ~2.5 kg',
  },
  {
    id: 3,
    title: 'Milking Parlor Drainage Mats',
    subtitle: '20mm Waterproof & Hygiene Certified',
    desc: 'Deep underside drainage channels facilitate rapid daily washdown. Non-porous antibacterial surface resistant to harsh chemical cleansers.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=85&fit=crop',
    tag: 'Hygiene Caliber',
    specs: '20mm · 2.0 × 1.0m · ~15 kg',
  },
];

export default function SolutionsSection() {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <section id="solutions" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with Title and Slider Buttons (Exact Reference Layout) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Rubber<br />
              Solutions for Every Need
            </h2>
          </div>

          {/* Slider Arrow Buttons (Circle styles matching reference) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setScrollIndex((prev) => Math.max(0, prev - 1))}
              disabled={scrollIndex === 0}
              className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-200 disabled:opacity-40 transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => setScrollIndex((prev) => Math.min(solutions.length - 1, prev + 1))}
              disabled={scrollIndex === solutions.length - 1}
              className="w-11 h-11 rounded-full bg-sky-600 text-white flex items-center justify-center hover:bg-sky-700 disabled:opacity-40 transition-colors shadow-sm"
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Tall Vertical Rounded Image Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="group relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-7 text-white"
            >
              {/* Photo Background with Zoom effect */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.78]"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

              {/* Top Tag */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                  {item.tag}
                </span>

                <span className="bg-sky-500/90 text-white text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full">
                  {item.specs}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-3">
                <div className="text-sky-300 text-xs font-semibold uppercase tracking-wider">
                  {item.subtitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white group-hover:text-sky-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {item.desc}
                </p>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20pricing%20for%20${encodeURIComponent(
                      item.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-slate-950 font-bold px-5 py-2.5 rounded-full text-xs transition-colors shadow-md"
                  >
                    <MessageCircle size={14} className="text-emerald-600" />
                    <span>Inquire Pricing</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
