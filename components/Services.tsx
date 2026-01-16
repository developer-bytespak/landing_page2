'use client';

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building2, Compass, Wrench, HardHat } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Building2,
    title: "General Construction",
    services: [
      "Complete Project Management",
      "Ground-Up Construction",
      "Major Renovations",
      "On-Time Delivery",
      "Budget Compliance"
    ],
  },
  {
    icon: Compass,
    title: "Design-Build",
    services: [
      "Single-Source Accountability",
      "Design Excellence",
      "Construction Expertise",
      "Streamlined Delivery",
      "Federal & Municipal Projects"
    ],
  },
  {
    icon: HardHat,
    title: "Civil & Structural",
    services: [
      "Infrastructure Solutions",
      "Structural Engineering",
      "Code Compliance",
      "Licensed Professionals",
      "Safety Excellence"
    ],
  },
  {
    icon: Wrench,
    title: "Facilities Maintenance",
    services: [
      "Preventive Maintenance",
      "24/7 Support",
      "Scheduled Inspections",
      "Lifecycle Management",
      "Government Buildings"
    ],
  },
];

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;
  const [isFlipped, setIsFlipped] = useState(false);
  const titles = ["GENERAL CONSTRUCTION", "DESIGN-BUILD", "CIVIL & STRUCTURAL", "FACILITIES MAINTENANCE"];

  return (
    <div 
      className="flip-card h-80 w-64 cursor-pointer mx-auto group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="flip-card-inner relative w-full h-full"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s ease-out",
          animation: "float 3s ease-in-out infinite"
        }}
      >
        {/* Front - Clean & Minimal */}
        <div
          className="flip-card-front absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-lg border border-blue-400/20 bg-gradient-to-br from-slate-950/80 to-slate-900/60 overflow-hidden group-hover:border-blue-400/40 transition-colors"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
            {/* Icon with glow effect */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-md border border-blue-300/50 flex items-center justify-center group-hover:border-blue-300/80 group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all">
              <Icon className="w-8 h-8 text-blue-200 group-hover:text-blue-100 transition-colors" />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-white leading-tight group-hover:text-blue-100 transition-colors">
                {service.title}
              </h2>
              <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Label */}
            <p className="text-xs text-blue-300/70 font-semibold tracking-widest uppercase group-hover:text-blue-300 transition-colors">
              Expertise Area
            </p>
          </div>
        </div>

        {/* Back - Rich Details with Circuit Pattern */}
        <div
          className="flip-card-back absolute inset-0 rounded-3xl p-8 flex flex-col overflow-hidden backdrop-blur-lg border border-blue-500/30 bg-gradient-to-br from-slate-950/80 via-blue-950/40 to-slate-900/60"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Animated vertical lightning effect */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Main glow line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-cyan-300 to-transparent opacity-50 blur-sm animate-pulse" />
            
            {/* Outer glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-300 via-cyan-200 to-transparent opacity-20 blur-2xl" />
            
            {/* Side sparks */}
            <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-60 blur-sm animate-pulse" style={{transform: 'translate(-60px, -2px)'}} />
            <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-50 blur-sm animate-pulse" style={{transform: 'translate(50px, 0px)'}} />
            <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-60 blur-sm animate-pulse" style={{transform: 'translate(-50px, 0px)'}} />
            
            {/* Circuit board grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`circuit-${index}`} x="25" y="25" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 5 5 L 45 5 M 45 5 L 45 45 M 45 45 L 5 45 M 5 45 L 5 5" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" fill="none" />
                  <circle cx="5" cy="5" r="1" fill="rgba(59, 130, 246, 0.6)" />
                  <circle cx="45" cy="45" r="1" fill="rgba(59, 130, 246, 0.6)" />
                  <circle cx="25" cy="25" r="0.5" fill="rgba(59, 130, 246, 0.4)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#circuit-${index})`} />
            </svg>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-slate-900/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Header with divider */}
            <div className="mb-6 pb-4 border-b border-blue-500/20">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                {titles[index]}
              </h3>
            </div>

            {/* Services list with improved spacing */}
            <div className={`flex-1 ${index !== 0 && index !== 3 ? 'overflow-y-auto' : 'overflow-hidden'} pr-2`}>
              <div className="space-y-3">
                {service.services.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0 opacity-70" />
                    <p className="text-xs text-blue-100/90 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="mt-4 pt-4 border-t border-blue-500/20">
              <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const container = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(isMobile());
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    const cards = cardRefs.current;
    
    // Clear ONLY the ScrollTriggers that belong to this component
    ScrollTrigger.getAll().forEach((trigger) => {
      const trg = trigger.vars?.trigger;
      if (trg && typeof trg !== 'string' && container.current && container.current.contains(trg as Node)) {
        trigger.kill();
      }
    });

    if (isMobileDevice) {
      // Mobile Animation: Simple sequential reveal without pinning
      const section = container.current?.querySelector(".services-cards");

      const isShortScreen = window.innerHeight < 700;
      const revealStart = "top 80%";
      const revealEnd   = "bottom 80%";
      const flipStart = isShortScreen ? "bottom 100%" : "top 70%";
      const flipEnd   = isShortScreen ? "bottom 80%" : "center center";
      
      // Set initial states for mobile cards
      cards.forEach((card) => {
        gsap.set(card, {
          opacity: 1,
          y: 60,
          scale: 0.9,
          rotation: 0,
          position: "relative",
          left: "auto",
          top: "auto",
          transform: "none",
          zIndex: 1,
        });
      });

      // Create simple reveal animations for each card
      cards.forEach((card) => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: revealStart,
            end: revealEnd,
            toggleActions: "play none none reverse",
            markers: false,
          },
        });

        // Simple flip animation when card comes into view
        const frontEl = card.querySelector(".flip-card-front") as HTMLElement;
        const backEl = card.querySelector(".flip-card-back") as HTMLElement;

        frontEl.style.transformOrigin = "center center";
        backEl.style.transformOrigin = "center center";

        gsap.fromTo(
          frontEl,
          { rotateY: 0 },
          {
            rotateY: -180,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: flipStart,
              end: flipEnd,
              scrub: true,
              markers: false,
              onUpdate: (self) => {
                frontEl.style.pointerEvents = "none";
              },
            },
          },
        );

        gsap.fromTo(
          backEl,
          { rotateY: 180 },
          {
            rotateY: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: flipStart,
              end: flipEnd,
              scrub: true,
              markers: false,
            },
          },
        );
      });

    } else {
      // Desktop Animation: Original spread animation
      const position = [14, 38, 62, 86];
      const rotation = [-15, -7.5, 7.5, 15];
      const totalScrollHeight = window.innerHeight * 3;

      const cardsSection = container.current?.querySelector(".services-cards");

      // Pin cards section
      ScrollTrigger.create({
        trigger: cardsSection,
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });

      // Initially set all cards visible and properly positioned
      cards.forEach((card, index) => {
        gsap.set(card, {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotation: 0,
          left: "50%",
          top: "50%",
          zIndex: 4 - index,
          position: "absolute",
          xPercent: -50,
          yPercent: -50,
        });
      });

      // Spread Cards section
      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${position[index]}%`,
          rotation: rotation[index],
          ease: "none",
          scrollTrigger: {
            trigger: cardsSection,
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
            id: `spread-${index}`,
            onEnter: () => {
              card.style.pointerEvents = "none";
            },
            onLeaveBack: () => {
              card.style.pointerEvents = "auto";
            },
          },
        });
      });

      // Flip cards and reset rotation with stagger
      cards.forEach((card, index) => {
        const frontEl = card.querySelector(".flip-card-front") as HTMLElement;
        const backEl = card.querySelector(".flip-card-back") as HTMLElement;

        frontEl.style.transformOrigin = "center center";
        backEl.style.transformOrigin = "center center";

        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: cardsSection,
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;

            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotation[index] * (1 - animationProgress);

              // Rotate the faces
              gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });

              // Toggle pointer events based on which side is visible
              frontEl.style.pointerEvents = "none";

              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: "power1.out",
              });
            }
          },
        });
      });
    }
  }, { scope: container, dependencies: [isMobileDevice] });

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        const trg = trigger.vars?.trigger;
        if (trg && typeof trg !== 'string' && container.current && container.current.contains(trg as Node)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="w-full" ref={container}>
      <section id="services" className="relative py-16 md:py-24 px-4 md:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-blue-500 text-sm tracking-[0.3em] uppercase mb-3 block font-semibold">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Full-Spectrum Services
            </h2>
          </motion.div>

          {/* Service Cards */}
          {isMobileDevice ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                >
                  <ServiceCard service={service} index={index} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="services-cards relative w-full h-[550px]">
              {services.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                >
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;