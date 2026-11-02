import { useState } from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Muhammad Asif',
    role: 'Al-Raza Dairy Farm, Lahore',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'We installed 17mm rubber cow mats across 80 stalls in our Lahore facility. Leg slipping accidents stopped completely, bedding cleaning time was reduced by half, and milk yields noticeably improved.',
    rating: 5,
    matsOrdered: '80 Cow Mats',
  },
  {
    id: 2,
    name: 'Tariq Mehmood',
    role: 'Punjab Livestock Cooperative, Faisalabad',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'Ordered over 400 pieces of EVA flooring sheets for our storage facility. True factory wholesale pricing with zero hassle. Ahmad Rubber Traders delivered within 48 hours to Faisalabad with top quality.',
    rating: 5,
    matsOrdered: '400 EVA Sheets',
  },
  {
    id: 3,
    name: 'Bilal Siddiqui',
    role: 'Siddiqui Agro Industries, Karachi',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'The 20mm milking parlor mats are phenomenal. Liquid washes right off the drainage channels and the surface stays high-traction even during wet washdowns. Fast communication on WhatsApp!',
    rating: 5,
    matsOrdered: '60 Parlor Mats',
  },
  {
    id: 4,
    name: 'Kamran Malik',
    role: 'Sahiwal Cattle Breeders, Sahiwal',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&q=85&fit=crop&crop=face',
    quote:
      'Our heavy Sahiwal bulls require mats that do not tear under hoof pressure. Ahmad Rubber Traders provided genuine vulcanized mats that still look brand new after 2 years of constant use.',
    rating: 5,
    matsOrdered: '120 Heavy Mats',
  },
];

export default function ClientReviewsSection() {
  const [activeId, setActiveId] = useState(2); // default featured

  return (
    <section id="reviews" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-white border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto space-y-10 sm:space-y-14">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Hear What Our Clients Say
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
            Real feedback from commercial dairy owners, livestock breeders, and agricultural facility managers across Pakistan.
          </p>
        </div>

        {/* Responsive Testimonial Cards: 1 col on mobile, 2 col on tablet, 12-col bento on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {reviews.map((r) => {
            const isActive = activeId === r.id;
            return (
              <div
                key={r.id}
                onClick={() => setActiveId(r.id)}
                className={`relative rounded-3xl lg:rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 shadow-md hover:shadow-2xl bg-slate-900 group ${
                  isActive
                    ? 'sm:col-span-2 lg:col-span-6 h-[440px] sm:h-[480px] lg:h-[520px] ring-4 ring-sky-500 shadow-2xl'
                    : 'sm:col-span-1 lg:col-span-2 h-[380px] sm:h-[440px] lg:h-[520px] hover:scale-[1.02]'
                }`}
              >
                {/* Background Image */}
                <img
                  src={r.img}
                  alt={r.name}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ${
                    isActive ? 'scale-100 brightness-95' : 'filter brightness-75 group-hover:scale-105'
                  }`}
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent pointer-events-none" />

                {/* Rating Badge Top Left */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 flex gap-0.5 bg-black/50 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20 shadow-md">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={11} fill="#eab308" className="text-yellow-400" />
                  ))}
                </div>

                {/* Card Bottom Area */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-10 text-white space-y-2.5 sm:space-y-3">
                  {/* Expanded Quote Box if Active */}
                  {isActive && (
                    <div className="glass-dark rounded-2xl p-3.5 sm:p-5 space-y-2 sm:space-y-2.5 shadow-2xl border border-white/20 animate-fadeIn">
                      <Quote size={20} className="text-sky-400 opacity-90" />
                      <p className="text-xs sm:text-sm text-slate-100 leading-relaxed italic font-normal line-clamp-4 sm:line-clamp-none">
                        "{r.quote}"
                      </p>
                      <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/15 text-[10px] sm:text-[11px] text-slate-300">
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 size={12} /> Verified Buyer
                        </span>
                        <span className="font-mono">{r.matsOrdered}</span>
                      </div>
                    </div>
                  )}

                  {/* Name and Designation */}
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg lg:text-xl text-white leading-tight">
                      {r.name}
                    </h3>
                    <div className="text-sky-300 text-[11px] sm:text-xs font-semibold mt-0.5 truncate">
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
