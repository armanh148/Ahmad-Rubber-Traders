import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WHATSAPP = '923116103661';

const steps = [
  {
    num: '1',
    title: 'Select Mats & Specs',
    desc: 'Choose between 17mm dairy cow mats, EVA interlocking sheets, or milking parlor mats based on your herd size.',
    bgColor: 'bg-[#e4f5c4]', // Pastel Lime/Green
    cardBorder: 'border-[#cae899]',
    badgeBg: 'bg-[#d0ed96]',
    mockup: {
      tag: 'Step 1 Form',
      fields: ['Product: 17mm Cow Mat', 'Barn: 50 Stalls', 'Order: 50 Pcs'],
    },
  },
  {
    num: '2',
    title: 'Instant Estimation',
    desc: 'Use our online bulk calculator or chat directly on WhatsApp to get exact area coverage and weight breakdowns.',
    bgColor: 'bg-[#dedffc]', // Pastel Lavender/Purple
    cardBorder: 'border-[#c4c6fa]',
    badgeBg: 'bg-[#c8cafc]',
    mockup: {
      tag: 'Weight Summary',
      fields: ['Area: 870 Sq.Ft.', 'Mats: 50 Pieces', 'Weight: ~600 kg'],
    },
  },
  {
    num: '3',
    title: 'Direct Factory Rate',
    desc: 'Receive transparent manufacturer wholesale pricing without distributor or third-party retailer markups.',
    bgColor: 'bg-[#d1f5f2]', // Pastel Cyan/Teal
    cardBorder: 'border-[#afede7]',
    badgeBg: 'bg-[#b6f0ea]',
    mockup: {
      tag: 'Wholesale Invoice',
      fields: ['Rate: Direct Factory', 'Origin: Wachowali, LHR', 'Payment: Verified'],
    },
  },
  {
    num: '4',
    title: 'Fast Dispatch & Delivery',
    desc: 'Prompt order preparation and freight dispatch to dairy farms across Punjab, Sindh, KPK, and Balochistan.',
    bgColor: 'bg-[#fef1a6]', // Pastel Yellow/Gold
    cardBorder: 'border-[#fae374]',
    badgeBg: 'bg-[#fae580]',
    mockup: {
      tag: 'Dispatch Status',
      fields: ['Carrier: Swift Cargo', 'Status: Dispatched', 'Support: Active 7D'],
    },
  },
];

export default function ProcessSection() {
  return (
    <section id="steps" className="py-14 sm:py-20 lg:py-28 px-3 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-[1600px] mx-auto space-y-8 sm:space-y-12 lg:space-y-14">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-4 px-2 reveal">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Simplified Ordering<br />
            in 4 Easy Steps
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
            From initial barn floor measurement to factory dispatch, we make sourcing high-grade rubber mats smooth, transparent, and direct.
          </p>
        </div>

        {/* 2 CARDS PER ROW ON MOBILE & TABLET, 4 ON DESKTOP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`${step.bgColor} ${step.cardBorder} border sm:border-2 rounded-2xl sm:rounded-[28px] lg:rounded-[32px] p-3.5 sm:p-5 lg:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 min-h-[320px] sm:min-h-[390px] lg:min-h-[430px] reveal ${
                ['delay-100', 'delay-200', 'delay-300', 'delay-400'][index]
              }`}
            >
              {/* Top: Step Number Badge & Title */}
              <div className="space-y-2.5 sm:space-y-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full ${step.badgeBg} flex items-center justify-center font-extrabold text-slate-900 text-xs sm:text-sm shadow-xs border border-black/5`}>
                  {step.num}
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-extrabold text-slate-900 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 text-[11px] sm:text-xs lg:text-sm leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Bottom: White Mini Mockup UI Card inside pastel card */}
              <div className="mt-3 sm:mt-5 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xs border border-black/5 space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-slate-100">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                    {step.mockup.tag}
                  </span>
                  <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
                </div>

                <div className="space-y-1 text-slate-700 font-medium text-[10px] sm:text-[11px] lg:text-xs">
                  {step.mockup.fields.map((f, i) => (
                    <div key={i} className="flex items-center justify-between gap-1 leading-tight">
                      <span className="text-slate-500 truncate">{f.split(':')[0]}</span>
                      <span className="font-extrabold text-slate-900 flex-shrink-0">{f.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Pill Button */}
        <div className="text-center pt-2">
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20want%20to%20start%20a%20bulk%20inquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 sm:gap-3 bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-xl shadow-sky-600/25 transition-all active:scale-95 group"
          >
            <span>Start Your Bulk Order</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={12} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
