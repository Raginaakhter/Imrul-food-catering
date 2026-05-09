// import { useState, useEffect, useRef } from "react";

// const cards = [
//   {
//     id: 1,
//     tag: "Quality",
//     title: "Premium Quality Ingredients",
//     description:
//       "We source only the finest ingredients from trusted suppliers, ensuring every dish meets our uncompromising standards of taste and freshness.",
//     image:
//       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
//     accent: "#60a5fa",
//   },
//   {
//     id: 2,
//     tag: "Team",
//     title: "Expert Culinary Teams",
//     description:
//       "Our seasoned chefs and service professionals bring years of expertise to every event, crafting memorable dining experiences with passion.",
//     image:
//       "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
//     accent: "#60a5fa",
//   },
//   {
//     id: 3,
//     tag: "Certified",
//     title: "ISO 22000 & HACCP Certified",
//     description:
//       "Our kitchens operate under internationally recognized food safety standards, giving you complete peace of mind with every meal we prepare.",
//     image:
//       "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
//     accent: "#60a5fa",
//   },
// //   {
// //     id: 4,
// //     tag: "Catering",
// //     title: "Customized Catering Solutions",
// //     description:
// //       "From intimate gatherings to large corporate events, we tailor every menu and service detail to match your vision and exceed expectations.",
// //     image:
// //       "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
// //     accent: "#60a5fa",
// //   },
// ];

// function useInView(threshold = 0.15) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// function Card({ card, index }: { card: (typeof cards)[0]; index: number }) {
//   const { ref, inView } = useInView();
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       ref={ref}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(32px)",
//         transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
//         fontFamily: "'Cormorant Garamond', Georgia, serif",
//       }}
//       className="w-full relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-400 border border-blue-100 group"
//     >
//       {/* Image */}
//       <div className="relative overflow-hidden h-52 sm:h-60">
//         <img
//           src={card.image}
//           alt={card.title}
//           className="w-full h-full object-cover transition-transform duration-700"
//           style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
//         />
//         {/* Overlay gradient */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(to top, rgba(10,20,40,0.55) 0%, transparent 60%)",
//           }}
//         />
//         {/* Tag badge */}
//         <span
//           className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
//           style={{
//             background: "rgba(96,165,250,0.18)",
//             color: "#60a5fa",
//             border: "1px solid rgba(96,165,250,0.4)",
//             backdropFilter: "blur(6px)",
//             letterSpacing: "0.12em",
//           }}
//         >
//           {card.tag}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col flex-1 p-6 gap-3">
//         {/* Blue accent line */}
//         <div
//           className="w-8 h-0.5 rounded-full mb-1 transition-all duration-300"
//           style={{
//             background: "#60a5fa",
//             width: hovered ? "48px" : "32px",
//           }}
//         />

//         <h3
//           className="text-xl sm:text-2xl font-bold leading-snug"
//           style={{ color: "#0f172a", letterSpacing: "-0.01em" }}
//         >
//           {card.title}
//         </h3>

//         <p
//           className="text-sm sm:text-base leading-relaxed flex-1"
//           style={{ color: "#475569", fontFamily: "Georgia, serif" }}
//         >
//           {card.description}
//         </p>

//         {/* CTA */}
//         <button
//           className="mt-2 self-start flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300"
//           style={{ color: "#60a5fa", letterSpacing: "0.04em" }}
//         >
//           Learn more
//           <svg
//             width="16" height="16" viewBox="0 0 16 16" fill="none"
//             style={{
//               transform: hovered ? "translateX(4px)" : "translateX(0)",
//               transition: "transform 0.3s ease",
//             }}
//           >
//             <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
//       </div>

//       {/* Bottom blue border reveal on hover */}
//       <div
//         className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-500"
//         style={{ width: hovered ? "100%" : "0%" }}
//       />
//     </div>
//   );
// }

// export default function CardSection() {
//   const { ref: headerRef, inView: headerIn } = useInView(0.1);

//   return (
//     <section
//       className="w-full text-center bg-slate-50 py-16 px-4 sm:px-6 lg:px-8"
//       style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');
//       `}</style>

//       {/* Section Header */}
//       <div
//         ref={headerRef}
//         className="max-w-full mx-auto text-center mb-12"
//         style={{
//           opacity: headerIn ? 1 : 0,
//           transform: headerIn ? "translateY(0)" : "translateY(24px)",
//           transition: "opacity 0.6s ease, transform 0.6s ease",
//         }}
//       >
//         <p
//           className="text-xs font-bold tracking-widest uppercase mb-3"
//           style={{ color: "#60a5fa", letterSpacing: "0.18em" }}
//         >
//           Why Choose Us
//         </p>
//         <h2
//           className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
//           style={{ color: "#0f172a", lineHeight: 1.15 }}
//         >
//           What Sets Us Apart
//         </h2>
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <div className="h-px flex-1 max-w-16 bg-blue-200" />
//           <div className="w-2 h-2 rounded-full bg-blue-400" />
//           <div className="h-px flex-1 max-w-16 bg-blue-200" />
//         </div>
//         <p
//           className="text-base sm:text-lg leading-relaxed"
//           style={{ color: "#64748b", fontFamily: "Georgia, serif" }}
//         >
//           From premium sourcing to certified kitchens, every detail is crafted
//           to deliver an exceptional experience you can trust.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="max-w-8xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {cards.map((card, index) => (
//           <Card key={card.id} card={card} index={index} />
//         ))}
//       </div>

//       {/* Features Banner Image */}
//       {/* <div
//         className="max-w-7xl mx-auto mt-14 rounded-2xl overflow-hidden shadow-lg border border-blue-100"
//         style={{
//           opacity: headerIn ? 1 : 0,
//           transform: headerIn ? "translateY(0)" : "translateY(24px)",
//           transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
//           alt="Our catering experience"
//           className="w-full h-48 sm:h-64 object-cover"
//         />
//         <div
//           className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6 bg-white"
//           style={{ borderTop: "2px solid #60a5fa" }}
//         >
//           <div>
//             <p
//               className="text-xs font-bold tracking-widest uppercase mb-1"
//               style={{ color: "#60a5fa", letterSpacing: "0.15em" }}
//             >
//               Ready to get started?
//             </p>
//             <h3
//               className="text-xl sm:text-2xl font-bold"
//               style={{ color: "#0f172a" }}
//             >
//               Let's plan your perfect event together
//             </h3>
//           </div>
//           <button
//             className="flex-shrink-0 px-7 py-3 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             style={{
//               background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
//               letterSpacing: "0.06em",
//             }}
//           >
//             Contact Us
//           </button>
//         </div>
//       </div> */}
//     </section>
//   );
// }


import { useState, useEffect, useRef } from "react";

const cards = [
  {
    id: 1,
    tag: "Quality",
    title: "Premium Quality Ingredients",
    description:
      "We source only the finest ingredients from trusted suppliers, ensuring every dish meets our uncompromising standards of taste and freshness.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    accent: "#60a5fa",
  },
  {
    id: 2,
    tag: "Team",
    title: "Expert Culinary Teams",
    description:
      "Our seasoned chefs and service professionals bring years of expertise to every event, crafting memorable dining experiences with passion.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    accent: "#60a5fa",
  },
  {
    id: 3,
    tag: "Certified",
    title: "ISO 22000 & HACCP Certified",
    description:
      "Our kitchens operate under internationally recognized food safety standards, giving you complete peace of mind with every meal we prepare.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    accent: "#60a5fa",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Card({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${
          index * 120
        }ms, transform 0.6s ease ${index * 120}ms`,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
      className="w-full max-w-sm relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-400 border border-blue-100 group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 sm:h-60">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,20,40,0.55) 0%, transparent 60%)",
          }}
        />

        {/* Tag */}
        <span
          className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{
            background: "rgba(96,165,250,0.18)",
            color: "#60a5fa",
            border: "1px solid rgba(96,165,250,0.4)",
            backdropFilter: "blur(6px)",
            letterSpacing: "0.12em",
          }}
        >
          {card.tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Accent Line */}
        <div
          className="h-0.5 rounded-full mb-1 transition-all duration-300"
          style={{
            background: "#60a5fa",
            width: hovered ? "48px" : "32px",
          }}
        />

        {/* Title */}
        <h3
          className="text-xl sm:text-2xl font-bold leading-snug"
          style={{
            color: "#0f172a",
            letterSpacing: "-0.01em",
          }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm sm:text-base leading-relaxed flex-1"
          style={{
            color: "#475569",
            fontFamily: "Georgia, serif",
          }}
        >
          {card.description}
        </p>

        {/* Button */}
        <button
          className="mt-2 self-start flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300"
          style={{
            color: "#60a5fa",
            letterSpacing: "0.04em",
          }}
        >
          Learn more

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Hover Border */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />
    </div>
  );
}

export default function CardSection() {
  const { ref: headerRef, inView: headerIn } = useInView(0.1);

  return (
    <section
      className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8"
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');
      `}</style>

      {/* Header */}
      <div
        ref={headerRef}
        className="max-w-3xl mx-auto text-center mb-14"
        style={{
          opacity: headerIn ? 1 : 0,
          transform: headerIn ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{
            color: "#60a5fa",
            letterSpacing: "0.18em",
          }}
        >
          Why Choose Us
        </p>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          style={{
            color: "#0f172a",
            lineHeight: 1.15,
          }}
        >
          What Sets Us Apart
        </h2>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-16 bg-blue-200" />
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <div className="h-px flex-1 max-w-16 bg-blue-200" />
        </div>

        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{
            color: "#64748b",
            fontFamily: "Georgia, serif",
          }}
        >
          From premium sourcing to certified kitchens, every detail is crafted
          to deliver an exceptional experience you can trust.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}