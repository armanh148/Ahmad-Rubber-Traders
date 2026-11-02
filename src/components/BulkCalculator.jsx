import { useState } from 'react';
import { MessageCircle, CheckCircle, Calculator, MapPin, Phone, Ruler, ArrowRight } from 'lucide-react';

const WHATSAPP = '923116103661';

const PRODUCTS = [
  { id: 'cow-mat', name: 'Dairy Rubber Cow Mats (17mm)', sqft: 17.4, weight: 12 },
  { id: 'eva', name: 'EVA Interlocking Floor Sheets (10–25mm)', sqft: 3.87, weight: 2.5 },
  { id: 'milking', name: 'Milking Parlor Drainage Mats (20mm)', sqft: 21.5, weight: 15 },
];

const benefits = [
  'Direct factory wholesale rates — no middlemen markups',
  'Custom dimensions & thickness cuts on bulk orders',
  'Prompt cargo dispatch to Karachi, Faisalabad, Multan & nationwide',
  'Direct WhatsApp & phone support 7 days a week',
];

export default function CTASection() {
  const [product, setProduct] = useState(PRODUCTS[0].id);
  const [mode, setMode] = useState('sqft');
  const [val, setVal] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);

  const prod = PRODUCTS.find((p) => p.id === product);

  const calculate = () => {
    const n = parseFloat(val);
    if (!n || n <= 0) return;
    const pieces = mode === 'sqft' ? Math.ceil(n / prod.sqft) : Math.ceil(n);
    const area = mode === 'sqft' ? n : pieces * prod.sqft;
    setResult({
      pieces,
      area: area.toFixed(1),
      weight: (pieces * prod.weight).toFixed(1),
    });
  };

  const waMsg = () => {
    let m = `Hello Ahmad Rubber Traders,\n\n📋 *BULK INQUIRY & SPEC ESTIMATE*\n`;
    if (company) m += `🏢 Company/Farm: ${company}\n`;
    if (city) m += `📍 City: ${city}\n`;
    m += `\n🛒 Product: ${prod.name}\n`;
    if (result) {
      m += `📐 Total Area: ${result.area} sq.ft.\n`;
      m += `📦 Estimated Pieces: ${result.pieces} pcs\n`;
      m += `⚖️ Approx Total Weight: ~${result.weight} kg\n`;
    } else if (val) {
      m += `🔢 Quantity: ${val} ${mode === 'sqft' ? 'sq.ft.' : 'pieces'}\n`;
    }
    m += `\nPlease provide your best factory wholesale price quote. Thank you!`;
    return encodeURIComponent(m);
  };

  return (
    <section
      id="calculator"
      className="section-pad relative overflow-hidden border-b-2 border-zinc-950 bg-orange-500"
    >
      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/20 blur-3xl" />

      <div className="shell relative grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT COLUMN */}
        <div className="text-zinc-950 lg:col-span-6 lg:pt-4">
          <div
            className="inline-flex items-center gap-2 border border-black/20 bg-black/10 px-3.5 py-2 font-heading text-[10px] font-black uppercase tracking-[0.24em]"
            data-reveal="left"
          >
            <Calculator size={13} />
            <span>Interactive B2B bulk calculator</span>
          </div>

          <h2
            className="mt-5 font-heading text-[clamp(2.3rem,5vw,4.2rem)] font-black uppercase leading-[0.92] tracking-tight"
            data-reveal="left"
            style={{ '--reveal-delay': '80ms' }}
          >
            START BUILDING YOUR
            <br />
            <span className="text-white drop-shadow-sm">INDUSTRIAL FACILITY</span>
            <br />
            TODAY.
          </h2>

          <p
            className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-zinc-950/90 sm:text-base"
            data-reveal="left"
            style={{ '--reveal-delay': '140ms' }}
          >
            Calculate your farm floor area or piece count instantly. Get a tailored spec and
            weight summary, then send it straight to our team on WhatsApp for direct wholesale
            rates.
          </p>

          <div
            className="mt-8 grid gap-x-6 gap-y-3 border-y border-black/20 py-6 sm:grid-cols-2"
            data-reveal="left"
            style={{ '--reveal-delay': '200ms' }}
          >
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-zinc-950" />
                <span className="text-xs font-extrabold leading-snug text-zinc-950 sm:text-sm">
                  {b}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-heading text-sm font-black"
            data-reveal="left"
            style={{ '--reveal-delay': '260ms' }}
          >
            <a
              href="tel:+923116103661"
              className="flex items-center gap-2 transition-transform hover:-translate-y-0.5 hover:underline"
            >
              <Phone size={16} />
              <span>+92 311 6103661</span>
            </a>
            <a
              href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-transform hover:-translate-y-0.5 hover:underline"
            >
              <MapPin size={16} />
              <span>Wachowali, Lahore</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — quote slip */}
        <div
          className="lg:col-span-6"
          data-reveal="right"
          style={{ '--reveal-delay': '160ms' }}
        >
          <div className="border-2 border-zinc-950 bg-white text-zinc-900 shadow-[10px_10px_0_0_rgba(9,9,11,1)]">
            {/* Slip header */}
            <div className="flex items-center justify-between gap-3 border-b-2 border-zinc-950 bg-zinc-950 px-5 py-4 text-white sm:px-6">
              <div>
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-orange-400">
                  Instant estimation
                </div>
                <div className="font-heading text-lg font-black uppercase tracking-wide">
                  Bulk spec &amp; price calculator
                </div>
              </div>
              <Ruler size={26} className="hidden text-orange-500 sm:block" />
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              {/* Product */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-heading text-[10px] font-black uppercase tracking-[0.18em] text-zinc-600">
                  <span className="flex h-5 w-5 items-center justify-center bg-zinc-950 text-[9px] text-white">
                    1
                  </span>
                  Select rubber product
                </label>
                <select
                  value={product}
                  onChange={(e) => {
                    setProduct(e.target.value);
                    setResult(null);
                  }}
                  className="w-full border-2 border-zinc-200 bg-zinc-50 px-3.5 py-3 text-sm font-bold text-zinc-900 outline-none transition-colors focus:border-orange-500"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mode */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-heading text-[10px] font-black uppercase tracking-[0.18em] text-zinc-600">
                  <span className="flex h-5 w-5 items-center justify-center bg-zinc-950 text-[9px] text-white">
                    2
                  </span>
                  Input mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    ['sqft', 'Total area (sq. ft.)'],
                    ['pieces', 'Piece quantity'],
                  ].map(([v, l]) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => {
                        setMode(v);
                        setResult(null);
                      }}
                      className={`border-2 px-2 py-2.5 font-heading text-[10px] font-black uppercase tracking-wider transition-all ${
                        mode === v
                          ? 'border-zinc-950 bg-zinc-950 text-white'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-400'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="mb-2 flex items-center gap-2 font-heading text-[10px] font-black uppercase tracking-[0.18em] text-zinc-600">
                  <span className="flex h-5 w-5 items-center justify-center bg-zinc-950 text-[9px] text-white">
                    3
                  </span>
                  {mode === 'sqft' ? 'Estimated floor area (sq. ft.)' : 'Total pieces needed'}
                </label>
                <div className="relative">
                  <Ruler
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  />
                  <input
                    type="number"
                    min="1"
                    value={val}
                    onChange={(e) => {
                      setVal(e.target.value);
                      setResult(null);
                    }}
                    placeholder={mode === 'sqft' ? 'e.g. 500 sq ft' : 'e.g. 50 pieces'}
                    className="w-full border-2 border-zinc-200 bg-zinc-50 py-3 pl-10 pr-4 text-sm font-bold text-zinc-900 outline-none transition-colors focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Company / city */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 block font-heading text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">
                    Company / farm
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Al-Raza Dairy"
                    className="w-full border-2 border-zinc-200 bg-zinc-50 px-3 py-2.5 text-xs font-semibold text-zinc-900 outline-none transition-colors focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-heading text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">
                    City / location
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Lahore / Multan"
                    className="w-full border-2 border-zinc-200 bg-zinc-50 px-3 py-2.5 text-xs font-semibold text-zinc-900 outline-none transition-colors focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Result */}
              {result && (
                <div className="animate-pop border-2 border-zinc-950 bg-orange-50">
                  <div className="grid grid-cols-3 divide-x-2 divide-orange-200">
                    <div className="p-3 text-center">
                      <div className="font-heading text-lg font-black text-zinc-950">
                        {result.area}
                      </div>
                      <div className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                        Sq. ft.
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <div className="font-heading text-lg font-black text-orange-600">
                        {result.pieces} pcs
                      </div>
                      <div className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                        Mats needed
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <div className="font-heading text-lg font-black text-zinc-950">
                        ~{result.weight} kg
                      </div>
                      <div className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                        Est. weight
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-2.5 pt-1 sm:flex-row">
                <button
                  type="button"
                  onClick={calculate}
                  className="btn-shine inline-flex flex-1 items-center justify-center gap-2 bg-zinc-950 px-4 py-3.5 font-heading text-[11px] font-extrabold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800 active:scale-95"
                >
                  <Calculator size={14} />
                  <span>Calculate</span>
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${waMsg()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine group inline-flex flex-[1.7] items-center justify-center gap-2 bg-emerald-600 px-4 py-3.5 font-heading text-[11px] font-extrabold uppercase tracking-[0.18em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 active:scale-95"
                >
                  <MessageCircle size={15} className="icon-motion" />
                  <span>Send inquiry</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <p className="text-center text-[10px] leading-relaxed text-zinc-500">
                Estimates only — final pricing confirmed on WhatsApp by our wholesale team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
