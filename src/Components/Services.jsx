import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Website Design",
  "Search Engine Optimization",
  "Ads Management",
  "Social Media Management",
  "Graphic Design",
  "Logo Design",
  "Content Writing",
  "Digital Marketing",
  "Web Hosting",
  "Video Design",
  "Thumbnail Design",
  "Business Card Design",
  "Custom Business Email Address Set Up",
  "Google Analytics & Search Console Set Up",
  "Google My Business Listing Setup & Management",
  "Customised Website Form Design",
  "Whatsapp Setup & Management",
  "Additional Web Pages",
  "Need help fixing website issues?",
];

const Services = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".service-row").forEach((row) => {
        gsap.from(row, {
          x: 60,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0f0f0f] text-white py-24 md:py-32 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20">

        
        <div className="md:sticky md:top-32 self-start h-fit">
          <h2 className="
            text-4xl md:text-5xl font-bold leading-tight
            bg-gradient-to-r from-white via-purple-500 to-purple-700
            bg-clip-text text-transparent">
            Services
          </h2>

          <p className="mt-4 md:mt-6 text-gray-400 max-w-sm">
            A focused set of design and development services built to
            create modern, scalable and high-performing digital experiences.
          </p>
        </div>

       
        <div className="space-y-4 md:space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                service-row
                flex items-center justify-between
                rounded-xl px-5 md:px-6 py-4 md:py-5
                bg-gradient-to-r from-[#1a1a1a] to-[#111]
                border border-white/10
                shadow-[0_12px_24px_rgba(0,0,0,0.6)]
              "
            >
              <span className="text-xs md:text-sm text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-sm md:text-base font-medium text-right">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
