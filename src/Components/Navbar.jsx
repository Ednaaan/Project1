import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    { name: "SEO", path: "/seo" },
    { name: "Website Design", path: "/website-design" },
    { name: "Graphic Design", path: "/graphic-design" },
    { name: "Content Writing", path: "/content-writing" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Paid Ad Management", path: "/paid-ads" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entry animation
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        clearProps: "opacity,transform",
      });

      // 2. Scroll glass effect
      gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=100",
          scrub: true,
        },
      })
      .to(navRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        paddingTop: "0.6rem",
        paddingBottom: "0.6rem",
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
      className="fixed top-0 w-full z-50 py-4 transition-colors duration-300"
      style={{ backgroundColor: "#ffffff", color: "#000000" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center cursor-pointer w-24 sm:w-32 md:w-40 lg:w-48">
          <img ref={logoRef} src={logo} alt="Logo" className="w-full h-auto max-h-15 object-contain" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul ref={linksRef} className="hidden md:flex gap-8 font-semibold text-sm items-center">
          <li><Link to="/" className="hover:opacity-70 transition-opacity">HOME</Link></li>
          <li><Link to="/about" className="hover:opacity-70 transition-opacity">ABOUT</Link></li>
          
          {/* SERVICES DROPDOWN */}
          <li 
            className="relative group py-2"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Clickable Header Link */}
            <Link 
              to="/services" 
              className="flex items-center gap-1 uppercase font-semibold hover:opacity-70 transition-opacity"
            >
              SERVICES 
              <span className={`text-[10px] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </Link>
            
            {/* DROPDOWN MENU */}
            <div className={`absolute left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300 origin-top-left ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="py-2">
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.path}
                    className="block px-6 py-3 text-white hover:bg-[#8b75f2] transition-colors text-xs tracking-widest font-medium"
                  >
                    {service.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li><Link to="/work" className="hover:opacity-70 transition-opacity">OUR WORK</Link></li>
          <li><Link to="/contact" className="hover:opacity-70 transition-opacity">CONTACT</Link></li>
        </ul>

        {/* HAMBURGER */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div 
        ref={mobileMenuRef} 
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl px-6 border-b border-white/10" 
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col gap-4 py-8 font-semibold text-sm text-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          
          <div className="flex flex-col gap-2">
             <div className="flex justify-between items-center w-full">
                <Link to="/services" onClick={() => setMenuOpen(false)} className="uppercase">SERVICES</Link>
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-xl p-2">
                  {dropdownOpen ? "−" : "+"}
                </button>
             </div>
             {dropdownOpen && (
               <div className="flex flex-col gap-4 pl-4 border-l border-white/20 mt-2 mb-4">
                  {services.map((service, index) => (
                    <Link 
                      key={index} 
                      to={service.path} 
                      onClick={() => {setMenuOpen(false); setDropdownOpen(false);}}
                      className="text-gray-400 text-xs tracking-widest uppercase hover:text-white"
                    >
                      {service.name}
                    </Link>
                  ))}
               </div>
             )}
          </div>

          <Link to="/work" onClick={() => setMenuOpen(false)}>OUR WORK</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;