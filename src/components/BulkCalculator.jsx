import { useState } from 'react';
import { MessageCircle, CheckCircle, Calculator, MapPin, Phone, Ruler } from 'lucide-react';

const WHATSAPP = '923116103661';

const PRODUCTS = [
  { id: 'cow-mat', name: 'Dairy Rubber Cow Mats (17mm)', sqft: 17.4, weight: 12 },
  { id: 'eva', name: 'EVA Interlocking Floor Sheets (10–25mm)', sqft: 3.87, weight: 2.5 },
  { id: 'milking', name: 'Milking Parlor Drainage Mats (20mm)', sqft: 21.5, weight: 15 },
];

const benefits = [
  'Direct factory wholesale rates — no middlemen markups',
  'Custom dimensions & thickness cuts available on bulk orders',
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
    <section id="calculator" className="relative bg-orange-500 py-20 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-24 overflow-hidden border-b-2 border-zinc-950">
      {/* Background industrial pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Industrial Heading & Worker Badge (7 cols) */}
        <div className="lg:col-span-7 space-y-7 text-zinc-950">
          <div
            className="badge-animated inline-flex items-center gap-2 bg-black/10 border border-black/20 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] font-heading rounded-sm"
            data-reveal="left"
          >
            <Calculator size={13} className="icon-motion" />
            <span>Interactive B2B Bulk Calculator</span>
          </div>

          <h2
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight"
            data-reveal="left"
            style={{ '--reveal-delay': '80ms' }}
          >
            START BUILDING YOUR<br />
            <span className="text-white drop-shadow-md">INDUSTRIAL FACILITY</span><br />
            TODAY.
          </h2>

          <p
            className="text-zinc-950 text-base sm:text-lg max-w-xl leading-relaxed font-medium"
            data-reveal="left"
            style={{ '--reveal-delay': '140ms' }}
          >
            Calculate your farm floor area or piece count instantly. Get a tailored spec &amp; weight summary,
            then submit directly to Ahmad Rubber Traders on WhatsApp for direct wholesale rates.
          </p>

          <ul className="space-y-3 pt-1" data-reveal="left" style={{ '--reveal-delay': '200ms' }}>
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm sm:text-base font-extrabold text-zinc-950 group">
                <CheckCircle size={18} className="text-zinc-950 flex-shrink-0 icon-motion" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Quick contact strip */}
          <div
            className="pt-6 border-t border-black/20 flex flex-wrap gap-6 text-zinc-950 font-heading font-black text-base"
            data-reveal="left"
            style={{ '--reveal-delay': '260ms' }}
          >
            <a
              href="tel:+923116103661"
              className="flex items-center gap-2 hover:underline hover:-translate-y-0.5 transition-transform"
            >
              <Phone size={17} />
              <span>+92 311 6103661</span>
            </a>
            <a
              href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline hover:-translate-y-0.5 transition-transform"
            >
              <MapPin size={17} />
              <span>34 Jamia St, Fleming Rd, Wachowali, Lahore</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Clean White B2B Calculator Card (5 cols) */}
        <div
          className="card-spotlight lg:col-span-5 bg-white text-zinc-900 p-6 sm:p-8 shadow-2xl border-4 border-zinc-950 space-y-5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500"
          data-reveal="right"
          data-spotlight
          style={{ '--reveal-delay': '160ms' }}
        >
          <div className="border-b border-zinc-200 pb-4">
            <div className="text-orange-600 font-heading font-black text-xs uppercase tracking-widest">
              Instant Estimation Tool
            </div>
            <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-zinc-950">
              Bulk Spec &amp; Price Calculator
            </h3>
            <p className="text-zinc-500 text-xs font-medium mt-1">
              Select product and estimate total weight and required pieces
            </p>
          </div>

          {/* Select Product */}
          <div>
            <label className="block text-zinc-700 text-[10px] font-black uppercase tracking-widest mb-1.5 font-heading">
              1. Select Rubber Product
            </label>
            <select
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
                setResult(null);
              }}
              className="w-full bg-zinc-50 border-2 border-zinc-300 focus:border-orange-500 px-3.5 py-3 text-sm font-bold text-zinc-900 outline-none transition-colors"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Input Mode Switcher */}
          <div>
            <label className="block text-zinc-700 text-[10px] font-black uppercase tracking-widest mb-1.5 font-heading">
              2. Input Mode
            </label>
            <div className="flex border-2 border-zinc-300 overflow-hidden">
              {[
                ['sqft', 'Total Area (Sq. Ft.)'],
                ['pieces', 'Piece Quantity'],
              ].map(([v, l]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setMode(v);
                    setResult(null);
                  }}
                  className={`flex-1 py-2.5 text-xs font-black uppercase tracking-widest transition-all font-heading ${
                    mode === v ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block text-zinc-700 text-[10px] font-black uppercase tracking-widest mb-1.5 font-heading">
              3. {mode === 'sqft' ? 'Estimated Floor Area (Square Feet)' : 'Total Pieces Needed'}
            </label>
            <div className="relative">
              <Ruler size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
              <input
                type="number"
                min="1"
                value={val}
                onChange={(e) => {
                  setVal(e.target.value);
                  setResult(null);
                }}
                placeholder={mode === 'sqft' ? 'e.g. 500 sq ft' : 'e.g. 50 pieces'}
                className="w-full bg-zinc-50 border-2 border-zinc-300 focus:border-orange-500 pl-10 pr-4 py-3 text-sm font-bold text-zinc-900 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Company & City Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-zinc-700 text-[10px] font-black uppercase tracking-widest mb-1.5 font-heading">
                Company / Farm Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Al-Raza Dairy"
                className="w-full bg-zinc-50 border-2 border-zinc-300 focus:border-orange-500 px-3 py-2.5 text-xs font-semibold text-zinc-900 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-zinc-700 text-[10px] font-black uppercase tracking-widest mb-1.5 font-heading">
                City / Location
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Lahore / Multan"
                className="w-full bg-zinc-50 border-2 border-zinc-300 focus:border-orange-500 px-3 py-2.5 text-xs font-semibold text-zinc-900 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Instant Calculation Output */}
          {result && (
            <div className="animate-pop bg-orange-50 border-2 border-orange-300 p-4 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="font-heading font-black text-lg text-zinc-950">{result.area}</div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold">Sq. Ft.</div>
              </div>
              <div className="text-center border-x-2 border-orange-200">
                <div className="font-heading font-black text-lg text-orange-600">{result.pieces} pcs</div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold">Mats Needed</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-black text-lg text-zinc-950">~{result.weight} kg</div>
                <div className="text-zinc-500 text-[10px] uppercase font-bold">Est. Weight</div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={calculate}
              className="btn-shine flex-1 bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold py-4 text-xs uppercase tracking-widest transition-all shadow-md hover:-translate-y-0.5 active:scale-95 font-heading"
            >
              Calculate
            </button>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${waMsg()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine flex-[2] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 text-xs uppercase tracking-widest shadow-md transition-all hover:-translate-y-0.5 active:scale-95 font-heading group"
            >
              <MessageCircle size={15} className="icon-motion" />
              <span>Send WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
