import { ArrowRight, CheckCircle2, Phone, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const WHATSAPP = '923116103661';

const highlights = [
  'Direct manufacturer sourcing — no middlemen markup',
  'Heavy shock absorption & anti-slip ribbed texture',
  'Custom sheet cutting & thickness tolerances',
  'Trusted by 500+ dairy farms across Punjab & Sindh',
];

const specs = [
  { label: 'Thickness', value: '17mm' },
  { label: 'Sheet size', value: '1.8 × 0.9m' },
  { label: 'Weight', value: '~12 kg' },
];

export default function ExcellenceSection() {
  return (
    <section
      id="excellence"
      className="section-pad border-b border-zinc-200 bg-[#f7f6f2]"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT — editorial copy */}
          <div className="self-start lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              index="01"
              eyebrow="Industrial heritage"
              title="BUILT FOR"
              accent="THE LONG RUN."
              description="Ahmad Rubber Traders supplies farm flooring that survives real working conditions — heavy cattle, mechanical scrapers, and daily corrosive washdowns."
            />

            <p
              className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base"
              data-reveal="up"
              style={{ '--reveal-delay': '200ms' }}
            >
              Based in Wachowali Bazaar, Fleming Road, our manufacturing and wholesale facility
              serves progressive dairy operations across Pakistan with heavy-gauge vulcanized
              rubber mats and high-density EVA foam sheets.
            </p>

            <div className="mt-8 divide-y divide-zinc-300/80 border-y border-zinc-300/80">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className="group flex items-start gap-3 py-3.5"
                  data-reveal="up"
                  style={{ '--reveal-delay': `${260 + i * 60}ms` }}
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 flex-shrink-0 text-orange-500 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs font-bold leading-snug text-zinc-900 sm:text-sm">
                    {item}
                  </span>
                  <span className="ml-auto hidden font-mono text-[10px] text-zinc-400 sm:block">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
              data-reveal="up"
              style={{ '--reveal-delay': '500ms' }}
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20tell%20me%20more%20about%20your%20dairy%20mats.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group inline-flex items-center gap-3 bg-orange-500 px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg active:scale-95"
              >
                <span>Inquire factory pricing</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+923116103661"
                className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-zinc-700 transition-colors hover:text-orange-600"
              >
                <Phone size={14} className="text-orange-500 icon-motion" />
                <span>+92 311 6103661</span>
              </a>
            </div>
          </div>

          {/* RIGHT — visual collage */}
          <div className="lg:col-span-7" data-reveal="right" style={{ '--reveal-delay': '160ms' }}>
            <div className="relative">
              <div className="group relative overflow-hidden border-[6px] border-white bg-zinc-200 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=85&fit=crop"
                  alt="Industrial engineers inspecting rubber specifications"
                  className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[450px] lg:h-[500px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/5 to-transparent" />

                <div className="absolute left-5 top-5 border border-white/30 bg-zinc-950/70 px-3 py-2 text-white backdrop-blur-md">
                  <div className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-orange-400">
                    Batch inspection
                  </div>
                  <div className="mt-0.5 font-heading text-sm font-black uppercase tracking-wide">
                    Tensile &amp; anti-slip tested
                  </div>
                </div>

                <div className="absolute inset-x-5 bottom-5 text-white">
                  <div className="font-heading text-lg font-black uppercase tracking-wide sm:text-xl">
                    Technical QC verification
                  </div>
                  <div className="mt-0.5 text-xs text-zinc-300">
                    Durability checked on every production batch
                  </div>
                </div>
              </div>

              {/* Overlapping stat card */}
              <div className="absolute -bottom-8 -left-4 hidden w-52 bg-orange-500 p-5 text-zinc-950 shadow-2xl sm:block lg:-left-8">
                <div className="font-heading text-4xl font-black leading-none">10+</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.18em]">
                  Years serving the dairy industry
                </div>
                <div className="mt-3 border-t border-black/20 pt-2 font-mono text-[10px] font-bold">
                  500+ farms supplied
                </div>
              </div>
            </div>

            {/* Spec strip */}
            <div className="mt-8 grid grid-cols-3 border border-zinc-300 bg-white sm:mt-6">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-4 py-4 text-center sm:px-5 sm:py-5 ${
                    i !== 0 ? 'border-l border-zinc-200' : ''
                  }`}
                >
                  <div className="font-heading text-xl font-black leading-none text-zinc-950 sm:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-zinc-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Small editorial note */}
            <div className="mt-6 flex items-start gap-3 border-l-2 border-orange-500 bg-white p-4 sm:p-5">
              <Quote size={18} className="mt-0.5 flex-shrink-0 text-orange-500" />
              <p className="text-xs leading-relaxed text-zinc-600 sm:text-sm">
                <span className="font-bold text-zinc-900">Farm flooring is not an accessory.</span>{' '}
                It is the foundation of herd health, lameness prevention, and dairy profitability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
