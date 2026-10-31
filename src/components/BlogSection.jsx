import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    title: 'Why 17mm Vulcanized Rubber Cow Mats Are Essential for Modern Pakistani Dairy Farms',
    category: 'Dairy Guide',
    date: 'October 2026',
    excerpt:
      'Learn how anti-slip grooved rubber mats eliminate cattle leg fractures, reduce veterinary bills, and accelerate lactation recovery cycles.',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    tagColor: 'bg-orange-500 text-white',
  },
  {
    title: 'EVA Flooring Sheets vs. Vulcanized Rubber Mats: Complete Comparison',
    category: 'Material Guide',
    date: 'September 2026',
    excerpt:
      'Understand the key differences in thermal conductivity, weight per square foot, washability, and cost-effectiveness between EVA and vulcanized rubber.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tagColor: 'bg-zinc-900 text-white',
  },
  {
    title: 'Milking Parlor Drainage & Hygiene: Preventing Bovine Infections with Grooved Mats',
    category: 'Hygiene Standards',
    date: 'August 2026',
    excerpt:
      'How channeled milking parlor mats evacuate daily washdowns rapidly, keeping both milk quality high and cow teats sanitary and clean.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    tagColor: 'bg-emerald-600 text-white',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 border-b border-zinc-200">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="badge-animated inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-orange-700 mb-3 rounded-sm"
              data-reveal="up"
            >
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Industry Insights
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 uppercase leading-tight tracking-tight"
              data-reveal="up"
              style={{ '--reveal-delay': '80ms' }}
            >
              INSIGHTS SHAPING THE<br />
              <span className="text-gradient-orange">FUTURE OF INDUSTRY</span>.
            </h2>
          </div>
          <a
            href="https://wa.me/923116103661?text=Hello%2C%20I%20have%20a%20technical%20question%20about%20dairy%20rubber%20mats."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white font-black px-6 py-3.5 text-xs uppercase tracking-widest transition-all rounded-sm whitespace-nowrap self-start md:self-end hover:-translate-y-0.5 group"
            data-reveal="up"
            style={{ '--reveal-delay': '160ms' }}
          >
            <span>Ask Technical Advisor</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={post.title}
              className="hover-tilt card-spotlight group bg-zinc-50 border border-zinc-200/90 rounded-sm overflow-hidden hover:border-orange-500 hover:shadow-xl transition-all duration-300 flex flex-col"
              data-reveal="up"
              data-spotlight
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              <div className="relative h-52 overflow-hidden bg-zinc-200">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-xs shadow-md ${post.tagColor}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 space-y-3">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-semibold">
                  <Calendar size={13} />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-zinc-950 font-black text-base uppercase leading-snug tracking-tight group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">{post.excerpt}</p>

                <div className="pt-4 border-t border-zinc-200 mt-auto">
                  <span className="inline-flex items-center gap-2 text-orange-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    <span>Read Full Guide</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
