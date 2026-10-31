import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 sm:right-7 sm:bottom-7 z-50 flex flex-col items-center gap-3">
      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`w-11 h-11 flex items-center justify-center rounded-full bg-zinc-950 text-white border border-zinc-700 shadow-xl transition-all duration-300 hover:bg-orange-500 hover:text-black hover:-translate-y-1 ${
          showTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp size={18} />
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20need%20a%20factory-rate%20quote.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center"
      >
        <span className="absolute right-full mr-3 hidden sm:block whitespace-nowrap bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-sm shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Chat with us
        </span>
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping" />
        <span className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
          <MessageCircle size={26} />
        </span>
      </a>
    </div>
  );
}
