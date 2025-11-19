import React from "react";

/**
 * TestimonialHeroComponent.jsx
 * React + Tailwind implementation that replicates the provided design.
 * - Drop this file into a React project with Tailwind CSS enabled.
 * - Uses pure Tailwind utilities and a small inline SVG for the curved grid on the right.
 * - Replace the logo SVG with your real logo if available.
 *
 * Notes / Assumptions:
 * - Tailwind CSS is already configured in the project.
 * - Uses arbitrary color values to match the screenshot as closely as possible.
 */

export default function TestimonialHeroComponent() {
  return (
<> <div className="w-full flex h-[4rem] relative z-10">
        <div className="w-[3%] bg-[#FFFFFF]"></div>
        <div className="w-[94%] border-[#41424A]"></div>
        <div className="w-[3%]  bg-[#FFFFFF] "></div>
      </div>
    <div className="w-full h-screen relative bg-white overflow-hidden flex items-center justify-start">



<div className="w-[50%] h-full  ">

</div>


<div className="w-[50%] h-full">

        <img className="w-full h-full object-cover" src="b1.png" alt="" />
    
</div>



    {/* Card container */}
      <div className=" absolute top-[200px] left-[250px] max-w-[780px] w-[65%] min-w-[620px] bg-[#121212] border border-[#6e605c]/40 mx-24 p-12 drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]">
        {/* subtle inner border top-left like the screenshot margin */}
       

   

        {/* Quote text */}
        <blockquote className="text-[#f6efe9] font-serif text-[34px] leading-[1.05] tracking-tight mb-6">
Xbattery Powering India's Energy Future
India’s first universal Battery Management System, scaling from 5kWh to megawatt applications with modular upgrades and unmatched reliability.</blockquote>

        {/* Author */}

        {/* Bottom split button bar */}
        <div className="mt-4 grid grid-cols-2 border-t border-[#6e605c] pt-4">
          <button className="bg-[#97F1E6] hover:bg-[#FF5A4F] py-3 px-6 text-sm font-medium text-black text-left flex items-center justify-center gap-3">
            <span>Pre Order</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* right half is an empty dark panel to match screenshot */}
          <div className="bg-[#1A1A1A] flex items-center justify-center">
            {/* intentionally empty — keeps the visual split */}
          </div>
        </div>
      </div>















  
    </div>

      </>
  );
}
