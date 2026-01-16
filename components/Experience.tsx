import { motion } from "framer-motion";
import { useRef, useState } from "react";

const experienceImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=400&fit=crop",
    alt: "Modern government building",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=500&h=400&fit=crop",
    alt: "Construction site",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=400&fit=crop",
    alt: "Infrastructure project",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=400&fit=crop",
    alt: "Architectural planning",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop",
    alt: "Engineering team",
  },
];

const Experience = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            Experience & Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over two decades of delivering complex construction and engineering
            projects for government clients. From concept to completion, we bring
            the expertise and resources required for success.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "25+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "$2B+", label: "Contract Value" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass-card rounded-sm"
            >
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling Gallery */}
      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: isPaused ? 0 : [0, -1320],
            }}
            transition={{
              x: {
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...experienceImages, ...experienceImages].map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                className="relative flex-shrink-0 w-64 h-48 rounded-sm overflow-hidden group cursor-grab active:cursor-grabbing"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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