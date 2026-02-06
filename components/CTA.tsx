import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";

const CTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmittedData(formData);
      setShowConfirmation(true);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setShowConfirmation(false);
      }, 8000);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your application? Get in touch with us today for a free consultation.
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 lg:gap-16">
          {/* Left Side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name and Email in same row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-red-600 text-white font-medium py-2 px-16 rounded-md hover:bg-red-700 transition-colors uppercase tracking-wider text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Confirmation Modal */}
            {showConfirmation && submittedData && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg max-w-md w-full p-8 shadow-xl animate-in">
                  <div className="text-center mb-6">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Received!</h3>
                    <p className="text-gray-600 text-sm mb-6">Here&apos;s what we received:</p>
                  </div>

                  {/* Submitted Details */}
                  <div className="bg-gray-50 rounded-lg p-4 space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</p>
                      <p className="text-gray-900 font-medium">{submittedData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                      <p className="text-gray-900 font-medium break-all">{submittedData.email}</p>
                    </div>
                    {submittedData.phone && (
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
                        <p className="text-gray-900 font-medium">{submittedData.phone}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</p>
                      <p className="text-gray-900 font-medium text-sm whitespace-pre-wrap">{submittedData.message}</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-4">We&apos;ll get back to you soon!</p>
                    <button
                      onClick={() => setShowConfirmation(false)}
                      className="bg-red-600 text-white font-medium py-2 px-8 rounded-md hover:bg-red-700 transition-colors text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">
                Office Hours
              </h3>
              <div className="text-gray-700 space-y-1">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location
              </h3>
              <div className="text-gray-700 space-y-1">
                <p>77 City Centre Dr</p>
                <p>Mississauga ON L5B 1M2</p>
              </div>
            </div>

            {/* Direct Contact */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">
                Direct Contact
              </h3>
              <div className="text-gray-700 space-y-1">
                <p>
                  Phone: <a href="tel:1877-226-6612" className="hover:text-red-600 transition-colors">1877 226-6612</a>
                </p>
                <p>
                  Phone: <a href="tel:647-699-8141" className="hover:text-red-600 transition-colors">647 699-8141</a>
                </p>
                <p>
                  Email: <a href="mailto:info@globalpardon.com" className="hover:text-red-600 transition-colors">info@globalpardon.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;