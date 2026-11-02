import { useState, useRef, useEffect } from 'react';
import { Star, Quote, CheckCircle2, ArrowLeft, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const WHATSAPP = '923116103661';

const reviews = [
  {
    id: 1,
    name: 'Muhammad Asif',
    role: 'Al-Raza Dairy Farm, Lahore',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'We installed 17mm rubber cow mats across 80 stalls in our Lahore facility. Leg slipping accidents stopped completely, bedding cleaning time was reduced by half, and milk yields noticeably improved.',
    rating: 5,
    matsOrdered: '80 Cow Mats',
  },
  {
    id: 2,
    name: 'Tariq Mehmood',
    role: 'Punjab Livestock Cooperative, Faisalabad',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'Ordered over 400 pieces of EVA flooring sheets for our storage facility. True factory wholesale pricing with zero hassle. Ahmad Rubber Traders delivered within 48 hours to Faisalabad with top quality.',
    rating: 5,
    matsOrdered: '400 EVA Sheets',
  },
  {
    id: 3,
    name: 'Bilal Siddiqui',
    role: 'Siddiqui Agro Industries, Karachi',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'The 20mm milking parlor mats are phenomenal. Liquid washes right off the drainage channels and the surface stays high-traction even during wet washdowns. Fast communication on WhatsApp!',
    rating: 5,
    matsOrdered: '60 Parlor Mats',
  },
  {
    id: 4,
    name: 'Kamran Malik',
    role: 'Sahiwal Cattle Breeders, Sahiwal',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'Our heavy Sahiwal bulls require mats that do not tear under hoof pressure. Ahmad Rubber Traders provided genuine vulcanized mats that still look brand new after 2 years of constant use.',
    rating: 5,
    matsOrdered: '120 Heavy Mats',
  },
  {
    id: 5,
    name: 'Haji Noor Muhammad',
    role: 'Multan Model Dairy Complex, Multan',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'Direct factory rates saved us more than Rs. 150,000 compared to third-party retailers in Multan. Thickness was exactly 17mm as committed, with high tensile raw rubber quality.',
    rating: 5,
    matsOrdered: '150 Cow Mats',
  },
  {
    id: 6,
    name: 'Chaudhry Rizwan',
    role: 'Gujranwala Agro Milk Processing',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'Very professional team in Wachowali Lahore. We visited their depot, checked the mats in person, and our order was dispatched the same day via cargo. Highly recommended for commercial farms.',
    rating: 5,
    matsOrdered: '90 Milking Mats',
  },
];

export default function ClientReviewsSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // calculate current card index for dots
      const cardWidth = 380;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(reviews.length - 1, Math.max(0, index)));
    }
  };

  useEffect(() => {
    checkScroll();
    const current = sliderRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll, { passive: true });
      return () => current.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth * 0.75 : clientWidth * 0.9;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1600px] mx-auto space-y-8 sm:space-y-12">
        {/* Header with Title and Slider Arrow Buttons in 1 Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hear What Our Clients Say
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-2xl">
              Real feedback from commercial dairy owners, livestock breeders, and agricultural facility managers across Pakistan.
            </p>
          </div>

          {/* Slider Arrow Navigation Controls (Circle buttons matching reference design) */}
          <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-xs active:scale-95"
              aria-label="Previous review"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center hover:bg-sky-500 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-md shadow-sky-600/25 active:scale-95"
              aria-label="Next review"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* SINGLE ROW SLIDER / CAROUSEL CONTAINER */}
        <div
          ref={sliderRef}
          className="flex flex-nowrap gap-5 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {reviews.map((r, i) => (
            <div
              key={r.id}
              className="w-[280px] sm:w-[360px] md:w-[400px] lg:w-[420px] flex-shrink-0 snap-start relative rounded-3xl lg:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-900 h-[460px] sm:h-[520px] group flex flex-col justify-between p-5 sm:p-6 text-white border border-slate-200/40"
            >
              {/* Photo Background with Smooth Zoom */}
              <img
                src={r.img}
                alt={r.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 filter brightness-[0.72] group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/20 pointer-events-none" />

              {/* Rating Badge Top Left & WhatsApp Link Top Right */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex gap-0.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} size={11} fill="#eab308" className="text-yellow-400" />
                  ))}
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20saw%20${encodeURIComponent(
                    r.name
                  )}%27s%20review%20and%20want%20more%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-emerald-600 text-white backdrop-blur-md flex items-center justify-center transition-colors border border-white/20 shadow-md"
                  aria-label="Direct WhatsApp inquiry"
                >
                  <MessageCircle size={15} />
                </a>
              </div>

              {/* Bottom Glassmorphic Quotation Box */}
              <div className="relative z-10 space-y-3">
                <div className="glass-dark rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-xl border border-white/15">
                  <Quote size={20} className="text-sky-400 opacity-90" />
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed italic font-normal line-clamp-4">
                    "{r.quote}"
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[11px] text-slate-300 font-medium">
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} /> Verified Buyer
                    </span>
                    <span className="font-mono text-sky-300">{r.matsOrdered}</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="pt-1">
                  <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                    {r.name}
                  </h3>
                  <div className="text-sky-300 text-xs font-semibold mt-0.5 truncate">
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots & Swipe Hint */}
        <div className="flex items-center justify-between pt-2">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-8 bg-sky-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Jump to review ${i + 1}`}
              />
            ))}
          </div>

          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            ← Drag or click arrows to explore reviews →
          </span>
        </div>
      </div>
    </section>
  );
}
