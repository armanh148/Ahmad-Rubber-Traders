import { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Star, Factory, CheckCircle2 } from 'lucide-react';

const accordionItems = [
  {
    id: 1,
    title: 'Direct Factory Wholesale Pricing',
    content:
      'Buy straight from our manufacturing facility in Wachowali Bazaar, Lahore. Eliminate middlemen and retail markups with transparent per-piece and bulk square-foot rates.',
    stat: '15-20% Savings',
  },
  {
    id: 2,
    title: '17mm Vulcanized Heavy Shock Absorption',
    content:
      'Engineered with high tensile vulcanized rubber designed to support heavy 800+ kg Holstein and Sahiwal dairy cattle without flattening or tearing.',
    stat: '10+ Year Durability',
  },
  {
    id: 3,
    title: 'Anti-Slip Ribbed Texture & Moisture Evacuation',
    content:
      'Precision directional ribbing prevents dangerous slips and joint injuries while underside grooves channel urine and washdowns toward drain gutters.',
    stat: 'Zero Slip Incidents',
  },
  {
    id: 4,
    title: 'Verified Physical Location in Wachowali, Lahore',
    content:
      'Visit our physical warehouse at 34 Jamia Street, Fleming Road, Lahore to inspect rubber thickness, raw materials, and ready stock in person.',
    stat: '4.9★ (77 Reviews)',
  },
  {
    id: 5,
    title: 'Fast Dispatch to Any City in Pakistan',
    content:
      'Daily cargo dispatch partnerships ensure safe, timely delivery to dairy farms and industrial clients in Punjab, Sindh, KPK, and Balochistan.',
    stat: 'All-Pakistan Delivery',
  },
];

export default function WhyChooseUsSection() {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="why-us" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Choose<br />
            Our Rubber Flooring
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            We combine rigorous manufacturing standards, direct factory accessibility, and deep understanding of livestock flooring requirements.
          </p>
        </div>

        {/* 2-Column Split (Exact Reference Layout) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Floating Analytics Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=85&fit=crop"
                alt="Industrial workers in warehouse"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Analytics Card (Exact reference detail) */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 max-w-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Verified Trust
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#eab308" className="text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="font-extrabold text-2xl text-slate-900 leading-none">
                4.9 / 5.0 Rating
              </div>

              <p className="text-[11px] text-slate-600 leading-snug">
                Rated across 77 verified reviews on Google Maps by dairy owners and contractors.
              </p>

              <div className="pt-1 flex items-center gap-1.5 text-emerald-600 font-bold text-xs">
                <ShieldCheck size={14} />
                <span>100% Genuine Quality Guarantee</span>
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
                    <span className="ml-4 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-600 transition-colors flex-shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 space-y-3 pr-6 text-sm text-slate-600 leading-relaxed animate-fadeIn">
                      <p>{item.content}</p>
                      <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 font-semibold text-xs px-3 py-1 rounded-full border border-sky-200">
                        <CheckCircle2 size={13} className="text-sky-600" />
                        <span>Key Benefit: {item.stat}</span>
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

