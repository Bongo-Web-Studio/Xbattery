"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Optimized TrustedByMarqueeComponent
 * - lazy inits animation and image loading when near viewport
 * - respects prefers-reduced-motion (no auto animation if user opted out)
 * - hover/focus pauses marquee
 * - uses gsap.context and cleans up correctly
 * - images are loaded lazily and decoding="async"
 */

const LOGOS = [
  { id: 1, src: "./logo1.png", alt: "Tata Motors" },
  { id: 2, src: "./logo2.png", alt: "Mahindra Electric" },
  { id: 3, src: "./logo3.png", alt: "Ola Electric" },
  { id: 4, src: "./logo4.png", alt: "Atos Energy" },
  { id: 5, src: "./logo5.png", alt: "Green Solar Co." },
  { id: 6, src: "./logo6.png", alt: "Reliance Energy" },
  { id: 7, src: "./logo7.png", alt: "Bajaj Electric" },
];

// Duplicate for seamless loop
const duplicate = (arr) => [...arr, ...arr];

function TrustedByMarqueeComponentBase() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const triggerRef = useRef(null);

  const [shouldInit, setShouldInit] = useState(false); // when true we will init GSAP and assign img srcs
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Respect reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // function to lazy-assign src to imgs (so network only starts when we need)
  const revealImages = useCallback(() => {
    const imgs = containerRef.current
      ? containerRef.current.querySelectorAll("img[data-src]")
      : [];
    let pending = 0;
    imgs.forEach((img) => {
      const src = img.getAttribute("data-src");
      if (!src) return;
      pending++;
      img.onload = () => {
        pending--;
        if (pending <= 0) setImagesLoaded(true);
      };
      // assign src to start load
      img.setAttribute("src", src);
      img.removeAttribute("data-src");
    });
    // if there were no images with data-src
    if (pending === 0) setImagesLoaded(true);
  }, []);

  // IntersectionObserver - initialise when section is near viewport (200px)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldInit(true);
            // reveal images immediately when coming near
            revealImages();
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: "200px", threshold: 0.05 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [revealImages]);

  // Init GSAP animation and ScrollTrigger once shouldInit is true and user hasn't requested reduced motion
  useEffect(() => {
    if (!shouldInit || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      // ensure the marquee width is at least twice so xPercent:-50 makes sense
      // create a continuously looping timeline that translates marquee left
      const duration = 20; // tweak speed here
      const tl = gsap.to(marquee, {
        xPercent: -50,
        ease: "none",
        repeat: -1,
        duration,
        paused: false,
        // will-change transform helps with promoting to its own layer
        onStart() {
          marquee.style.willChange = "transform";
        },
      });

      animRef.current = tl;

      // ScrollTrigger: reverse/slow down the marquee depending on scroll direction/velocity
      // We will not set negative timeScale directly if not supported; GSAP supports negative timescale,
      // but to make behaviour smooth we will set timeScale to -1 to reverse.
      const trig = ScrollTrigger.create({
        trigger: marquee,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          // self.direction === 1 -> scrolling down; direction === -1 -> scrolling up
          // map direction to timescale: down => 1, up => -1 (reverse)
          if (!animRef.current) return;
          try {
            animRef.current.timeScale(self.direction === 1 ? 1 : -1);
          } catch (e) {
            // fallback: if negative timescale causes issues, pause and reverse
            if (self.direction === 1) {
              animRef.current.play();
            } else {
              animRef.current.reverse();
            }
          }
        },
      });

      triggerRef.current = trig;
    }, containerRef);

    // cleanup
    return () => {
      try {
        if (triggerRef.current) {
          triggerRef.current.kill();
          triggerRef.current = null;
        }
        if (animRef.current) {
          animRef.current.kill();
          animRef.current = null;
        }
        ctx.revert();
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, [shouldInit, prefersReducedMotion]);

  // Pause on hover & focus for accessibility — only if animation exists
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const onEnter = () => {
      if (animRef.current) animRef.current.pause();
    };
    const onLeave = () => {
      if (animRef.current) animRef.current.play();
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusout", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusout", onLeave);
    };
  }, []);

  const display = duplicate(LOGOS);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#121212] py-12 md:py-16 overflow-hidden"
      aria-label="Trusted by leading EV brands"
    >
      <div className="w-full">
        <h3 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-wide mb-10">
          Trusted By Leading EV Brands
        </h3>

        <div className="relative overflow-hidden border-y-[2px] border-[#41424A]">
          <div
            ref={marqueeRef}
            className="flex items-center gap-2 w-max will-change-transform"
            // prevent keyboard focus outline inside marquee images by allowing each item to be focusable
          >
            {display.map((logo, i) => (
              <div
                key={`${logo.id}-${i}`}
                className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[220px] h-[80px] sm:h-[100px] md:h-[120px] border-x-[2px] border-[#41424A] transition-colors duration-300"
                style={{ flex: "0 0 auto" }}
                role="group"
                aria-label={logo.alt}
              >
                {/* Data-src so actual loading waits until revealImages runs */}
                <img
                  // assign data-src; revealImages will swap to src when section is near viewport
                  data-src={logo.src}
                  // important: a small intrinsic size via width/height helps avoid layout shifts when actual image loads
                  // set css in tailwind to control displayed size; here we set max-height classes above
                  alt={logo.alt}
                  className="max-h-10 sm:max-h-14 md:max-h-16 lg:max-h-20 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* If prefers-reduced-motion, show a subtle static fallback message */}
      {prefersReducedMotion && (
        <div className="text-center mt-6 text-sm text-gray-400">
          Motion reduced — static brand list shown for accessibility
        </div>
      )}
    </section>
  );
}

export default React.memo(TrustedByMarqueeComponentBase);
