import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Star } from "lucide-react";

interface Venue {
  id: number;
  name: string;
  location: string;
  capacity: string;
  rating: number;
  image: string;
  category: string;
}

const venues: Venue[] = [
  {
    id: 1,
    name: "Grand Royal Ballroom",
    location: "Dhaka, Bangladesh",
    capacity: "500-1000",
    rating: 4.9,
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Skyline Garden",
    location: "Chittagong, Bangladesh",
    capacity: "200-400",
    rating: 4.8,
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "The Heritage Hall",
    location: "Sylhet, Bangladesh",
    capacity: "300-600",
    rating: 4.7,
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const VenuesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Premium Venues
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover the perfect space for your next event, from grand weddings
            to corporate galas.
          </motion.p>
        </div>

        {/* Venues Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600">
                  {venue.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {venue.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 font-bold">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span>{venue.rating}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    {venue.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-4 h-4 mr-2 text-blue-500" />
                    Capacity: {venue.capacity}
                  </div>
                </div>

                <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold transform active:scale-95 transition-all hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VenuesSection;
