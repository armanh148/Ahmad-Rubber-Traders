import { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Star, Factory, CheckCircle2, Award } from 'lucide-react';

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
    <section id="why-us" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto space-y-14">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Businesses Choose<br />
            Our Rubber Flooring
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            We combine rigorous manufacturing standards, direct factory accessibility, and deep livestock safety engineering.
          </p>
        </div>

        {/* 2-Column Split (Exact Reference Layout) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image with Overlapping Floating Analytics Card with Circular Donut Gauge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[36px] overflow-hidden shadow-2xl bg-slate-900 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=85&fit=crop"
                alt="Industrial workers in warehouse"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Floating Analytics Card with Circular Donut SVG (Exact reference reproduction) */}
            <div className="absolute -bottom-8 -left-4 sm:left-8 bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 max-w-sm space-y-3 animate-fadeIn">
              <div className="flex items-center gap-4">
                {/* Circular Donut Gauge SVG (Matching reference image gauge) */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    {/* Background circle */}
                    <path
                      className="text-slate-100"
                      strokeWidth="3.8"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Progress stroke 98% */}
                    <path
                      className="text-sky-600"
                      strokeDasharray="98, 100"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-extrabold text-xs text-slate-900">
                    99%
                  </div>
                </div>

                <div>
                  <div className="font-extrabold text-lg text-slate-900 leading-tight">
                    Quality Rating
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 font-extrabold text-xs mt-0.5">
                    <Star size={12} fill="#eab308" />
                    <span className="text-slate-900">4.9 / 5.0</span>
                    <span className="text-slate-400 font-normal">(77 Maps Reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Trusted by 500+ commercial dairy farms across Punjab &amp; Sindh with 100% genuine quality verification.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-emerald-600 font-extrabold text-xs">
                <ShieldCheck size={16} />
                <span>Direct Factory Wholesale Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion / Divider List */}
          <div className="lg:col-span-6 divide-y divide-slate-200">
            {accordionItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-4 sm:py-5">
                  <button
                    onClick={() => setOpenId(isOpen ? 0 : item.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </span>
                    <span className="ml-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors flex-shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 space-y-3.5 pr-6 text-sm text-slate-600 leading-relaxed animate-fadeIn">
                      <p>{item.content}</p>
                      <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 font-bold text-xs px-3.5 py-1.5 rounded-full border border-sky-200">
                        <CheckCircle2 size={13} className="text-sky-600" />
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
