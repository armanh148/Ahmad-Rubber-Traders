import { ArrowRight, CheckCircle2, Clock, Truck, ShieldCheck, MapPin, Calculator } from 'lucide-react';

const WHATSAPP = '923116103661';

const steps = [
  {
    num: '1',
    title: 'Select Mats & Specs',
    desc: 'Choose between 17mm dairy cow mats, EVA interlocking sheets, or milking parlor mats based on your herd size.',
    bgColor: 'bg-[#e4f5c4]', // Pastel Lime/Green
    cardBorder: 'border-[#c9e69c]',
    mockup: {
      type: 'select',
      tag: 'Step 1 Form',
      fields: ['Product: 17mm Cow Mat', 'Barn Size: 50 Stalls', 'Estimated: 50 Pcs'],
    },
  },
  {
    num: '2',
    title: 'Instant Estimation',
    desc: 'Use our online bulk calculator or chat directly on WhatsApp to get exact area coverage and weight breakdowns.',
    bgColor: 'bg-[#dedffc]', // Pastel Lavender/Purple
    cardBorder: 'border-[#c5c7fa]',
    mockup: {
      type: 'calc',
      tag: 'Weight Summary',
      fields: ['Coverage: 870 Sq.Ft.', 'Total Mats: 50 Pieces', 'Weight: ~600 kg'],
    },
  },
  {
    num: '3',
    title: 'Direct Factory Rate',
    desc: 'Receive transparent manufacturer wholesale pricing without distributor or third-party retailer markups.',
    bgColor: 'bg-[#d1f5f2]', // Pastel Cyan/Teal
    cardBorder: 'border-[#b0ece7]',
    mockup: {
      type: 'quote',
      tag: 'Wholesale Invoice',
      fields: ['Direct Factory Rate: Applied', 'Origin: Wachowali, Lahore', 'Payment: Verified Cash/Bank'],
    },
  },
  {
    num: '4',
    title: 'Fast Dispatch & Delivery',
    desc: 'Prompt order preparation and freight dispatch to dairy farms across Punjab, Sindh, KPK, and Balochistan.',
    bgColor: 'bg-[#fef1a6]', // Pastel Yellow/Gold
    cardBorder: 'border-[#fbe47b]',
    mockup: {
      type: 'delivery',
      tag: 'Dispatch Status',
      fields: ['Carrier: Swift Cargo', 'Status: Dispatched & Verified', 'Support: Active 7 Days'],
    },
  },
];

export default function ProcessSection() {
  return (
    <section id="steps" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simplified Ordering<br />
            in 4 Easy Steps
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial barn floor measurement to factory dispatch, we make sourcing high-grade rubber mats smooth and transparent.
          </p>
        </div>

        {/* 4 Pastel Step Cards Grid (Exact Reference Reproduction) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`${step.bgColor} ${step.cardBorder} border rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 min-h-[420px]`}
            >
              {/* Top: Step Number Badge & Title */}
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center font-bold text-slate-900 text-sm shadow-xs">
                  {step.num}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Bottom: White Mini Mockup UI Card inside pastel card (Exact reference detail) */}
              <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm border border-black/5 space-y-2">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {step.mockup.tag}
                  </span>
                  <CheckCircle2 size={13} className="text-emerald-500" />
                </div>

                <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {step.mockup.fields.map((f, i) => (
                    <div key={i} className="flex items-center justify-between text-[11px]">
                      <span>{f.split(':')[0]}</span>
                      <span className="font-bold text-slate-900">{f.split(':')[1]}</span>
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
            className="inline-flex items-center gap-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <span>Start Your Order</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight size={12} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

