import React from "react";
import { 
  FiTruck, FiHome, FiDroplet, FiBox, FiWind, FiZap, FiCheckCircle, 
  FiChevronsUp, FiArrowUpRight, FiSquare, FiEdit3, FiGrid, FiScissors, 
  FiSun, FiMaximize, FiStar, FiShieldOff, FiLock, FiMinimize2, 
  FiPackage, FiNavigation, FiMapPin, FiCircle, FiSettings, FiPlusSquare, 
  FiHeart, FiTrendingUp, FiUsers, FiCpu, FiCode, FiShield, FiKey, 
  FiBookOpen, FiCoffee, FiShoppingBag, FiUmbrella, FiMap, FiCalendar, FiTarget 
} from "react-icons/fi";

const IndustryWeServe = () => {
  const industries = [
    { name: "House Removals", icon: <FiTruck /> },
    { name: "Man and Van", icon: <FiTruck /> },
    { name: "Office Removals", icon: <FiPackage /> },
    { name: "Builders", icon: <FiCheckCircle /> },
    { name: "Home Renovation", icon: <FiHome /> },
    { name: "Bathroom Fitters", icon: <FiDroplet /> },
    { name: "Kitchen Fitters", icon: <FiBox /> },
    { name: "Plumbers", icon: <FiDroplet /> },
    { name: "Electricians", icon: <FiZap /> },
    { name: "Gas Engineers", icon: <FiWind /> },
    { name: "HVAC & Air Con", icon: <FiWind /> },
    { name: "Roofing Contractors", icon: <FiChevronsUp /> },
    { name: "Loft Conversions", icon: <FiArrowUpRight /> },
    { name: "Garage Conversions", icon: <FiSquare /> },
    { name: "Painters & Decorators", icon: <FiEdit3 /> },
    { name: "Flooring & Tiling", icon: <FiGrid /> },
    { name: "Carpenters & Joiners", icon: <FiScissors /> },
    { name: "Landscapers", icon: <FiSun /> },
    { name: "Fencing & Paving", icon: <FiMaximize /> },
    { name: "Cleaning Companies", icon: <FiStar /> },
    { name: "Pest Control", icon: <FiShieldOff /> },
    { name: "Locksmiths", icon: <FiLock /> },
    { name: "Glaziers", icon: <FiMinimize2 /> },
    { name: "Courier & Delivery", icon: <FiPackage /> },
    { name: "Airport Transfers", icon: <FiNavigation /> },
    { name: "Taxi & Private Hire", icon: <FiMapPin /> },
    { name: "Driving Schools", icon: <FiCircle /> },
    { name: "Auto Repair", icon: <FiSettings /> },
    { name: "Healthcare & Medical", icon: <FiPlusSquare /> },
    { name: "Beauty & Wellness", icon: <FiHeart /> },
    { name: "Business Consultants", icon: <FiTrendingUp /> },
    { name: "HR & Recruitment", icon: <FiUsers /> },
    { name: "IT Service Providers", icon: <FiCpu /> },
    { name: "Software & SaaS", icon: <FiCode /> },
    { name: "Cybersecurity Firms", icon: <FiShield /> },
    { name: "Real Estate", icon: <FiKey /> },
    { name: "Education & Training", icon: <FiBookOpen /> },
    { name: "Restaurants & Cafes", icon: <FiCoffee /> },
    { name: "Catering Companies", icon: <FiShoppingBag /> },
    { name: "Hotels & Resorts", icon: <FiUmbrella /> },
    { name: "Travel & Tours", icon: <FiMap /> },
    { name: "Event Management", icon: <FiCalendar /> },
    { name: "Wedding Planners", icon: <FiTarget /> },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
            Industries <span className="text-[#8259DA]">We Serve</span>
          </h2>
          <div className="h-1 w-20 bg-[#8259DA] mx-auto mt-4"></div>
        </div>

        {/* Responsive Grid with CSS Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ease-in-out hover:border-[#8259DA]/50 hover:bg-[#8259DA]/10 hover:-translate-y-1 cursor-default"
            >
              <div className="text-3xl mb-4 text-[#8259DA] transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-white text-[11px] md:text-xs font-bold text-center uppercase tracking-widest transition-colors duration-300 group-hover:text-white">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryWeServe;