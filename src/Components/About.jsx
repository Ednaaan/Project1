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
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // RIGHT LINE ANIMATION
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="about-item uppercase text-lg tracking-widest text-gray-400 mb-4">
            ABOUT
          </p>

          <h2 className="about-item uppercase text-4xl md:text-5xl font-bold leading-tight">
            Welcome to Websitedesignland – <br /> Your Trusted Partner in Digital Transformation.
          </h2>

          <p className="about-item mt-6 text-gray-400 max-w-md">
            Innovative Solutions for Website Development Services, SEO, and Digital Marketing services
          </p>
        </div>

        {/* RIGHT LINE */}
        <div className="flex justify-center">
          <div
            ref={lineRef}
            className="w-[2px] h-64 bg-white/30"
          />
        </div>

        <div >
            <button className="
                px-8 py-4
                uppercase
                text-lg font-medium
                bg-white text-black
                rounded-full
                transition-all duration-300
                hover:bg-black hover:text-white
                hover:border 2 hover:border-white
                hover:scale-105
            ">
                Read More
            </button>
            </div>

      </div>
    </section>
  );
};

export default About;
