import React from "react";
import { FiExternalLink } from "react-icons/fi";  

const ProjectCard = ({ image, title, category, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
    >
  
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
       
        <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center">
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white">
            Visit Live Site <FiExternalLink size={14} />
          </span>
        </div>
      </div>

      
      <div className="p-5 md:absolute md:bottom-0 md:left-0 md:right-0 md:p-6 md:translate-y-full md:group-hover:translate-y-0 md:bg-gradient-to-t md:from-black md:via-black/80 md:to-transparent transition-all duration-500">
        <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-1">
          {category}
        </p>
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
          {title}
        </h3>
        
        
        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-purple-400 md:hidden">
          View Project <FiExternalLink size={14} />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;