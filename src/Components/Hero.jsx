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
      className="min-h-screen bg-black pt-28 md:pt-32 pb-20 flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Adjusted Grid: Stacks on mobile (default), 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT : HERO CONTENT */}
          <div className="text-left">
            <h1
              className={`font-extrabold leading-[0.95] md:leading-[0.9] transition-colors duration-500 ${
                scrolled ? "text-gray-400" : "text-white"
              }`}
            >
              {/* text-4xl on mobile prevents the text from breaking layout */}
              <span className="stack-line block text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                DESIGNING
              </span>
              <span className="stack-line block text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                DIGITAL
              </span>
              <span className="stack-line block text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                EXPERIENCES
              </span>
            </h1>

            <p className="mt-6 md:mt-10 text-gray-400 text-sm md:text-lg max-w-xl">
              A design-led studio crafting clean, modern and user-focused
              web interfaces.
            </p>

            <div 
              onClick={() => document.getElementById("Form")?.scrollIntoView({ behavior: "smooth" })} 
              className="mt-8 md:mt-10"
            >
              <button className='group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95'>
                <span className='relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black'>
                  Get In Touch
                </span>
                <div className='absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300'></div>
              </button>
            </div>
          </div>

          {/* RIGHT : CONTACT FORM */}
          <div id="Form" className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-md">
              <form className="bg-black/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 space-y-5 shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Lets Get Started</h2>
                
                <div className="flex flex-col gap-4 text-white">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-gray-400">Full Name</label>
                    <input 
                      type="text" id="name" name="name" 
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 transition-all placeholder:text-white/20 text-sm"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-gray-400">Email Address</label>
                    <input 
                      type="email" id="email" name="email" 
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 transition-all placeholder:text-white/20 text-sm"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Request For Services */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="requestForServices" className="text-xs uppercase tracking-wider font-semibold text-gray-400">Service</label>
                    <select 
                      id="requestForServices" name="requestForServices" 
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 transition-all text-white appearance-none cursor-pointer text-sm"
                    >
                      <option className="bg-slate-900" value="" disabled selected>Select a service</option>
                      <option className="bg-slate-900" value="website-design">Website Design</option>
                      <option className="bg-slate-900" value="web-app-dev">Web & App Development</option>
                      <option className="bg-slate-900" value="ecommerce-dev">E-commerce Development</option>
                      <option className="bg-slate-900" value="digital-marketing">Digital Marketing</option>
                      <option className="bg-zinc-900" value="ux-ui-design">UX/UI Design</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget" className="text-xs uppercase tracking-wider font-semibold text-gray-400">Budget</label>
                    <input 
                      type="text" id="budget" name="budget" 
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 transition-all placeholder:text-white/20 text-sm"
                      placeholder="Share Your Budget"
                    />
                  </div>

                  {/* Submit Button */}
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