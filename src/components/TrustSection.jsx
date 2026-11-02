import {
  MapPin, Star, Phone, MessageCircle, Award, Users, Factory, Clock, CheckCircle2, Navigation,
} from 'lucide-react';

const WHATSAPP_NUMBER = '923116103661';

const trustBadges = [
  {
    icon: Factory,
    title: 'Factory Direct',
    desc: 'No middlemen — buy straight from the manufacturer at wholesale rates.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10 border-orange-500/30',
  },
  {
    icon: Star,
    title: '4.9★ Google Rating',
    desc: "77 verified customer reviews on Google Maps — Lahore's top rubber supplier.",
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 border-yellow-500/30',
  },
  {
    icon: Users,
    title: '500+ Happy Clients',
    desc: 'Trusted by dairy farms, livestock facilities, and industrial suppliers across Pakistan.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/30',
  },
  {
    icon: Clock,
    title: '10+ Years Experience',
    desc: 'Over a decade of expertise in heavy-duty rubber products and industrial flooring.',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/30',
  },
];

const reviews = [
  {
    name: 'Muhammad Asif',
    location: 'Lahore',
    stars: 5,
    text: 'Excellent quality rubber mats for my dairy farm. The anti-slip surface made a huge difference for our cattle. Highly recommend!',
  },
  {
    name: 'Tariq Mehmood',
    location: 'Faisalabad',
    stars: 5,
    text: 'Got a bulk order of 200 pieces, delivered on time and the pricing was the best in market. Ahmad Rubber Traders is our go-to supplier now.',
  },
  {
    name: 'Bilal Siddiqui',
    location: 'Karachi',
    stars: 5,
    text: 'Milking parlor mats are exactly as described — waterproof, easy to clean, and very durable. Ordered three times already!',
  },
];

export default function TrustSection() {
  return (
    <section id="about" className="bg-zinc-900 py-20 px-6 sm:px-10 lg:px-16 xl:px-24">
      <div className="w-full space-y-16">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-sm px-4 py-1.5 mb-4">
            <Award size={13} className="text-orange-500" />
            <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">Trust & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Lahore's Most
            <span className="text-orange-500"> Trusted Supplier</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Serving Pakistan's dairy & livestock industry from the heart of Wachowali Bazaar, Lahore.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className={`border rounded-lg p-6 ${bg} flex flex-col items-start gap-3 hover:-translate-y-1 transition-transform duration-200`}
            >
              <div className={`w-10 h-10 rounded flex items-center justify-center bg-black/20`}>
                <Icon size={22} className={color} />
              </div>
              <div>
                <div className="text-white font-black text-sm uppercase tracking-wide mb-1">{title}</div>
                <p className="text-zinc-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Presence / Maps Card */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Address & Contact Card */}
          <div className="bg-slate-950 border border-zinc-800 rounded-lg p-8 flex flex-col gap-6">
            <div>
              <div className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">Physical Location</div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-white font-black text-lg">Ahmad Rubber Traders</div>
                  <div className="text-zinc-400 text-sm mt-1 leading-relaxed">
                    34 Jamia Street, Fleming Road,<br />
                    Wachowali Bazaar,<br />
                    Lahore, Punjab, Pakistan
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Checkpoints */}
            <div className="space-y-2.5 border-t border-zinc-800 pt-5">
              {[
                'Verified business on Google Maps',
                'WhatsApp Business Account active',
                'Direct factory pricing — no distributor markup',
                'Bulk pickup available from Wachowali',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
              <a
                href="tel:+923116103661"
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-5 py-3 rounded text-sm uppercase tracking-wide transition-all flex-1"
              >
                <Phone size={14} className="text-orange-500" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Ahmad%20Rubber%20Traders%2C%20I%20found%20you%20online.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold px-5 py-3 rounded text-sm uppercase tracking-wide transition-all flex-1"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Google Maps Embed Placeholder + Reviews */}
          <div className="space-y-4 flex flex-col">
            {/* Map Placeholder */}
            <a
              href="https://maps.google.com/?q=Wachowali+Bazaar+Lahore+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 border border-zinc-800 hover:border-orange-500/40 rounded-lg p-6 flex items-center gap-5 transition-all group flex-1"
            >
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                <Navigation size={28} className="text-orange-500" />
              </div>
              <div className="flex-1">
                <div className="text-white font-black uppercase text-sm">View on Google Maps</div>
                <div className="text-zinc-400 text-xs mt-1">
                  Wachowali Bazaar, Lahore · 4.9★ (77 Reviews)
                </div>
                <div className="flex mt-2 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-yellow-400" fill="currentColor" />
                  ))}
                  <span className="text-zinc-400 text-xs ml-1 self-center">77 verified reviews</span>
                </div>
              </div>
            </a>

            {/* Reviews */}
            <div className="space-y-3 flex-1">
              {reviews.map((review) => (
                <div key={review.name} className="bg-slate-950 border border-zinc-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-white font-bold text-sm">{review.name}</span>
                      <span className="text-zinc-500 text-xs ml-2">· {review.location}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} size={10} className="text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">"{review.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




