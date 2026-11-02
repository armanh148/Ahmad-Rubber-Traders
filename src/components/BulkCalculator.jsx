import { useState } from 'react';
import { Calculator, MessageCircle, Ruler, Building2, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const WHATSAPP = '923116103661';

const PRODUCTS = [
  { id: 'cow-mat', name: 'Heavy-Duty Rubber Cow Mats (17mm)', sqft: 17.4, weight: 12 },
  { id: 'eva', name: 'EVA Interlocking Floor Sheets (10–25mm)', sqft: 3.87, weight: 2.5 },
  { id: 'milking', name: 'Milking Parlor Drainage Mats (20mm)', sqft: 21.5, weight: 15 },
];

export default function BulkCalculator() {
  const [product, setProduct] = useState(PRODUCTS[0].id);
  const [mode, setMode] = useState('sqft');
  const [val, setVal] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);

  const selectedProd = PRODUCTS.find((p) => p.id === product) || PRODUCTS[0];

  const handleCalculate = () => {
    const num = parseFloat(val);
    if (!num || num <= 0) return;
    const pieces = mode === 'sqft' ? Math.ceil(num / selectedProd.sqft) : Math.ceil(num);
    const area = mode === 'sqft' ? num : pieces * selectedProd.sqft;
    setResult({
      pieces,
      area: area.toFixed(1),
      weight: (pieces * selectedProd.weight).toFixed(1),
    });
  };

  const buildWhatsAppMessage = () => {
    let msg = `Hello Ahmad Rubber Traders,\n\n📋 *BULK INQUIRY & SPEC ESTIMATE*\n`;
    if (company) msg += `🏢 Farm / Company: ${company}\n`;
    if (city) msg += `📍 City: ${city}\n`;
    msg += `\n🛒 Product: ${selectedProd.name}\n`;
    if (result) {
      msg += `📐 Floor Area: ${result.area} sq.ft.\n`;
      msg += `📦 Required Pieces: ${result.pieces} pcs\n`;
      msg += `⚖️ Estimated Total Weight: ~${result.weight} kg\n`;
    } else if (val) {
      msg += `🔢 Requested: ${val} ${mode === 'sqft' ? 'sq.ft.' : 'pieces'}\n`;
    }
    msg += `\nPlease share your best direct factory wholesale price quote. Thank you!`;
    return encodeURIComponent(msg);
  };

  return (
    <section id="calculator" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto space-y-10 sm:space-y-12">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 reveal">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Calculator size={14} />
            <span>Interactive B2B Cost Estimator</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Calculate Your Farm Flooring &amp;<br />
            Receive Factory Direct Pricing
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
            Enter your barn floor area or required quantity. Get an instant weight calculation and pre-filled WhatsApp quotation.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="bg-white rounded-3xl lg:rounded-[32px] p-5 sm:p-8 lg:p-12 shadow-xl border border-slate-200/80 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start reveal-scale delay-150">
          {/* Left: Input Form Controls */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Step 1: Select Product */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                1. Select Mat Type
              </label>
              <select
                value={product}
                onChange={(e) => {
                  setProduct(e.target.value);
                  setResult(null);
                }}
                className="w-full bg-slate-50 border border-slate-300 focus:border-sky-600 focus:bg-white rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-colors"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Toggle Unit Mode */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                2. Calculation Mode
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMode('sqft');
                    setResult(null);
                  }}
                  className={`py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all ${
                    mode === 'sqft'
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  By Area (Sq. Ft.)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('pieces');
                    setResult(null);
                  }}
                  className={`py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider transition-all ${
                    mode === 'pieces'
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  By Piece Quantity
                </button>
              </div>
            </div>

            {/* Step 3: Enter Value */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                3. {mode === 'sqft' ? 'Total Floor Area (Square Feet)' : 'Total Pieces Required'}
              </label>
              <div className="relative">
                <Ruler size={16} className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-sky-600" />
                <input
                  type="number"
                  min="1"
                  value={val}
                  onChange={(e) => {
                    setVal(e.target.value);
                    setResult(null);
                  }}
                  placeholder={mode === 'sqft' ? 'e.g. 500 sq ft' : 'e.g. 50 pieces'}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-sky-600 focus:bg-white rounded-xl sm:rounded-2xl pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Step 4: Company & City */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Farm / Business Name
                </label>
                <div className="relative">
                  <Building2 size={16} className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Al-Raza Dairy"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-sky-600 focus:bg-white rounded-xl sm:rounded-2xl pl-10 sm:pl-11 pr-4 py-3 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  City / District
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Lahore, Faisalabad"
                    className="w-full bg-slate-50 border border-slate-300 focus:border-sky-600 focus:bg-white rounded-xl sm:rounded-2xl pl-10 sm:pl-11 pr-4 py-3 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleCalculate}
                className="w-full sm:flex-1 bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 sm:py-4 px-6 rounded-full text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                Calculate Estimate
              </button>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-[1.4] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 sm:py-4 px-6 rounded-full text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                <MessageCircle size={15} />
                <span>Send WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right: Live Calculation Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-2xl sm:rounded-[28px] p-6 sm:p-8 text-white space-y-5 sm:space-y-6 shadow-2xl border border-slate-800">
            <div>
              <span className="text-sky-400 text-xs font-extrabold uppercase tracking-wider">
                Specification Summary
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                {selectedProd.name}
              </h3>
            </div>

            {/* Specs Breakdown */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs border-y border-slate-800 py-3.5 sm:py-4">
              <div>
                <span className="text-slate-400 block text-[11px]">Single Mat Coverage</span>
                <span className="text-white font-bold text-xs sm:text-sm">{selectedProd.sqft} Sq. Ft.</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Unit Weight</span>
                <span className="text-white font-bold text-xs sm:text-sm">~{selectedProd.weight} kg</span>
              </div>
            </div>

            {/* Calculated Results */}
            {result ? (
              <div className="space-y-2.5 sm:space-y-3 bg-white/5 p-4 rounded-xl sm:rounded-2xl border border-white/10 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-xs">Total Coverage:</span>
                  <span className="text-white font-bold text-xs sm:text-sm">{result.area} Sq. Ft.</span>
                </div>
                <div className="flex items-center justify-between text-sky-400 font-extrabold text-sm sm:text-base">
                  <span>Mats Required:</span>
                  <span>{result.pieces} Pieces</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Total Est. Weight:</span>
                  <span className="text-white font-bold">~{result.weight} kg</span>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-dashed border-white/15 text-center text-xs text-slate-400 space-y-1">
                <p>Fill in measurements and tap "Calculate Estimate"</p>
                <p className="text-[11px] text-slate-500">Instant weight &amp; piece estimation</p>
              </div>
            )}

            <div className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
              <span>Direct factory wholesale discount applies on 50+ mats.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
