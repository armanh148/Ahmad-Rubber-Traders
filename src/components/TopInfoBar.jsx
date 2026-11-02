import { Phone, MapPin, Star, MessageCircle, Mail } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function TopInfoBar() {
  return (
    <div className="hidden border-b border-zinc-800 bg-zinc-950 text-zinc-300 md:block">
      <div className="shell flex h-10 items-center justify-between text-[11px] font-medium tracking-wide">
        {/* Left Info Links */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+923116103661"
            className="group flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone size={12} className="text-orange-500" />
            <span className="text-zinc-500">Direct line</span>
            <span className="font-mono font-bold tracking-wider text-white group-hover:text-orange-400">
              +92 311 6103661
            </span>
          </a>

          <span className="hidden h-3.5 w-px bg-zinc-800 lg:block" />

          <span className="hidden items-center gap-2 lg:flex">
            <MapPin size={12} className="text-orange-500" />
            <span className="text-zinc-500">Lahore facility</span>
            <span className="text-zinc-200">34 Jamia St, Fleming Rd, Wachowali</span>
          </span>

          <span className="hidden h-3.5 w-px bg-zinc-800 xl:block" />

          <a
            href="mailto:info@ahmadrubbertraders.pk"
            className="hidden items-center gap-2 transition-colors hover:text-white xl:flex"
          >
            <Mail size={12} className="text-orange-500" />
            <span className="text-zinc-400">info@ahmadrubbertraders.pk</span>
          </a>
        </div>

        {/* Right Verified Badges */}
        <div className="flex items-center gap-5">
          <a
            href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-300 transition-colors hover:text-orange-400"
          >
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="#f97316" className="text-orange-500" />
              ))}
            </span>
            <span className="font-bold text-white">4.9</span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500">
              77 Google reviews
            </span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 transition-colors hover:bg-emerald-500/20"
          >
            <MessageCircle size={11} />
            <span>WhatsApp verified</span>
          </a>
        </div>
      </div>
    </div>
  );
}
