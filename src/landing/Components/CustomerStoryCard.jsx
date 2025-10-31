import React from "react";

/**
 * CustomerStorySection — pixel-focused React + Tailwind implementation.
 * - Requires Tailwind CSS in your project.
 * - Props:
 *    - imageSrc: string (path/URL for the right-side image)
 *
 * Notes:
 * - Colors and spacing tuned to match the screenshot (warm off-white bg, orange CTA).
 * - Uses inline SVGs for quote marks and a simple Toyota badge placeholder.
 */

export default function CustomerStorySection({
  imageSrc = "http://localhost:5173/xbattery1.jpg",
}) {
  return (
    <>
      <section className="w-full bg-white text-[#0b0b0b] flex justify-center items-center py-20 px-20">
        <div className="w-[94%] ">
          {/* Top heading (matches screenshot) */}

          <div className="flex items-center gap-3 mb-4">
            <span className="w-4 h-4 bg-[#FF5A4F] "></span>
            <span className="text-[15px] ">Features/Specifications</span>
          </div>
          <header className="mb-8">
            <h2 className="text-7xl font-semibold leading-tight">
              Xbattery 5 kWh
            </h2>
            <p className="text-2xl text-gray-500 mt-2">
              High-performance lithium battery packs designed for India.
            </p>
          </header>

          <div className="  w-full flex  justify-between items-center ">
            {/* Left card */}
            <div className="w-[60%]">
              <div className="bg-white border border-[#e6ded6]  p-8 shadow-sm max-w-xl h-[50vh]">
                {/* top small label */}

                {/* brand row */}
                <div className="flex items-center gap-4 mb-6">
                  {/* small logo box — replace with an actual SVG or img as needed */}
                  <div className="flex items-center justify-center py-2 px-2 bg-[#f6f2ee] border border-[#e8e2da] text-xs font-semibold text-gray-700">
                    <span className="uppercase">Features</span>
                  </div>
                  <div className="text-sm text-gray-700 font-medium tracking-wide">
                    Specifications
                  </div>
                </div>

                {/* quote block */}
                <figure className="mb-6">
                  <blockquote className="text-[18px] leading-snug text-[#1f1f1f]">
                    With Agents, I'm getting insights I didn't even know to look
                    for. They flag when something's off, answer questions in
                    plain language, and save me hours every week.
                  </blockquote>

                  <figcaption className="mt-4 text-sm text-gray-500">
                    — Spencer Sliglilo, Director of Operations at Toyota of
                    Orlando
                  </figcaption>
                </figure>

                {/* stats row */}
                <div className="flex  gap-6 mt-6 mb-6">
                  <div className="pt-3 border-t border-transparent">
                    <div className="text-[28px] font-bold text-[#FF5A4F] leading-none">
                      5 kWh
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Capacity</div>
                  </div>
                  <div className="pt-3 border-t border-transparent">
                    <div className="text-[28px] font-bold text-[#FF5A4F] leading-none">
                      15 kWh
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Expandable Up to
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA below the card */}
              <div className="mt-6 lg:mt-8=">
                <button className="mx-auto lg:mx-0 bg-[#FF5A4F] text-black text-lg py-2 px-7">
                  See more customer stories
                </button>
              </div>
            </div>

            {/* Right image with framed gradient and arrows */}
            <div className="w-[40%] ">
              <div className=" bg-white overflow-hidden ">
                <img
                  src={imageSrc}
                  alt="customer story"
                  className="w-full h-[60vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex h-[4rem] relative z-10">
        <div className="w-[3%] bg-[#FFFFFF]"></div>
        <div className="w-[94%] border-[#41424A]"></div>
        <div className="w-[3%]  border-[#41424A] bg-[#FFFFFF] "></div>
      </div>
    </>
  );
}
