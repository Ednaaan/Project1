import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ProjectCard from "../Components/ProjectCard";

// Assets Imports
import p1 from "../assets/ProjectCards/1.webp";
import p2 from "../assets/ProjectCards/2.webp";
import p3 from "../assets/ProjectCards/3.webp";
import p4 from "../assets/ProjectCards/4.webp";
import p5 from "../assets/ProjectCards/5.webp";
import p6 from "../assets/ProjectCards/6.webp";
import p7 from "../assets/ProjectCards/7.webp";
import p8 from "../assets/ProjectCards/8.webp";
import p9 from "../assets/ProjectCards/9.webp";
import p10 from "../assets/ProjectCards/10.webp";
import p11 from "../assets/ProjectCards/11.webp";
import p12 from "../assets/ProjectCards/12.webp";
import p13 from "../assets/ProjectCards/13.webp";
import p14 from "../assets/ProjectCards/14.webp";
import p15 from "../assets/ProjectCards/15.webp";
import p16 from "../assets/ProjectCards/16.webp";
import p17 from "../assets/ProjectCards/17.webp";
import p18 from "../assets/ProjectCards/18.webp";
import p19 from "../assets/ProjectCards/19.webp";

const projects = [
  { image: p1, title: "Travel Website", category: "website" },
  { image: p2, title: "Construction & Renovation Service", category: "Construction & Renovation" },
  { image: p3, title: "Other", category: "removal" },
  { image: p4, title: "Cleaners Services", category: "Cleaners" },
  { image: p5, title: "Removal Services", category: "removal" },
  { image: p6, title: "Cleaners Services", category: "Cleaners" },
  { image: p7, title: "Website Design", category: "website" },
  { image: p8, title: "Renovation Services", category: "Construction & Renovation" },
  { image: p9, title: "Removal Services", category: "removal" },
  { image: p10, title: "Removal Services", category: "removal" },
  { image: p11, title: "Construction & Renovation Service", category: "Construction & Renovation" },
  { image: p12, title: "Removal Services", category: "removal" },
  { image: p13, title: "Office Cleaning Services", category: "Cleaners" },
  { image: p14, title: "Moving & Removal Services", category: "removal" },
  { image: p15, title: "Startup Website", category: "website" },
  { image: p16, title: "E-commerce Store", category: "ecommerce" },
  { image: p17, title: "Construction Company Site", category: "Construction & Renovation" },
  { image: p18, title: "Residential Cleaning Services", category: "Cleaners" },
  { image: p19, title: "Furniture Removal Services", category: "removal" },
];

const RecentWorkPage = () => {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-item",
        { 
          y: 60, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black text-white min-h-screen pt-36 pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Our Recent Work
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Explore a selection of websites and applications we’ve built
            for growing businesses across industries.
          </p>
        </div>

        {/* Filter Section (Hidden as requested) */}
        {/* <div className="flex gap-4 overflow-x-auto pb-4 mb-12 no-scrollbar">
          ... filter buttons logic ...
        </div> 
        */}

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <ProjectCard
                image={project.image}
                title={project.title}
                category={project.category}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No projects to display at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentWorkPage;