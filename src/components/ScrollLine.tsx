import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollLine = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set initial state
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animate on scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1920 4000"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
    >
      <path
        ref={pathRef}
        d="M -50 100 
           Q 100 200, 150 400 
           Q 200 600, 100 800 
           Q 0 1000, 200 1200 
           Q 400 1400, 300 1600 
           Q 200 1800, 350 2000 
           Q 500 2200, 400 2400 
           Q 300 2600, 450 2800 
           Q 600 3000, 500 3200 
           Q 400 3400, 550 3600 
           Q 700 3800, 600 4000"
        stroke="hsl(160, 60%, 45%)"
        strokeWidth="2"
        strokeLinecap="round"
        className="drop-shadow-[0_0_8px_hsl(160,60%,45%,0.5)]"
      />
      {/* Floating dots along the path */}
      <circle cx="150" cy="400" r="4" fill="hsl(160, 60%, 45%)" className="animate-pulse" />
      <circle cx="100" cy="800" r="3" fill="hsl(160, 60%, 45%)" className="animate-pulse" />
      <circle cx="300" cy="1600" r="5" fill="hsl(160, 60%, 45%)" className="animate-pulse" />
      <circle cx="400" cy="2400" r="3" fill="hsl(160, 60%, 45%)" className="animate-pulse" />
      <circle cx="500" cy="3200" r="4" fill="hsl(160, 60%, 45%)" className="animate-pulse" />
    </svg>
  );
};

export default ScrollLine;
