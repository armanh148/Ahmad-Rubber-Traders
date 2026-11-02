import { Star, Quote, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'Muhammad Asif Khan',
    role: 'AL-RAZA DAIRY FARM, LAHORE',
    stars: 5,
    text: 'Installed Ahmad Rubber Traders’ 17mm cow mats across 80 cattle stalls. Leg slipping incidents completely stopped, bedding cleaning time was cut by half, and milk yields noticeably improved.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&q=80&fit=crop&crop=face',
    verified: 'Verified dairy owner',
  },
  {
    name: 'Tariq Mehmood Qureshi',
    role: 'PUNJAB LIVESTOCK COOPERATIVE, FAISALABAD',
    stars: 5,
    text: 'Ordered over 400 pieces of EVA flooring sheets for our storage facility. True factory wholesale price with zero hassle. Delivered within 48 hours to Faisalabad with top quality.',
    img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&q=80&fit=crop&crop=face',
    verified: 'Bulk B2B buyer',
  },
  {
    name: 'Bilal Siddiqui',
    role: 'AGRO INDUSTRIES, KARACHI',
    stars: 5,
    text: 'The 20mm milking parlor mats are phenomenal. Liquid washes right off the drainage channels and the surface stays high-traction even when wet. Outstanding service on WhatsApp.',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&q=80&fit=crop&crop=face',
    verified: 'Repeat commercial client',
  },
];

const StarRow = ({ count = 5, size = 14 }) => (
  <span className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={size} fill="#f97316" className="text-orange-500" />
    ))}
  </span>
);

export default function TestimonialsSection() {
  const [featured, ...rest] = testimonials;

  return (
    <section id="reviews" className="section-pad border-b border-zinc-200 bg-[#f7f6f2]">
      <div className="shell">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              index="06"
              eyebrow="Client outcomes"
              title="WHAT FARMS SAY"
              accent="AFTER INSTALLATION."
              description="Hundreds of progressive dairy farmers and livestock facilities across Pakistan rely on our flooring."
            />
          </div>
          <div
            className="lg:col-span-5 lg:justify-self-end"
            data-reveal="up"
            style={{ '--reveal-delay': '180ms' }}
          >
            <div className="inline-flex items-center gap-4 border border-zinc-300 bg-white px-5 py-4">
              <div className="text-center">
                <div className="font-heading text-4xl font-black leading-none text-zinc-950">
                  4.9
                </div>
                <StarRow size={11} />
              </div>
              <div className="h-10 w-px bg-zinc-200" />
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-900">
                  77 Google reviews
                </div>
                <div className="mt-0.5 text-[10px] text-zinc-500">
                  Verified on Google Maps
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Featured quote */}
          <article
            className="relative flex flex-col justify-between overflow-hidden bg-zinc-950 p-7 text-white sm:p-10 lg:col-span-7"
            data-reveal="up"
          >
            <Quote
              size={180}
              className="pointer-events-none absolute -right-6 -top-10 text-white/[0.04]"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <StarRow size={16} />
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-zinc-500">
                  Review / 01
                </span>
              </div>

              <blockquote className="mt-7 font-heading text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-[2rem]">
                “{featured.text}”
              </blockquote>
            </div>

            <div className="relative mt-8 flex items-center gap-4 border-t border-zinc-800 pt-6">
              <img
                src={featured.img}
                alt={featured.name}
                className="h-14 w-14 flex-shrink-0 rounded-full border-2 border-orange-500/40 object-cover"
              />
              <div>
                <div className="font-heading text-base font-black uppercase tracking-wide">
                  {featured.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-orange-400">
                  {featured.role}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
                  <CheckCircle2 size={12} />
                  <span>{featured.verified}</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-orange-500" />
          </article>

          {/* Secondary quotes */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((t, i) => (
              <article
                key={t.name}
                className="group relative flex flex-1 flex-col justify-between border border-zinc-300 bg-white p-6 transition-colors hover:border-orange-500 sm:p-7"
                data-reveal="up"
                style={{ '--reveal-delay': `${(i + 1) * 110}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <StarRow />
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                      0{i + 2}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-700">“{t.text}”</p>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-zinc-100 pt-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-10 w-10 rounded-full border border-orange-200 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div>
                    <div className="font-heading text-sm font-black uppercase tracking-wide text-zinc-950">
                      {t.name}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-orange-600">
                      {t.role}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

