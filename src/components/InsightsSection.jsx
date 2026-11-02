import { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'How 17mm Cow Mats Prevent Lameness & Boost Daily Milk Production',
    category: 'Livestock Care',
    date: 'November 2026',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80',
    excerpt: 'Detailed veterinary data on how vulcanized rubber cushioning preserves cow hooves and stimulates longer resting cycles.',
  },
  {
    id: 2,
    title: 'EVA Flooring Sheets vs. Vulcanized Rubber: Which Fits Your Facility?',
    category: 'Material Guide',
    date: 'October 2026',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80',
    excerpt: 'A comprehensive technical comparison covering thermal cold insulation, weight load, and washdown maintenance.',
  },
  {
    id: 3,
    title: 'Milking Parlor Drainage Standards: Reducing Bacterial Infections',
    category: 'Hygiene & Milk',
    date: 'September 2026',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80',
    excerpt: 'How channeled rubber mats prevent pooling wastewater, keeping milking equipment and cow udders sanitary.',
  },
  {
    id: 4,
    title: 'Wholesale Farm Flooring ROI: Cutting Veterinary Bills by 40%',
    category: 'Farm Economics',
    date: 'August 2026',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&q=80',
    excerpt: 'Case study of a 100-cow Punjab dairy farm and their real payback period after installing direct factory mats.',
  },
  {
    id: 5,
    title: 'Winter Floor Insulation: Preventing Udder Chill in Dairy Cattle',
    category: 'Seasonal Care',
    date: 'July 2026',
    img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=700&q=80',
    excerpt: 'Cold concrete drains body heat from cattle resting. Learn how thick rubber barrier maintains core metabolic temperature.',
  },
  {
    id: 6,
    title: 'Installation & Anchor Guide: Laying Mats for Heavy Bulls & Tractors',
    category: 'Depot Manual',
    date: 'June 2026',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&q=80',
    excerpt: 'Step-by-step instructions from our Lahore technicians on interlocking, subfloor prep, and anchor bolt placements.',
  },
];

export default function InsightsSection() {
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
        const gap = 16;
        const cardWidth = firstChild.getBoundingClientRect().width + gap;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(articles.length - 1, Math.max(0, index)));
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

  const scrollStep = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      // Scroll by roughly 2 cards on mobile / tablet, or 1 card on desktop
      const scrollAmount = clientWidth > 768 ? clientWidth * 0.6 : clientWidth * 0.9;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
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
    <section id="insights" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1600px] mx-auto space-y-8 sm:space-y-12">
        {/* Header with Title and Slider Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 reveal">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Latest Insights &amp;<br />
              Industry Updates
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-xl">
              Technical knowledge guides, installation best practices, and cattle health insights from our Lahore engineering depot.
            </p>
          </div>

          {/* Slider Arrow Navigation Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
            <button
              onClick={() => scrollStep('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-xs active:scale-95"
              aria-label="Previous article"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollStep('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center hover:bg-sky-500 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-md shadow-sky-600/25 active:scale-95"
              aria-label="Next article"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* 2 CARDS PER ROW CAROUSEL / SLIDER CONTAINER ON MOBILE & TABLET, 4 ON DESKTOP */}
        <div
          ref={sliderRef}
          className="flex flex-nowrap gap-3 sm:gap-5 lg:gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0 reveal delay-100"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {articles.map((art) => (
            <div
              key={art.id}
              className="w-[calc(50%-6px)] sm:w-[calc(50%-10px)] lg:w-[calc((100%-72px)/4)] flex-shrink-0 snap-start group relative h-[310px] sm:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-3.5 sm:p-6 lg:p-7 text-white border border-slate-200/50"
            >
              {/* Photo Background with Smooth Zoom */}
              <img
                src={art.img}
                alt={art.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.68] contrast-[1.05]"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/20 pointer-events-none" />

              {/* Top Meta: Tag & Date */}
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[10px] sm:text-xs">
                <span className="bg-white/20 backdrop-blur-md px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider border border-white/25 shadow-sm truncate max-w-full">
                  {art.category}
                </span>
                <span className="text-slate-300 text-[9px] sm:text-[11px] font-medium flex items-center gap-1">
                  <Calendar size={11} className="hidden sm:inline" /> {art.date}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-1.5 sm:space-y-3">
                <h3 className="font-extrabold text-xs sm:text-lg lg:text-xl leading-tight sm:leading-snug tracking-tight text-white group-hover:text-sky-200 transition-colors line-clamp-3">
                  {art.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 font-normal hidden sm:block">
                  {art.excerpt}
                </p>

                <div className="pt-1 sm:pt-2">
                  <a
                    href="https://wa.me/923116103661?text=Hello%2C%20I%20want%20to%20learn%20more%20about%20dairy%20mat%20installation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 hover:bg-white text-slate-950 font-extrabold px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-xs transition-all shadow-md group/btn active:scale-95"
                  >
                    <span>Read Guide</span>
                    <ArrowRight size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots & Slide Indicator */}
        <div className="flex items-center justify-between pt-2">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {articles.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-7 sm:w-8 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Jump to article ${i + 1}`}
              />
            ))}
          </div>

          <div className="text-[11px] sm:text-xs text-slate-500 font-medium flex items-center gap-2">
            <span className="font-mono text-slate-900 font-bold">
              0{activeIndex + 1} / 0{articles.length}
            </span>
            <span className="hidden sm:inline text-slate-400">
              · Swipe or use arrows to view all guides
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
