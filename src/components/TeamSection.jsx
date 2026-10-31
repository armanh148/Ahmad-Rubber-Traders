import { MessageCircle, ShieldCheck } from 'lucide-react';

const experts = [
  {
    name: 'Ahmad Saeed',
    role: 'MANAGING DIRECTOR',
    subtitle: 'Founder & Rubber Specialist',
    exp: '15+ Years in Vulcanized Rubber Production',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=85&fit=crop&crop=face',
  },
  {
    name: 'Usman Ahmad',
    role: 'HEAD OF WHOLESALE SALES',
    subtitle: 'Commercial Dairy Accounts',
    exp: 'Over 500+ Farm Installations Managed',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=85&fit=crop&crop=face',
  },
  {
    name: 'Bilal Raza',
    role: 'QUALITY CONTROL LEAD',
    subtitle: 'Tensile & Anti-Slip Inspector',
    exp: 'ISO Standard Livestock Flooring Certified',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=85&fit=crop&crop=face',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#f8f9fa] py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 border-b border-zinc-200">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="badge-animated inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-orange-700 mb-4"
            data-reveal="up"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span>Dedicated Technical Experts</span>
          </div>
          <h2
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 uppercase leading-[0.98] tracking-tight"
            data-reveal="up"
            style={{ '--reveal-delay': '80ms' }}
          >
            MEET THE EXPERTS BEHIND OUR<br />
            <span className="text-gradient-orange">INDUSTRIAL EXCELLENCE</span>.
          </h2>
          <p
            className="text-zinc-600 mt-4 text-sm sm:text-base leading-relaxed font-normal"
            data-reveal="up"
            style={{ '--reveal-delay': '160ms' }}
          >
            Our team brings over a decade of specialized industrial rubber formulation, vulcanization engineering, and dedicated livestock facility flooring consultation.
          </p>
        </div>

        {/* 3 Expert Cards with Warm Orange Gradient Behind (Exact reference detail) */}
        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((exp, i) => (
            <div
              key={exp.name}
              className="hover-tilt card-spotlight group bg-white border border-zinc-200 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden flex flex-col"
              data-reveal="up"
              data-spotlight
              style={{ '--reveal-delay': `${i * 120}ms` }}
            >
              {/* Portrait Frame with Ambient Orange Glow */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-t from-orange-500/25 via-orange-100/40 to-zinc-100 flex items-end justify-center pt-6">
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.3)_0%,transparent_70%)] pointer-events-none" />

                <img
                  src={exp.img}
                  alt={exp.name}
                  className="w-56 h-56 sm:w-64 sm:h-64 object-cover object-top rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500 z-10"
                />

                {/* Verified Shield Badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full shadow-md z-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <ShieldCheck size={18} />
                </div>
              </div>

              {/* Info Details */}
              <div className="p-6 text-center space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-orange-600 font-heading font-black text-xs uppercase tracking-widest">
                    {exp.role}
                  </div>
                  <h3 className="font-heading font-black text-2xl text-zinc-950 uppercase tracking-tight">
                    {exp.name}
                  </h3>
                  <div className="text-zinc-500 text-xs font-semibold">{exp.subtitle}</div>
                  <p className="text-zinc-600 text-xs leading-relaxed mt-2 pt-2 border-t border-zinc-100">
                    {exp.exp}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <a
                    href={`https://wa.me/923116103661?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(
                      exp.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-900 hover:text-orange-600 font-extrabold text-xs uppercase tracking-wider transition-colors group"
                  >
                    <MessageCircle size={14} className="text-emerald-600 icon-motion" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Bottom Orange Accent */}
              <div className="h-1 bg-zinc-100 group-hover:bg-orange-500 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
