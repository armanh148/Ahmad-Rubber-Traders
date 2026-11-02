import { ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function MissionSection() {
  return (
    <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
            Providing Smart, End-to-End Rubber Flooring Solutions Backed by Experience,
            Direct Manufacturing, and a Commitment to Durable Quality
          </h2>

          <div className="pt-2">
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-7 py-3 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <span>Explore Products</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight size={12} />
              </div>
            </a>
          </div>
        </div>

        {/* Iconic Semicircle & Stadium Arch Collage (Exact Reference Reproduction) */}
        <div className="pt-16 sm:pt-20 flex items-center justify-center gap-3 sm:gap-5 overflow-x-auto py-4">
          {/* Left Shape 1: Sky Blue Semicircle */}
          <div className="w-14 sm:w-20 md:w-28 h-28 sm:h-40 md:h-52 bg-sky-300 rounded-l-full flex-shrink-0" />

          {/* Left Shape 2: Light Indigo Semicircle */}
          <div className="w-14 sm:w-20 md:w-28 h-28 sm:h-40 md:h-52 bg-indigo-300 rounded-l-full flex-shrink-0" />

          {/* Center Main Stadium/Pill Image Container */}
          <div className="relative w-[300px] sm:w-[480px] md:w-[620px] lg:w-[720px] h-32 sm:h-48 md:h-64 rounded-full overflow-hidden flex-shrink-0 shadow-2xl border-4 border-white bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=85&fit=crop"
              alt="Industrial rubber engineers and dairy facility team"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

            {/* Floating Glassmorphism Data Card (Exact reference detail) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg border border-white/60 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>17mm Heavy Caliber</span>
              <span className="text-slate-300">|</span>
              <span className="text-sky-600 font-bold">100% Vulcanized Rubber</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 text-xs">Direct Wholesale</span>
            </div>
          </div>

          {/* Right Shape 1: Pastel Mint/Teal Semicircle */}
          <div className="w-14 sm:w-20 md:w-28 h-28 sm:h-40 md:h-52 bg-teal-200 rounded-r-full flex-shrink-0" />

          {/* Right Shape 2: Orange Semicircle */}
          <div className="w-14 sm:w-20 md:w-28 h-28 sm:h-40 md:h-52 bg-orange-400 rounded-r-full flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}

