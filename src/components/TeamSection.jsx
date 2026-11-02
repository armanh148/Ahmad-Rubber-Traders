import { ArrowUpRight, MessageCircle, ShieldCheck, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';

const experts = [
  {
    name: 'Ahmad Saeed',
    role: 'MANAGING DIRECTOR',
    subtitle: 'Founder & rubber specialist',
    exp: '15+ years in vulcanized rubber production',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=85&fit=crop&crop=face',
  },
  {
    name: 'Usman Ahmad',
    role: 'HEAD OF WHOLESALE SALES',
    subtitle: 'Commercial dairy accounts',
    exp: 'Over 500+ farm installations managed',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=85&fit=crop&crop=face',
  },
  {
    name: 'Bilal Raza',
    role: 'QUALITY CONTROL LEAD',
    subtitle: 'Tensile & anti-slip inspector',
    exp: 'ISO standard livestock flooring certified',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=85&fit=crop&crop=face',
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="section-pad border-b border-zinc-200 bg-white"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left — heading */}
          <div className="self-start lg:col-span-4 lg:sticky lg:top-28">
            <SectionHeading
              index="03"
              eyebrow="The people"
              title="EXPERTS BEHIND"
              accent="THE PLANT."
              description="A small, hands-on team with over a decade of rubber formulation, vulcanization, and livestock flooring consultation."
            />

            <div
              className="mt-8 border border-zinc-200 bg-[#f7f6f2] p-5"
              data-reveal="up"
              style={{ '--reveal-delay': '220ms' }}
            >
              <div className="flex items-center gap-2 font-heading text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950">
                <ShieldCheck size={15} className="text-orange-500" />
                <span>Talk to a real specialist</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                No call centre — speak directly with the team that manufactures and dispatches
                your order.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/923116103661?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20would%20like%20to%20speak%20with%20your%20technical%20team.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-950 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-orange-500 hover:text-black"
                >
                  <MessageCircle size={13} className="text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+923116103661"
                  className="inline-flex items-center gap-2 border border-zinc-300 bg-white px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-900 transition-colors hover:border-orange-500 hover:text-orange-600"
                >
                  <Phone size={13} className="text-orange-500" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — expert rows */}
          <div className="lg:col-span-8">
            <div className="border-t border-zinc-300">
              {experts.map((exp, i) => (
                <div
                  key={exp.name}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-zinc-300 px-1 py-5 transition-colors hover:bg-[#f7f6f2] sm:gap-6 sm:px-4 sm:py-6"
                  data-reveal="up"
                  style={{ '--reveal-delay': `${i * 90}ms` }}
                >
                  <div className="relative h-[74px] w-[74px] overflow-hidden bg-zinc-200 sm:h-24 sm:w-24">
                    <img
                      src={exp.img}
                      alt={exp.name}
                      className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center bg-orange-500 text-black">
                      <ShieldCheck size={12} />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="font-heading text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
                      {exp.role}
                    </div>
                    <h3 className="mt-0.5 font-heading text-xl font-black uppercase leading-none tracking-tight text-zinc-950 sm:text-2xl">
                      {exp.name}
                    </h3>
                    <div className="mt-1.5 text-[11px] font-bold text-zinc-500 sm:text-xs">
                      {exp.subtitle}
                    </div>
                    <div className="mt-1 hidden text-[11px] text-zinc-500 sm:block">{exp.exp}</div>
                  </div>

                  <a
                    href={`https://wa.me/923116103661?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(
                      exp.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with ${exp.name} on WhatsApp`}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-zinc-300 text-zinc-700 transition-all group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-black sm:h-12 sm:w-12"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              ))}
            </div>

            <div
              className="mt-6 flex flex-col justify-between gap-2 text-[11px] text-zinc-500 sm:flex-row sm:items-center"
              data-reveal="up"
            >
              <span>Mon – Sat · 9:00 AM – 7:30 PM</span>
              <span className="font-mono uppercase tracking-wider">
                Lahore · Karachi · Faisalabad · Multan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

