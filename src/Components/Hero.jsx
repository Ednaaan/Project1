import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import backgroundImage from "../assets/backgroundImage2.png";
import Contact from "./Contact";

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
      className="min-h-screen bg-black pt-24 flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT : HERO CONTENT */}
          <div>
            <h1
              className={`font-extrabold leading-[0.9] transition-colors duration-500 ${
                scrolled ? "text-gray-400" : "text-white"
              }`}
            >
              <span className="stack-line block text-6xl md:text-8xl">
                DESIGNING
              </span>
              <span className="stack-line block text-6xl md:text-8xl">
                DIGITAL
              </span>
              <span className="stack-line block text-6xl md:text-8xl">
                EXPERIENCES
              </span>
            </h1>

            <p className="mt-10 text-gray-400 max-w-xl">
              A design-led studio crafting clean, modern and user-focused
              web interfaces.
            </p>

            <div onClick={()=>{
              document.getElementById("Form")?.scrollIntoView({behavior: "smooth"})
            }} className="mt-10">
              <button className='group relative px-12 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden'>
            <span className='relative z-10 text-white font-bold transition-colors group-hover:text-black'>Get In Touch</span>
            <div className='absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300'></div>
          </button>
            </div>
          </div>
{/* RIGHT : CONTACT FORM */}
<div id="Form" className="flex justify-center lg:justify-end">
  <div className="w-full max-w-md">
    <form className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/20 space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Lets Get Started</h1>
      
      <div className="flex flex-col gap-4 text-white">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 outline-none focus:border-white/50 transition-all placeholder:text-white/30"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 outline-none focus:border-white/50 transition-all placeholder:text-white/30"
            placeholder="email@example.com"
          />
        </div>

        {/* Request For Services (Dropdown) */}
        <div className="flex flex-col gap-2">
          <label htmlFor="requestForServices" className="text-sm font-medium">Request For Services</label>
          <select 
            id="requestForServices" 
            name="requestForServices" 
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 outline-none focus:border-white/50 transition-all text-white appearance-none cursor-pointer"
          >
            <option className="bg-zinc-900" value="" disabled selected>Select a service</option>
            <option className="bg-zinc-900" value="website-design">Website Design</option>
            <option className="bg-zinc-900" value="web-app-dev">Web & App Development</option>
            <option className="bg-zinc-900" value="ecommerce-dev">E-commerce Development</option>
            <option className="bg-zinc-900" value="digital-marketing">Digital Marketing</option>
            <option className="bg-zinc-900" value="ux-ui-design">UX/UI Design</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-sm font-medium">Budget</label>
          <input 
            type="text" 
            id="budget" 
            name="budget" 
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 outline-none focus:border-white/50 transition-all placeholder:text-white/30"
            placeholder="Share Your Budget"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors mt-2"
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
