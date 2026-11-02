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
    <section id="reviews" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hear What Our Clients Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real feedback from commercial dairy owners, livestock breeders, and agricultural facility managers across Pakistan.
          </p>
        </div>

        {/* 4 Tall Video/Portrait Testimonial Cards (Exact Reference Reproduction) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          {reviews.map((r) => {
            const isActive = activeId === r.id;
            return (
              <div
                key={r.id}
                onClick={() => setActiveId(r.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shadow-md hover:shadow-2xl ${
                  isActive
                    ? 'lg:col-span-5 h-[460px] sm:h-[500px] ring-2 ring-sky-500'
                    : 'lg:col-span-2.33 h-[420px] sm:h-[500px] hover:scale-[1.02]'
                } bg-slate-900 group`}
                style={{
                  gridColumn: isActive ? 'span 5 / span 5' : 'span 2 / span 2',
                }}
              >
                {/* Background Image */}
                <img
                  src={r.img}
                  alt={r.name}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ${
                    isActive ? 'scale-100 brightness-90' : 'filter brightness-75 group-hover:scale-105'
                  }`}
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Rating Badge Top Left */}
                <div className="absolute top-4 left-4 z-10 flex gap-0.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={11} fill="#eab308" className="text-yellow-400" />
                  ))}
                </div>

                {/* Card Bottom Area */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 text-white space-y-2.5">
                  {/* Expanded Quote Box if Active */}
                  {isActive ? (
                    <div className="bg-slate-950/80 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 space-y-2 shadow-xl animate-fadeIn">
                      <Quote size={20} className="text-sky-400 opacity-80" />
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                        "{r.quote}"
                      </p>
                      <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[11px] text-slate-400">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 size={12} /> Verified Order
                        </span>
                        <span>{r.matsOrdered}</span>
                      </div>
                    </div>
                  ) : null}

                  {/* Name and Designation */}
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                      {r.name}
                    </h3>
                    <div className="text-sky-300 text-xs font-medium mt-0.5 truncate">
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

