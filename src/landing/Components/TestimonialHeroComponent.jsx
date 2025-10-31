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
       

        {/* Logo */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center">
            {/* small stylized logo — replace with your logo if available */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#efe7e3" opacity="0.06" />
              <path d="M6 18L11 6L18 18" stroke="#efe7e3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-[#efe7e3] font-semibold text-sm tracking-wider">PORTLAND<br /><span className="text-xs uppercase opacity-70">Trail Blazers</span></div>
        </div>

        {/* Quote text */}
        <blockquote className="text-[#f6efe9] font-serif text-[34px] leading-[1.05] tracking-tight mb-6">"We cut 50 hours across 3 departments down to three hours for one person for post-event feedback."</blockquote>

        {/* Author */}
        <div className="text-[#bfb3aa] text-sm mb-6">—David Long, Vice President, Digital and Innovation at Portland Trail Blazers</div>

        {/* Bottom split button bar */}
        <div className="mt-4 grid grid-cols-2 border-t border-[#6e605c] pt-4">
          <button className="bg-[#97F1E6] hover:bg-[#FF5A4F] py-3 px-6 text-sm font-medium text-black text-left flex items-center justify-center gap-3">
            <span>Read customer story</span>
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
