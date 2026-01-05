import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import backgroundImage from "../assets/backgroundImage2.png";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stack-line", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-black pt-24 flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1
              className={`font-extrabold transition-colors duration-500 ${
                scrolled ? "text-gray-400" : "text-white"
              } leading-tight lg:leading-[0.9]`}
            >
              <span className="stack-line block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                DESIGNING
              </span>
              <span className="stack-line block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                DIGITAL
              </span>
              <span className="stack-line block text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                EXPERIENCES
              </span>
            </h1>

            <p className="mt-6 md:mt-10 text-gray-400 max-w-xl mx-auto lg:mx-0 text-sm md:text-base">
              A design-led studio crafting clean, modern and user-focused
              web interfaces.
            </p>

            <div
              onClick={() =>
                document.getElementById("Form")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 md:mt-10 flex justify-center lg:justify-start"
            >
              <button className="group relative px-8 md:px-12 py-3 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden">
                <span className="relative z-10 text-white font-semibold group-hover:text-black transition-colors">
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div id="Form" className="flex justify-center lg:justify-end">
            <form className="w-full max-w-md bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/20 space-y-5">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Let’s Get Started
              </h2>

              {[
                { label: "Full Name", type: "text", placeholder: "Your Name" },
                { label: "Email Address", type: "email", placeholder: "email@example.com" },
                { label: "Budget", type: "text", placeholder: "Share Your Budget" },
              ].map((field, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <label className="text-sm text-white">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white outline-none focus:border-white/50"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1">
                <label className="text-sm text-white">Request For Services</label>
                <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
                  <option className="bg-zinc-900">Select a service</option>
                  <option className="bg-zinc-900">Website Design</option>
                  <option className="bg-zinc-900">Web Development</option>
                  <option className="bg-zinc-900">UI/UX Design</option>
                </select>
              </div>

              <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition">
                SEND REQUEST
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
