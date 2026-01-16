import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="contact" ref={ref} className="section-padding">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto relative rounded-sm overflow-hidden"
      >
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(221, 83%, 25%) 0%, hsl(222, 47%, 11%) 50%, hsl(199, 89%, 30%) 100%)"
          }}
        />
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6"
          >
            Ready to Build <br className="hidden sm:block" />
            Something Exceptional?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/80 max-w-xl mx-auto mb-10"
          >
            Partner with a team that understands government contracting and
            delivers excellence on every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:contact@cefservices.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-background font-medium rounded-sm hover:bg-white/90 transition-all duration-300 animate-pulse-glow"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+1-800-555-0123"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 font-medium rounded-sm hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              1-800-555-0123
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;