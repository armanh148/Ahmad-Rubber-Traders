import { Phone, MapPin, Star, MessageCircle, ShieldCheck } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function TopInfoBar() {
  return (
    <div className="bg-slate-950 text-slate-300 py-2.5 px-6 sm:px-10 lg:px-16 text-xs font-medium border-b border-slate-900">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
          <a
            href="tel:+923116103661"
            className="flex items-center gap-2 hover:text-sky-400 transition-colors group"
          >
            <div className="w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
              <Phone size={11} />
            </div>
            <span className="font-bold text-white tracking-wide font-mono">+92 311 6103661</span>
          </a>

          <span className="hidden md:inline text-slate-800">|</span>

          <span className="flex items-center gap-1.5 text-slate-400">
            <MapPin size={13} className="text-sky-400" />
            <span className="text-slate-300 font-medium">34 Jamia St, Fleming Rd, Wachowali, Lahore</span>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-semibold hover:bg-emerald-500 hover:text-white transition-all shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>WhatsApp Verified</span>
          </a>

          <a
            href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#eab308" className="text-yellow-400" />
              ))}
            </div>
            <span className="font-extrabold text-white">4.9★</span>
            <span className="text-slate-400 text-[11px] font-normal">(77 Maps Reviews)</span>
          </a>
        </div>
      </div>
    </div>
  );
}

