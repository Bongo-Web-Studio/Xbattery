import React, { useEffect, useRef, useState } from "react";

/**
 * Optimized HeroSection1
 * - lazy-loads (via IntersectionObserver) and preloads the video only when visible
 * - shows poster/fallback image while the video loads
 * - uses poster attribute and <link rel="preload" as="video"> to prioritize fetch
 * - cleaned up and memoized
 */

const VIDEO_SRC =
  "https://videos.ctfassets.net/6sce2o5alp4f/4XvTyv2fI9Gv0uBFJNq17G/9e856c6ed770a4be0f72a2a04f5ac382/XBattery_1080p.mp4";
const POSTER_SRC = "./home.png";

function HeroSection1Base() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const preloadLinkRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false); // whether hero is in viewport
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false); // when true, set video preload="auto"
  const [videoLoaded, setVideoLoaded] = useState(false);

  // IntersectionObserver: mark visible when the hero enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Small rootMargin to start loading a little before fully in view
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // We can unobserve after first intersection to avoid repeated triggers
            obs.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: "200px", // start preloading slightly before it comes fully into view
        threshold: 0.15,
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // When the section becomes visible, inject a <link rel="preload" as="video"> to prioritize fetch,
  // and flip shouldLoadVideo so the <video> tag will actually preload and autoplay when available.
  useEffect(() => {
    if (!isVisible) return;

    // Avoid creating duplicate link tags
    if (!preloadLinkRef.current) {
      try {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "video";
        link.href = VIDEO_SRC;
        link.type = "video/mp4";
        // set crossorigin if your server requires it; omitted otherwise
        // link.crossOrigin = "anonymous";

        document.head.appendChild(link);
        preloadLinkRef.current = link;
      } catch (e) {
        // if DOM is not available for some reason, fail silently
        console.warn("preload link not added:", e);
      }
    }

    // Small delay to allow the browser to pick up preload; then allow the <video> to start loading.
    // This helps combine a prioritized fetch with a controlled <video preload="auto"> start.
    // No long waits — we flip immediately; you can tune timing if needed.
    setShouldLoadVideo(true);

    // cleanup when unmounting: remove the preload link
    return () => {
      if (preloadLinkRef.current && preloadLinkRef.current.parentNode) {
        preloadLinkRef.current.parentNode.removeChild(preloadLinkRef.current);
        preloadLinkRef.current = null;
      }
    };
  }, [isVisible]);

  // Respect users who prefer reduced motion — avoid autoplay/auto play effects
  const prefersReducedMotion = typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-start items-start text-white overflow-hidden bg-[#121212]"
      aria-label="Hero - BharatBMS"
    >
      {/* Background Video (only starts preloading when shouldLoadVideo=true) */}
      {/* We use poster and an <img> overlay fallback while the video is loading */}
      {/*
        preload attr:
        - when shouldLoadVideo === true we set preload="auto" to start fetching;
        - otherwise "metadata" to avoid heavy network usage before visible.
      */}
      <video
        ref={videoRef}
        className={`lg:absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        // only tell the browser to aggressively fetch when we want to
        preload={shouldLoadVideo ? "auto" : "metadata"}
        poster={POSTER_SRC}
        src={shouldLoadVideo ? VIDEO_SRC : undefined} // avoid setting src until we want to load
        autoPlay={!prefersReducedMotion}
        muted
        playsInline
        loop
        onLoadedData={() => setVideoLoaded(true)}
        aria-hidden={!videoLoaded} // hide from assistive tech until visible/loaded
      >
        {/* Source fallback */}
        {shouldLoadVideo && <source src={VIDEO_SRC} type="video/mp4" />}
      </video>

      {/* Fallback poster image / LCP-friendly image while video loads */}
      {/* We show this image until the video reports loaded (videoLoaded === true) */}
      {!videoLoaded && (
        <img
          src={POSTER_SRC}
          alt="BharatBMS hero"
          className="absolute top-0 left-0 w-full h-full object-cover"
          // recommend loading="eager" for LCP-critical hero image so it's fetched quickly
          loading="eager"
          // small inline decode hint (some browsers support it)
          decoding="async"
        />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" aria-hidden />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 mt-5 lg:mt-[4.8rem] lg:ml-[2.3rem]">
        <h1 className="max-w-2xl text-4xl md:text-7xl lg:text-7xl font-bold text-start">
          BharatBMS Powering India's Energy Future
        </h1>

        <p className="max-w-[350px] text-start text-lg mt-[2.2rem]">
          India’s first universal Battery Management System, scaling from 5kWh to
          megawatt applications with modular upgrades and unmatched reliability.
        </p>

        <div className="mt-10 mb-5 lg:mb-0 flex justify-start items-center gap-5">
          <button
            className="px-8 py-3 text-xl bg-[#97F1E6] text-black cursor-pointer"
            type="button"
          >
            Pre-order
          </button>
          <button
            className="relative px-5 py-3 text-xl border-transparent hover:text-[#F3564C] cursor-pointer"
            type="button"
          >
            Join waitlist
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F3564C]" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F3564C]" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F3564C]" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F3564C]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(HeroSection1Base);
