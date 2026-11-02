import { ArrowRight, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

const posts = [
  {
    title: 'Why 17mm Vulcanized Rubber Cow Mats Are Essential for Modern Pakistani Dairy Farms',
    category: 'Dairy Guide',
    date: 'October 2026',
    excerpt:
      'Learn how anti-slip grooved rubber mats eliminate cattle leg fractures, reduce veterinary bills, and accelerate lactation recovery cycles.',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1000&q=80',
  },
  {
    title: 'EVA Flooring Sheets vs. Vulcanized Rubber Mats: Complete Comparison',
    category: 'Material Guide',
    date: 'September 2026',
    excerpt:
      'Understand the key differences in thermal conductivity, weight per square foot, washability, and cost-effectiveness between EVA and vulcanized rubber.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    title: 'Milking Parlor Drainage & Hygiene: Preventing Bovine Infections with Grooved Mats',
    category: 'Hygiene Standards',
    date: 'August 2026',
    excerpt:
      'How channeled milking parlor mats evacuate daily washdowns rapidly, keeping milk quality high and cow teats sanitary.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
  },
];

export default function BlogSection() {
  const [featured, ...rest] = posts;

  return (
    <section className="section-pad border-b border-zinc-200 bg-white">
      <div className="shell">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              index="07"
              eyebrow="Industry insights"
              title="FIELD NOTES FROM"
              accent="THE FACTORY FLOOR."
              description="Practical guidance on farm flooring, cattle comfort, and hygiene — written from real installation experience."
            />
          </div>
          <div
            className="lg:col-span-5 lg:justify-self-end"
            data-reveal="up"
            style={{ '--reveal-delay': '180ms' }}
          >
            <a
              href="https://wa.me/923116103661?text=Hello%2C%20I%20have%20a%20technical%20question%20about%20dairy%20rubber%20mats."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 border-2 border-zinc-900 px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-zinc-900 transition-all hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white"
            >
              <span>Ask a technical advisor</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Featured post */}
          <article
            className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden border border-zinc-300 bg-zinc-900 lg:col-span-7"
            data-reveal="up"
          >
            <img
              src={featured.img}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/10" />

            <div className="relative p-6 text-white sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="bg-orange-500 px-2.5 py-1 font-heading text-[10px] font-black uppercase tracking-[0.16em] text-white">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 border border-white/20 bg-zinc-950/40 px-2.5 py-1 text-[10px] font-semibold text-zinc-200 backdrop-blur-sm">
                  <Calendar size={11} />
                  {featured.date}
                </span>
              </div>

              <h3 className="max-w-lg font-heading text-2xl font-black uppercase leading-[1.02] tracking-tight sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-lg text-xs leading-relaxed text-zinc-300 sm:text-sm">
                {featured.excerpt}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-400 transition-transform group-hover:translate-x-1">
                <span>Read full guide</span>
                <ArrowRight size={13} />
              </span>
            </div>
          </article>

          {/* Compact list */}
          <div className="flex flex-col justify-between lg:col-span-5">
            {rest.map((post, i) => (
              <article
                key={post.title}
                className="group flex flex-1 flex-col justify-center border-t border-zinc-200 py-5 first:border-t-0 lg:first:border-t-0"
                data-reveal="up"
                style={{ '--reveal-delay': `${(i + 1) * 110}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-[86px] w-24 flex-shrink-0 overflow-hidden bg-zinc-200 sm:h-24 sm:w-32">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-1.5 top-1.5 bg-orange-500 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-white">
                      {post.category}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                      <Calendar size={10} />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-1.5 font-heading text-base font-black uppercase leading-tight tracking-wide text-zinc-950 transition-colors group-hover:text-orange-600 sm:text-lg">
                      {post.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-orange-600">
                      <span>Read guide</span>
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </article>
            ))}

            <div className="mt-2 border-t-2 border-zinc-950 pt-4">
              <p className="text-[11px] leading-relaxed text-zinc-500">
                Looking for a spec sheet or installation drawing? Our team shares full technical
                documentation on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

