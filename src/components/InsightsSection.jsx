import { ArrowRight, Calendar, BookOpen } from 'lucide-react';

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
];

export default function InsightsSection() {
  return (
    <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header (Exact Reference Layout) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Latest Insights &amp;<br />
              Industry Updates
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
            Technical knowledge guides, installation best practices, and cattle health insights from our Lahore engineering depot.
          </p>
        </div>

        {/* 4 Tall Photographic Cards (Exact Reference Reproduction) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art) => (
            <div
              key={art.id}
              className="group relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 text-white"
            >
              {/* Photo Background */}
              <img
                src={art.img}
                alt={art.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.72]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

              {/* Top Tag & Date */}
              <div className="relative z-10 flex items-center justify-between text-xs">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/20">
                  {art.category}
                </span>
                <span className="text-slate-300 text-[11px] font-medium flex items-center gap-1">
                  <Calendar size={11} /> {art.date}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-extrabold text-lg sm:text-xl leading-snug tracking-tight text-white group-hover:text-sky-200 transition-colors">
                  {art.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                  {art.excerpt}
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/923116103661?text=Hello%2C%20I%20want%20to%20learn%20more%20about%20dairy%20mat%20installation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-slate-950 font-bold px-4 py-2 rounded-full text-xs transition-colors shadow-sm"
                  >
                    <span>Read Guide</span>
                    <ArrowRight size={12} />
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

