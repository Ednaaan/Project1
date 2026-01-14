import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

const ContactModal = ({ isOpen, onClose, selectedService }) => {
  const modalRef = useRef();
  const formRef = useRef();

  useLayoutEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_3z8fsac",
      "template_fbnj7jd",
      formRef.current,
      "3Eo4EX-smLJtQxpbx"
    )
    .then(() => {
      alert("Message sent!");
      e.target.reset();
      onClose();
    })
    .catch((error) => alert("Error: " + error.text));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <form ref={formRef} onSubmit={sendEmail} className="p-8 md:p-10 space-y-5">
          <h2 className="text-2xl font-bold text-white tracking-tight">Let's Get Started</h2>
          
          <div className="flex flex-col gap-4 text-white">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Full Name</label>
              <input name="user_name" type="text" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-purple-500/50 text-sm" placeholder="Your Name" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Email Address</label>
              <input name="user_email" type="email" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-purple-500/50 text-sm" placeholder="email@example.com" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Service</label>
              <select 
                name="service" 
                required 
                defaultValue={selectedService || ""}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-purple-500/50 text-white appearance-none cursor-pointer text-sm"
              >
                <option className="bg-zinc-900" value="">Select a service</option>
                <option className="bg-zinc-900" value="Website Design">Website Design</option>
                <option className="bg-zinc-900" value="SEO">SEO</option>
                <option className="bg-zinc-900" value="Google Ads">Google Ads</option>
                <option className="bg-zinc-900" value="Digital Marketing">Digital Marketing</option>
                <option className="bg-zinc-900" value="Graphic Design">Graphic Design</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Budget</label>
              <input name="budget" type="text" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-purple-500/50 text-sm" placeholder="Share Your Budget" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-gray-400">Message</label>
              <textarea name="message" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-purple-500/50 text-sm resize-none h-24" placeholder="Tell us more about your project..." />
            </div>

            <button type="submit" className="bg-white text-black font-bold py-3.5 rounded-xl hover:bg-purple-500 hover:text-white transition-all mt-4 active:scale-95 text-sm uppercase tracking-widest">
              SEND REQUEST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;