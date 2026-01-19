import React from "react";
import { Link } from "react-router-dom"; 
import { FaLinkedin, FaFacebook, FaGoogle, FaInstagram, FaStar, FaPen } from "react-icons/fa"; 

const Footer = () => {
  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#0b0b0b] text-white overflow-hidden">
      
      {/* GLASS REFLECTION LAYER */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

      {/* BRAND PURPLE GLOW */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6345ed]/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid gap-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {/* BRAND SECTION */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4 tracking-wide uppercase bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">
            WebsiteDesignLand
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
            We craft clean, modern and high-performing digital
            experiences for brands that want to stand out.
          </p>
          
          
          <div className="inline-flex flex-col w-fit">
           
            <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-2 rounded-t-lg border border-white/10 border-b-0 w-full">
              <div className="flex text-yellow-500 text-[10px]">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-[11px] font-bold text-white/80 tracking-tight whitespace-nowrap">
                5/5 on Google
              </span>
            </div>

           
            <a 
              href="https://g.page/r/CTlTdGE1fEVlEBM/review" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-black border border-white/10 px-4 py-2 rounded-b-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-purple-400 hover:text-black transition-all duration-300 group shadow-lg w-full"
            >
              <FaPen className="text-[9px] group-hover:rotate-12 transition-transform" />
              Write a Review
            </a>
          </div>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#8259DA]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#8259DA]">
            Contact
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white transition-colors">
              <a href="mailto:info@websitedesignland.com" className="flex items-center gap-2">
                info@websitedesignland.com
              </a>
            </li>
            <li className="hover:text-white transition-colors">
              <a href="tel:+919007186956" className="flex items-center gap-2">
                +91 9007186956
              </a>
            </li>
            <li className="cursor-default">
              Kolkata, West Bengal, India
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#8259DA]">
            Connect
          </h3>
          <div className="flex gap-4 mb-8">
            <a 
              href="https://in.linkedin.com/company/website-design-land" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://www.facebook.com/websitedesignland" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="https://share.google/3sPGoNlPFc7uGXEu2" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
            >
              <FaGoogle size={20} />
            </a>
            <a 
              href="https://www.instagram.com/websitedesignland" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest leading-loose">
            Developed by <br />
            <span className="text-white font-bold text-sm">Md Adnan Sohail</span>
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/10 py-8 text-center text-gray-500 text-xs md:text-sm backdrop-blur-md">
        <p>© {new Date().getFullYear()} Website Design Land. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;