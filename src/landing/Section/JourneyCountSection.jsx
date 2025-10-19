"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JourneyCountSection() {
  const numberRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;
    const obj = { value: 31517 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });

    tl.to(obj, {
      value: 31544,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = Math.floor(obj.value).toLocaleString();
      },
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      className="flex  flex-col justify-start items-start  bg-[#0F0F0F] text-white w-full  text-center overflow-hidden "
      aria-label="HopeRise Cabs Impact Statistics"
    >
      {" "}
      {/* Top Border Row */}
      <div className="w-full flex h-[4rem] relative z-10">
        <div className="w-[3%] border-t border-b border-r border-[#41424A]"></div>
        <div className="w-[94%] border-t border-b border-[#41424A]"></div>
        <div className="w-[3%] border-t border-b border-l border-[#41424A]"></div>
      </div>
      <div className="w-full flex  relative z-10">
        <div className="w-[3%] border-t border-b border-r border-[#41424A]"></div>
        <div className="w-[94%] border-t border-b border-[#41424A]">
          <div>
            <div
             
              className="flex flex-col justify-center items-center"
            >
              {/* Heading */}
              <h1  style={{ fontFamily: "ppneuebitbold" }} className="text-3xl sm:text-5xl md:text-6xl  text-start lg:text-7xl xl:text-8xl font-semibold max-w-5xl leading-tight">
                Totally Pre Order since we start
              </h1>

              {/* Animated Number */}
              <h2  style={{ fontFamily: "ppneuebitbold" }}
                ref={numberRef}
                className="text-[90px] sm:text-[130px] md:text-[200px] lg:text-[280px] font-bold text-[#97F1E6]  leading-none select-none w-full border-t border-gray-500 bg-[#1A1A1A]"
              >
                31,527
              </h2>

              {/* Subtext */}
            </div>
          </div>
        </div>
        <div className="w-[3%] border-t border-b border-l border-[#41424A]"></div>
      </div>
    </section>
  );
}
