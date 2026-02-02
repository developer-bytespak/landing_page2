import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  
  // Detect which section is in view and scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide header based on scroll direction
      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Detect current section
      const sections = document.querySelectorAll("section");
      const scrollPosition = currentScrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id || section.className;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  // Make header transparent on hero and specific sections
  const isTransparentSection = currentSection.includes("hero") || 
                                currentSection.includes("videostrip") ||
                                scrollY.get() < 100;
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    [
      "hsla(0, 0%, 100%, 0.95)", 
      "hsla(0, 0%, 100%, 0.98)"
    ]
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(8px)", "blur(12px)"]
  );

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#experience" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: headerBg, backdropFilter: headerBlur }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span className="text-2xl font-serif font-bold text-black">CEF</span>
            <span className="hidden sm:block text-sm text-gray-700 border-l border-gray-300 pl-3">
              Construction &<br />Engineering
            </span>
          </a>

          {/* Desktop Navigation - Right Aligned */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-black hover:text-red-500 transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-white border-t border-gray-300"
      >
        <nav className="flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-black py-2 border-b border-gray-200 hover:text-red-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;