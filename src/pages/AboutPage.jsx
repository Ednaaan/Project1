import React from "react";
import { MessageCircle, Star, CheckCircle } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AboutPage = () => {
  const realityRef = useRef(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    // Paragraph animation
    gsap.from(".reveal-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: realityRef.current,
        start: "top 80%",
      },
    });

    // Button animation (slightly delayed)
    gsap.from(".reveal-btn", {
      y: 20,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: realityRef.current,
        start: "top 75%",
      },
    });

  }, realityRef);

  return () => ctx.revert();
}, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      
      <section className="pt-36 pb-28 px-6 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-7xl mx-auto text-center reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Website Design Land
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-gray-300 mb-6">
            A Digital Marketing Company Built Around Real Business Growth
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            Build your own brand value with powerful websites and AI-driven
            digital marketing systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <button className="px-8 py-4 rounded-full bg-white text-black font-bold">
              Book Free Strategy Call Today
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20">
              See Our Portfolio
            </button>
          </div>

          
          <div className="flex flex-wrap justify-center gap-10 text-sm text-gray-400 uppercase tracking-widest slider">
            <span>10+ Years Experience</span>
            <span>95% Client Retention</span>
            <span className="flex items-center gap-1">
              <Star size={14} fill="white" /> 4.9/5 Google Rating
            </span>
          </div>
        </div>
      </section>

      
            <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-gray-400 text-lg space-y-8" ref={realityRef}>
          
          <p className="reveal-text">
            Running a business today means competing for attention in a crowded
            digital world. Customers search online before they call, compare
            before they enquire, and judge trust within seconds of landing on a
            website.
          </p>

          <p className="reveal-text">
            We are a digital marketing company built to help businesses grow
            online with clarity, confidence, and consistency. Our focus is not
            on trends or buzzwords — our focus is on generating enquiries,
            building trust, and supporting long-term growth.
          </p>

          <p className="reveal-text">
            From day one, our mission has been simple — provide digital marketing
            services that actually help businesses move forward.
          </p>

          <button className="reveal-btn mt-6 px-8 py-4 rounded-full bg-purple-600 font-bold text-white">
            Consult Today
          </button>

        </div>
      </section>

      
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center slider">
          <p className="text-gray-400">★★★★★ Reviews sliding here</p>
        </div>
      </section>

      
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h3 className="text-4xl font-bold text-purple-400 mb-6">
              How Website Design Land Began
            </h3>
            <p className="text-gray-400 mb-6">
              Many businesses were investing time and money into marketing
              without understanding the return. Traffic was increasing, but
              enquiries were not.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>Why isn’t my website converting?</li>
              <li>Why am I getting clicks but no calls?</li>
              <li>Why does digital marketing feel so complicated?</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl reveal">
            <p className="italic text-gray-300">
              Website Design Land was built to answer those questions with
              honesty, structure, and data-driven thinking.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 border-t border-white/10 slider">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          Client logos sliding here
        </div>
      </section>

      
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto reveal">
          <h4 className="text-3xl font-bold mb-6">
            Our Belief: Digital Marketing Should Be Clear and Measurable
          </h4>
          <p className="text-gray-400 mb-6">
            We believe business owners should understand what is happening, why
            it matters, and how it supports growth. We focus on outcomes that
            matter — not vanity metrics.
          </p>

          <button className="px-8 py-4 rounded-full bg-purple-600 font-bold">
            Book Free Strategy Call Today
          </button>
        </div>
      </section>

      
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 stagger">
          <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
            <h5 className="text-purple-400 uppercase mb-4 font-bold">
              Our Mission
            </h5>
            <p className="text-gray-300">
              To help every small local business get online, be found by the
              right customers, and grow with confidence.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-2xl">
            <h5 className="text-purple-400 uppercase mb-4 font-bold">
              Our Vision
            </h5>
            <p className="text-gray-300">
              A digital world where small businesses have equal opportunity to
              succeed online.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14 reveal">
          <h6 className="text-4xl font-bold">Why Choose Website Design Land?</h6>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto stagger">
          {[
            "10+ Years Experience",
            "95% Client Retention",
            "AI Powered Digital Marketing",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 p-6 rounded-xl flex gap-4 items-center"
            >
              <CheckCircle className="text-purple-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Have a website, but not generating enquiries?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          From high-converting websites to Google & Meta ads, we help you attract
          serious buyers and scale with confidence.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-purple-600 rounded-full font-bold">
            Book Free Strategy Call Today
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full flex items-center gap-2">
            <MessageCircle size={18} /> Chat Now
          </button>
        </div>
      </section>

      
      <section className="py-32 px-6 text-center reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Build Something That Lasts
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          When you’re ready to take the next step, we’re ready to guide you
          forward.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-5 bg-purple-600 rounded-full font-bold">
            Book Free Strategy Call Today
          </button>
          <button className="px-10 py-5 border border-white/20 rounded-full flex items-center gap-2">
            <MessageCircle size={20} /> Chat Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
