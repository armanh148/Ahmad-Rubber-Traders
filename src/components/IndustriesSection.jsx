import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    id: 1,
    name: 'Dairy Cattle & Livestock Barns',
    desc: 'Heavy-duty 17mm ribbed vulcanized cow mats protecting cattle joints, preventing slips, and boosting milk yield.',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=85&fit=crop',
    tag: 'Primary Specialty',
  },
  {
    id: 2,
    name: 'Automated Milking Parlors',
    desc: 'Hygienic 20mm waterproof mats with liquid drainage channels for fast washdowns and sanitation compliance.',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=85&fit=crop',
    tag: 'Hygiene Caliber',
  },
  {
    id: 3,
    name: 'Agricultural & Grain Warehouses',
    desc: 'High-density EVA interlocking sheets isolating cold moisture and protecting packaged goods from damp floors.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85&fit=crop',
    tag: 'Moisture Barrier',
  },
  {
    id: 4,
    name: 'Commercial Gyms & Fitness Centers',
    desc: 'Shock-absorbing EVA and vulcanized rubber tiles that protect subfloors from heavy weight drops and dumbbell impacts.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85&fit=crop',
    tag: 'Acoustic & Shock',
  },
  {
    id: 5,
    name: 'Livestock Transport Trucks & Ramps',
    desc: 'High-traction directional ribbed runners preventing animal falling accidents during loading, transit, and unloading.',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85&fit=crop',
    tag: 'Safety Grip',
  },
  {
    id: 6,
    name: 'Industrial Workshops & Assembly Lines',
    desc: 'Anti-fatigue ergonomic rubber runners easing operator standing fatigue and insulating workers from cold concrete.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85&fit=crop',
    tag: 'Anti-Fatigue',
  },
];

export default function IndustriesSection() {
  const [activeId, setActiveId] = useState(1);
  const activeIndustry = industries.find((ind) => ind.id === activeId) || industries[0];

  return (
    <section id="industries" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto space-y-12">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Delivering Rubber Solutions<br />
            Across Diverse Industries
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Our engineered mats serve agriculture, livestock, warehouse logistics, and industrial commercial spaces nationwide.
          </p>
        </div>

        {/* 2-Column Split (Exact Reference Layout) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Interactive List of Industries */}
          <div className="lg:col-span-5 space-y-2.5">
            {industries.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-white shadow-md text-slate-950 font-extrabold border-l-4 border-sky-600 scale-[1.02]'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/70 font-bold'
                  }`}
                >
                  <span className="text-sm sm:text-base tracking-tight">{item.name}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-300 group-hover:text-slate-600'
                    }`}
                  >
                    <ArrowRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Large Featured Photo Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[440px] sm:h-[500px] bg-slate-900 border-4 border-white group">
              <img
                src={activeIndustry.img}
                alt={activeIndustry.name}
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Tag inside photo */}
              <div className="absolute top-6 left-6 z-10 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                {activeIndustry.tag}
              </div>

              {/* Bottom Caption inside Photo */}
              <div className="absolute bottom-6 inset-x-6 z-10 text-white space-y-2.5">
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  {activeIndustry.name}
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed max-w-xl font-normal">
                  {activeIndustry.desc}
                </p>
                <div className="pt-2 flex items-center gap-2 text-sky-400 font-bold text-xs">
                  <CheckCircle2 size={16} />
                  <span>Available in Custom Wholesale Batches with All-Pakistan Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

