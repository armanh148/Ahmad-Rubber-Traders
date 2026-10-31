import { MessageCircle, Ruler, Weight, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const WHATSAPP = '923116103661';

const products = [
  {
    id: 1,
    name: 'HEAVY-DUTY DAIRY RUBBER COW MATS',
    category: 'Livestock Flooring',
    specs: 'Thickness: 17mm · Size: 1.8 × 0.9m (6×3 ft) · Weight: ~12 kg/pc',
    img: 'https://images.unsplash.com/photo-1565793979897-fb24f24c55bb?w=800&q=85&fit=crop',
    tag: 'FACTORY BEST SELLER',
    tagColor: 'bg-orange-500 text-white',
    desc: 'High-traction ribbed surface designed to withstand 800+ kg dairy cows. Reduces mastitis, eliminates knee swelling, and improves milk yield by up to 15%.',
    whatsapp: 'I need a bulk wholesale quote for 17mm Heavy-Duty Dairy Rubber Cow Mats.',
  },
  {
    id: 2,
    name: 'EVA INTERLOCKING FLOORING SHEETS',
    category: 'Industrial & Gym Flooring',
    specs: 'Thickness: 10–25mm · Size: 60 × 60cm · Weight: ~2.5 kg/pc',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tag: 'THERMAL INSULATION',
    tagColor: 'bg-zinc-900 text-white',
    desc: 'High-density closed-cell EVA foam tiles. Moisture-proof cold barrier protecting livestock and personnel from damp concrete floors.',
    whatsapp: 'I need a bulk wholesale quote for EVA Interlocking Flooring Sheets.',
  },
  {
    id: 3,
    name: 'MILKING PARLOR DRAINAGE MATS',
    category: 'Milking Sheds',
    specs: 'Thickness: 20mm · Size: 2.0 × 1.0m · Weight: ~15 kg/pc',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    tag: 'HYGIENE GRADE',
    tagColor: 'bg-emerald-600 text-white',
    desc: 'Deep underside drainage channels allow instant liquid evacuation. Chemical resistant to strong sanitizers and automated parlor washdowns.',
    whatsapp: 'I need a bulk wholesale quote for 20mm Milking Parlor Drainage Mats.',
  },
];

export default function ProductsGrid() {
  return (
    <section id="products" className="bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 border-b border-zinc-200">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-orange-700 mb-4"
              data-reveal="up"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span>Engineered For Extreme Durability</span>
            </div>
            <h2
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.98] tracking-tight"
              data-reveal="up"
              style={{ '--reveal-delay': '80ms' }}
            >
              INDUSTRIAL PRODUCTS<br />
              <span className="text-orange-500">BUILT FOR PERFORMANCE</span>.
            </h2>
          </div>
          <a
            href="#calculator"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-shine inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-7 py-3.5 text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 self-start md:self-end group"
            data-reveal="up"
            style={{ '--reveal-delay': '160ms' }}
          >
            <span>Bulk Quote Calculator</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Grid Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="hover-lift group bg-zinc-50 border border-zinc-200 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden flex flex-col justify-between"
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              <div>
                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-zinc-200">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 font-heading text-xs font-black uppercase tracking-wider shadow-md ${p.tagColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 bg-zinc-950/85 backdrop-blur-xs text-white p-2.5 text-xs font-mono font-medium flex items-center justify-between">
                    <span>{p.specs}</span>
                    <ShieldCheck size={15} className="text-orange-400" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-3">
                  <div className="text-orange-600 font-heading font-black text-xs uppercase tracking-widest">
                    {p.category}
                  </div>
                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-zinc-950 group-hover:text-orange-600 transition-colors leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Inquire Button */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(p.whatsapp)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-orange-500 hover:text-black text-white font-extrabold py-3.5 text-xs uppercase tracking-widest transition-all rounded-xs shadow-md group"
                >
                  <MessageCircle size={14} className="icon-motion" />
                  <span>Inquire Price on WhatsApp</span>
                </a>
              </div>

              {/* Bottom Orange Border */}
              <div className="h-1 bg-zinc-200 group-hover:bg-orange-500 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
