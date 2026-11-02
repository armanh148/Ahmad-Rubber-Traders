import { Phone, MapPin, Star, MessageCircle } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function TopInfoBar() {
  return (
    <div className="bg-slate-900 text-slate-300 py-2.5 px-6 sm:px-10 lg:px-16 text-xs font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5">
          <a
            href="tel:+923116103661"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={13} className="text-sky-400" />
            <span className="font-semibold text-white">+92 311 6103661</span>
          </a>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin size={13} className="text-sky-400" />
            34 Jamia St, Fleming Rd, Wachowali, Lahore
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            WhatsApp Verified
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
          >
            <Star size={12} fill="#eab308" className="text-yellow-500" />
            <span className="font-bold text-white">4.9★</span>
            <span className="text-slate-400">(77 Maps Reviews)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
