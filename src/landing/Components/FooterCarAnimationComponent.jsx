import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterCarAnimationComponent() {
  const containerRef = useRef(null); // The visible scrollable container

  const groupRef = useRef(null); // Wrapper that moves (car + tyres)

  const carRef = useRef(null); // The car image itself

  const tyreRefs = useRef([]); // Array to hold front and rear tyre refs

  const timelineRef = useRef(null); // To store and manage the GSAP timeline

  /**
   * Helper function to assign tyre refs dynamically.
   * @param  el - The tyre image element
   * @param  i - The tyre index (0 = front, 1 = rear)
   */
  const setTyreRef = (el, i) => {
    tyreRefs.current[i] = el;
  };

  useLayoutEffect(() => {
    const setup = () => {
      // Cleanup any previous timeline + ScrollTrigger before creating a new one
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());

      // Cache references for performance
      const container = containerRef.current;
      const group = groupRef.current;
      const tyres = tyreRefs.current.filter(Boolean);
      const car = carRef.current;

      if (!container || !group || !car || tyres.length === 0) return;

      // === Geometry Calculations ===
      const containerRect = container.getBoundingClientRect();
      const groupRect = group.getBoundingClientRect();
      const tyreRect = tyres[0].getBoundingClientRect(); // assume all tyres are same size

      // Start: fully off-screen to left
      const startX = -groupRect.width;
      // End: fully off-screen to right
      const endX = containerRect.width + groupRect.width;
      // Total horizontal travel distance in px
      const distancePx = endX - startX;

      // Compute tyre rotation to match car movement
      const tyreRadius = tyreRect.width / 2;
      const circumference = 2 * Math.PI * tyreRadius;
      const rotations = circumference > 0 ? distancePx / circumference : 0;
      const rotationDegrees = rotations * 360;

      // Reset position before animating
      gsap.set(group, { x: startX });

      // === Create Scroll-Synced Timeline ===
      const tl = gsap.timeline({
        defaults: { ease: "none" }, // no easing for natural scroll feel
        scrollTrigger: {
          trigger: container,

          start: "top bottom", // animation starts when container top hits viewport bottom
          end: () => `+=${Math.max(distancePx, 100)}`, // distance of scroll controls movement
          scrub: 0.6, // smooth scrubbing
          invalidateOnRefresh: true, // re-measure on resize
        },
      });

      // Move car horizontally across the screen
      tl.to(group, { x: endX  });

      // Rotate tyres proportionally to distance traveled
      tl.to(
        tyres,
        {
          rotation: `+=${rotationDegrees}`,
          transformOrigin: "50% 50%",
        },
        0 // sync with group movement
      );

      timelineRef.current = tl;

      // Refresh ScrollTrigger measurements after layout updates
      ScrollTrigger.refresh();
    };

    // Initial setup
    setup();

    // === Responsive Recalculation on Resize ===
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setup, 120);
    };
    window.addEventListener("resize", onResize);

    // === Cleanup on Unmount ===
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimeout);
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // === JSX ===
  return (
    <div
      ref={containerRef}
      className="w-full h-full flex justify-start items-center overflow-hidden relative"
    >
      {/* The entire moving group (car + tyres) */}
      <div
        ref={groupRef}
        className="pointer-events-none select-none mt-[3cm] relative"
      >
        {/* Car image */}
        <img
          ref={carRef}
          className="w-[25cm] h-[10cm] object-cover"
          src="./footercar.png"
          alt="moving car"
          draggable="false"
        />

        {/* Front Tyre */}
        <img
          ref={(el) => setTyreRef(el, 0)}
          className="absolute bottom-[1.4cm] left-[3.1cm] w-[4cm]"
          src="./cartyre.png"
          alt="front tyre"
          draggable="false"
        />

        {/* Rear Tyre */}
        <img
          ref={(el) => setTyreRef(el, 1)}
          className="absolute bottom-[1.4cm] left-[18cm] w-[4cm]"
          src="./cartyre.png"
          alt="rear tyre"
          draggable="false"
        />
      </div>
    </div>
  );
}
