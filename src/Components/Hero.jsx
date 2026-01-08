import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import backgroundImage from "../assets/backgroundImage2.png";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stack-line", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-black pt-24 md:pt-28 lg:pt-32 pb-20 flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* LEFT : HERO CONTENT */}
          <div className="text-left md:text-center lg:text-left">
            <h1
              className={`font-extrabold leading-[0.95] md:leading-[0.9] transition-colors duration-500 ${
                scrolled ? "text-gray-400" : "text-white"
              }`}
            >
              <span className="stack-line block text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                DESIGNING
              </span>
              <span className="stack-line block text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                DIGITAL
              </span>
              <span className="stack-line block text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                EXPERIENCES
              </span>
            </h1>

            <p className="mt-6 md:mt-8 text-gray-400 text-sm md:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
              A design-led studio crafting clean, modern and user-focused
              web interfaces.
            </p>

            <div
              onClick={() =>
                document
                  .getElementById("Form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 md:mt-10 md:flex md:justify-center lg:justify-start"
            >
              <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* RIGHT : CONTACT FORM */}
          <div
            id="Form"
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="w-full max-w-md md:max-w-lg">
              <form className="bg-black/60 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-white/10 space-y-5 shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  Lets Get Started
                </h2>

                <div className="flex flex-col gap-4 text-white">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 transition-all placeholder:text-white/20 text-sm"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 transition-all placeholder:text-white/20 text-sm"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                      Service
                    </label>
                    <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 transition-all text-white appearance-none cursor-pointer text-sm">
                      <option className="bg-zinc-900" value="">
                        Select a service
                      </option>
                      <option className="bg-zinc-900">Website Design</option>
                      <option className="bg-zinc-900">Web & App Development</option>
                      <option className="bg-zinc-900">E-commerce Development</option>
                      <option className="bg-zinc-900">Digital Marketing</option>
                      <option className="bg-zinc-900">UX/UI Design</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                      Budget
                    </label>
                    <input
                      type="text"
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 transition-all placeholder:text-white/20 text-sm"
                      placeholder="Share Your Budget"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all mt-4 active:scale-95 text-sm uppercase tracking-widest"
                  >
                    SEND REQUEST
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
