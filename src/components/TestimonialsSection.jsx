import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Muhammad Asif Khan',
    role: 'AL-RAZA DAIRY FARM, LAHORE',
    stars: 5,
    text: 'Installed Ahmad Rubber Traders’ 17mm cow mats across 80 cattle stalls. Leg slipping incidents completely stopped, bedding cleaning time was cut by half, and milk yields noticeably improved.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&q=80&fit=crop&crop=face',
    verified: 'Verified Dairy Owner',
  },
  {
    name: 'Tariq Mehmood Qureshi',
    role: 'PUNJAB LIVESTOCK COOPERATIVE, FAISALABAD',
    stars: 5,
    text: 'Ordered over 400 pieces of EVA flooring sheets for our storage facility. True factory wholesale price with zero hassle. Delivered within 48 hours to Faisalabad with top quality.',
    img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&q=80&fit=crop&crop=face',
    verified: 'Bulk B2B Buyer',
  },
  {
    name: 'Bilal Siddiqui',
    role: 'AGRO INDUSTRIES, KARACHI',
    stars: 5,
    text: 'The 20mm milking parlor mats are phenomenal. Liquid washes right off the drainage channels and the surface stays high-traction even when wet. Outstanding service on WhatsApp.',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&q=80&fit=crop&crop=face',
    verified: 'Repeat Commercial Client',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f8f9fa] py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 border-b border-zinc-200">
      <div className="w-full">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-orange-700 mb-4"
              data-reveal="up"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span>Customer Success &amp; Trust</span>
            </div>
            <h2
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.98] tracking-tight"
              data-reveal="up"
              style={{ '--reveal-delay': '80ms' }}
            >
              WHAT OUR CLIENTS SAY<br />
              <span className="text-orange-500">ABOUT WORKING WITH US</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 space-y-3" data-reveal="up" style={{ '--reveal-delay': '160ms' }}>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Serving hundreds of progressive dairy farmers and livestock facilities across Pakistan with 4.9-star ratings on Google Maps.
            </p>
            {/* Google Rating badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-4 py-2.5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f97316" className="text-orange-500" />
                ))}
              </div>
              <span className="font-heading font-black text-zinc-950 text-xl leading-none">4.9 / 5.0</span>
              <span className="text-zinc-400 text-xs font-semibold">(77 Google Reviews)</span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="hover-lift bg-white border border-zinc-200 p-8 space-y-6 shadow-sm hover:border-orange-500 hover:shadow-2xl transition-all duration-300 relative group flex flex-col justify-between"
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={15} fill="#f97316" className="text-orange-500" />
                    ))}
                  </div>
                  <Quote size={32} className="text-zinc-200 group-hover:text-orange-300 transition-colors" />
                </div>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed italic font-normal">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-zinc-100">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-orange-200 shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <div className="font-heading font-black text-zinc-950 text-base uppercase tracking-tight">
                    {t.name}
                  </div>
                  <div className="text-orange-600 font-heading font-bold text-xs uppercase tracking-wider mt-0.5">
                    {t.role}
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 text-[11px] font-semibold mt-1">
                    <CheckCircle2 size={12} />
                    <span>{t.verified}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Orange Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
