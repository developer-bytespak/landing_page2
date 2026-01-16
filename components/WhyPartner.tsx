import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Clock, Users, FileCheck } from "lucide-react";

const reasons = [
  { icon: Shield, text: "Impeccable safety record with zero lost-time incidents" },
  { icon: FileCheck, text: "Full compliance with FAR, DFARS, and prevailing wage requirements" },
  { icon: Clock, text: "Consistent on-time, on-budget project delivery" },
  { icon: Users, text: "Dedicated project teams with direct government experience" },
  { icon: Award, text: "Quality management systems meeting ISO 9001 standards" },
];

const WhyPartner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.03]);

  return (
    <section ref={ref} className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-8">
                Why Partner <br className="hidden lg:block" />
                With Us
              </h2>
            </motion.div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors pt-2">
                    {reason.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden"
          >
            <motion.img
              style={{ scale: imageScale }}
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=1000&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;