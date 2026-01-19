import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import client1 from "../assets/cropped-ALH-logo-1.webp";
import client2 from "../assets/cropped-CG-Bathrooms-Limited-Logo-scaled-2-2048x839.webp";
import client3 from "../assets/cropped-cropped-pb-newlogo.webp";
import client4 from "../assets/cropped-ivan-removals.webp";
import client5 from "../assets/cropped-quick-manchester-movers-logo-transparent.webp";
import client6 from "../assets/cropped-Same_Day_Removals-1.webp";

const ClientSlider = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const logos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
  ];

  useEffect(() => {
    gsap.to(row1Ref.current, {
      xPercent: -50,
      duration: 15,
      ease: "none",
      repeat: -1,
    });

    gsap.fromTo(
      row2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 15,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  return (
    <section className="relative py-20 bg-black overflow-hidden w-full">
      
      {/* HEADING */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Trusted by <span className="bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Businesses across industries rely on us to scale and succeed.
        </p>
      </div>

      {/* FULL WIDTH SLIDER */}
      <div className="relative w-full">
        
        {/* EDGE FADE */}
        <div className="absolute inset-y-0 left-0 w-14 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-14 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />

        {/* ROW 1 */}
        <div className="overflow-hidden mb-8">
          <div
            ref={row1Ref}
            className="flex items-center gap-10 sm:gap-16 whitespace-nowrap"
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client logo"
                className="
                  h-14 sm:h-16 md:h-20
                  w-auto
                  opacity-100 md:opacity-80
                  md:grayscale
                  md:hover:opacity-100
                  md:hover:grayscale-0
                  transition-all duration-300
                "
              />
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden">
          <div
            ref={row2Ref}
            className="flex items-center gap-10 sm:gap-16 whitespace-nowrap"
          >
            {[...logos, ...logos].reverse().map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client logo"
                className="
                  h-14 sm:h-16 md:h-20
                  w-auto
                  opacity-100 md:opacity-80
                  md:grayscale
                  md:hover:opacity-100
                  md:hover:grayscale-0
                  transition-all duration-300
                "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
