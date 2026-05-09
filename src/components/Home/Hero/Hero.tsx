import heroImage from "@/assets/banner.avif";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Hero() {
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    wordsRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 400 + i * 180);
    });

    [subtitleRef.current, btnRef.current].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 1800 + i * 300);
    });
  }, []);

  const titleWords = [
    { text: "Fast", accent: false },
    { text: "&", accent: false },
    { text: "Reliable", accent: true },
    { text: "Catering", accent: false },
    { text: "Services", accent: false },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden mt-[70px]">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 to-yellow-100/35" />

      {/* Content — sits on top of the image */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center max-w-4xl mx-auto">

        {/* Badge */}
        <span className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
          🚀 Fast &amp; Trusted Catering Services
        </span>

        {/* Animated title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          {titleWords.map((word, i) => (
            <span key={i}>
              <span
                ref={(el) => { if (el) wordsRef.current[i] = el; }}
                className={`inline-block mr-3 ${
                  word.accent ? "relative text-blue-600" : ""
                }`}
              >
                {word.text}

                {/* Underline for accent word */}
                {word.accent && (
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8C50 2 100 1 150 3C200 5 250 7 295 8"
                      stroke="#FB923C"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>

              {/* Line break after "Reliable" */}
              {word.text === "Reliable" && <br />}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mb-10 leading-relaxed"
        >
         Professional catering for weddings, corporate events, and private parties. We bring the restaurant experience to your doorstep.
        </p>

        {/* CTA Button */}
        <div ref={btnRef}>
          <Link
            to="/signup"
            className="inline-block border-2 border-white text-white px-8 py-3.5 rounded-[8px] text-lg font-semibold transition-all duration-200 hover:bg-blue-600 hover:border-blue-600"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}






























// import heroImage from "@/assets/photo/music.png";

// import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <div>
//       <div className="bg-gradient-to-br from-teal-500 to-blue-600 mt-[70px]">
//         {/* Hero Section */}
//         <div className="max-w-[1200px] mx-auto px-3 md:px-10 xl:px-0">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-white space-y-6 mb-5 pt-10 lg:pb-28">
//               <div className="space-y-4">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#13161B] font-bold leading-tight">
//                   Fast & Reliable
//                   <br />
//                   <span className="relative text-[#FEFAF5] inline-block">
//                     Courier Service
//                     {/* Curved underline SVG */}
//                     <svg
//                       className="absolute -bottom-2 left-0 w-full h-3"
//                       viewBox="0 0 300 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M5 8C50 2 100 1 150 3C200 5 250 7 295 8"
//                         stroke="#FB923C"
//                         strokeWidth="4"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                   </span>
//                 </h1>
//                 <p className="text-lg md:text-xl text-white/90 max-w-md my-10">
//                   Safe, fast, and reliable deliveries—our platform connects you.
//                   to the fastest routes and top-tier couriers.
//                 </p>
//               </div>
//               <button className="bg-transparent border-1 cursor-pointer border-white text-white hover:bg-[#EF6820] hover:border-transparent hover:text-white px-8 py-3 rounded-[8px] text-lg font-semibold">
//                 <Link to="/signup">Get Started</Link>
//               </button>
//             </div>

//             {/* Right Content - Delivery Person with Floating Icons */}
//             <div className="hidden lg:block -mb-8">
//               <img src={heroImage} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






