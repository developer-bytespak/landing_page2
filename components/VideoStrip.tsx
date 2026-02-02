"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Federal Office Complex",
    category: "Federal Civilian",
    description: "A 250,000 sq ft modernization project featuring sustainable design and advanced security systems.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Municipal Water Treatment",
    category: "Infrastructure",
    description: "State-of-the-art water treatment system serving 500,000+ residents with eco-friendly technology.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Public School Campus",
    category: "Education",
    description: "Complete renovation of historic K-12 campus with modern learning facilities and safety upgrades.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
  },
  // {
  //   id: 4,
  //   title: "Interstate Highway Bridge",
  //   category: "Civil Engineering",
  //   description: "Multi-span bridge construction with seismic resilience and 100-year design life.",
  //   image: "/public/img.png",
  // },
  {
    id: 5,
    title: "Government Data Center",
    category: "Federal Technology",
    description: "Tier III certified facility with redundant power, cooling, and mil-spec security protocols.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "State Courthouse",
    category: "Justice Facility",
    description: "Historic preservation combined with modern courtroom technology and accessibility standards.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
  },
];

const VideoStrip = () => {
  const slides = [...projects, projects[0]];
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  // Advance slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // When we reach the cloned slide, jump back to real first slide without animation
  useEffect(() => {
    if (index === slides.length - 1) {
      // Wait for the ongoing transition to finish (700ms matches duration)
      const t = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
        // Re-enable transition on next tick so future moves animate
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setWithTransition(true));
        });
      }, 700);
      return () => clearTimeout(t);
    }
  }, [index, slides]);

  // Manual navigation handlers
  const nextSlide = useCallback(() => {
    if (index === slides.length - 2) { // Last real slide
      // Go to cloned slide first
      setIndex(slides.length - 1);
      // Then jump back to first slide after transition
      setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setWithTransition(true));
        });
      }, 700);
    } else {
      setIndex((prev) => prev + 1);
    }
  }, [index, slides]);

  const prevSlide = useCallback(() => {
    if (index === 0) {
      // Jump to last real slide then animate back
      setWithTransition(false);
      setIndex(slides.length - 2); // last real index
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setWithTransition(true));
      });
    } else {
      setIndex((prev) => prev - 1);
    }
  }, [index, slides]);

  return (
    <section id="videostrip" className="py-20 sm:py-12 md:py-16 lg:py-8 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Project Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-serif font-semibold mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-base">
            Explore our portfolio of impactful projects across multiple sectors
          </p>
        </div>

        {/* Carousel Container */}
        <div className="lg:mt-2 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-6 scale-90 sm:scale-95 lg:scale-90">
          {/* Slider Row */}
          <div className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-3xl shadow-2xl mx-2 sm:mx-4 md:mx-6 lg:mx-2">

            {/* Prev Button */}
            <button
              aria-label="Previous slide"
              onClick={prevSlide}
              className="flex absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 backdrop-blur rounded-[10px] p-2 sm:p-3 md:p-4 transition-all shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M15.78 19.28a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 1 1 1.06 1.06L9.06 12l6.72 6.72a.75.75 0 0 1 0 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              aria-label="Next slide"
              onClick={nextSlide}
              className="flex absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 backdrop-blur rounded-[10px] p-2 sm:p-3 md:p-4 transition-all shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 4.72a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L14.94 12 8.22 5.28a.75.75 0 0 1 0-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Left Slider (Image) */}
            <div className="w-full md:w-7/12 overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${index * 100}%)`, 
                  transitionProperty: withTransition ? 'transform' : 'none' 
                }}
              >
                {slides.map((item, idx) => (
                  <div key={idx} className="min-w-full">
                    <div className="relative w-full h-[45vh] lg:h-[60vh]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Slider (Text) */}
            <div className="w-full md:w-5/12 overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${index * 100}%)`, 
                  transitionProperty: withTransition ? 'transform' : 'none' 
                }}
              >
                {slides.map((item, idx) => (
                  <div key={idx} className="min-w-full flex flex-col items-start justify-center p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 lg:space-y-5">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-[10px] text-sm font-semibold shadow-md hover:bg-primary/90 transition-all hover:scale-105">
                      View Project Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  index === idx || (index === slides.length - 1 && idx === 0)
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStrip;