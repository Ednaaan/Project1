import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0b0b] text-white overflow-hidden">
      
      {/* GLASS REFLECTION LAYER */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

      {/* SOFT GLOW */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid gap-14 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Website Design Land
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            We craft clean, modern and high-performing digital
            experiences for brands that want to stand out.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "About", "Services", "Our Work", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white transition-colors duration-300"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>info@websitedesignland.com</li>
            <li>+91 9XXXXXXXXX</li>
            <li>India</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/10 py-6 text-center text-gray-500 text-sm backdrop-blur-md">
        © {new Date().getFullYear()} Website Design Land. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
