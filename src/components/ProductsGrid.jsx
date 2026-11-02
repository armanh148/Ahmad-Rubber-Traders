import { MessageCircle, ArrowRight, ShieldCheck, Ruler } from 'lucide-react';
import SectionHeading from './SectionHeading';

const WHATSAPP = '923116103661';

const products = [
  {
    id: 1,
    name: 'HEAVY-DUTY DAIRY RUBBER COW MATS',
    category: 'Livestock Flooring',
    specs: 'Thickness: 17mm · Size: 1.8 × 0.9m (6×3 ft) · Weight: ~12 kg/pc',
    img: 'https://images.unsplash.com/photo-1565793979897-fb24f24c55bb?w=1000&q=85&fit=crop',
    tag: 'FACTORY BEST SELLER',
    desc: 'High-traction ribbed surface designed to withstand 800+ kg dairy cows. Reduces mastitis, eliminates knee swelling, and improves milk yield.',
    whatsapp: 'I need a bulk wholesale quote for 17mm Heavy-Duty Dairy Rubber Cow Mats.',
  },
  {
    id: 2,
    name: 'EVA INTERLOCKING FLOORING SHEETS',
    category: 'Industrial & Gym Flooring',
    specs: 'Thickness: 10–25mm · Size: 60 × 60cm · Weight: ~2.5 kg/pc',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80',
    tag: 'THERMAL INSULATION',
    desc: 'High-density closed-cell EVA foam tiles. Moisture-proof cold barrier protecting livestock and personnel from damp concrete floors.',
    whatsapp: 'I need a bulk wholesale quote for EVA Interlocking Flooring Sheets.',
  },
  {
    id: 3,
    name: 'MILKING PARLOR DRAINAGE MATS',
    category: 'Milking Sheds',
    specs: 'Thickness: 20mm · Size: 2.0 × 1.0m · Weight: ~15 kg/pc',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1000&q=80',
    tag: 'HYGIENE GRADE',
    desc: 'Deep underside drainage channels allow instant liquid evacuation. Chemical resistant to strong sanitizers and automated parlor washdowns.',
    whatsapp: 'I need a bulk wholesale quote for 20mm Milking Parlor Drainage Mats.',
  },
];

export default function ProductsGrid() {
  return (
    <section
      id="products"
      className="section-pad border-b border-zinc-200 bg-[#f7f6f2]"
    >
      <div className="shell">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              index="04"
              eyebrow="Catalog"
              title="INDUSTRIAL PRODUCTS"
              accent="BUILT FOR PERFORMANCE."
              description="High-density rubber and EVA flooring — stocked for bulk dispatch from our Lahore warehouse."
            />
          </div>
          <div
            className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end"
            data-reveal="up"
            style={{ '--reveal-delay': '180ms' }}
          >
            <p className="max-w-sm text-sm leading-relaxed text-zinc-600 lg:text-right">
              Need custom sizing or a mixed truckload? Use the calculator below to estimate
              pieces and weight.
            </p>
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-shine group inline-flex items-center gap-2.5 bg-orange-500 px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
            >
              <span>Bulk quote calculator</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((p, i) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden border border-zinc-300 bg-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]"
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 border border-white/30 bg-zinc-950/80 px-2.5 py-1 font-heading text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {p.tag}
                </span>

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 border border-white/20 bg-zinc-950/80 px-3 py-2 text-[10px] font-mono text-white backdrop-blur-md">
                  <span className="truncate">{p.specs}</span>
                  <ShieldCheck size={14} className="flex-shrink-0 text-orange-400" />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-orange-600">
                    {p.category}
                  </div>
                  <h3 className="mt-1.5 font-heading text-xl font-black uppercase leading-tight tracking-wide text-zinc-950 transition-colors group-hover:text-orange-600">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.desc}</p>
                </div>

                <div className="mt-auto flex items-center gap-2 border-t border-zinc-200 pt-4">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(p.whatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex flex-1 items-center justify-center gap-2 bg-zinc-950 px-4 py-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-orange-500 hover:text-black"
                  >
                    <MessageCircle size={14} className="icon-motion" />
                    <span>Inquire price</span>
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </a>
                  <span className="hidden items-center gap-1.5 px-2 text-[10px] font-semibold text-zinc-500 sm:flex">
                    <Ruler size={13} className="text-orange-500" />
                    Custom cuts
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
