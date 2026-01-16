import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Landmark, Building, GraduationCap, Home, Flag } from "lucide-react";

const markets = [
  { icon: Flag, label: "Federal Civilian", description: "GSA, VA, DOE, and civilian agencies" },
  { icon: Landmark, label: "State Government", description: "State facilities and infrastructure" },
  { icon: Building, label: "Local / Municipal", description: "City and county projects" },
  { icon: GraduationCap, label: "Education", description: "Schools and universities" },
  { icon: Home, label: "Public Facilities", description: "Community centers and libraries" },
];

const Markets = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      id="markets"
      ref={ref}
      className="section-padding overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            Markets Served
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dedicated expertise across all levels of government, delivering
            infrastructure solutions that serve communities.
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {markets.map((market, index) => (
            <motion.div
              key={market.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-sm p-6 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <market.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold mb-2">{market.label}</h3>
              <p className="text-xs text-muted-foreground">{market.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Wide Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative h-80 md:h-[28rem] rounded-sm overflow-hidden"
        >
          <motion.img
            style={{ y: imageY }}
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop"
            alt="Government building construction"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-lg md:text-xl font-serif text-foreground/90 max-w-2xl">
              &ldquo;Building infrastructure that serves communities for generations.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Markets;