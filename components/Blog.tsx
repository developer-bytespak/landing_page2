import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "Oct 15, 2023",
      title: "Understanding US Entry Waivers",
      description: "Everything you need to know about traveling to the US with a criminal record.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      date: "Sep 28, 2023",
      title: "The Benefits of a Record Suspension",
      description: "How clearing your record can open up new employment and volunteer opportunities.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      date: "Sep 10, 2023",
      title: "Nexus Application Tips",
      description: "Top tips to ensure your Nexus application is approved without delays.",
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="blogs" className="pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-2">
            Latest News & Insights
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3 hover:text-red-500 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="text-red-500 text-sm font-semibold hover:text-red-600 transition-colors duration-300 inline-flex items-center gap-1"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
