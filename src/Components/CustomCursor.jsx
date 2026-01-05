import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Small dot (fast)
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Outer ring (slow lag)
      gsap.to(ringRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
