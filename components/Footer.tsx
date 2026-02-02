import { MapPin, Phone, Mail } from "lucide-react";

import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Global Pardon & US Waiver Services
            </h3>
            <p className="text-sm text-gray-400">
              Helping you clear your path forward.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-red-500 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-red-500 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                Email: <a href="mailto:info@globalpardon.com" className="hover:text-white transition-colors">info@globalpardon.com</a>
              </li>
              <li>
                Phone: <a href="tel:555-123-4567" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Global Pardon & US Waiver Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;