import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import client1 from "../assets/clientSliders/AndamanLiveHolidays.webp";
import client2 from "../assets/clientSliders/BME Builders.webp";
import client3 from "../assets/clientSliders/CG Bathrooms LTD.webp";
import client4 from "../assets/clientSliders/Cleaner Choice.webp";
import client5 from "../assets/clientSliders/Ivan Removals.webp";
import client6 from "../assets/clientSliders/Jambo Removals.webp";
import client7 from "../assets/clientSliders/Manchester Mover.webp";
import client8 from "../assets/clientSliders/MoveiTAll Removals.webp";
import client9 from "../assets/clientSliders/perfectBuilder.webp";
import client10 from "../assets/clientSliders/Quantity Surveyor.webp";
import client11 from "../assets/clientSliders/Sameday Removals.webp";
import client12 from "../assets/clientSliders/TMR.webp";
import client13 from "../assets/clientSliders/TTT.webp";

const ClientSlider = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Row 1: First 7 logos
  const firstRowLogos = [client1, client2, client3, client4, client5, client6, client7];
  
  // Row 2: Last 6 logos
  const secondRowLogos = [client8, client9, client10, client11, client12, client13];

  useEffect(() => {
    // Speed badhane ke liye duration 10-12 seconds rakhi hai
    gsap.to(row1Ref.current, {
      xPercent: -50,
      duration: 12, 
      ease: "none",
      repeat: -1,
    });

    gsap.fromTo(
      row2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 10, // Row 2 thoda aur fast chalegi opposite direction mein
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  return (
    <section className="relative py-24 bg-black overflow-hidden w-full">
      
      {/* HEADING */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Trusted by <span className="bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Businesses across industries rely on us to scale and succeed.
        </p>
      </div>

      <div className="relative w-full">
        {/* EDGE FADE */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* ROW 1 (First 7) */}
        <div className="overflow-hidden mb-12">
          <div
            ref={row1Ref}
            className="flex items-center gap-12 sm:gap-20 md:gap-24 whitespace-nowrap"
          >
            {[...firstRowLogos, ...firstRowLogos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client logo"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain border border-white rounded-full transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* ROW 2 (Last 6) */}
        <div className="overflow-hidden">
          <div
            ref={row2Ref}
            className="flex items-center gap-12 sm:gap-20 md:gap-24 whitespace-nowrap"
          >
            {[...secondRowLogos, ...secondRowLogos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client logo"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain border border-white rounded-full transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;