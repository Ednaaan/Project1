import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Check if device is touch-capable
    const checkMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      setIsMobile(isTouch);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return; // Exit early if on phone

    // 2. Optimized Cursor Movement
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Small dot
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Outer ring
      gsap.to(ringRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    // 3. Hover effects (Scale ring on links/buttons)
    const handleHover = () => gsap.to(ringRef.current, { scale: 1.5, backgroundColor: "rgba(255,255,255,0.1)" });
    const handleUnhover = () => gsap.to(ringRef.current, { scale: 1, backgroundColor: "transparent" });

    const interactiveElements = document.querySelectorAll('button, a, .group');
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [isMobile]);

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
   
};

export default CustomCursor;