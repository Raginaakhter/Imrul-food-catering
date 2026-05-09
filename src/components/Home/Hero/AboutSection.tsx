import { useEffect, useRef, useState } from "react";

/* ─── Keyframes + Google Fonts injected once ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --blue:       #1d4ed8;
    --blue-light: #3b82f6;
    --blue-dark:  #1e3a8a;
    --ink:        #1a1410;
    --cream:      #faf8f3;
    --warm-gray:  #6b6258;
  }

  @keyframes revealUp {
    from { opacity:0; transform:translateY(60px) skewY(1.5deg); }
    to   { opacity:1; transform:translateY(0) skewY(0deg); }
  }
  @keyframes revealLeft {
    from { opacity:0; transform:translateX(-70px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes revealRight {
    from { opacity:0; transform:translateX(70px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes fadeScale {
    from { opacity:0; transform:scale(0.9); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes orbFloat {
    0%,100% { transform:translateY(0) rotate(0deg); }
    33%      { transform:translateY(-20px) rotate(4deg); }
    66%      { transform:translateY(12px) rotate(-3deg); }
  }
  @keyframes spinSlow {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }
  @keyframes shimmer {
    0%   { background-position:-200% center; }
    100% { background-position:200% center; }
  }
  @keyframes goldPulse {
    0%,100% { opacity:0.5; }
    50%      { opacity:1; }
  }
  @keyframes drawLine {
    from { stroke-dashoffset:400; }
    to   { stroke-dashoffset:0; }
  }
  @keyframes imagePan {
    0%,100% { transform:scale(1.08) translate(0,0); }
    50%      { transform:scale(1.13) translate(-2%,-1.5%); }
  }
  @keyframes slideIn {
    from { opacity:0; transform:translateY(30px); }
    to   { opacity:1; transform:translateY(0); }
  }

  .about-section { font-family:'Jost',sans-serif; }
  .font-display   { font-family:'Cormorant Garamond',serif; }

  .reveal-up    { animation:revealUp   0.9s cubic-bezier(0.16,1,0.3,1) both; }
  .reveal-left  { animation:revealLeft 0.9s cubic-bezier(0.16,1,0.3,1) both; }
  .reveal-right { animation:revealRight 0.9s cubic-bezier(0.16,1,0.3,1) both; }
  .fade-scale   { animation:fadeScale  0.85s cubic-bezier(0.16,1,0.3,1) both; }
  .slide-in     { animation:slideIn    0.7s cubic-bezier(0.16,1,0.3,1) both; }

  .blue-shimmer {
    background:linear-gradient(90deg,#1e3a8a 0%,#1d4ed8 35%,#3b82f6 50%,#1d4ed8 65%,#1e3a8a 100%);
    background-size:200% auto;
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    animation:shimmer 3.5s linear infinite;
  }
  .gold-line { animation:goldPulse 2.5s ease-in-out infinite; }
  .img-pan   { animation:imagePan 14s ease-in-out infinite; }
  .orb-float { animation:orbFloat 9s ease-in-out infinite; }
  .spin-slow { animation:spinSlow 18s linear infinite; }
  .line-draw {
    stroke-dasharray:400;
    animation:drawLine 1.5s cubic-bezier(0.4,0,0.2,1) both;
  }

  .image-frame {
    position:relative;
    overflow:hidden;
    border-radius:2px;
  }
  .image-frame::after {
    content:'';
    position:absolute;
    inset:0;
    background:linear-gradient(to top,rgba(26,20,16,0.6) 0%,transparent 55%);
    pointer-events:none;
    z-index:1;
  }
  .image-frame img {
    width:100%; height:100%; object-fit:cover;
    transition:transform 1.1s cubic-bezier(0.4,0,0.2,1);
  }
  .image-frame:hover img { transform:scale(1.08); }

  .vm-card {
    border:1px solid rgba(29,78,216,0.2);
    background:rgba(29,78,216,0.03);
    border-radius:2px;
    transition:transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  }
  .vm-card:hover {
    transform:translateX(8px);
    border-color:rgba(29,78,216,0.5);
    box-shadow:4px 0 24px rgba(29,78,216,0.1);
  }

  .stat-item {
    position:relative;
    transition:background 0.3s;
  }
  .stat-item::after {
    content:'';
    position:absolute;
    bottom:0; left:16%; right:16%;
    height:1.5px;
    background:linear-gradient(90deg,transparent,#1d4ed8,transparent);
    transform:scaleX(0);
    transition:transform 0.5s ease;
  }
  .stat-item:hover::after { transform:scaleX(1); }
  .stat-item:hover { background:rgba(29,78,216,0.05); }

  .btn-outline {
    position:relative; overflow:hidden;
    border:1px solid #1d4ed8;
    color:#1d4ed8;
    background:transparent;
    letter-spacing:0.2em;
    text-transform:uppercase;
    font-family:'Jost',sans-serif;
    font-size:0.78rem;
    font-weight:500;
    padding:14px 40px;
    cursor:pointer;
    border-radius:1px;
    transition:color 0.4s ease;
  }
  .btn-outline::before {
    content:'';
    position:absolute; inset:0;
    background:#1d4ed8;
    transform:translateX(-101%);
    transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);
  }
  .btn-outline:hover::before { transform:translateX(0); }
  .btn-outline:hover { color:white; }
  .btn-outline span { position:relative; z-index:1; }
`;
import img from "@/assets/meat.png";
import img1 from "@/assets/iftar.jpeg";
/* ─── Intersection observer hook ─── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Counting number animation ─── */
function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const total = 1600;
    const steps = 60;
    const inc = target / steps;
    const interval = total / steps;
    const t = setInterval(() => {
      current += inc;
      if (current >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(current));
    }, interval);
    return () => clearInterval(t);
  }, [inView, target]);
  return <>{val}{suffix}</>;
}

/* ─── Rotating SVG badge ─── */
function RotatingBadge({ visible }: { visible: boolean }) {
  const text = "BEST QUALITY · PREMIUM CATERING · ";
  const r = 52; const cx = 68; const cy = 68;
  if (!visible) return null;
  return (
    <div className="spin-slow" style={{ width: 136, height: 136 }}>
      <svg viewBox="0 0 136 136" width="136" height="136">
        <defs>
          <path id="bp" d={`M ${cx},${cy - r} A ${r},${r} 0 1,1 ${cx - 0.01},${cy - r}`} />
        </defs>
        {/* bg white, border blue */}
        <circle cx={cx} cy={cy} r={r + 10} fill="white" stroke="#1d4ed8" strokeWidth="1.2" />
        <circle cx={cx} cy={cy} r={r + 10} fill="none" stroke="#1d4ed8" strokeWidth="0.6" opacity="0.5" />
        <circle cx={cx} cy={cy} r={r + 5}  fill="none" stroke="#1d4ed8" strokeWidth="0.3" opacity="0.3" strokeDasharray="3 5" />
        <circle cx={cx} cy={cy} r="20" fill="#1d4ed8" />
        <text style={{ fontSize: "8.5px", fontFamily: "Jost,sans-serif", letterSpacing: "0.18em", fill: "#1d4ed8", fontWeight: 600 }}>
          <textPath href="#bp" startOffset="0%">{text}</textPath>
        </text>
        <text x={cx} y={cy + 5} textAnchor="middle" style={{ fontSize: "15px", fill: "white" }}>✦</text>
      </svg>
    </div>
  );
}

/* ─── Main export ─── */
export default function AboutSection() {
  const { ref, inView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView(0.25);

  const d = (ms: number) => ({ animationDelay: `${ms}ms` });

  const images = [
    { src: img, label: "Authentic Cuisine" },
    { src: img1, label: "Premium Quality" },
    { src: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80", label: "Fresh Daily" },
  ];

  const stats = [
    { value: 9,   suffix: "+", label: "Years of Excellence" },
    { value: 500, suffix: "+", label: "Clients Served"      },
    { value: 50,  suffix: "+", label: "Expert Chefs"        },
    { value: 100, suffix: "%", label: "Quality Guarantee"   },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section
        className="about-section relative overflow-hidden"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* ─── Background atmosphere ─── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Ghost display title */}
          <div
            className="absolute select-none font-display"
            style={{
              top: -20, left: -10,
              fontSize: "clamp(7rem,18vw,16rem)",
              fontWeight: 300, fontStyle: "italic",
              color: "transparent",
              WebkitTextStroke: "1px rgba(29,78,216,0.06)",
              lineHeight: 1, zIndex: 0,
            }}
          >
            About
          </div>
          {/* Orbs */}
          <div className="orb-float absolute rounded-full" style={{ width: 500, height: 500, top: "5%", right: "-15%", background: "radial-gradient(circle,rgba(29,78,216,0.06) 0%,transparent 65%)" }} />
          <div className="orb-float absolute rounded-full" style={{ width: 350, height: 350, bottom: "10%", left: "-10%", background: "radial-gradient(circle,rgba(29,78,216,0.05) 0%,transparent 65%)", animationDelay: "4s" }} />
          {/* Dot grid */}
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle,rgba(29,78,216,0.15) 1px,transparent 1px)", backgroundSize: "28px 28px", opacity: 0.4 }} />
        </div>

        <div ref={ref} className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-10 xl:px-6 py-20 md:py-32">

          {/* ─── Header ─── */}
          <div className={inView ? "reveal-up" : "opacity-0"} style={d(0)}>
            <div className="flex items-center gap-4 mb-5">
              <div style={{ width: 44, height: 1, background: "#1d4ed8" }} />
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.4em", color: "#1d4ed8", fontWeight: 600, textTransform: "uppercase" }}>
                About Us
              </span>
              <div style={{ width: 44, height: 1, background: "#1d4ed8" }} />
            </div>

            <div className="relative inline-block mb-3">
              <h2
                className="font-display"
                style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 300, fontStyle: "italic", color: "var(--ink)", lineHeight: 1 }}
              >
                Who We{" "}
                <em className="not-italic font-display" style={{ fontWeight: 600, fontStyle: "normal", color: "#1d4ed8" }}>Are</em>
              </h2>
              <svg className="absolute" style={{ bottom: -8, left: 0, width: "100%", height: 14 }} viewBox="0 0 500 14" preserveAspectRatio="none">
                {inView && (
                  <path className="line-draw" d="M0 10 Q125 3 250 8 Q375 13 500 7" stroke="#1d4ed8" strokeWidth="1.5" fill="none" style={d(500)} />
                )}
              </svg>
            </div>

            <p style={{ fontSize: "1rem", color: "var(--warm-gray)", fontWeight: 300, letterSpacing: "0.06em", marginTop: 16 }}>
              Best foods for you &amp; family
            </p>
          </div>

          {/* ─── Two-column layout ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16 md:mt-20 items-start">

            {/* ══ LEFT — image collage ══ */}
            <div
              className={`relative ${inView ? "reveal-left" : "opacity-0"}`}
              style={d(200)}
            >
              {/* Rotating badge */}
              <div className="absolute z-20" style={{ top: -14, right: 0 }}>
                <RotatingBadge visible={inView} />
              </div>

              {/* Corner ornaments */}
              <svg className="absolute" style={{ top: -4, left: -4, zIndex: 10, opacity: 0.55 }} width="52" height="52" viewBox="0 0 52 52">
                <path d="M4 48 Q4 4 48 4" stroke="#1d4ed8" strokeWidth="0.8" fill="none" strokeDasharray="2 5" />
                <circle cx="4" cy="48" r="2.5" fill="#1d4ed8" />
                <circle cx="48" cy="4" r="2.5" fill="#1d4ed8" />
              </svg>
              <svg className="absolute" style={{ bottom: -4, right: -4, zIndex: 10, opacity: 0.55, transform: "scale(-1,1)" }} width="52" height="52" viewBox="0 0 52 52">
                <path d="M4 48 Q4 4 48 4" stroke="#1d4ed8" strokeWidth="0.8" fill="none" strokeDasharray="2 5" />
                <circle cx="4" cy="48" r="2.5" fill="#1d4ed8" />
                <circle cx="48" cy="4" r="2.5" fill="#1d4ed8" />
              </svg>

              {/* Blue vertical accent */}
              <div
                className="absolute"
                style={{ left: -1, top: 20, bottom: 20, width: 1, background: "linear-gradient(to bottom,transparent,#1d4ed8 30%,#1d4ed8 70%,transparent)", opacity: 0.5 }}
              />

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-3 pl-4 pt-12">
                {/* Tall left */}
                <div
                  className={`image-frame ${inView ? "fade-scale" : "opacity-0"}`}
                  style={{ height: "clamp(260px,32vw,380px)", ...d(300) }}
                >
                  <img src={images[0].src} alt={images[0].label} className="img-pan" />
                  <div className="absolute bottom-3 left-3 z-10">
                    <span style={{ fontFamily: "Jost,sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "white", background: "rgba(29,78,216,0.88)", backdropFilter: "blur(8px)", padding: "4px 12px", borderRadius: "1px" }}>
                      {images[0].label}
                    </span>
                  </div>
                </div>

                {/* Two stacked right */}
                <div className="flex flex-col gap-3">
                  {images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className={`image-frame ${inView ? "fade-scale" : "opacity-0"}`}
                      style={{ height: "clamp(120px,14vw,180px)", ...d(430 + i * 140) }}
                    >
                      <img src={img.src} alt={img.label} />
                      <div className="absolute bottom-3 left-3 z-10">
                        <span style={{ fontFamily: "Jost,sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "white", background: "rgba(29,78,216,0.88)", backdropFilter: "blur(8px)", padding: "4px 12px", borderRadius: "1px" }}>
                          {img.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ══ RIGHT — text content ══ */}
            <div className={inView ? "reveal-right" : "opacity-0"} style={d(350)}>

              {/* Body paragraph */}
              <p
                style={{
                  fontFamily: "Jost,sans-serif",
                  fontSize: "clamp(0.95rem,1.5vw,1.05rem)",
                  lineHeight: 1.9,
                  color: "var(--warm-gray)",
                  fontWeight: 300,
                  borderLeft: "2px solid #1d4ed8",
                  paddingLeft: "1.25rem",
                  marginBottom: "2.5rem",
                }}
              >
                Founded in <strong style={{ color: "var(--ink)", fontWeight: 500 }}>2011</strong>,
                Imrul Exclusive Catering Company is one of Dhaka's premier providers of catering
                and support services. Driven by vision and passion, we deliver fresh, nutritious
                meals and full hospitality support to clients in industrial sites, corporate offices,
                and remote locations. Quality, reliability, and client satisfaction are at the
                core of everything we do.
              </p>

              {/* Vision */}
              <div className={`vm-card p-6 mb-5 ${inView ? "slide-in" : "opacity-0"}`} style={d(560)}>
                <div className="flex items-start gap-4">
                  <div style={{ width: 42, height: 42, background: "#1d4ed8", borderRadius: "1px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-display"
                      style={{ fontSize: "1.75rem", fontWeight: 600, fontStyle: "italic", color: "var(--ink)", marginBottom: 6 }}
                    >
                      Vision
                    </h3>
                    <p style={{ fontFamily: "Jost,sans-serif", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--warm-gray)", fontWeight: 300 }}>
                      To be among the top five catering companies in Dhaka, known for innovation, premium quality, and trusted service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className={`vm-card p-6 mb-8 ${inView ? "slide-in" : "opacity-0"}`} style={d(700)}>
                <div className="flex items-start gap-4">
                  <div style={{ width: 42, height: 42, background: "#1e3a8a", borderRadius: "1px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-display"
                      style={{ fontSize: "1.75rem", fontWeight: 600, fontStyle: "italic", color: "var(--ink)", marginBottom: 6 }}
                    >
                      Mission
                    </h3>
                    <p style={{ fontFamily: "Jost,sans-serif", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--warm-gray)", fontWeight: 300 }}>
                      To provide world-class catering, nutrition, and support services through expert teams, modern systems, and international best practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className={inView ? "slide-in" : "opacity-0"} style={d(840)}>
                <button className="btn-outline">
                  <span>Discover More</span>
                </button>
              </div>
            </div>
          </div>

          {/* ─── Stats row ─── */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 md:mt-28"
            style={{ borderTop: "1px solid rgba(29,78,216,0.2)", borderBottom: "1px solid rgba(29,78,216,0.2)" }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-item text-center py-10 px-4"
                style={{
                  background: i % 2 === 0 ? "rgba(29,78,216,0.03)" : "transparent",
                  animation: statsInView ? `slideIn 0.7s ${i * 130}ms cubic-bezier(0.16,1,0.3,1) both` : "none",
                }}
              >
                <div
                  className="font-display block mb-2"
                  style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 600, color: "var(--ink)", lineHeight: 1 }}
                >
                  {statsInView ? <Counter target={s.value} suffix={s.suffix} inView={statsInView} /> : `0${s.suffix}`}
                </div>
                <div style={{ fontFamily: "Jost,sans-serif", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#1d4ed8", fontWeight: 600 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 36" fill="none" style={{ width: "100%", display: "block" }}>
            <path d="M0 18 Q360 0 720 18 Q1080 36 1440 18 V36 H0Z" fill="rgba(29,78,216,0.04)" />
          </svg>
        </div>
      </section>
    </>
  );
}