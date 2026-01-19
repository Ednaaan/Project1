import React from "react";

const ProjectCard = ({ image, title, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
      
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-300 capitalize">
          {category}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
