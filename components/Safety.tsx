import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Leaf, Award } from "lucide-react";

const Safety = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      description:
        "Zero-incident culture with daily toolbox talks, site audits, and comprehensive safety training for all personnel.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous QA/QC protocols ensuring every deliverable meets or exceeds specifications and client expectations.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description:
        "Sustainable practices, waste reduction programs, and LEED-certified project experience.",
    },
  ];

  return (
    <section ref={ref} className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[300px] lg:h-[450px] rounded-sm overflow-hidden order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=700&fit=crop"
              alt="Safety on construction site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            
            {/* Safety Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6 glass-card rounded-sm p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-sm bg-success/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-lg font-semibold">Zero LTI Record</div>
                <div className="text-sm text-muted-foreground">
                  2+ Million Safe Work Hours
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                Core Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-8">
                Safety, Quality & Environment
              </h2>
            </motion.div>

            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;