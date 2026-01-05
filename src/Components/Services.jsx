import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "UI / UX Design",
  "Web Development",
  "Brand Identity",
  "SEO Optimization",
  "Performance Tuning",
  "CMS Integration",
  "E-commerce Solutions",
  "API Integration",
  "React Development",
  "GSAP Animations",
  "Micro Interactions",
  "Mobile Optimization",
  "Testing & QA",
  "Deployment",
  "Maintenance",
  "Technical Support",
  "Website Audit",
  "Consultation",
];

const Services = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".service-row").forEach((row) => {
        gsap.from(row, {
          x: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0f0f0f] text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        {/* LEFT SIDE (STICKY TITLE) */}
        <div className="md:sticky md:top-32 self-start">
          <h2 className="text-5xl font-bold leading-tight">
            Services
          </h2>
          <p className="mt-6 text-gray-400 max-w-sm">
            A focused set of design and development services built to
            create modern, scalable and high-performing digital experiences.
          </p>
        </div>

        {/* RIGHT SIDE (SERVICES LIST) */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                service-row
                flex items-center justify-between
                rounded-xl px-6 py-5
                bg-gradient-to-r from-[#1a1a1a] to-[#111]
                border border-white/10
                shadow-[0_12px_24px_rgba(0,0,0,0.6)]
              "
            >
              <span className="text-sm text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-base font-medium">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
