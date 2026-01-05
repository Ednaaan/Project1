import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial Entry Animation
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      });

      // 2. Scroll Animation: Solid White -> Transparent Blurred
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=100", // Completes the transition after 100px of scrolling
          scrub: true,
        },
      });

      tl.to(navRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Nearly transparent
        backdropFilter: "blur(10px)",               // The glass effect
        WebkitBackdropFilter: "blur(10px)",         // Safari support
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        paddingTop: "0.5rem",                       // Slight height shrink
        paddingBottom: "0.5rem",
        duration: 0.3,
      })
      .to([logoRef.current, linksRef.current], {
        color: "#ffffff", // Keeps text white (change to #000 if needed)
        duration: 0.3,
      }, 0); // Start at the same time as the background change

    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav 
      ref={navRef} 
      className="fixed top-0 w-full z-50 transition-none py-6"
      style={{ 
        backgroundColor: "#ffffff", 
        color: "#000000" // Initial state: White background, black text
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div ref={logoRef} className="text-2xl font-bold tracking-tight">
          Website Design Land
        </div>

        <ul ref={linksRef} className="flex gap-8 font-semibold text-sm">
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/services'>SERVICES</Link>
          <Link to='/work'>OUR WORK</Link>
          <Link to='/contact'>CONTACT</Link>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;