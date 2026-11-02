import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Factory, Star, MapPin, ShieldCheck } from 'lucide-react';

const WHATSAPP = '923116103661';

const stats = [
  { value: '17mm', label: 'Heavy-duty gauge', sub: 'Vulcanized rubber' },
  { value: '500+', label: 'Farms supplied', sub: 'Across Pakistan' },
  { value: '4.9/5', label: 'Google rating', sub: '77 verified reviews' },
  { value: '10+', label: 'Years in trade', sub: 'Factory direct' },
];

export default function HeroSection() {
  const watermarkRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      if (watermarkRef.current) {
        watermarkRef.current.style.transform = `translate3d(0, calc(-50% + ${y * 0.1}px), 0)`;
      }
      if (visualRef.current) {
        visualRef.current.style.transform = `translate3d(0, ${Math.min(y * 0.05, 34)}px, 0)`;
      }
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-zinc-200 bg-[#f7f6f2] bg-grid-industrial"
    >
      {/* Ambient accents */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-orange-400/15 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute -bottom-20 -left-24 h-[380px] w-[380px] rounded-full bg-amber-300/20 blur-3xl animate-blob"
        style={{ animationDelay: '-8s' }}
      />

      {/* Faint architectural watermark */}
      <div
        ref={watermarkRef}
        className="pointer-events-none absolute left-0 top-1/2 select-none whitespace-nowrap font-heading text-[190px] font-black uppercase leading-none tracking-tighter text-zinc-900 opacity-[0.035] will-change-transform lg:text-[260px]"
        style={{ transform: 'translate3d(0, -50%, 0)' }}
      >
        RUBBER
      </div>

      <div className="shell relative z-10 grid items-center gap-12 pb-10 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-20">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-6">
          <div
            className="badge-animated inline-flex w-fit items-center gap-2.5 border border-zinc-300 bg-white px-3.5 py-2 shadow-sm"
            data-reveal="up"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            <span className="font-heading text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900">
              Fleming Road, Lahore
            </span>
            <span className="h-3 w-px bg-zinc-300" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              Since 2014
            </span>
          </div>

          <h1
            className="mt-6 font-heading text-[clamp(2.9rem,7.2vw,5.6rem)] font-black uppercase leading-[0.9] tracking-tight text-zinc-950"
            data-reveal="up"
            style={{ '--reveal-delay': '80ms' }}
          >
            DAIRY FARM
            <br />
            <span className="text-gradient-orange">RUBBER MATS</span>
            <br />
            &amp; FLOORING.
          </h1>

          <p
            className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base"
            data-reveal="up"
            style={{ '--reveal-delay': '160ms' }}
          >
            Factory-direct wholesale supply of{' '}
            <strong className="font-bold text-zinc-950">heavy-duty cow mats</strong>,{' '}
            <strong className="font-bold text-zinc-950">EVA interlocking sheets</strong> and{' '}
            <strong className="font-bold text-zinc-950">milking parlor mats</strong> — engineered
            to prevent cattle slip injuries, hold up to daily washdowns, and outlast ordinary
            flooring.
          </p>

          <div
            className="mt-8 flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center"
            data-reveal="up"
            style={{ '--reveal-delay': '230ms' }}
          >
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-shine group inline-flex items-center justify-center gap-3 bg-orange-500 px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl active:scale-95"
            >
              <span>Request bulk quote</span>
              <span className="flex h-6 w-6 items-center justify-center bg-black/20">
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20want%20to%20place%20a%20direct%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 border border-zinc-950 bg-zinc-950 px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800 active:scale-95"
            >
              <MessageCircle size={15} className="text-emerald-400 icon-motion" />
              <span>WhatsApp order</span>
            </a>
          </div>

          {/* Social proof row */}
          <div
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-zinc-300/80 pt-5"
            data-reveal="up"
            style={{ '--reveal-delay': '300ms' }}
          >
            <div className="flex items-center gap-2">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#f97316" className="text-orange-500" />
                ))}
              </span>
              <span className="text-xs font-bold text-zinc-900">
                4.9 <span className="font-medium text-zinc-500">(77 reviews)</span>
              </span>
            </div>
            <span className="hidden h-4 w-px bg-zinc-300 sm:block" />
            <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600">
              <ShieldCheck size={14} className="text-emerald-600" />
              Genuine vulcanized rubber
            </span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="relative lg:col-span-6 xl:col-span-6"
          data-reveal="right"
          style={{ '--reveal-delay': '200ms' }}
        >
          <div ref={visualRef} className="relative mx-auto w-full max-w-lg will-change-transform lg:ml-auto lg:mr-0">
            {/* Offset outline frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-zinc-900/15" />

            <div className="group relative overflow-hidden border-[6px] border-white bg-zinc-900 shadow-[0_35px_80px_-30px_rgba(0,0,0,0.55)]">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1000&q=85&fit=crop"
                alt="Rubber manufacturing facility in Lahore"
                className="h-[430px] w-full object-cover object-top contrast-[1.05] transition-transform duration-700 group-hover:scale-[1.04] sm:h-[500px] lg:h-[560px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/10 to-transparent" />

              {/* Rating stamp */}
              <div className="absolute left-5 top-5 bg-orange-500 px-3.5 py-2.5 text-white shadow-xl">
                <div className="font-heading text-2xl font-black leading-none">4.9★</div>
                <div className="mt-1 text-[9px] font-black uppercase tracking-[0.14em] text-black">
                  Google verified
                </div>
              </div>

              {/* Corner accent */}
              <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 border-b-2 border-l-2 border-orange-500/70 bg-orange-500/10" />

              {/* Bottom location card */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 border border-white/20 bg-zinc-950/80 p-3.5 text-white backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 font-heading text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-400">
                    <Factory size={11} />
                    <span>Wholesale warehouse</span>
                  </div>
                  <div className="mt-1 truncate font-heading text-sm font-black uppercase tracking-wide sm:text-base">
                    34 Jamia St, Fleming Rd, Lahore
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-orange-500 text-black transition-colors hover:bg-white"
                >
                  <MapPin size={17} />
                </a>
              </div>
            </div>

            {/* Floating spec card */}
            <div className="animate-float absolute -left-5 bottom-24 z-20 hidden w-44 border-2 border-zinc-700 bg-zinc-950 p-4 text-white shadow-2xl transition-colors hover:border-orange-500 sm:block">
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400">
                Built to spec
              </div>
              <div className="mt-1 font-heading text-3xl font-black leading-none">17MM</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                Vulcanized rubber
              </div>
              <div className="mt-3 h-1 w-full bg-zinc-800">
                <div className="h-full w-4/5 bg-orange-500" />
              </div>
            </div>

            {/* Vertical side label */}
            <div className="absolute -right-9 top-1/2 hidden -translate-y-1/2 xl:block">
              <span className="block rotate-90 whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-400">
                Factory direct · Lahore
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="relative z-10 border-t border-zinc-300/80 bg-white/50 backdrop-blur-sm">
        <div className="shell grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`flex items-center gap-3 py-5 sm:gap-4 ${
                i !== 0 ? 'lg:border-l lg:border-zinc-300/80 lg:pl-6' : ''
              } ${i % 2 !== 0 ? 'border-l border-zinc-300/80 pl-4 sm:pl-6 lg:border-l' : ''} ${
                i < 2 ? 'border-b border-zinc-300/80 lg:border-b-0' : ''
              }`}
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 70}ms` }}
            >
              <div className="font-heading text-2xl font-black leading-none text-zinc-950 sm:text-3xl">
                {s.value}
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-800">
                  {s.label}
                </div>
                <div className="truncate text-[10px] font-medium text-zinc-500">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden border-y-2 border-zinc-900 bg-orange-500 py-2.5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-orange-500 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-orange-500 to-transparent" />
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-7 pr-7 font-heading text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950"
            >
              <span>★ 17MM HEAVY-DUTY COW MATS</span>
              <span className="opacity-40">◆</span>
              <span>★ EVA INTERLOCKING FLOOR SHEETS</span>
              <span className="opacity-40">◆</span>
              <span>★ MILKING PARLOR WATERPROOF MATS</span>
              <span className="opacity-40">◆</span>
              <span>★ DIRECT FACTORY WHOLESALE RATES</span>
              <span className="opacity-40">◆</span>
              <span>★ ALL PAKISTAN CARGO DISPATCH</span>
              <span className="opacity-40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
