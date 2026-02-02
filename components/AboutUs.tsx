import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="pb-16 md:pb-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            About Us
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              At Global Pardon & US Waiver Services, we are dedicated to helping individuals overcome past obstacles and build a brighter future. With years of experience in the field, our team of experts provides comprehensive support for record suspensions, US entry waivers, and more.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We understand the challenges you face and are committed to guiding you through every step of the process with professionalism and care.
            </p>
            <button className="bg-red-600 text-white font-medium py-2.5 px-8 rounded-md hover:bg-red-700 transition-colors uppercase tracking-wider text-sm">
              Learn More
            </button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
              alt="Professional writing documents"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
