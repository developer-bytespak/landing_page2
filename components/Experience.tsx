import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const experienceItems = [
  {
    id: 1,
    name: "Sarah M.",
    service: "RECORD SUSPENSION",
    testimonial: "Global Pardon made the process so easy. I was overwhelmed by the paperwork, but they handled everything. Now I can travel freely!",
    rating: 5,
  },
  {
    id: 2,
    name: "James T.",
    service: "US ENTRY WAIVER",
    testimonial: "Professional and efficient. They explained every step and kept me updated. Highly recommended for anyone needing a waiver.",
    rating: 5,
  },
  {
    id: 3,
    name: "David L.",
    service: "NEXUS APPLICATION",
    testimonial: "Thanks to their help, I got my Nexus card approved much faster than I expected. Great service!",
    rating: 5,
  },
];

const Experience = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      const speed = -0.04; // Adjust speed as needed
      const currentX = x.get();
      const newX = currentX + speed * delta;
      
      // Reset position when reaching the end of first set
      if (newX <= -1224) {
        x.set(newX + 1224);
      } else {
        x.set(newX);
      }
    }
  });

  return (
    <section id="experience" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-2">
            Client Success Stories
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </motion.div>
      </div>

      {/* Scrolling Gallery */}
      <div
        ref={containerRef}
        className="relative"
      >
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6"
            style={{ x }}
          >
            {[...experienceItems, ...experienceItems].map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="relative flex-shrink-0 w-96 h-64 rounded-lg overflow-hidden group cursor-grab active:cursor-grabbing bg-white border border-gray-200 shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  
                  {/* Testimonial */}
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-4 flex-1">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>
                  
                  {/* Name and Service */}
                  <div>
                    <h3 className="text-base font-bold text-black">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.service}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Experience;