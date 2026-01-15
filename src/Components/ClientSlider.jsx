import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import client1 from '../assets/cropped-ALH-logo-1.webp';
import client2 from '../assets/cropped-CG-Bathrooms-Limited-Logo-scaled-2-2048x839.webp';
import client3 from '../assets/cropped-cropped-pb-newlogo.webp';
import client4 from '../assets/cropped-ivan-removals.webp';
import client5 from '../assets/cropped-quick-manchester-movers-logo-transparent.webp';
import client6 from '../assets/cropped-Same_Day_Removals-1.webp';

const ClientSlider = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const logos = [
    { src: client1, alt: "Client 1" },
    { src: client2, alt: "Client 2" },
    { src: client3, alt: "Client 3" },
    { src: client4, alt: "Client 4" },
    { src: client5, alt: "Client 5" },
    { src: client6, alt: "Client 6" },
  ];

  useEffect(() => {
    // Row 1: Right to Left
    const row1Width = row1Ref.current.scrollWidth;
    gsap.to(row1Ref.current, {
      x: `-${row1Width / 2}`,
      duration: 15,
      ease: "none",
      repeat: -1,
    });

    // Row 2: Left to Right
    const row2Width = row2Ref.current.scrollWidth;
    
    gsap.set(row2Ref.current, { x: `-${row2Width / 2}` });
    gsap.to(row2Ref.current, {
      x: 0,
      duration: 15,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-black border-t border-b border-white/10">
      
      {/* Crystal Glass Effect Layers */}
      <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto mb-16 text-center">
        <p className="text-2xl font-semibold tracking-[0.2em] text-[#8259DA] uppercase opacity-80">
          Trusted by Industry Leaders
        </p>
      </div>

      
      <div className="relative z-10 flex flex-col gap-12">
        
        
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-20"></div>

        {/* ROW 1: Moves Left */}
        <div className="flex overflow-hidden">
          <div ref={row1Ref} className="flex items-center gap-16 whitespace-nowrap">
            {logos.concat(logos).map((logo, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-16 md:h-20 w-auto opacity-50 hover:opacity-100 transition-all duration- hover:grayscale-0 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="flex overflow-hidden">
          <div ref={row2Ref} className="flex items-center gap-16 whitespace-nowrap">
            
            {[...logos, ...logos].reverse().map((logo, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-16 md:h-20 w-auto opacity-50 hover:opacity-100 transition-all duration-500  hover:grayscale-0 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientSlider;