"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import FooterCarAnimationComponent from "../Components/FooterCarAnimationComponent";
import FooterCarAnimationComponentMobile from "../Components/FooterCarAnimationComponentMobile";

export default function FooterSectionMobile() {
  const gridRef = useRef(null);

  // 🔹 GSAP hover animations for pixel boxes
  useEffect(() => {
    const boxes = Array.from(gridRef.current.querySelectorAll(".pixel-box"));
    const handlers = [];

    boxes.forEach((box) => {
      const onEnter = () => {
        gsap.to(box, {
          backgroundColor: "#C890E6",
          scale: 1.15,
          duration: 0.18,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(box, {
          backgroundColor: "#C890E6",
          scale: 1,
          duration: 0.28,
          ease: "power2.inOut",
        });
      };

      box.addEventListener("mouseenter", onEnter);
      box.addEventListener("mouseleave", onLeave);

      handlers.push({ box, onEnter, onLeave });
    });

    return () => {
      handlers.forEach(({ box, onEnter, onLeave }) => {
        box.removeEventListener("mouseenter", onEnter);
        box.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // 🔹 Generate 200 boxes (20×10 grid)
  const rows = 20;
  const cols = 10;
  const gridBoxes = Array.from({ length: rows * cols });

  return (
    <footer className="w-full bg-[#0F0F0F] text-white flex flex-col items-center justify-center pt-10 space-y-8">
      {/* === BRAND / CTA === */}
      <div className="text-center">
        <h1 className="text-4xl  font-semibold text-gray-100">
          Ready to ride with <span className="text-[#26CC6B]">GaadiCab</span>?
        </h1>
     
      </div>

      {/* === QUICK LINKS === */}
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-16 w-full  ">
        {/* Company */}
        <div className="flex flex-col gap-2  w-full">
          <h3 className="text-2xl font-semibold text-[#C890E6] w-full  pl-[3.8cm]  p-4 border-dashed border-t border-b border-[#26CC6B] ">Company</h3>
          <ul className=" w-full flex flex-col gap-1 justify-start   text-gray-400 text-sm pl-[3.8cm]">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2  w-full">
          <h3 className="text-2xl font-semibold text-[#C890E6] w-full  pl-[3.8cm]   p-4 border-dashed border-t border-b border-[#26CC6B]   ">Services</h3>
          <ul className=" w-full flex flex-col gap-1 justify-start   text-gray-400 text-sm pl-[3.8cm]">
            <li className="hover:text-white cursor-pointer">Outstation Taxi</li>
            <li className="hover:text-white cursor-pointer">Sightseeing Cab</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-2xl font-semibold text-[#C890E6] w-full  pl-[3.8cm]  p-4 border-dashed border-t border-b border-[#26CC6B]">Contact</h3>
          <ul className=" w-full flex flex-col gap-1 justify-start   text-gray-400 text-sm pl-[3.8cm]">
            <li className="hover:text-white cursor-pointer">About GaadiCab</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* === ANIMATION GRID === */}
      <div
        ref={gridRef}
        className="relative w-full h-[34vh] bg-[#0F0F0F] grid grid-cols-10 grid-rows-20 gap-[1px] overflow-hidden"
      >
        {gridBoxes.map((_, i) => (
          <div
            key={i}
            className="pixel-box w-full h-full bg-[#0F0F0F] border border-white/10 border-dashed transition-all duration-200"
          />
        ))}

        {/* Car animation overlay */}
        <div className="pointer-events-none absolute inset-0 z-10  ">
          <FooterCarAnimationComponentMobile />
        </div>
      </div>

      {/* === COPYRIGHT BAR === */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs md:text-sm">
        <p>© 2025 GaadiCab. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <p className="hover:text-white cursor-pointer">Notices</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
