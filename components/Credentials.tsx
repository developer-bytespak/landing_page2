import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const credentials = [
  { label: "SAM Registered", description: "System for Award Management" },
  { label: "UEI Number", description: "Unique Entity Identifier" },
  { label: "Fully Insured", description: "Comprehensive Coverage" },
  { label: "Bonding Capacity", description: "$50M+ Single Project" },
  { label: "OSHA Compliant", description: "30-Hour Certified Team" },
];

const Credentials = () => {
  return (
    <section id="credentials" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Ready to Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6">
            Compliance & Credentials
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fully registered, bonded, and insured to support federal, state,
            and local government contracting requirements.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  delay: index * 0.1 + 0.2 
                }}
                className="w-14 h-14 rounded-full bg-success/10 border-2 border-success flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-7 h-7 text-success" />
              </motion.div>
              <h3 className="font-serif font-semibold mb-1">{credential.label}</h3>
              <p className="text-xs text-muted-foreground">{credential.description}</p>
            </motion.div>
          ))}
        </div>

        {/* NAICS Codes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-serif font-semibold mb-4">
            Primary NAICS Codes
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "236220 - Commercial Building",
              "237310 - Highway & Street",
              "238220 - Plumbing & HVAC",
              "541330 - Engineering Services",
              "562910 - Remediation",
            ].map((code) => (
              <span
                key={code}
                className="px-4 py-2 text-sm glass-card rounded-sm text-muted-foreground"
              >
                {code}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;