import React, { useLayoutEffect, useRef, memo, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Monitor, Search, Zap, Share2, Facebook, Instagram, Palette, Fingerprint, PenTool, Server, Video, MousePointer2, CreditCard, Mail, BarChart3, MapPin, ListChecks, MessageSquare, PlusSquare, Wrench, RefreshCw } from 'lucide-react';
import ContactModal from '../Components/ContactModal';

const SERVICES_DATA = [ 
  { title: "Website Design", desc: "Built to look professional, load fast, and turn visitors into enquiries.", icon: <Monitor />, cat: "Web" },
  { title: "SEO", desc: "Improve your visibility on Google so customers can find you organically.", icon: <Search />, cat: "Growth" },
  { title: "Google Ads", desc: "Get in front of customers actively searching with high-converting PPC.", icon: <Zap />, cat: "Ads" },
  { title: "Social Media", desc: "Build a consistent and professional presence across platforms.", icon: <Share2 />, cat: "Marketing" },
  { title: "Facebook Ads", desc: "Reach the right audience and generate leads with targeted ads.", icon: <Facebook />, cat: "Ads" },
  { title: "Meta Ads", desc: "Data-driven ads across Facebook and Instagram for leads.", icon: <Instagram />, cat: "Ads" },
  { title: "Graphic Design", desc: "Professional designs that strengthen your brand and stand out.", icon: <Palette />, cat: "Creative" },
  { title: "Logo Design", desc: "Create a memorable logo that reflects your business identity.", icon: <Fingerprint />, cat: "Creative" },
  { title: "Content Writing", desc: "Clear, engaging content that builds trust and supports goals.", icon: <PenTool />, cat: "Creative" },
  { title: "Web Hosting", desc: "Secure and reliable hosting to keep your site fast and accessible.", icon: <Server />, cat: "Tech" },
  { title: "Video Design", desc: "Engaging videos that communicate your message effectively.", icon: <Video />, cat: "Creative" },
  { title: "Thumbnail Design", desc: "Eye-catching thumbnails designed to improve clicks.", icon: <MousePointer2 />, cat: "Creative" },
  { title: "Business Cards", desc: "Professionally designed cards that leave a strong impression.", icon: <CreditCard />, cat: "Creative" },
  { title: "Business Email", desc: "Professional email setup that builds credibility and trust.", icon: <Mail />, cat: "Tech" },
  { title: "Analytics & Console", desc: "Track performance and understand how customers find you.", icon: <BarChart3 />, cat: "Tech" },
  { title: "Google My Business", desc: "Improve local visibility and attract nearby customers.", icon: <MapPin />, cat: "Growth" },
  { title: "Custom Web Forms", desc: "Capture enquiries smoothly and reduce drop-offs.", icon: <ListChecks />, cat: "Web" },
  { title: "WhatsApp Setup", desc: "Easy direct contact for customers via WhatsApp management.", icon: <MessageSquare />, cat: "Tech" },
  { title: "Additional Pages", desc: "Add new pages to support growth or marketing campaigns.", icon: <PlusSquare />, cat: "Web" },
  { title: "Website Fixes", desc: "Resolve technical problems and performance issues quickly.", icon: <Wrench />, cat: "Tech" },
  { title: "Website Redesign", desc: "Refresh your site with improved structure and clarity.", icon: <RefreshCw />, cat: "Web" }, 
];

// Pass the onClick function to the ServiceCard
const ServiceCard = memo(({ service, onClick }) => (
    <div 
      onClick={() => onClick(service.title)}
      className="service-card group cursor-pointer relative p-5 rounded-xl bg-[#0a0a0a] border border-white/5 flex flex-col justify-between transition-colors duration-300 hover:bg-[#111] hover:border-purple-500/30"
    >
        <div>
            <div className="flex justify-between items-start mb-4">
                <div className="text-purple-500">
                    {React.cloneElement(service.icon, { size: 22 })}
                </div>
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold bg-white/5 px-2 py-0.5 rounded">
                    {service.cat}
                </span>
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                {service.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400">
                {service.desc}
            </p>
        </div>
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">get in touch</span>
            <ArrowRight size={14} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
        </div>
    </div>
));

const ServicesPage = () => {
    const scope = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const openForm = (serviceTitle = "") => {
        setSelectedService(serviceTitle);
        setIsModalOpen(true);
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".service-card", { opacity: 0, y: 30, willChange: "transform, opacity" });
            gsap.to(".service-card", {
                opacity: 1, y: 0, duration: 0.5,
                stagger: { amount: 1, grid: "auto" }, 
                ease: "sine.out",
                scrollTrigger: { trigger: ".grid-container", start: "top 85%", once: true }
            });
        }, scope);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={scope} className="bg-[#050505] text-white min-h-screen py-20 overflow-hidden">
            
            {/* The Popup Form */}
            <ContactModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              selectedService={selectedService}
            />

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mt-12 mb-12 border-l-2 border-purple-500 pl-6 flex justify-between items-end">
                    <div>
                      <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                          Our <span className="bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">Expertise.</span>
                      </h1>
                    </div>
                    
                    <button onClick={() => openForm()} className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 text-white font-bold text-sm md:text-base transition-colors group-hover:text-black">Consult Today</span>
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
                </div>

                <div className="grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {SERVICES_DATA.map((service, i) => (
                        <ServiceCard 
                          key={i} 
                          service={service} 
                          onClick={openForm} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;