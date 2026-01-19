import React from 'react';
import { Mail, MessageCircle, Phone, Send,} from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingDock = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* Gmail */}
        <a 
          href="mailto:info@websitedesignland.com" 
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
          title="Email Us"
        >
          <Mail size={22} />
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/+919007186956" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
          title="WhatsApp"
        >
          <MessageCircle size={22} />
        </a>

        {/* Call */}
        <a 
          href="tel:+yourphonenumber" 
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
          title="Call Us"
        >
          <Phone size={22} />
        </a>

        {/* Message (Link to Contact Page) */}
        <Link 
          to="/contact" 
          className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-all active:scale-95 shadow-lg"
        >
          <Send size={16} />
          Contact Us
        </Link>
        
      </div>
    </div>
  );
};

export default FloatingDock;