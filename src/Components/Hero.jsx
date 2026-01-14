import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser"; // Added this
import backgroundImage from "../assets/backgroundImage2.png";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const form = useRef(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated Send Logic
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3z8fsac",   
      "template_fbnj7jd", 
      form.current,
      "3Eo4EX-smLJtQxpbx"   
    )
    .then(() => {
        alert("Message sent!");
        e.target.reset();
    })
    .catch((error) => alert("Error: " + error.text));
  };

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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          
          
          <div className="text-left md:text-center lg:text-left">
            <h1 className={`font-extrabold leading-[0.95] md:leading-[0.9] transition-colors duration-500 ${scrolled ? "text-gray-400" : "text-white"}`}>
              <span className="stack-line block text-4xl sm:text-4xl md:text-5xl lg:text-6xl uppercase">Digital Marketing</span>
              <span className="stack-line block text-4xl sm:text-3xl md:text-4xl lg:text-5xl uppercase">Services That Turn</span>
              <span className="stack-line block text-4xl sm:text-3xl md:text-4xl lg:text-5xl uppercase">Clicks Into Real Enquiries</span>
            </h1>
            <h2 className="bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent mt-2 text-2xl">Stop Guessing. Start Growing.</h2>
            <p className="mt-6 md:mt-8 text-gray-400 text-sm md:text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
              Websites, ads, and growth AI powered systems that help businesses turn traffic into paying customers.
            </p>
            <div onClick={() => document.getElementById("Form")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 md:mt-10 md:flex md:justify-center lg:justify-start">
              <button className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">Get In Touch</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>



          
          <div id="Form" className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-md md:max-w-lg">
             
              <form ref={form} onSubmit={sendEmail} className="bg-black/60 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-white/10 space-y-5 shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Lets Get Started</h2>
                <div className="flex flex-col gap-4 text-white">
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Full Name</label>
                    <input name="user_name" type="text" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 text-sm" placeholder="Your Name" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Email Address</label>
                    <input name="user_email" type="email" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 text-sm" placeholder="email@example.com" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Service</label>
                    <select name="service" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 text-white appearance-none cursor-pointer text-sm">
                      <option className="bg-zinc-900" value="">Select a service</option>
                      <option className="bg-zinc-900" value="Website Design">Website Design</option>
                      <option className="bg-zinc-900" value="Web & App Development">Web & App Development</option>
                      <option className="bg-zinc-900" value="E-commerce Development">E-commerce Development</option>
                      <option className="bg-zinc-900" value="Digital Marketing">Digital Marketing</option>
                      <option className="bg-zinc-900" value="UX/UI Design">UX/UI Design</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Budget</label>
                    <input name="budget" type="text" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 text-sm" placeholder="Share Your Budget" />
                  </div>

                   <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Message</label>
                   <textarea 
                      name="message" 
                      required 
                      rows=""
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-white/40 text-sm resize-none" 
                      placeholder="Tell us more about your project..." 
                    />
                  </div>

                  <button  type="submit" className="bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all mt-4 active:scale-95 text-sm uppercase tracking-widest">
                    SEND REQUEST
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
        <div className="w-full bg-purple-600/10 border-b border-white/5 py-3 overflow-hidden mt-10 md:mt-16 lg:mt-20">
    <div className="animate-marquee flex gap-12 items-center">
    
    
        <div className="flex gap-12 items-center px-4 shrink-0">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent mt-2 text-2xl">10+ years of Experience</span>
          <span className="text-white/20">|</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent mt-2 text-2xl">95% Client Retention Rate</span>
          <span className="text-white/20">|</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent mt-2 text-2xl">4.9/5★ Rated on Google</span>
        </div>

        
        <div className="flex gap-12 items-center px-4 shrink-0">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent mt-2 text-2xl">10+ years of Experience</span>
          <span className="text-white/20">|</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent mt-2 text-2xl">95% Client Retention Rate</span>
          <span className="text-white/20">|</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-white via-white to-purple-500 bg-clip-text text-transparent mt-2 text-2xl">4.9/5★ Rated on Google</span>
        </div>

      </div>
    </div>
      </div>
    </section>
  );
};

export default Hero;