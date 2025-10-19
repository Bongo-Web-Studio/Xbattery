import { useEffect, useRef } from "react";
import gsap from "gsap";

import FooterCarAnimationComponent from "../Components/FooterCarAnimationComponent";

export default function FooterSection() {
  const gridRef = useRef(null);

  // 🔹 Run GSAP setup once after render
  useEffect(() => {
    const boxes = Array.from(gridRef.current.querySelectorAll(".pixel-box"));
    const handlers = [];

    boxes.forEach((box) => {
      // Hover in → brighten + scale up
      const onEnter = () => {
        gsap.to(box, {
          backgroundColor: "#C890E6",
          scale: 1.15,
          duration: 0.18,
          ease: "power2.out",
        });
      };

      // Hover out → return to normal
      const onLeave = () => {
        gsap.to(box, {
          backgroundColor: "#C890E6",
          scale: 1,
          duration: 0.28,
          ease: "power2.inOut",
        });
      };

      // Attach listeners
      box.addEventListener("mouseenter", onEnter);
      box.addEventListener("mouseleave", onLeave);

      handlers.push({ box, onEnter, onLeave });
    });

    // Cleanup on unmount
    return () => {
      handlers.forEach(({ box, onEnter, onLeave }) => {
        box.removeEventListener("mouseenter", onEnter);
        box.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // 🔹 Generate 200 boxes (20 rows × 10 columns)
  const rows = 20;
  const cols = 10;
  const gridBoxes = Array.from({ length: rows * cols });

  return (
    <div className="w-full h-screen bg-[#0F0F0F] text-white flex flex-col justify-between">
      
      {/* === TOP SECTION === */}
      <div className="w-full flex flex-col md:flex-row items-start justify-between">
        
        {/* Left Text Block */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0 border-r border-dashed border-[#26CC6B] p-10">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-100 mt-10">
            Ready to ride with <span className="text-[#26CC6B]">GaadiCab</span>
          </h1>
        </div>

        {/* Right Link Columns */}
        <div className="w-full h-full flex">
          {/* Company */}
          <div className="w-[33%] h-full flex flex-col items-center justify-start border-r border-dashed border-[#26CC6B]">
            <h2 className="text-2xl font-semibold text-[#C890E6] w-full p-4 border-b border-dashed border-[#26CC6B]">
              <span className="ml-[75px]">Company</span>
            </h2>
            <ul className="flex flex-col justify-center items-start gap-3 mt-14">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Refund Policy</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-[33%] h-full flex flex-col items-center justify-start border-r border-dashed border-[#26CC6B]">
            <h2 className="text-2xl font-semibold text-[#C890E6] w-full p-4 border-b border-dashed border-[#26CC6B]">
              <span className="ml-[90px]">Services</span>
            </h2>
            <ul className="flex flex-col justify-center items-start gap-3 mt-14">
              <li className="hover:text-white cursor-pointer">Outstation Taxi</li>
              <li className="hover:text-white cursor-pointer">Sightseeing Cab</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-[33%] h-full flex flex-col items-center justify-start">
            <h2 className="text-2xl font-semibold text-[#C890E6] w-full p-4 border-b border-dashed border-[#26CC6B]">
              <span className="ml-[90px]">Get in Touch</span>
            </h2>
            <ul className="flex flex-col justify-center items-start gap-3 mt-14">
              <li className="hover:text-white cursor-pointer">About GaadiCab</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* === MIDDLE ANIMATED GRID === */}
      <div
        ref={gridRef}
        className="relative w-full h-[50%] bg-[#0F0F0F] grid grid-cols-20 grid-rows-10 overflow-hidden"
      >
        {/* Render pixel boxes */}
        {gridBoxes.map((_, i) => (
          <div
            key={i}
            className="pixel-box w-full h-full border border-white/30 border-dashed transition-all duration-200"
          />
        ))}

        {/* Optional animation overlay */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <FooterCarAnimationComponent />
        </div>
      </div>

      {/* === BOTTOM COPYRIGHT BAR === */}
      <div className="h-[8%] w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-white text-sm">
        <p>© 2025 GaadiCab. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <p className="hover:text-white cursor-pointer">Notices</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer">Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
