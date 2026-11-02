import { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP = '923116103661';

const solutions = [
  {
    id: 1,
    title: 'Heavy-Duty Dairy Cow Mats',
    subtitle: '17mm Vulcanized Anti-Slip Rubber',
    desc: 'Reduces cow lameness, joint swelling, and mastitis. Features heavy shock absorption with grooved underside for rapid urine and washdown evacuation.',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=85&fit=crop',
    tag: 'Primary Specialty',
    specs: '17mm · 1.8 × 0.9m (6×3 ft) · ~12 kg',
  },
  {
    id: 2,
    title: 'EVA Interlocking Flooring Sheets',
    subtitle: 'High-Density Thermal Insulation Tiles',
    desc: 'Lightweight, closed-cell foam puzzle tiles that isolate cold damp concrete. Ideal for barns, feed alleys, warehouse packaging and commercial gyms.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=85&fit=crop',
    tag: 'Modular Tiles',
    specs: '10–25mm · 60 × 60cm · ~2.5 kg',
  },
  {
    id: 3,
    title: 'Milking Parlor Drainage Mats',
    subtitle: '20mm Waterproof & Hygiene Certified',
    desc: 'Deep underside drainage channels facilitate rapid daily washdown. Non-porous antibacterial surface resistant to harsh chemical cleansers and acids.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=85&fit=crop',
    tag: 'Hygiene Caliber',
    specs: '20mm · 2.0 × 1.0m · ~15 kg',
  },
  {
    id: 4,
    title: 'Horse Stable & Cattle Trailer Mats',
    subtitle: 'High-Impact Traction Sheets',
    desc: 'Heavy-duty vulcanized solid rubber engineered for high hoof point loads in equine boxes, animal transport trucks, and recovery stalls.',
    img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=85&fit=crop',
    tag: 'Equine & Transport',
    specs: '15–20mm · 1.8 × 1.2m (6×4 ft) · ~22 kg',
  },
  {
    id: 5,
    title: 'Industrial Gym & Workshop Rolls',
    subtitle: 'High-Density Acoustic & Shock Buffer',
    desc: 'Seamless continuous rubber mat rolls designed to protect subfloors from heavy weight drops, vibration dampening, and high foot traffic.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=85&fit=crop',
    tag: 'Commercial Rolls',
    specs: '8–12mm · 10 × 1.2m Roll · ~45 kg',
  },
];

export default function SolutionsSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const firstChild = sliderRef.current.children[0];
      if (firstChild) {
        const gap = 24;
        const cardWidth = firstChild.getBoundingClientRect().width + gap;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(solutions.length - 1, Math.max(0, index)));
      }
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const current = sliderRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        current.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [checkScroll]);

  // Card-by-card precise smooth scroll
  const scrollStep = (direction) => {
    if (sliderRef.current) {
      const firstChild = sliderRef.current.children[0];
      const gap = 24;
      const step = firstChild ? firstChild.getBoundingClientRect().width + gap : 360;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth',
      });
    }
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const targetCard = sliderRef.current.children[index];
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  return (
    <section id="solutions" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1600px] mx-auto space-y-8 sm:space-y-12">
        {/* Header with Title and Slider Buttons (Matching Reference Design) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 reveal">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Comprehensive Rubber<br />
              Solutions for Every Need
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-2xl">
              Engineered vulcanized rubber mats and interlocking tiles manufactured for maximum durability, animal safety, and hygienic cleaning.
            </p>
          </div>

          {/* Slider Arrow Navigation Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
            <button
              onClick={() => scrollStep('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-xs active:scale-95"
              aria-label="Previous product slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollStep('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center hover:bg-sky-500 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-md shadow-sky-600/25 active:scale-95"
              aria-label="Next product slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 1-ROW CAROUSEL / SLIDER CONTAINER */}
        <div
          ref={sliderRef}
          className="flex flex-nowrap gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0 reveal delay-100"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {solutions.map((item, index) => (
            <div
              key={item.id}
              className="w-[85vw] max-w-[340px] sm:w-[380px] md:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] flex-shrink-0 snap-start group relative h-[480px] sm:h-[540px] lg:h-[570px] rounded-3xl lg:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 text-white border border-slate-200/50"
            >
              {/* Photo Background with Smooth Zoom on Hover */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.70] contrast-[1.05]"
              />

              {/* Multi-layered Dark Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/20" />

              {/* Top Meta Badges */}
              <div className="relative z-10 flex justify-between items-start gap-2">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/25 shadow-sm">
                  {item.tag}
                </span>

                <span className="bg-sky-500 text-white text-[10px] sm:text-[11px] font-mono font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-sm text-right">
                  {item.specs}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-3 sm:space-y-3.5">
                <div className="text-sky-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  {item.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight text-white group-hover:text-sky-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-2 font-normal">
                  {item.desc}
                </p>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20pricing%20for%20${encodeURIComponent(
                      item.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-slate-950 font-extrabold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md group/btn active:scale-95"
                  >
                    <MessageCircle size={14} className="text-emerald-600" />
                    <span>Inquire Pricing</span>
                    <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots & Slide Counter */}
        <div className="flex items-center justify-between pt-2">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {solutions.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-8 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Jump to product ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
            <span className="font-mono text-slate-900 font-bold">
              0{activeIndex + 1} / 0{solutions.length}
            </span>
            <span className="hidden sm:inline text-slate-400">
              · Swipe or use arrows to navigate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
