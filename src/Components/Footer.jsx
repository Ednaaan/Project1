import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Install react-icons

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0b0b] text-white overflow-hidden">
      
      {/* GLASS REFLECTION LAYER */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

      {/* BRAND PURPLE GLOW - Matches your logo color */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6345ed]/10 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid gap-14 md:grid-cols-4">

        {/* BRAND */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4 tracking-wide uppercase">
            Website Design Land
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We craft clean, modern and high-performing digital
            experiences for brands that want to stand out.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#8259DA]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "About", "Services", "Our Work", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#8259DA]">
            Contact
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>info@websitedesignland.com</li>
            <li>+91 9XXXXXXXXX</li>
            <li>India</li>
          </ul>
        </div>

        {/* SOCIALS & CREDITS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#8259DA]">
            Connect
          </h3>
          <div className="flex gap-4 mb-6">
            <a href="your-linkedin-link" className="text-gray-400 hover:text-white text-xl transition-all">
              <FaLinkedin />
            </a>
            <a href="your-github-link" className="text-gray-400 hover:text-white text-xl transition-all">
              <FaGithub />
            </a>
            <a href="your-insta-link" className="text-gray-400 hover:text-white text-xl transition-all">
              <FaInstagram />
            </a>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
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