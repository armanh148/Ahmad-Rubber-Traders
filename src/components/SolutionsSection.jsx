import { ArrowRight, MessageCircle } from 'lucide-react';

const solutions = [
  {
    num: '01',
    title: 'DAIRY COW MATS',
    desc: 'Heavy-duty 17mm vulcanized rubber mats. Anti-slip ribbed top, shock absorbing underside. Protects cow knees, hocks, and teats.',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    specs: '17mm · 1.8 × 0.9m · ~12 kg',
  },
  {
    num: '02',
    title: 'EVA FLOORING SHEETS',
    desc: 'High-density interlocking EVA foam tiles. Superior thermal cold barrier, waterproof, lightweight, and fast DIY installation.',
    img: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=600&q=80',
    specs: '10–25mm · 60 × 60cm · ~2.5 kg',
  },
  {
    num: '03',
    title: 'MILKING PARLOR MATS',
    desc: 'Hygiene-grade waterproof mats with underside drainage grooves for automated milking parlors. Non-porous and easily sanitized.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    specs: '20mm · 2.0 × 1.0m · ~15 kg',
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-zinc-950 text-white py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* Background Industrial Grid & Glow */}
      <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none animate-glow" style={{ animationDelay: '-4.5s' }} />

      <div className="relative w-full">
        {/* Header (Matching Reference Dark Section) */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-orange-400 mb-4"
              data-reveal="up"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Comprehensive B2B Solutions
            </div>
            <h2
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.98] tracking-tight"
              data-reveal="up"
              style={{ '--reveal-delay': '80ms' }}
            >
              COMPLETE INDUSTRIAL<br />
              <span className="text-orange-500">SOLUTIONS</span> UNDER ONE ROOF.
            </h2>
          </div>
          <div
            className="lg:col-span-4 space-y-4"
            data-reveal="up"
            style={{ '--reveal-delay': '160ms' }}
          >
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We provide heavy agricultural and commercial flooring supplies across Pakistan with factory-direct pricing and direct WhatsApp quotes.
            </p>
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-shine inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <span>Get A Quote</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3 Dark Industrial Service Cards (Exact match to reference dark section cards) */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className="hover-lift group bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-orange-500/10 relative"
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-56 overflow-hidden bg-zinc-800">
                  <img
                    src={sol.img}
                    alt={sol.title}
                    className="w-full h-full object-cover filter contrast-[1.1] group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                  {/* Circular Orange Number Icon (Exact reference image detail) */}
                  <div className="absolute top-4 left-4 w-11 h-11 bg-orange-500 text-black rounded-full flex items-center justify-center font-heading font-black text-lg shadow-xl border-2 border-zinc-950 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {sol.num}
                  </div>

                  {/* Specs pill */}
                  <div className="absolute bottom-3 left-4 bg-zinc-950/80 backdrop-blur-xs text-orange-400 border border-zinc-700 px-2.5 py-1 text-[11px] font-mono font-bold">
                    {sol.specs}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-black text-xl uppercase tracking-wide text-white group-hover:text-orange-400 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {sol.desc}
                  </p>
                </div>
              </div>

              {/* Bottom WhatsApp Inquiry */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/923116103661?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20pricing%20for%20${encodeURIComponent(
                    sol.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-500 hover:text-black text-white font-extrabold py-3 text-xs uppercase tracking-widest transition-all rounded-xs group"
                >
                  <MessageCircle size={14} className="icon-motion" />
                  <span>Inquire Wholesale Rates</span>
                </a>
              </div>

              {/* Bottom Orange Line */}
              <div className="h-1 bg-zinc-800 group-hover:bg-orange-500 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
