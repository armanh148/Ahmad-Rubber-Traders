import { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';

const accordionItems = [
  {
    id: 1,
    title: 'Direct Factory Wholesale Pricing',
    content:
      'Buy straight from our manufacturing depot in Wachowali Bazaar, Fleming Road, Lahore. Eliminate middleman markups with transparent per-piece rates and volume tier discounts for commercial dairy operations.',
    stat: '15-20% Direct Cost Savings',
  },
  {
    id: 2,
    title: '17mm Vulcanized Heavy Shock Absorption',
    content:
      'Engineered with high tensile vulcanized natural and synthetic rubber designed to support heavy 800+ kg dairy cattle without compressing, tearing, or curling at the edges.',
    stat: '10+ Year Durability Lifespan',
  },
  {
    id: 3,
    title: 'Anti-Slip Directional Ribbing & Drainage Channels',
    content:
      'Precision top ribbing prevents dangerous bovine hoof slips, while underside drainage grooves channel washdown fluids and urine toward barn waste channels.',
    stat: 'Zero Slip Fall Accidents',
  },
  {
    id: 4,
    title: 'Verified Physical Location in Wachowali, Lahore',
    content:
      'Visit our physical shop and warehouse at 34 Jamia Street, Fleming Road, Lahore to inspect rubber thickness, raw materials, and ready inventory in person.',
    stat: '4.9★ Rating (77 Google Reviews)',
  },
  {
    id: 5,
    title: 'Fast Dispatch to Any City in Pakistan',
    content:
      'Established logistics cargo partnerships ensure reliable, safe delivery to dairy farms and industrial clients across Punjab, Sindh, KPK, and Balochistan.',
    stat: 'Prompt Pan-Pakistan Logistics',
  },
];

export default function WhyChooseUsSection() {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="why-us" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto space-y-10 sm:space-y-14">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 reveal">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Businesses Choose<br />
            Our Rubber Flooring
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
            We combine rigorous manufacturing standards, direct factory accessibility, and deep livestock safety engineering.
          </p>
        </div>

        {/* 2-Column Split: Image Left, Accordion Right */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Image with Overlapping Floating Analytics Card */}
          <div className="lg:col-span-6 relative reveal-left">
            {/* Main Rounded Image */}
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl bg-slate-900 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=85&fit=crop"
                alt="Industrial dairy flooring engineers at warehouse"
                className="w-full h-[360px] sm:h-[440px] lg:h-[500px] object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Floating Analytics Card - DIRECTLY ON TOP OF IMAGE with Reduced Width */}
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 lg:-bottom-6 lg:left-6 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-2xl border border-slate-100 w-[260px] sm:w-[290px] space-y-2 sm:space-y-2.5 z-10 animate-fadeIn">
              <div className="flex items-center gap-3">
                {/* Circular Donut Gauge SVG */}
                <div className="relative w-11 h-11 sm:w-13 sm:h-13 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.8"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-sky-600"
                      strokeDasharray="99, 100"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-extrabold text-[11px] sm:text-xs text-slate-900">
                    99%
                  </div>
                </div>

                <div>
                  <div className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                    Quality Rating
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 font-extrabold text-[11px] sm:text-xs mt-0.5">
                    <Star size={11} fill="#eab308" />
                    <span className="text-slate-900 font-bold">4.9 / 5.0</span>
                    <span className="text-slate-400 font-normal text-[10px]">(77 Reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-600 leading-snug font-normal line-clamp-2">
                Trusted by 500+ commercial dairy farms with 100% genuine quality verification.
              </p>

              <div className="pt-1.5 border-t border-slate-100 flex items-center gap-1.5 text-emerald-600 font-extrabold text-[10px] sm:text-[11px]">
                <ShieldCheck size={13} className="flex-shrink-0" />
                <span>Direct Factory Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion / Divider List */}
          <div className="lg:col-span-6 divide-y divide-slate-200 reveal-right delay-200">
            {accordionItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-3.5 sm:py-5">
                  <button
                    onClick={() => setOpenId(isOpen ? 0 : item.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </span>
                    <span className="ml-3 sm:ml-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors flex-shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2.5 sm:pt-3 space-y-3 pr-2 sm:pr-6 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                      <p>{item.content}</p>
                      <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 font-bold text-xs px-3 sm:px-3.5 py-1.5 rounded-full border border-sky-200">
                        <CheckCircle2 size={13} className="text-sky-600 flex-shrink-0" />
                        <span>Key Advantage: {item.stat}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
