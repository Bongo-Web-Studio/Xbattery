/**
 * HeroSection Component
 * Apple-style scroll-driven hero animation with smooth GSAP illusion scroll.
 * Canvas stays pinned while scroll drives frame animation.
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const frameCount = 340;
    const images = [];
    const imageSeq = { frame: 0 };

    const currentFrame = (index) =>
      `/Animation/frame_${index.toString().padStart(4, "0")}.jpeg`;

    // Setup canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Preload all frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // Draw first frame
    images[0].onload = () => {
      context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    };

    // Render function
    const render = () => {
      const frameIndex = Math.floor(imageSeq.frame);
      const img = images[frameIndex];
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    // GSAP animation
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        pin: true, // this is what creates the illusion
      },
      onUpdate: render,
    });

    // Fade out at the end
    gsap.to(canvas, {
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "80% center",
        end: "100% bottom",
        scrub: true,
      },
    });

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Section that scrolls (illusion) */}
      <section
        ref={sectionRef}
        className="relative w-full h-[400vh] bg-black overflow-hidden"
      >
        {/* Sticky canvas */}
        <div className="sticky top-0 left-0 w-full h-screen">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
<div className="bg-black h-[5cm] w-full">

</div>
     
      </section>

      {/* Next section (real content) */}
      <section className="w-full min-h-screen bg-[#0F0F0F] flex justify-center items-center text-white text-4xl">
        <p>Welcome to HopeRise Cabs</p>
      </section>

      
    </>
  );
}
