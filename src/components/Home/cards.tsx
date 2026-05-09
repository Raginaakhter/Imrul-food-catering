import { useState } from "react";

interface Card {
  id: number;
  icon: string;
  tag: string;
  title: string;
  desc: string;
  accent: string;
  iconBg: string;
  tagColor: string;
  stat: string;
  statLabel: string;
}

const cards: Card[] = [
  {
    id: 1,
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FFF3E0"/>
      <path d="M14 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#E65100" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="24" cy="32" rx="12" ry="3" fill="#E65100" opacity="0.15"/>
      <path d="M24 20v-5M20 17l4-2 4 2" stroke="#E65100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="24" cy="32" r="2.5" fill="#E65100"/>
      <path d="M17 30h14" stroke="#E65100" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    tag: "Core Service",
    title: "Bulk Meal Production",
    desc: "45,000+ meals produced daily across 21 central kitchens with HACCP-certified processes.",
    accent: "#E65100",
    iconBg: "#FFF3E0",
    tagColor: "bg-orange-100 text-orange-800",
    stat: "45K+",
    statLabel: "meals/day",
  },
  {
    id: 2,
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#E8F5E9"/>
      <rect x="14" y="22" width="20" height="12" rx="2" fill="#2E7D32" opacity="0.15"/>
      <rect x="14" y="22" width="20" height="12" rx="2" stroke="#2E7D32" stroke-width="2"/>
      <path d="M18 22v-4a6 6 0 0112 0v4" stroke="#2E7D32" stroke-width="2" stroke-linecap="round"/>
      <circle cx="24" cy="28" r="2" fill="#2E7D32"/>
      <path d="M14 18h20" stroke="#2E7D32" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    tag: "Residential",
    title: "Camp & Complex Catering",
    desc: "Managing 25+ residential complexes serving 350,000+ beneficiaries with end-to-end operations.",
    accent: "#2E7D32",
    iconBg: "#E8F5E9",
    tagColor: "bg-green-100 text-green-800",
    stat: "25+",
    statLabel: "complexes",
  },
  {
    id: 3,
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FFF8E1"/>
      <path d="M16 34V22l8-8 8 8v12" stroke="#F57F17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="20" y="26" width="8" height="8" rx="1" stroke="#F57F17" stroke-width="2"/>
      <path d="M12 34h24" stroke="#F57F17" stroke-width="2" stroke-linecap="round"/>
      <path d="M24 14v-3M21 17l3-6 3 6" stroke="#F57F17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    tag: "Industrial",
    title: "On-Site Kitchen Setup",
    desc: "Full-service kitchen deployment at your facility — staff, equipment, supply chain included.",
    accent: "#F57F17",
    iconBg: "#FFF8E1",
    tagColor: "bg-yellow-100 text-yellow-800",
    stat: "10+",
    statLabel: "yrs experience",
  },
  {
    id: 4,
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#E3F2FD"/>
      <path d="M24 14c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10" stroke="#1565C0" stroke-width="2" stroke-linecap="round"/>
      <path d="M30 14h4v4" stroke="#1565C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M34 14l-6 6" stroke="#1565C0" stroke-width="2" stroke-linecap="round"/>
      <circle cx="24" cy="24" r="3" fill="#1565C0"/>
    </svg>`,
    tag: "Oil & Gas",
    title: "Offshore & Remote Catering",
    desc: "Specialized logistics for oil rigs, remote sites, and offshore platforms worldwide.",
    accent: "#1565C0",
    iconBg: "#E3F2FD",
    tagColor: "bg-blue-100 text-blue-800",
    stat: "24/7",
    statLabel: "operations",
  },
  {
    id: 5,
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FCE4EC"/>
      <path d="M24 16l2.47 5.01L32 21.9l-4 3.9.94 5.5L24 28.77l-4.94 2.53.94-5.5-4-3.9 5.53-.89L24 16z" stroke="#AD1457" stroke-width="2" stroke-linejoin="round" fill="#AD1457" opacity="0.15"/>
      <path d="M24 16l2.47 5.01L32 21.9l-4 3.9.94 5.5L24 28.77l-4.94 2.53.94-5.5-4-3.9 5.53-.89L24 16z" stroke="#AD1457" stroke-width="2" stroke-linejoin="round"/>
    </svg>`,
    tag: "Premium",
    title: "VIP & Event Catering",
    desc: "Bespoke menus for government functions, corporate events, and high-profile gatherings.",
    accent: "#AD1457",
    iconBg: "#FCE4EC",
    tagColor: "bg-pink-100 text-pink-800",
    stat: "500+",
    statLabel: "events served",
  },
  {
    id: 6,
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#F3E5F5"/>
      <path d="M16 28c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#6A1B9A" stroke-width="2" stroke-linecap="round"/>
      <path d="M20 28v4h8v-4" stroke="#6A1B9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="24" cy="18" r="3" stroke="#6A1B9A" stroke-width="2"/>
      <path d="M18 32h12" stroke="#6A1B9A" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    tag: "Humanitarian",
    title: "Relief Mission Support",
    desc: "Rapid food deployment for disaster response, refugee camps, and UN humanitarian missions.",
    accent: "#6A1B9A",
    iconBg: "#F3E5F5",
    tagColor: "bg-purple-100 text-purple-800",
    stat: "350K+",
    statLabel: "beneficiaries",
  },
  {
    id: 7,
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#E0F7FA"/>
      <path d="M16 24h16M24 16v16" stroke="#00695C" stroke-width="2" stroke-linecap="round"/>
      <rect x="14" y="14" width="20" height="20" rx="3" stroke="#00695C" stroke-width="2"/>
      <circle cx="20" cy="20" r="2" fill="#00695C"/>
      <circle cx="28" cy="20" r="2" fill="#00695C"/>
      <circle cx="20" cy="28" r="2" fill="#00695C"/>
      <circle cx="28" cy="28" r="2" fill="#00695C"/>
    </svg>`,
    tag: "Halal Certified",
    title: "Hajj & Umrah Services",
    desc: "Sacred journey catering with full halal compliance, cultural sensitivity, and mass scale.",
    accent: "#00695C",
    iconBg: "#E0F7FA",
    tagColor: "bg-teal-100 text-teal-800",
    stat: "100%",
    statLabel: "halal certified",
  },
  {
    id: 8,
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#FBE9E7"/>
      <path d="M14 32l6-6 4 4 6-8 4 4" stroke="#BF360C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="13" y="13" width="22" height="22" rx="3" stroke="#BF360C" stroke-width="2"/>
      <path d="M13 20h22" stroke="#BF360C" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    tag: "Defence",
    title: "Military & Defense Catering",
    desc: "High-security, nutrition-optimized meal programs for armed forces and defense organizations.",
    accent: "#BF360C",
    iconBg: "#FBE9E7",
    tagColor: "bg-red-100 text-red-800",
    stat: "ISO",
    statLabel: "22000 certified",
  },
];

export default function CateringCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Outfit', sans-serif; }
        @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        .shimmer::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent); animation:shimmer 2.5s infinite; }
        @keyframes rise { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .card-enter { animation: rise 0.5s ease both; }
      `}</style>

      {/* Header */}
      <div className="text-center mb-14 font-body max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-white/50 text-xs tracking-widest uppercase font-medium">What We Deliver</span>
        </div>
        <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
          Our Catering <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-white/40 text-base leading-relaxed">
          From remote oil rigs to relief missions — precision catering at every scale.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="card-enter relative group cursor-default overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] shimmer"
            style={{ animationDelay: `${i * 60}ms` }}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Accent glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ boxShadow: `inset 0 0 40px 0 ${card.accent}18` }}
            />

            {/* Top accent bar */}
            <div
              className="absolute top-0 left-6 right-6 h-px transition-all duration-300"
              style={{ background: hovered === card.id ? card.accent : "transparent" }}
            />

            <div className="p-5 font-body flex flex-col gap-4 h-full">
              {/* Icon + Tag row */}
              <div className="flex items-start justify-between gap-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  dangerouslySetInnerHTML={{ __html: card.icon }}
                />
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${card.tagColor} flex-shrink-0`}>
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-[15px] leading-snug group-hover:text-white transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-[13px] leading-relaxed flex-1 group-hover:text-white/55 transition-colors">
                {card.desc}
              </p>

              {/* Stat */}
              <div
                className="flex items-end gap-1 border-t border-white/5 pt-3 mt-auto"
              >
                <span
                  className="text-2xl font-bold leading-none transition-colors duration-300"
                  style={{ color: hovered === card.id ? card.accent : "rgba(255,255,255,0.7)" }}
                >
                  {card.stat}
                </span>
                <span className="text-white/30 text-[11px] mb-0.5 leading-tight">{card.statLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-white/20 text-xs mt-12 font-body tracking-wide">
        Rehman Catering Company · Est. 2014 · ISO 22000 · HACCP Certified
      </p>
    </div>
  );
}