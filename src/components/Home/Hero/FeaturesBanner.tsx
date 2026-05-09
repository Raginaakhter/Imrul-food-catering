import { useState, useEffect } from "react";

const features = [
  {
    id: 1,
    label: "Premium quality",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Chef hat */}
        <ellipse cx="32" cy="22" rx="12" ry="10" />
        <rect x="20" y="28" width="24" height="6" rx="1" />
        {/* Crossed utensils */}
        <line x1="22" y1="40" x2="34" y2="52" />
        <line x1="34" y1="40" x2="22" y2="52" />
        <line x1="34" y1="40" x2="42" y2="52" />
        <line x1="42" y1="40" x2="34" y2="52" />
      </svg>
    ),
    iconAlt: (
      // Chef hat with crossed utensils
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
        {/* Chef hat */}
        <path d="M20 30 C20 30 16 28 16 22 C16 16 22 12 28 14 C29.5 10 34.5 10 36 14 C42 12 48 16 48 22 C48 28 44 30 44 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="20" y="30" width="24" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        {/* Crossed fork and spatula */}
        <line x1="24" y1="38" x2="32" y2="56" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="42" x2="28" y2="42" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="46" x2="27" y2="46" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="40" y1="38" x2="32" y2="56" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="40" y1="42" x2="36" y2="42" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="40" y1="46" x2="37" y2="46" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 2,
    label: "Expert teams",
    icon: null,
    iconAlt: (
      // Burger with drink
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
        {/* Cup */}
        <path d="M38 20 L40 44 Q40 46 42 46 L52 46 Q54 46 54 44 L56 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <line x1="38" y1="26" x2="56" y2="26" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="47" y1="20" x2="47" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="47" cy="14" rx="3" ry="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        {/* Burger */}
        <path d="M12 32 Q12 26 24 26 Q36 26 36 32" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="10" y="32" width="28" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <line x1="10" y1="36" x2="38" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="36" width="28" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 40 Q12 46 24 46 Q36 46 36 40" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        {/* Sesame seeds */}
        <ellipse cx="20" cy="29" rx="2" ry="1" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-20 20 29)"/>
        <ellipse cx="28" cy="27.5" rx="2" ry="1" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(10 28 27.5)"/>
      </svg>
    ),
  },
  {
    id: 3,
    label: "ISO 22000 & HACCP certified",
    icon: null,
    iconAlt: (
      // Fork and spoon crossed
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
        {/* Fork */}
        <line x1="22" y1="10" x2="22" y2="54" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="16" y1="10" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="28" y1="10" x2="28" y2="26" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 26 Q22 30 28 26" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        {/* Spoon */}
        <line x1="42" y1="30" x2="42" y2="54" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="42" cy="20" rx="8" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: 4,
    label: "Customized catering",
    icon: null,
    iconAlt: (
      // Pizza slice
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
        {/* Pizza slice */}
        <path d="M32 8 L8 52 Q32 60 56 52 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        {/* Crust arc */}
        <path d="M8 52 Q32 62 56 52" stroke="currentColor" strokeWidth="3" fill="none"/>
        {/* Toppings */}
        <circle cx="32" cy="26" r="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="22" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="42" cy="38" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="32" cy="42" r="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        {/* Lines on pizza */}
        <line x1="32" y1="8" x2="32" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
      </svg>
    ),
  },
];

export default function FeaturesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      className="w-full bg-white  py-6 px-4"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');

        .feature-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .feature-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .feature-item:hover .icon-wrap {
          transform: scale(1.12) rotate(-4deg);
        }
        .icon-wrap {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .divider-line {
          width: 1px;
          background: linear-gradient(to bottom, transparent, #c8a96e, transparent);
          height: 64px;
          align-self: center;
        }
      `}</style>

      <div className="max-w-9xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 ">
        {features.map((feature, index) => (
          <>
            <div
              key={feature.id}
              className={`feature-item flex flex-col items-center gap-3 flex-1 cursor-default px-4 ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div
                className="icon-wrap w-14 h-14 sm:w-16 sm:h-16"
                style={{ color: "#60a5fa" }}
              >
                {feature.iconAlt}
              </div>

              {/* Label */}
              <p
                className="text-center text-sm sm:text-base leading-tight font-semibold tracking-wide"
                style={{ color: "#1a1a1a", letterSpacing: "0.02em" }}
              >
                {feature.label}
              </p>
            </div>

            {/* Divider — hidden on mobile, shown between items on sm+ */}
            {index < features.length - 1 && (
              <div
                key={`divider-${index}`}
                className="divider-line hidden sm:block flex-shrink-0"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}