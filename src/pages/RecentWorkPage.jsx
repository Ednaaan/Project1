import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ProjectCard from "../Components/ProjectCard";

// Import images
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
  { image: p1, title: "Travel Website", category: "website", link: "https://andamanliveholidays.com/" },
  { image: p2, title: "Construction & Renovation Service", category: "Construction & Renovation", link: "https://bmebuilderslondon.co.uk/" },
  { image: p3, title: "Charity Website", category: "charity", link: "https://buildyourakhirah.com/" },
  { image: p4, title: "Cleaners Services", category: "Cleaners", link: "https://cgbathroomslimited.co.uk/" },
  { image: p5, title: "Removal Services", category: "removal", link: "https://dotcourierandremovals.co.uk/" },
  { image: p6, title: "Cleaners Services", category: "Cleaners", link: "https://cleanerchoicecleaning.com/" },
  { image: p7, title: "Website Design", category: "website", link: "https://itaway.co.uk/" },
  { image: p8, title: "Cleaning Services", category: "Cleaners", link: "https://glennbathroomfitters.co.uk/" },
  { image: p9, title: "Removal Services", category: "removal", link: "https://jamboremovals.co.uk/" },
  { image: p10, title: "Removal Services", category: "removal", link: "https://ivanremovals.co.uk/" },
  { image: p11, title: "Construction & Renovation Service", category: "Construction & Renovation", link: "https://perfectbuilder.uk/" },
  { image: p12, title: "Removal Services", category: "removal", link: "https://www.mappy-movers.com/" },
  { image: p13, title: "Surveyor", category: "surveyor", link: "https://quantitysurveyorsltd.co.uk" },
  { image: p14, title: "Cash For Gold", category: "trade", link: "https://quickcashforgold.co.uk/" },
  { image: p15, title: "Removal Service", category: "removal", link: "https://quickmanchestermovers.co.uk/" },
  { image: p16, title: "Handyman", category: "handyman", link: "https://theitaliantasker.co.uk/" },
  { image: p17, title: "Moving Services", category: "moving", link: "https://totaltransportteam.co.uk/" },
  { image: p18, title: "Recycle", category: "recycle", link: "https://tmreuseleeds.co.uk/" },
  
];

const RecentWorkPage = () => {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-item",
        { y: 60, opacity: 0 },
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
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Our Recent Work
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Explore a selection of websites and applications we’ve built
            for growing businesses across industries.
          </p>
        </div>

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
                link={project.link} 
              />
            </div>
          ))}
        </div>

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