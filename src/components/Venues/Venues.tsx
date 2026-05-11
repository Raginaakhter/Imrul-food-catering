// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ArrowRight } from "lucide-react";

// // // Data for the Tabbed "Spaces" section
// // const spaces = [
// //   {
// //     id: "main",
// //     label: "THE MAIN SPACE",
// //     title: "The Main Space",
// //     description:
// //       "The epitome of industrial chic, our main event space features an impressive wrought-iron entrance that welcomes guests into an open and airy space with original hardwoods, exposed brick, vaulted ceilings, and warm natural light. A stunning mezzanine overlooks Atlanta's historic railway; a creative warming kitchen and private green room round out this incredible space.",
// //     image:
// //       "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
// //   },
// //   {
// //     id: "cellar",
// //     label: "THE CELLAR",
// //     title: "The Cellar",
// //     description:
// //       "Nestled beneath the main floor, the Cellar offers a more intimate, speakeasy vibe. Perfect for rehearsal dinners or private corporate meetings, it features lower ceilings, ambient lighting, and rich textures.",
// //     image:
// //       "https://images.unsplash.com/photo-1549491754-07d08479e0f1?auto=format&fit=crop&q=80&w=1200",
// //   },
// //   {
// //     id: "rooftop",
// //     label: "ROOFTOP TERRACE",
// //     title: "Rooftop Terrace",
// //     description:
// //       "Our rooftop provides breathtaking views of the Atlanta skyline. Modern, open, and fresh, it's the ideal spot for cocktail hours under the stars or sunset ceremonies.",
// //     image:
// //       "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
// //   },
// // ];

// // const TerminusDesign = () => {
// //   const [activeTab, setActiveTab] = useState(spaces[0]);

// //   return (
// //     <div className="bg-[#dcd9d0] font-serif text-[#333]">
// //       {/* 4. TABBED SPACES SECTION */}
// //       <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
// //         {/* Tab Navigation */}
// //         <div className="flex flex-wrap justify-center md:justify-end gap-10 mb-16 border-b border-gray-400/30 pb-4">
// //           {spaces.map((space) => (
// //             <button
// //               key={space.id}
// //               onClick={() => setActiveTab(space)}
// //               className={`text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 ${
// //                 activeTab.id === space.id
// //                   ? "text-black border-b-2 border-black pb-4 -mb-[18px]"
// //                   : "text-gray-500 hover:text-black"
// //               }`}
// //             >
// //               {space.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Tab Content */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={activeTab.id}
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -10 }}
// //             transition={{ duration: 0.5 }}
// //             className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
// //           >
// //             <div className="order-2 md:order-1">
// //               <h3 className="text-3xl font-light mb-8 italic">
// //                 {activeTab.title}
// //               </h3>
// //               <p className="text-gray-600 text-sm leading-relaxed mb-8">
// //                 {activeTab.description}
// //               </p>
// //               <button className="flex items-center gap-2 text-[#8b7e51] hover:gap-4 transition-all duration-300 text-sm font-bold uppercase tracking-widest">
// //                 SEE MORE <ArrowRight size={16} />
// //               </button>
// //             </div>

// //             <div className="order-1 md:order-2 h-[400px]">
// //               <img
// //                 src={activeTab.image}
// //                 alt={activeTab.title}
// //                 className="w-full h-full object-cover shadow-2xl"
// //               />
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </section>
// //       <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
// //         {/* Tab Navigation */}
// //         <div className="flex flex-wrap justify-center md:justify-end gap-10 mb-16 border-b border-gray-400/30 pb-4">
// //           {spaces.map((space) => (
// //             <button
// //               key={space.id}
// //               onClick={() => setActiveTab(space)}
// //               className={`text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 ${
// //                 activeTab.id === space.id
// //                   ? "text-black border-b-2 border-black pb-4 -mb-[18px]"
// //                   : "text-gray-500 hover:text-black"
// //               }`}
// //             >
// //               {space.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Tab Content */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={activeTab.id}
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -10 }}
// //             transition={{ duration: 0.5 }}
// //             className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
// //           >
// //             <div className="order-2 md:order-1">
// //               <h3 className="text-3xl font-light mb-8 italic">
// //                 {activeTab.title}
// //               </h3>
// //               <p className="text-gray-600 text-sm leading-relaxed mb-8">
// //                 {activeTab.description}
// //               </p>
// //               <button className="flex items-center gap-2 text-[#8b7e51] hover:gap-4 transition-all duration-300 text-sm font-bold uppercase tracking-widest">
// //                 SEE MORE <ArrowRight size={16} />
// //               </button>
// //             </div>
// //             <div className="order-1 md:order-2 h-[400px]">
// //               <img
// //                 src={activeTab.image}
// //                 alt={activeTab.title}
// //                 className="w-full h-full object-cover shadow-2xl"
// //               />
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </section>
// //     </div>
// //   );
// // };

// // export default TerminusDesign;

// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const spaces = [
//   {
//     id: "main",
//     title: "The Main Space",
//     description:
//       "The epitome of industrial chic, our main event space features an impressive wrought-iron entrance that welcomes guests into an open and airy space with original hardwoods, exposed brick, vaulted ceilings, and warm natural light. A stunning mezzanine overlooks Atlanta's historic railway.",
//     image:
//       "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: "cellar",
//     title: "The Cellar",
//     description:
//       "Nestled beneath the main floor, the Cellar offers a more intimate, speakeasy vibe. Perfect for rehearsal dinners or private corporate meetings, it features lower ceilings, ambient lighting, and rich textures.",
//     image:
//       "https://images.unsplash.com/photo-1549491754-07d08479e0f1?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: "rooftop",
//     title: "Rooftop Terrace",
//     description:
//       "Our rooftop provides breathtaking views of the Atlanta skyline. Modern, open, and fresh, it's the ideal spot for cocktail hours under the stars or sunset ceremonies.",
//     image:
//       "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: "garden",
//     title: "The Garden",
//     description:
//       "A lush outdoor sanctuary tucked behind the venue, The Garden is draped in climbing ivy and Edison string lights. Ideal for intimate garden parties, al fresco dinners, or a serene ceremony surrounded by nature.",
//     image:
//       "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: "gallery",
//     title: "The Gallery",
//     description:
//       "A rotating exhibition of curated art lines the walls of our Gallery space, blending culture and celebration. White walls, polished concrete floors, and track lighting create the perfect blank canvas for any event aesthetic.",
//     image:
//       "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: "loft",
//     title: "The Loft",
//     description:
//       "High above the main floor, The Loft is a hidden gem with panoramic windows and raw wooden beams. Whether for a creative workshop, intimate dinner, or cocktail reception, this space delivers effortless character.",
//     image:
//       "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: "salon",
//     title: "The Salon",
//     description:
//       "Draped in velvet and candlelight, The Salon exudes old-world glamour. With its ornate fireplace, vintage mirrors, and plush seating, this intimate space is perfect for private cocktail receptions and VIP gatherings.",
//     image:
//       "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200",
//   },
//   {
//     id: "courtyard",
//     title: "The Courtyard",
//     description:
//       "Flanked by historic brick walls and anchored by a central fountain, The Courtyard brings European elegance to Atlanta. Open-air dining, live music, or an outdoor ceremony — this space transforms effortlessly.",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
//   },
// ];

// type Space = (typeof spaces)[number];

// const SectionBlock = ({ space, index }: { space: Space; index: number }) => {
//   const isImageFirst = index % 2 === 0;

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className="py-16 md:py-24 px-6 md:px-20 max-w-7xl mx-auto"
//     >
//       <div
//         className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center`}
//       >
//         {/* IMAGE */}
//         <div
//           className={`h-[300px] md:h-[460px] overflow-hidden shadow-2xl ${
//             isImageFirst ? "order-1" : "order-1 md:order-2"
//           }`}
//         >
//           <motion.img
//             src={space.image}
//             alt={space.title}
//             className="w-full h-full object-cover"
//             whileHover={{ scale: 1.04 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           />
//         </div>

//         {/* CONTENT */}
//         <div
//           className={`flex flex-col justify-center ${
//             isImageFirst ? "order-2" : "order-2 md:order-1"
//           }`}
//         >
//           <h3 className="text-3xl md:text-4xl font-light italic mb-6 text-[#222]">
//             {space.title}
//           </h3>
//           <div className="w-10 h-[1px] bg-[#ffffff] mb-6" />
//           <p className="text-gray-500 text-sm leading-relaxed mb-8">
//             {space.description}
//           </p>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// const TerminusDesign = () => {
//   return (
//     <div className="bg-[#ffffff] font-serif text-[#000]">
//       {/* Page Header */}
//       <div className="pt-20 pb-4 text-center px-6">
//         <p className="text-xs tracking-[0.3em] text-black uppercase mb-3">
//           Explore Our Venue
//         </p>
//         <h2 className="text-4xl md:text-5xl font-light italic text-[#222]">
//           Our Spaces
//         </h2>
//         <div className="w-16 h-[1px] bg-[] mx-auto mt-6" />
//       </div>

//       {/* 8 Alternating Sections */}
//       {spaces.map((space, index) => (
//         <SectionBlock key={space.id} space={space} index={index} />
//       ))}
//     </div>
//   );
// };

// export default TerminusDesign;

import { motion } from "framer-motion";

const spaces = [
  {
    id: "main",
    title: "The Main Space",
    description:
      "The epitome of industrial chic, our main event space features an impressive wrought-iron entrance that welcomes guests into an open and airy space with original hardwoods, exposed brick, vaulted ceilings, and warm natural light. A stunning mezzanine overlooks Atlanta's historic railway.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "cellar",
    title: "The Cellar",
    description:
      "Nestled beneath the main floor, the Cellar offers a more intimate, speakeasy vibe. Perfect for rehearsal dinners or private corporate meetings, it features lower ceilings, ambient lighting, and rich textures.",
    image:
      "https://images.unsplash.com/photo-1549491754-07d08479e0f1?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "rooftop",
    title: "Rooftop Terrace",
    description:
      "Our rooftop provides breathtaking views of the Atlanta skyline. Modern, open, and fresh, it's the ideal spot for cocktail hours under the stars or sunset ceremonies.",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "garden",
    title: "The Garden",
    description:
      "A lush outdoor sanctuary tucked behind the venue, The Garden is draped in climbing ivy and Edison string lights. Ideal for intimate garden parties, al fresco dinners, or a serene ceremony surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "gallery",
    title: "The Gallery",
    description:
      "A rotating exhibition of curated art lines the walls of our Gallery space, blending culture and celebration. White walls, polished concrete floors, and track lighting create the perfect blank canvas for any event aesthetic.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "loft",
    title: "The Loft",
    description:
      "High above the main floor, The Loft is a hidden gem with panoramic windows and raw wooden beams. Whether for a creative workshop, intimate dinner, or cocktail reception, this space delivers effortless character.",
    image:
      "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "salon",
    title: "The Salon",
    description:
      "Draped in velvet and candlelight, The Salon exudes old-world glamour. With its ornate fireplace, vintage mirrors, and plush seating, this intimate space is perfect for private cocktail receptions and VIP gatherings.",
    image:
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "courtyard",
    title: "The Courtyard",
    description:
      "Flanked by historic brick walls and anchored by a central fountain, The Courtyard brings European elegance to Atlanta. Open-air dining, live music, or an outdoor ceremony — this space transforms effortlessly.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
  },
];

type Space = (typeof spaces)[number];

const SectionBlock = ({ space, index }: { space: Space; index: number }) => {
  const isImageFirst = index % 2 === 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 md:py-24 px-4 sm:px-8 md:px-20 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center">
        {/* IMAGE CONTAINER */}
        <div
          className={`relative h-[250px] sm:h-[350px] md:h-[460px] w-full overflow-hidden shadow-2xl ${
            isImageFirst ? "lg:order-1" : "lg:order-2"
          } order-1`}
        >
          <motion.img
            src={space.image}
            alt={space.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        {/* CONTENT CONTAINER */}
        <div
          className={`flex flex-col justify-center text-left ${
            isImageFirst ? "lg:order-2" : "lg:order-1"
          } order-2`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light italic mb-4 md:mb-6 text-[#222]">
            {space.title}
          </h3>
          <div className="w-10 h-[1px] bg-gray-300 mb-6" />
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 md:mb-8 max-w-prose">
            {space.description}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

const TerminusDesign = () => {
  return (
    <div className="bg-[#ffffff] font-serif text-[#000] overflow-x-hidden">
      {/* Page Header */}
      <div className="pt-16 md:pt-24 pb-4 text-center px-4">
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-black uppercase mb-3">
          Explore Our Venue
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light italic text-[#222]">
          Our Spaces
        </h2>
        <div className="w-12 md:w-16 h-[1px] bg-black/20 mx-auto mt-6" />
      </div>

      {/* 8 Alternating Sections */}
      <div className="space-y-4 md:space-y-0">
        {spaces.map((space, index) => (
          <SectionBlock key={space.id} space={space} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TerminusDesign;
