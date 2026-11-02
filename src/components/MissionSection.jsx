import { ArrowRight } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Centered Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
            Providing Smart, End-to-End Rubber Flooring Services Backed by Experience,
            Technology, and a Commitment to Durable Quality
          </h2>

          {/* Centered Royal Blue Pill Button */}
          <div className="pt-2 flex justify-center">
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 sm:gap-3 bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-xl shadow-sky-600/25 transition-all active:scale-95 group"
            >
              <span>Explore Products</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={12} />
              </div>
            </a>
          </div>
        </div>

        {/* Signature Geometric Semicircle & Stadium Arch Collage (Responsive for all screen sizes) */}
        <div className="pt-10 sm:pt-16 lg:pt-20 flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 overflow-hidden py-4 select-none">
          {/* Left Shape 1 */}
          <div className="w-6 sm:w-14 md:w-20 lg:w-28 h-16 sm:h-36 md:h-48 lg:h-60 bg-sky-300 rounded-l-full flex-shrink-0 shadow-sm" />

          {/* Left Shape 2 */}
          <div className="w-6 sm:w-14 md:w-20 lg:w-28 h-16 sm:h-36 md:h-48 lg:h-60 bg-indigo-300 rounded-l-full flex-shrink-0 shadow-sm" />

          {/* Center Main Stadium/Pill Image Container */}
          <div className="relative flex-1 max-w-[260px] sm:max-w-[440px] md:max-w-[580px] lg:max-w-[720px] h-20 sm:h-36 md:h-48 lg:h-60 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&q=85&fit=crop"
              alt="Industrial engineers and livestock flooring specialists"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

            {/* Floating Glassmorphism Data Notification Card */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 glass-pill px-3 sm:px-5 py-1 sm:py-2 rounded-full shadow-xl flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-bold text-slate-800 whitespace-nowrap max-w-[95%] overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="text-slate-900 truncate">17mm Vulcanized</span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-sky-600 font-extrabold hidden sm:inline">99.8% Anti-Slip</span>
              <span className="text-slate-300 hidden md:inline">|</span>
              <span className="text-slate-600 font-semibold text-xs hidden md:inline">Direct Factory</span>
            </div>
          </div>

          {/* Right Shape 1 */}
          <div className="w-6 sm:w-14 md:w-20 lg:w-28 h-16 sm:h-36 md:h-48 lg:h-60 bg-teal-200 rounded-r-full flex-shrink-0 shadow-sm" />

          {/* Right Shape 2 */}
          <div className="w-6 sm:w-14 md:w-20 lg:w-28 h-16 sm:h-36 md:h-48 lg:h-60 bg-orange-400 rounded-r-full flex-shrink-0 shadow-sm" />
        </div>
      </div>
    </section>
  );
}
