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

  const firstRowLogos = [client1, client2, client3, client4, client5, client6, client7];
  const secondRowLogos = [client8, client9, client10, client11, client12, client13];

  useEffect(() => {
    // ROW 1: Left to Right
    // w-max ensure karega ki images choti na hon
    const r1 = gsap.to(row1Ref.current, {
      xPercent: -50,
      duration: 20, // Mobile par smooth dikhne ke liye duration thodi badhayi hai
      ease: "none",
      repeat: -1,
    });

    // ROW 2: Right to Left
    const r2 = gsap.fromTo(
      row2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 18, 
        ease: "none",
        repeat: -1,
      }
    );

    // Clean up on unmount
    return () => {
      r1.kill();
      r2.kill();
    };
  }, []);

  return (
    <section className="relative py-24 bg-black overflow-hidden w-full">
      
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Trusted by <span className="bg-[#8259DA] bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Businesses across industries rely on us to scale and succeed.
        </p>
      </div>

      <div className="relative w-full">
        {/* EDGE FADE - Inhe thoda zyada wide kiya hai for better look */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        {/* ROW 1 */}
        <div className="flex overflow-hidden mb-12">
          {/* w-max and flex-nowrap are keys here */}
          <div
            ref={row1Ref}
            className="flex items-center gap-12 sm:gap-24 whitespace-nowrap w-max"
          >
            {/* Array ko double karna zaroori hai seamless loop ke liye */}
            {[...firstRowLogos, ...firstRowLogos].map((logo, i) => (
              <div key={i} className="shrink-0">
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain border border-white/20 rounded-full transition-all duration-500 "
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex overflow-hidden">
          <div
            ref={row2Ref}
            className="flex items-center gap-12 sm:gap-24 whitespace-nowrap w-max"
          >
            {[...secondRowLogos, ...secondRowLogos].map((logo, i) => (
              <div key={i} className="shrink-0">
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain border border-white/20 rounded-full transition-all duration-500 "
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