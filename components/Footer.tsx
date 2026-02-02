import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-serif font-bold text-primary">CEF</span>
              <span className="text-sm text-muted-foreground">
                Construction &<br />Engineering
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-spectrum construction, engineering, and facilities services
              for government clients nationwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>General Construction</li>
              <li>Design-Build</li>
              <li>Civil & Structural Engineering</li>
              <li>Facilities Maintenance</li>
              <li>Environmental Remediation</li>
            </ul>
          </div>

          {/* NAICS Codes */}
          <div>
            <h4 className="font-serif font-semibold mb-6">NAICS Codes</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>236220</li>
              <li>237310</li>
              <li>238220</li>
              <li>541330</li>
              <li>562910</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  1234 Government Way<br />
                  Washington, DC 20001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>1-800-555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>contact@cefservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CEF Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;