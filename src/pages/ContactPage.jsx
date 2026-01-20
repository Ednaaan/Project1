import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"; 

const ContactPage = () => {
  const formRef = useRef();
  const containerRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_3z8fsac",
      "template_fbnj7jd",
      formRef.current,
      "3Eo4EX-smLJtQxpbx"
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => alert("Error: " + error.text));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-up", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto ">
        
        
        <div className="mb-16 animate-up">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 uppercase">
            Let’s Grow Your  <span className="bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent uppercase">Business Online.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
           Getting in touch is simple—at Website Design Land, we listen first and guide you with clear, honest digital marketing advice to support your business growth.

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: COMPANY DETAILS */}
          <div className="space-y-12 animate-up">
            
            {/* Address */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-purple-600/10 border border-purple-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-600/20 transition-colors">
                <MapPin className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Address</h3>
                <p className="text-xl font-medium">Kolkata, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-purple-600/10 border border-purple-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-600/20 transition-colors">
                <Phone className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Speak Directly to Our Experts</h3>
                <p className="text-xl font-medium hover:text-purple-400 transition-colors">
                  <a href="tel:9007186956">+91 9007186956</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-purple-600/10 border border-purple-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-600/20 transition-colors">
                <Mail className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Email Us</h3>
                <p className="text-xl font-medium hover:text-purple-400 transition-colors">
                  <a href="mailto:info@websitedesignland">info@websitedesignland</a>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-purple-600/10 border border-purple-500/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-600/20 transition-colors">
                <Clock className="text-purple-500" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Business Hours</h3>
                <div className="text-gray-300 space-y-1 mt-2">
                  <p className="flex justify-between w-64"><span>Mon - Sat</span> <span className="text-white">24 Hour Open</span></p>
                  
                  <p className="flex justify-between w-64"><span>Sun</span> <span className="text-purple-500">Closed</span></p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="animate-up">
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Full Name</label>
                    <input name="user_name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 transition-all text-sm" placeholder="Your Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Email Address</label>
                    <input name="user_email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 transition-all text-sm" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Service</label>
                  <select name="service" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-white appearance-none cursor-pointer text-sm">
                    <option className="bg-zinc-900" value="">Select a service</option>
                    <option className="bg-zinc-900" value="Website Design">Website Design</option>
                    <option className="bg-zinc-900" value="Web & App Development">Web & App Development</option>
                    <option className="bg-zinc-900" value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-gray-500">Message</label>
                  <textarea name="message" required rows="2" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500/50 text-sm resize-none" placeholder="Tell us more about your project goals..." />
                </div>

                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20">
                  <Send size={18} />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;