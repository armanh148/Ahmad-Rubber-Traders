import { Phone, MessageCircle, MapPin, Mail, ExternalLink, ArrowRight, Star, ShieldCheck } from 'lucide-react';

const WHATSAPP = '923116103661';

const footerNav = {
  company: [
    { label: 'About Ahmad Rubber', href: '#home' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: '4-Step Process', href: '#steps' },
    { label: 'Client Testimonials', href: '#reviews' },
    { label: 'Google Maps Reviews', href: 'https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan' },
  ],
  products: [
    { label: 'Dairy Rubber Cow Mats (17mm)', href: '#solutions' },
    { label: 'EVA Interlocking Floor Sheets', href: '#solutions' },
    { label: 'Milking Parlor Drainage Mats (20mm)', href: '#solutions' },
    { label: 'Heavy Ribbed Corridor Runners', href: '#solutions' },
    { label: 'Custom Cut Rubber Flooring', href: '#calculator' },
  ],
  solutions: [
    { label: 'Dairy & Cattle Barns', href: '#industries' },
    { label: 'Automated Milking Sheds', href: '#industries' },
    { label: 'Grain & Feed Storage', href: '#industries' },
    { label: 'Commercial Gym Flooring', href: '#industries' },
    { label: 'Livestock Transport Ramps', href: '#industries' },
  ],
};

export default function ModernFooter() {
  const handleNav = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-white border-t border-slate-200 text-slate-700 pt-16 pb-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Top 4-Column Grid (Exact Reference Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info (2 cols on lg) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-sky-500/20">
                ART
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight">
                  Ahmad Rubber Traders
                </div>
                <div className="text-sky-600 text-[11px] font-semibold tracking-wide">
                  Wachowali Bazaar, Lahore
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Pakistan's trusted manufacturer and direct wholesale distributor of heavy-duty dairy cow mats,
              EVA interlocking sheets, and milking parlor drainage flooring.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#eab308" className="text-yellow-400" />
                ))}
              </div>
              <span>4.9★ Rated on Google Maps</span>
              <span className="text-slate-400 font-normal">(77 Reviews)</span>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className="text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-900">
              Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerNav.products.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className="text-slate-500 hover:text-sky-600 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-900">
              Lahore Depot
            </h4>
            <div className="space-y-2.5 text-xs text-slate-500 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-sky-600 flex-shrink-0 mt-0.5" />
                <span>34 Jamia St, Fleming Rd, Wachowali, Lahore</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-sky-600 flex-shrink-0" />
                <a href="tel:+923116103661" className="text-slate-900 font-bold hover:text-sky-600">
                  +92 311 6103661
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle size={14} className="text-emerald-600 flex-shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-bold hover:text-emerald-600"
                >
                  WhatsApp Business Active
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Fast WhatsApp Inquiry Bar (Exact Reference Detail) */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="font-bold text-slate-900 text-sm">
              Need immediate pricing for a custom barn project?
            </div>
            <div className="text-xs text-slate-500">
              Direct factory quotes within 15 minutes during business hours (9 AM - 7 PM).
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20have%20an%20urgent%20pricing%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle size={14} />
            <span>Chat With Factory Rep</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Bottom Bar: Copyright & Verified status */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Ahmad Rubber Traders. All rights reserved. Lahore, Pakistan.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <ShieldCheck size={14} className="text-emerald-500" />
              Verified on Google Maps &amp; WhatsApp Business
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

