import { Phone, MapPin, Star, MessageCircle, Mail, ShieldCheck } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function TopInfoBar() {
  return (
    <div className="bg-zinc-950 text-zinc-300 border-b border-zinc-800 py-2.5 px-6 sm:px-10 lg:px-16 xl:px-24 hidden md:block text-xs font-medium tracking-wide">
      <div className="w-full flex items-center justify-between">
        {/* Left Info Links */}
        <div className="flex items-center gap-7">
          <span className="flex items-center gap-2">
            <Phone size={13} className="text-orange-500" />
            <span className="text-zinc-400 font-normal">Direct Inquiry:</span>
            <a
              href="tel:+923116103661"
              className="text-white hover:text-orange-400 transition-colors font-mono font-bold tracking-wider"
            >
              +92 311 6103661
            </a>
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-orange-500" />
            <span className="text-zinc-400 font-normal">Lahore Facility:</span>
            <span className="text-white font-medium">34 Jamia St, Fleming Rd, Wachowali</span>
          </span>
          <span className="hidden xl:flex items-center gap-2">
            <Mail size={13} className="text-orange-500" />
            <span className="text-zinc-400">info@ahmadrubbertraders.pk</span>
          </span>
        </div>

        {/* Right Verified Badges */}
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <MessageCircle size={12} />
            <span>WhatsApp Verified</span>
          </a>
          <a
            href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-200 hover:text-orange-400 transition-colors"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#f97316" className="text-orange-500" />
              ))}
            </div>
            <span className="font-bold text-white">4.9★</span>
            <span className="text-zinc-400 text-[11px]">(77 Google Reviews)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
