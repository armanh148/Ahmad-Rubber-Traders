import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

const WHATSAPP = '923116103661';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3">
      {/* Scroll to Top Button with Smooth Reveal */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 backdrop-blur-md border border-slate-200/80 shadow-lg flex items-center justify-center transition-all hover:-translate-y-1 active:scale-95 animate-fadeIn"
        >
          <ArrowUp size={18} className="text-sky-600" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href="tel:+923116103661"
        aria-label="Call Ahmad Rubber Traders"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:bg-slate-800 transition-all active:scale-95"
      >
        <Phone size={19} />
      </a>

      {/* WhatsApp Floating Pill Button */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20am%20interested%20in%20your%20dairy%20rubber%20mats.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-emerald-600 transition-all active:scale-95 group"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
