import React from "react";

export default function CustomerStorySection({
  imageSrc = "./xbattery1.jpg",
}) {
  return (
    <>
      {/* Changed px-20/py-20 to responsive padding (px-4 py-12 -> lg:px-20 lg:py-20) */}
      <section className="w-full bg-white text-[#0b0b0b] flex justify-center items-center py-12 px-4 md:px-10 lg:py-20 lg:px-20">
        <div className="w-full max-w-[1600px] lg:w-[94%]">
          
          {/* Top heading */}
          <div className="mb-8 lg:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-4 h-4 bg-[#FF5A4F]"></span>
              <span className="text-sm md:text-[15px]">Features/Specifications</span>
            </div>
            <header>
              {/* Text scales from 4xl on mobile to 7xl on desktop */}
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">
                Xbattery 5 kWh
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mt-4 max-w-2xl">
                High-performance lithium battery packs designed for India.
              </p>
            </header>
          </div>

          {/* Main Content: Stacks vertically on mobile, Row on Desktop */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-0">
            
            {/* Left card */}
            <div className="w-full lg:w-[55%] xl:w-[60%]">
              {/* Removed fixed height on mobile (h-auto), kept fixed on desktop */}
              <div className="bg-white border border-[#e6ded6] p-6 md:p-8 shadow-sm w-full lg:max-w-xl h-auto lg:h-[50vh] flex flex-col justify-center">
                
                {/* Brand row */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center justify-center py-2 px-2 bg-[#f6f2ee] border border-[#e8e2da] text-xs font-semibold text-gray-700">
                    <span className="uppercase">Features</span>
                  </div>
                  <div className="text-sm text-gray-700 font-medium tracking-wide">
                    Specifications
                  </div>
                </div>

                {/* Quote block */}
                <figure className="mb-6">
                  <blockquote className="text-base md:text-[18px] leading-snug text-[#1f1f1f]">
                    "With intelligent BMS, I'm getting insights I didn't even know to look
                    for. They flag when something's off, answer questions in
                    plain language, and save me hours every week."
                  </blockquote>

                  <figcaption className="mt-4 text-sm text-gray-500">
                    — Spencer Sliglilo, Director of Operations
                  </figcaption>
                </figure>

                {/* Stats row */}
                <div className="flex flex-wrap gap-6 mt-4 md:mt-6 mb-2">
                  <div className="pt-3 border-t border-transparent">
                    <div className="text-2xl md:text-[28px] font-bold text-[#FF5A4F] leading-none">
                      5 kWh
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Capacity</div>
                  </div>
                  <div className="pt-3 border-t border-transparent">
                    <div className="text-2xl md:text-[28px] font-bold text-[#FF5A4F] leading-none">
                      15 kWh
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Expandable Up to
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="w-full lg:w-[40%] mt-8 lg:mt-0">
              <div className="bg-white overflow-hidden flex justify-center lg:block">
                <img
                  src={imageSrc}
                  alt="customer story"
                  // Adjusted height: fixed pixel height on mobile, VH on desktop
                  className="w-full h-[300px] md:h-[400px] lg:h-[60vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom lines decoration - Hidden on small mobile to prevent layout shift, visible on md+ */}
      <div className="w-full hidden md:flex h-[4rem] relative z-10">
        <div className="w-[3%] bg-[#FFFFFF]"></div>
        <div className="w-[94%] border-t border-[#41424A]"></div>
        <div className="w-[3%] bg-[#FFFFFF]"></div>
      </div>
    </>
  );
}