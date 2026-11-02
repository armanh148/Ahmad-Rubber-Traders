import { MessageCircle, Phone } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Direct Call Button */}
      <a
        href="tel:+923116103661"
        aria-label="Call Ahmad Rubber Traders"
        className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:bg-slate-800 transition-all active:scale-95"
      >
        <Phone size={20} />
      </a>

      {/* WhatsApp Floating Pill Button */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20am%20interested%20in%20your%20dairy%20rubber%20mats.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-emerald-600 transition-all active:scale-95 group"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

