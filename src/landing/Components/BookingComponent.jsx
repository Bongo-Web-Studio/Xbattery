import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrustedByMarquee() {
  const marqueeRef = useRef(null);
  const logos = [
    {
      id: 1,
      src: "./logo1.png",
      alt: "Tata Motors",
    },
    {
      id: 2,
      src: "./logo2.png",
      alt: "Mahindra Electric",
    },
    {
      id: 3,
      src: "./logo3.png",
      alt: "Ola Electric",
    },
    {
      id: 4,
      src: "./logo4.png",
      alt: "Atos Energy",
    },
    {
      id: 5,
      src: "./logo5.png",
      alt: "Green Solar Co.",
    },
    {
      id: 6,
      src: "./logo6.png",
      alt: "Reliance Energy",
    },
    {
      id: 7,
      src: "./logo7.png",
      alt: "Bajaj Electric",
    },
  ];

  const display = [...logos, ...logos];

  useEffect(() => {
    const marquee = marqueeRef.current;

    const anim = gsap.to(marquee, {
      xPercent: -100,
      repeat: -1,
      ease: "none",
      duration: 15,
    });

    // store trigger instance
    const trigger = ScrollTrigger.create({
      trigger: marquee,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        anim.timeScale(self.direction === 1 ? 1 : -1);
      },
    });

    return () => {
      anim.kill();
      trigger.kill(); // ✅ kill the instance, not ScrollTrigger itself
    };
  }, []);

  return (
    <section className="w-full bg-[#121212] py-16 overflow-hidden">
      <div className="max-w-[100vw] mx-auto mt-3">
        <h3 className="text-center text-6xl text-white font-medium tracking-wide mb-8">
          Trusted By Leading EV Brands
        </h3>

        <div className="relative overflow-hidden border-t-[2px] border-b-[2px] border-[#41424A]">
          <div ref={marqueeRef} className="flex items-center gap-2 w-max">
            {display.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[200px] p-5 h-[120px] border-l-[2px] border-r-[2px] border-[#41424A]  hover:bg-[#A46FF1]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-20 object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
