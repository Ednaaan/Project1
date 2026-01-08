import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // LEFT TEXT ANIMATION
      gsap.from(".about-item", {
        y: 30, // Reduced from 40 for subtle feel on mobile
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // Slightly later trigger for better visibility on small screens
          toggleActions: "play none none reverse",
        },
      });

      // RIGHT LINE ANIMATION - Only visible on MD+ screens
      if (window.innerWidth >= 768) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "bottom",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="about-item uppercase text-sm md:text-lg tracking-[0.2em] text-[#8259DA] mb-4">
            ABOUT
          </p>

          <h2 className="about-item uppercase text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Welcome to Websitedesignland  <br className="hidden md:block" /> 
            <span className="text-gray-300">Your Trusted Partner in Digital Transformation.</span>
          </h2>

          <p className="about-item mt-6 text-gray-400 max-w-md mx-auto md:mx-0 text-base md:text-lg">
            Innovative Solutions for Website Development Services, SEO, and Digital Marketing services.
          </p>
          
          <div className="about-item mt-10">
            <button className="
                px-8 py-4
                uppercase
                text-sm md:text-lg font-medium
                bg-white text-black
                rounded-full
                transition-all duration-300
                hover:bg-transparent hover:text-white
                border border-transparent hover:border-white
                active:scale-95
            ">
              Read More
            </button>
          </div>
        </div>

        {/* RIGHT LINE - Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex justify-center">
          <div
            ref={lineRef}
            className="w-[1px] h-64 bg-gradient-to-t from-white/40 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default About;