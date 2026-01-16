import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const heroVideo = "/videos/video2.mp4"; // Path to your background video
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsla(222, 47%, 6%, 0.7) 0%, hsla(221, 83%, 25%, 0.4) 100%)"
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-relaxed mb-4"
        >
          <span className="block text-white">Construction &</span>
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Engineering Excellence
          </span>
        </motion.h1>

        {/* Subheadline - Minimal */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-base md:text-lg text-blue-200/70 font-light tracking-wide mt-4 mb-8"
        >
          Federal & Government Projects
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact" className="btn-primary px-6 py-2.5 text-sm md:text-base">
            Contact Us
          </a>
          <a href="#services" className="btn-secondary px-6 py-2.5 text-sm md:text-base">
            Explore Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;