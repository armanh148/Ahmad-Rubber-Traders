import { ArrowRight, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const solutions = [
  {
    num: '01',
    title: 'DAIRY COW MATS',
    desc: 'Heavy-duty 17mm vulcanized rubber mats with an anti-slip ribbed top and shock-absorbing underside. Protects cow knees, hocks, and teats.',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1000&q=80',
    specs: '17mm · 1.8 × 0.9m · ~12 kg',
  },
  {
    num: '02',
    title: 'EVA FLOORING SHEETS',
    desc: 'High-density interlocking EVA foam tiles with a thermal cold barrier, waterproof body, and fast DIY installation.',
    img: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=600&q=80',
    specs: '10–25mm · 60 × 60cm · ~2.5 kg',
  },
  {
    num: '03',
    title: 'MILKING PARLOR MATS',
    desc: 'Hygiene-grade waterproof mats with underside drainage grooves. Non-porous, easily sanitized, built for automated parlors.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    specs: '20mm · 2.0 × 1.0m · ~15 kg',
  },
];

const waLink = (title) =>
  `https://wa.me/923116103661?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20pricing%20for%20${encodeURIComponent(
    title
  )}.`;

export default function SolutionsSection() {
  const [featured, ...rest] = solutions;

  return (
    <section
      id="solutions"
      className="section-pad relative overflow-hidden bg-zinc-950 text-white"
    >
      {/* Background texture & glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-15" />
      <div className="animate-glow pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div
        className="animate-glow pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"
        style={{ animationDelay: '-4.5s' }}
      />

      <div className="shell relative">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              dark
              index="02"
              eyebrow="Product solutions"
              title="ONE ROOF."
              accent="EVERY SURFACE."
              description="Heavy agricultural and commercial flooring supplies, manufactured and dispatched from our Lahore facility."
            />
          </div>
          <div
            className="flex flex-col items-start gap-5 lg:col-span-5 lg:items-end"
            data-reveal="up"
            style={{ '--reveal-delay': '180ms' }}
          >
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400 lg:text-right">
              Three core product lines, one factory-direct supply chain. Custom cuts and
              thicknesses available on bulk orders.
            </p>
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-shine group inline-flex items-center gap-2.5 border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-black"
            >
              <span>Get a quote</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          {/* Featured */}
          <article
            className="group relative overflow-hidden border border-zinc-800 transition-colors duration-300 hover:border-orange-500 lg:col-span-7 lg:row-span-2"
            data-reveal="up"
          >
            <img
              src={featured.img}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/10" />

            <div className="relative flex h-full min-h-[460px] flex-col justify-between p-6 sm:min-h-[520px] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-zinc-950 bg-orange-500 font-heading text-lg font-black text-black shadow-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {featured.num}
                </span>
                <span className="border border-orange-500/40 bg-zinc-950/70 px-3 py-1.5 font-mono text-[10px] font-bold text-orange-400 backdrop-blur-md">
                  BEST SELLER
                </span>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-orange-400">
                  {featured.specs}
                </div>
                <h3 className="max-w-md font-heading text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300">
                  {featured.desc}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={waLink(featured.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 bg-orange-500 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                  >
                    <MessageCircle size={14} className="icon-motion" />
                    <span>Inquire wholesale rates</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </a>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    In stock · Ready to dispatch
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Secondary cards */}
          {rest.map((sol, i) => (
            <article
              key={sol.title}
              className="group grid overflow-hidden border border-zinc-800 bg-zinc-900/70 transition-colors duration-300 hover:border-orange-500 sm:grid-cols-[170px_1fr] lg:col-span-5"
              data-reveal="up"
              style={{ '--reveal-delay': `${(i + 1) * 100}ms` }}
            >
              <div className="relative h-40 overflow-hidden bg-zinc-800 sm:h-full">
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="h-full w-full object-cover contrast-[1.08] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-zinc-900/40" />
                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-heading text-xs font-black text-black">
                  {sol.num}
                </span>
              </div>

              <div className="flex flex-col justify-between gap-4 p-5">
                <div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-orange-400">
                    {sol.specs}
                  </div>
                  <h3 className="mt-1.5 font-heading text-xl font-black uppercase leading-tight tracking-wide text-white transition-colors group-hover:text-orange-400">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{sol.desc}</p>
                </div>

                <a
                  href={waLink(sol.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:text-orange-400"
                >
                  <MessageCircle size={13} className="text-emerald-500" />
                  <span>Inquire rates</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
