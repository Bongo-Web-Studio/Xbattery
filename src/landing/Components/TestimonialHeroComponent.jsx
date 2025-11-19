import React from "react";

/**
 * TestimonialHeroComponent.jsx
 * Fully responsive version.
 */

export default function TestimonialHeroComponent() {
  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      
      {/* --- Top Navigation / Decoration Bar --- */}
      {/* Changed specific % widths to flex-grow logic for better safety on small screens */}
      <div className="w-full flex items-center h-16 relative z-20 px-4 lg:px-0">
        <div className="hidden lg:block w-[3%] bg-white"></div>
        {/* On mobile, line takes full width minus padding. On desktop, matches design. */}
        <div className="flex-grow border- border-[#41424A]"></div>
        <div className="hidden lg:block w-[3%] bg-white"></div>
      </div>

      {/* --- Main Content Wrapper --- */}
      <div className="flex-grow relative w-full flex flex-col lg:block">
        
        {/* BACKGROUND LAYER 
            - Mobile: Image is a block at the top.
            - Desktop: Image is absolute on the right (50%).
        */}
        <div className="lg:absolute lg:inset-0 lg:flex lg:w-full lg:h-full">
          {/* Left White Space (Desktop only) */}
          <div className="hidden lg:block lg:w-[50%] bg-white h-full"></div>
          
          {/* Right Image */}
          <div className="w-full h-64 md:h-96 lg:w-[50%] lg:h-full relative">
             {/* Placeholder for b1.png - using a colored div/placeholder so it works immediately */}
            <img 
              className="w-full h-full object-cover" 
              src="b1.png" 
              alt="Industrial Background" 
              onError={(e) => {
                 // Fallback if image is missing
                 e.target.style.display='none';
                 e.target.parentElement.style.backgroundColor = '#ccc';
              }}
            />
            {/* Overlay on mobile only to help text contrast if things overlap, though here we stack them */}
            <div className="absolute inset-0 bg-black/10 lg:hidden"></div>
          </div>
        </div>

        {/* CARD CONTAINER 
            - Mobile: Static position, negative margin to overlap image slightly, padding.
            - Desktop: Absolute positioned, specific coordinates from original design.
        */}
        <div className="relative z-10 w-full px-4 md:px-12 lg:px-0 lg:absolute lg:top-[15%] lg:left-[15%] xl:left-[18%]">
          
          <div className="
            bg-[#121212] 
            text-white
            w-full 
            max-w-[780px] 
            mx-auto lg:mx-0
            -mt-12 lg:mt-0 /* Pull card up slightly on mobile */
            border border-[#6e605c]/40 
            p-8 md:p-12 
            drop-shadow-[0_8px_0_rgba(0,0,0,0.35)]
          ">

            {/* Quote Text */}
            <blockquote className="text-[#f6efe9] font-serif text-2xl md:text-3xl lg:text-[34px] leading-tight lg:leading-[1.05] tracking-tight mb-8">
              Xbattery Powering India's Energy Future
              <br />
              <span className="opacity-90 block mt-4 text-lg md:text-xl lg:text-2xl font-sans font-light">
                India’s first universal Battery Management System, scaling from 5kWh to megawatt applications with modular upgrades and unmatched reliability.
              </span>
            </blockquote>

            {/* Bottom Action Bar */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 border-t border-[#6e605c] pt-6 md:pt-4 gap-4 md:gap-0">
              
              {/* Button */}
              <button className="
                bg-[#97F1E6] hover:bg-[#7ad4ca] transition-colors 
                py-4 px-6 
                text-sm font-bold uppercase tracking-wider text-black 
                flex items-center justify-between md:justify-center gap-3
                w-full
              ">
                <span>Pre Order</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Empty Dark Panel (Decorative - Hidden on small mobile to save space, or kept for style) */}
              <div className="bg-[#1A1A1A] hidden md:flex items-center justify-center h-full min-h-[3rem]">
                {/* Intentionally empty to match design */}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}