import React, { useState } from "react";
import { 
  FiTruck, FiHome, FiDroplet, FiBox, FiWind, FiZap, FiCheckCircle, 
  FiChevronsUp, FiArrowUpRight, FiSquare, FiEdit3, FiGrid, FiScissors, 
  FiSun, FiMaximize, FiStar, FiShieldOff, FiLock, FiMinimize2, 
  FiPackage, FiNavigation, FiMapPin, FiCircle, FiSettings, FiPlusSquare, 
  FiHeart, FiTrendingUp, FiUsers, FiCpu, FiCode, FiShield, FiKey, 
  FiBookOpen, FiCoffee, FiShoppingBag, FiUmbrella, FiMap, FiCalendar, FiTarget,
  FiPlus, FiMinus, FiActivity, FiBriefcase, FiVideo, FiCamera, FiTool, FiSmile, FiBook, FiVolume2
} from "react-icons/fi";

const IndustryWeServe = () => {
  const [showAll, setShowAll] = useState(false);

  const industries = [
    
    { name: "Removal Service", icon: <FiTruck /> },
    { name: "Transport & Logistics", icon: <FiPackage /> },
    { name: "Healthcare & Medical", icon: <FiPlusSquare /> },
    { name: "Salons & Beauty", icon: <FiScissors /> },
    { name: "Accountants", icon: <FiTrendingUp /> },
    { name: "Real Estate & Property", icon: <FiKey /> },
    { name: "Schools & Colleges", icon: <FiBookOpen /> },
    { name: "Online Stores", icon: <FiShoppingBag /> },
    { name: "Food & Hospitality", icon: <FiCoffee /> },
    { name: "Travel & Events", icon: <FiMap /> },


    { name: "NGOs & Non-profits", icon: <FiHeart /> },
    { name: "Manufacturing & Commercial", icon: <FiSettings /> },
    { name: "Marketing Agencies", icon: <FiTrendingUp /> },
    { name: "Startups", icon: <FiCpu /> },
    { name: "Builders & Construction", icon: <FiCheckCircle /> },
    { name: "Car Rental Services", icon: <FiNavigation /> },
    { name: "Gyms & Fitness", icon: <FiActivity /> },
    { name: "Business Consultants", icon: <FiBriefcase /> },
    { name: "Online Course Creators", icon: <FiBook /> },
    { name: "Video Production", icon: <FiVideo /> },
    { name: "Sustainability Businesses", icon: <FiSun /> },
    { name: "Handyman", icon: <FiTool /> },
    { name: "Driving Schools", icon: <FiCircle /> },
    { name: "Yoga & Pilates", icon: <FiActivity /> },
    { name: "HR & Recruitment", icon: <FiUsers /> },
    { name: "Business Coaches", icon: <FiBriefcase /> },
    { name: "Photography Studios", icon: <FiCamera /> },
    { name: "Landscaper & Gardeners", icon: <FiSun /> },
    { name: "Vehicle Detailing", icon: <FiSmile /> },
    { name: "Personal Trainers", icon: <FiActivity /> },
    { name: "Software Companies", icon: <FiCode /> },
    { name: "Tutoring Services", icon: <FiBookOpen /> },
    { name: "Music Studios", icon: <FiVolume2 /> },
    { name: "Cleaning Companies", icon: <FiStar /> },
    { name: "Tattoo Studios", icon: <FiEdit3 /> },
    { name: "SaaS Businesses", icon: <FiCpu /> },
    { name: "Locksmith", icon: <FiLock /> },
    { name: "HVAC & Air Con", icon: <FiWind /> },
    { name: "Plumbers", icon: <FiDroplet /> },
    { name: "Electrician", icon: <FiZap /> },
    { name: "Roofing Services", icon: <FiChevronsUp /> },
  ];

 
  const visibleIndustries = showAll ? industries : industries.slice(0, 10);

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
            Industries <span className="bg-gradient-to-r from-white via-purple-400 to-purple-500 bg-clip-text text-transparent">We Serve</span>
          </h2>
          <div className="h-1 w-20 bg-[#8259DA] mx-auto mt-4"></div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 transition-all duration-500">
          {visibleIndustries.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ease-in-out hover:border-[#8259DA]/50 hover:bg-[#8259DA]/10 hover:-translate-y-1 cursor-default animate-in fade-in zoom-in duration-500"
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

        {/* View More / Less Button */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 shadow-lg"
          >
            {showAll ? (
              <> <FiMinus /> View Less </>
            ) : (
              <> <FiPlus /> View All Industries </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustryWeServe;