import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation
      gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      clearProps: "opacity,transform" 
    });


      // Scroll glass effect
      gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=100",
          scrub: true,
        },
      })
      .to(navRef.current, {
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      })
      .to([logoRef.current, linksRef.current], {
        color: "#ffffff",
      }, 0);
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useLayoutEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      height: menuOpen ? "auto" : 0,
      opacity: menuOpen ? 1 : 0,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 py-6"
      style={{ backgroundColor: "#ffffff", color: "#000000" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div ref={logoRef} className="text-2xl font-bold tracking-tight">
          Website Design Land
        </div>

        {/* DESKTOP LINKS */}
        <ul
          ref={linksRef}
          className="hidden md:flex gap-8 font-semibold text-sm"
        >
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/work">OUR WORK</Link>
          <Link to="/contact">CONTACT</Link>
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden px-6"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col gap-6 py-6 font-semibold text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          <Link to="/work" onClick={() => setMenuOpen(false)}>OUR WORK</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
