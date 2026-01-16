'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ReadyToWork = () => {
  const spotlightRef = useRef<HTMLElement>(null);
  const spotlightContentRef = useRef<HTMLDivElement>(null);
  const headerContentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [emailError, setEmailError] = useState('');
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureBgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter valid email');
      return;
    }
    setEmailError('');
    setIsSubmitted(true);
    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit email');
      }

      console.log('Email submitted successfully:', email);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isInputFocused && inputRef.current) {
        inputRef.current.blur();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInputFocused]);

  useEffect(() => {
    const styleId = 'ready-to-work-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        .construction-stars {
          background-image: 
            radial-gradient(2px 2px at 20% 30%, rgba(52, 162, 219, 0.8), transparent),
            radial-gradient(2px 2px at 60% 70%, rgba(52, 162, 219, 0.8), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(52, 162, 219, 0.6), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(52, 162, 219, 0.7), transparent),
            radial-gradient(2px 2px at 90% 40%, rgba(52, 162, 219, 0.8), transparent),
            radial-gradient(1px 1px at 33% 60%, rgba(52, 162, 219, 0.6), transparent),
            radial-gradient(1px 1px at 66% 20%, rgba(52, 162, 219, 0.7), transparent),
            radial-gradient(2px 2px at 15% 80%, rgba(52, 162, 219, 0.8), transparent),
            radial-gradient(1px 1px at 45% 90%, rgba(52, 162, 219, 0.6), transparent),
            radial-gradient(2px 2px at 75% 15%, rgba(52, 162, 219, 0.8), transparent),
            radial-gradient(1px 1px at 10% 20%, rgba(52, 162, 219, 0.7), transparent),
            radial-gradient(1px 1px at 85% 60%, rgba(52, 162, 219, 0.6), transparent),
            radial-gradient(2px 2px at 40% 80%, rgba(52, 162, 219, 0.8), transparent),
            radial-gradient(1px 1px at 25% 40%, rgba(52, 162, 219, 0.7), transparent),
            radial-gradient(1px 1px at 70% 30%, rgba(52, 162, 219, 0.6), transparent);
          background-size: 100% 100%;
          animation: twinkle 8s ease-in-out infinite;
        }
      `;
      document.head.appendChild(style);
    }

    gsap.registerPlugin(ScrollTrigger);

    const features = featureRefs.current;
    const featureBgs = featureBgRefs.current;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const scrollEndMultiplier = isMobile ? 1.5 : 3;
    
    const featureStartPositions = isMobile 
      ? [
          { top: 5, left: 50 },
          { top: 17.5, left: 75 },
          { top: 17.5, left: 25 },
          { top: 30, left: 50 },
          { top: 65, left: 50 },
          { top: 90, left: 50 },
          { top: 77.5, left: 73 },
          { top: 77.5, left: 23 },
        ]
      : [
          { top: 25, left: 15 },
          { top: 12.5, left: 50 },
          { top: 22.5, left: 75 },
          { top: 50, left: 20 },
          { top: 75, left: 50 },
          { top: 80, left: 75 },
          { top: 80, left: 15 }, 
          { top: 50, left: 85 }, 
        ];
    
    const featureMergePosition = isMobile 
      ? { top: 50, left: 69 }
      : { top: 50, left: 57 };

    features.forEach((feature, index) => {
      if (feature) {
        const featurePos = featureStartPositions[index];
        gsap.set(feature, {
          top: `${featurePos.top}%`,
          left: `${featurePos.left}%`,
          xPercent: -50,
          yPercent: -50,
        });
      }
    });

    const featureStartDimensions: Array<{ width: number; height: number }> = [];
    
    features.forEach((feature) => {
      if (feature) {
        const rect = feature.getBoundingClientRect();
        featureStartDimensions.push({
          width: Math.max(rect.width, 50),
          height: Math.max(rect.height, 20),
        });
      }
    });
    
    setTimeout(() => {
      features.forEach((feature, index) => {
        if (feature && featureStartDimensions[index]) {
          const rect = feature.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            featureStartDimensions[index] = {
              width: rect.width,
              height: rect.height,
            };
            const bg = featureBgs[index];
            if (bg) {
              gsap.set(bg, {
                width: `${rect.width}px`,
                height: `${rect.height}px`,
              });
            }
          }
        }
      });
      ScrollTrigger.refresh();
    }, 50);

    const remInPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const targetWidth = isMobile ? 2.5 * remInPixels : 3 * remInPixels;
    const targetHeight = isMobile ? 2.5 * remInPixels : 3 * remInPixels;

    const getSearchBarFinalWidth = () => {
      const width = window.innerWidth;
      if (width < 768) return 22;
      if (width < 1024) return 20;
      if (width < 1440) return 26;
      return 22;
    };

    let searchBarFinalWidth = getSearchBarFinalWidth();

    const handleResize = () => {
      searchBarFinalWidth = getSearchBarFinalWidth();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    const scrollTrigger = ScrollTrigger.create({
      trigger: spotlightRef.current,
      start: 'top top',
      end: `+=${window.innerHeight * scrollEndMultiplier}px`,
      pin: true,
      pinSpacing: true,
      pinType: 'fixed',
      scrub: 0.05,
      fastScrollEnd: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const inputIsFocused = document.activeElement === inputRef.current;

        if (progress <= 0.3333) {
          const spotlightHeaderProgress = progress / 0.3333;
          gsap.set(spotlightContentRef.current, {
            y: `${-100 * spotlightHeaderProgress}%`,
          });
        } else {
          gsap.set(spotlightContentRef.current, {
            y: '-100%',
          });
        }

        if (progress >= 0 && progress <= 0.7) {
          const featureProgress = progress / 0.7;

          features.forEach((feature, index) => {
            if (feature) {
              const original = featureStartPositions[index];
              const currentTop =
                original.top + (featureMergePosition.top - original.top) * featureProgress;
              const currentLeft =
                original.left + (featureMergePosition.left - original.left) * featureProgress;

              gsap.set(feature, {
                top: `${currentTop}%`,
                left: `${currentLeft}%`,
                xPercent: -50,
                yPercent: -50,
                force3D: true,
              });
            }
          });

          featureBgs.forEach((bg, index) => {
            if (bg && featureStartDimensions[index]) {
              const featureDim = featureStartDimensions[index];
              const currentWidth = featureDim.width + (targetWidth - featureDim.width) * featureProgress;
              const currentHeight = featureDim.height + (targetHeight - featureDim.height) * featureProgress;
              const currentBorderRadius = 0.5 + (25 - 0.5) * featureProgress;
              const currentBorderWidth = 0.125 + (0.35 - 0.125) * featureProgress;

              gsap.set(bg, {
                width: `${currentWidth}px`,
                height: `${currentHeight}px`,
                borderRadius: `${currentBorderRadius}rem`,
                borderWidth: `${currentBorderWidth}rem`,
                force3D: true,
              });
            }
          });

          if (progress >= 0 && progress <= 0.1) {
            const featureTextProgress = progress / 0.1;
            featureContentRefs.current.forEach((content) => {
              if (content) {
                gsap.set(content, {
                  opacity: 1 - featureTextProgress,
                });
              }
            });
          } else if (progress > 0.1) {
            featureContentRefs.current.forEach((content) => {
              if (content) {
                gsap.set(content, {
                  opacity: 0,
                });
              }
            });
          }
        }

        if (progress >= 0.7) {
          gsap.set(featuresRef.current, {
            opacity: 0,
          });
        } else {
          gsap.set(featuresRef.current, {
            opacity: 1,
          });
        }

        if (progress >= 0.7 && progress <= 0.9) {
          const searchBarProgress = (progress - 0.7) / 0.2;

          const width = 2.2 + (searchBarFinalWidth - 2.2) * searchBarProgress;
          const height = 2.2 + (3.5 - 2.2) * searchBarProgress;
          const translateY = -50 + (200 - -50) * searchBarProgress;
          
          const containerOpacity = Math.min(searchBarProgress * 2, 1);

          if (searchBarRef.current && !inputIsFocused) {
            gsap.set(searchBarRef.current, {
              width: `${width}rem`,
              height: `${height}rem`,
              transform: `translate(-50%, ${translateY}%)`,
              opacity: containerOpacity,
              pointerEvents: 'none',
              force3D: true,
            });
          }
        } else if (progress > 0.9) {
          if (searchBarRef.current && !inputIsFocused) {
            gsap.set(searchBarRef.current, {
              width: `${searchBarFinalWidth}rem`,
              height: '3.5rem',
              transform: `translate(-50%, 200%)`,
              opacity: 1,
              pointerEvents: 'auto',
            });
          } else if (searchBarRef.current && inputIsFocused) {
            gsap.set(searchBarRef.current, {
              pointerEvents: 'auto',
              opacity: 1,
            });
          }
        } else {
          if (searchBarRef.current && !inputIsFocused) {
            gsap.set(searchBarRef.current, {
              opacity: 0,
              pointerEvents: 'none',
            });
          }
        }

        if (progress >= 0.75) {
          const finalHeaderProgress = (progress - 0.75) / 0.25;

          gsap.set(headerContentRef.current, {
            y: -50 + 50 * finalHeaderProgress,
            opacity: finalHeaderProgress,
            force3D: true,
          });
        } else {
          gsap.set(headerContentRef.current, {
            y: -50,
            opacity: 0,
          });
        }
      },
    });

    return () => {
      scrollTrigger.kill();
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(st => st.kill());
      
      const styleElement = document.getElementById('ready-to-work-styles');
      if (styleElement) {
        styleElement.remove();
      }
      
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const features = [
    'SAM Registered',
    'UEI Number',
    'Fully Insured',
    'Bonding Capacity',
    'OSHA Compliant',
  ];

  return (
    <div id="readytowork" className="bg-[#010a14] bg-[url('/portfolio_bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <section ref={spotlightRef as React.RefObject<HTMLElement>} className="relative w-full h-screen overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to bottom, #010a14 0%, #0a1a2e 30%, #0a1a2e 50%, #050810 70%, #010a14 90%, #010a14 100%)' }}>
          <div className="absolute inset-0 construction-stars" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-cyan-900/10" />
        </div>

        {/* Spotlight Content */}
        <div ref={spotlightContentRef} className="absolute w-full h-full flex justify-center items-center z-10 will-change-transform">
          <div className="absolute inset-0 scale-[0.3] md:scale-[0.75] opacity-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/portfolio_bg.png)' }} />
          <div className="text-center w-full md:w-2/5 px-8 flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-[4.5rem] lg:text-[4.5rem] bg-gradient-to-r from-[#0476b5] via-[#06a8da] to-[#14b8a6] bg-clip-text text-transparent font-serif font-bold leading-[0.9] tracking-wider will-change-transform">
              Ready to Build Your Vision?
            </h1>
            <p className="text-base md:text-lg font-sans font-normal leading-relaxed text-gray-300">
              Join us on a journey to transform your construction dreams into reality
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="absolute w-full h-full flex justify-center items-center z-40">
          <div
            ref={headerContentRef}
            className="w-full md:w-3/5 flex flex-col items-center text-center gap-8 px-8 opacity-0"
            style={{ transform: 'translateY(-100px)' }}
          >
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold bg-gradient-to-r from-[#0476b5] via-[#06a8da] to-[#14b8a6] bg-clip-text text-transparent leading-[1.1] tracking-wider">
              Compliance & Credentials
            </h1>
            <p className="text-base md:text-lg font-sans font-normal leading-relaxed text-gray-300">
              Fully registered, bonded, and insured to support federal, state, and local government contracting requirements.
            </p>
            <style jsx>{`
              @media (max-width: 767px) {
                .readytowork-mobile-pb { padding-bottom: 8rem; }
              }
            `}</style>
            <span className="readytowork-mobile-pb block md:hidden" />
          </div>
        </div>

        {/* Features */}
        <div ref={featuresRef} className="z-30 will-change-opacity">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="absolute inline-block px-4 md:px-6 py-4 will-change-transform"
            >
              <div
                ref={(el) => {
                  featureBgRefs.current[index] = el;
                }}
                className="absolute inset-0 bg-[#0f1d2d] border border-[#0476b5]/40 rounded-lg backdrop-blur-sm will-change-transform"
                style={{ boxSizing: 'border-box' }}
              />
              <div
                ref={(el) => {
                  featureContentRefs.current[index] = el;
                }}
                className="relative whitespace-nowrap"
              >
                <p className="uppercase font-mono font-normal text-[0.7rem] md:text-[0.85rem] leading-none text-[#06a8da]">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Email Input Bar */}
        <div
          ref={searchBarRef}
          className="absolute rounded-full border-[0.35rem] border-[#0476b5]/50 bg-[#0f1d2d]/80 opacity-0 flex items-center overflow-hidden z-50 backdrop-blur-md"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}
        >
          <div className="w-full h-full flex items-center">
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError('');
              }}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Your email to get started"
              className="w-full h-full bg-transparent border-none outline-none text-white text-base px-4 placeholder:text-gray-500 placeholder:font-medium flex-1 font-sans"
              disabled={isSubmitted}
              autoComplete="email"
            />
            {emailError && (
              <span className="text-red-400 text-sm ml-4 my-2 block">{emailError}</span>
            )}
            <button
              onClick={handleSubmit}
              disabled={isSubmitted}
              className="px-4 h-full bg-transparent text-[#06a8da] hover:text-[#14b8a6] transition-colors disabled:opacity-70 flex items-center justify-center flex-shrink-0 rounded-[10px]"
              aria-label="Submit email"
            >
              {isSubmitted ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadyToWork;
