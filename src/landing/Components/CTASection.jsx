"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, A11y } from "swiper/modules";
import {
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

/**
 * CTASection (optimized)
 * - autoplayAll: if true -> load & attempt to play all media muted.
 * - otherwise -> smart lazy-loading: loads current slide and neighbors only,
 *   and uses IntersectionObserver to progressively load iframe sources.
 *
 * Notes:
 * - Autoplay of cross-origin iframes (YouTube) may be blocked by browsers unless muted.
 * - Playing all videos at once is resource-heavy; use with care.
 */

const defaultCards = [
  {
    name: "@mytechceo",
    followers: "254k followers",
    video: "https://www.youtube.com/embed/fojSvP59GnM",
    text: "you're going to feed them Maca Root",
    platform: "instagram",
  },
  {
    name: "@emmyxtech",
    followers: "368k followers",
    video: "https://youtu.be/0omIJ_lDYaQ",
    text: "and early cancer markers,",
    platform: "youtube",
  },
  {
    name: "@stefarmstead",
    followers: "90.2k followers, Alo wellness club trainer",
    video: "https://youtu.be/QzI3dZasnjU",
    text: "and I scored a 69 out of 100, which makes a whole lot of sense.",
    platform: "x",
  },
  {
    name: "@avnibarman_",
    followers: "228k followers",
    video: "https://youtu.be/rU9aqBv0YdY",
    text: "and...",
    platform: "facebook",
  },
  {
    name: "Quentin Johnston",
    followers: "NFL player",
    video: "https://youtu.be/7gtc1DW2Tgo",
    text: "",
    platform: "instagram",
  },
];

export default function CTASection({ cards = defaultCards, autoplayAll = false }) {
  const safeCards = Array.isArray(cards) ? cards : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);
  const iframeRefs = useRef([]);
  const slideRefs = useRef([]);
  const swiperRef = useRef(null);
  const [loaded, setLoaded] = useState(() => safeCards.map(() => false));
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Keep refs sized to cards length
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, safeCards.length);
    iframeRefs.current = iframeRefs.current.slice(0, safeCards.length);
    slideRefs.current = slideRefs.current.slice(0, safeCards.length);
    setLoaded((prev) => safeCards.map((_, i) => prev[i] || false));
  }, [safeCards.length]);

  const getPlatformIcon = useCallback((platform) => {
    switch ((platform || "").toLowerCase()) {
      case "instagram":
        return <FaInstagram className="text-xl" />;
      case "youtube":
        return <FaYoutube className="text-xl" />;
      case "x":
      case "xtwitter":
      case "twitter":
        return <FaXTwitter className="text-xl" />;
      case "facebook":
        return <FaFacebook className="text-xl" />;
      default:
        return null;
    }
  }, []);

  // Normalize incoming video strings into an object { type, src }.
  const normalizeVideo = useCallback((input) => {
    if (!input) return null;
    const trimmed = typeof input === "string" ? input.trim() : "";
    // YouTube link detection
    if (trimmed.includes("youtube.com") || trimmed.includes("youtu.be")) {
      let id = null;
      if (trimmed.includes("watch?v=")) {
        id = trimmed.match(/v=([A-Za-z0-9_\-]+)/)?.[1];
      } else {
        id = trimmed.match(/youtu\.be\/([A-Za-z0-9_\-]+)/)?.[1];
      }
      if (id) return { type: "youtube", src: `https://www.youtube.com/embed/${id}` };
      // if it's already an embed link just return as youtube
      if (trimmed.includes("/embed/")) return { type: "youtube", src: trimmed };
    }
    // Local raw video file?
    if (/\.(mp4|webm|ogg)$/.test(trimmed)) return { type: "video", src: trimmed };
    // Fallback to generic iframe (could be vimeo or other)
    return { type: "iframe", src: trimmed };
  }, []);

  // Append autoplay + mute params for youtube/iframes when autoplaying;
  // for youtube we add enablejsapi=1 so we can control it if needed later.
  const appendAutoplayParams = useCallback((src) => {
    if (!src) return src;
    try {
      const url = new URL(src, window.location.href);
      // if url.host missing (relative), just create string manipulation fallback:
      if (url.hostname.includes("youtube")) {
        url.searchParams.set("rel", "0");
        url.searchParams.set("modestbranding", "1");
        url.searchParams.set("autoplay", "1");
        url.searchParams.set("mute", "1");
        url.searchParams.set("enablejsapi", "1");
        return url.toString();
      }
    } catch (e) {
      // fallback simpler concat
    }
    const sep = src.includes("?") ? "&" : "?";
    return `${src}${sep}autoplay=1&mute=1`;
  }, []);

  // markLoaded helper
  const markLoaded = (index) =>
    setLoaded((prev) => prev.map((v, i) => (i === index ? true : v)));

  // IntersectionObserver to lazy-load iframe src when slide is largely visible.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset?.slideIndex);
          if (Number.isNaN(idx)) return;
          // when the slide is visible enough, mark it as loaded so effect will set src
          if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
            setLoaded((prev) => {
              if (prev[idx]) return prev;
              const copy = [...prev];
              copy[idx] = true;
              return copy;
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "200px", // pre-load a bit before entering
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    slideRefs.current.forEach((el) => {
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [safeCards.length]);

  // Decide which indices should be actively loaded when not autoplayAll:
  // current slide and neighbors (configurable radius)
  const activeWindowRadius = 2;
  const shouldLoadIndex = useCallback(
    (idx) => {
      if (autoplayAll) return true;
      // If already marked loaded by intersection observer, keep it loaded
      if (loaded[idx]) return true;
      // load if in the neighborhood window
      return Math.abs(idx - activeIndex) <= activeWindowRadius;
    },
    [activeIndex, autoplayAll, loaded]
  );

  // Main effect: set src attributes for videos/iframes based on shouldLoadIndex
  useEffect(() => {
    // Avoid running heavy loads for reduced-motion users
    const canAutoplay = !prefersReducedMotion;

    safeCards.forEach((card, i) => {
      const norm = normalizeVideo(card.video);
      if (!norm) return;

      if (norm.type === "video") {
        const vEl = videoRefs.current[i];
        if (!vEl) return;

        const shouldLoad = shouldLoadIndex(i) || autoplayAll;
        // only set src from data-src when we intend to load
        if (shouldLoad && vEl.dataset?.src && !vEl.src) {
          vEl.src = vEl.dataset.src;
          // prefer not to "auto" preload until necessary
          vEl.preload = autoplayAll || Math.abs(i - activeIndex) <= 1 ? "auto" : "metadata";
          // browsers require explicit load call for some cases
          try {
            vEl.load?.();
          } catch (e) {}
        }

        // playback control
        if ((autoplayAll || i === activeIndex) && canAutoplay) {
          try {
            vEl.muted = true;
            const p = vEl.play?.();
            if (p && p.catch) p.catch(() => {});
          } catch (e) {}
        } else {
          try {
            vEl.pause?.();
          } catch (e) {}
        }
      } else {
        // iframe or youtube
        const iframe = iframeRefs.current[i];
        if (!iframe) return;
        const baseSrc = iframe.dataset.src || norm.src || "";
        const willLoad = shouldLoadIndex(i) || autoplayAll;
        if (willLoad) {
          // only set src when necessary
          if (!iframe.src) {
            // if autoplayAll or this slide is the active and autoplay allowed -> append autoplay
            const needAutoplay = autoplayAll || (i === activeIndex && canAutoplay);
            iframe.src = needAutoplay ? appendAutoplayParams(baseSrc) : baseSrc;
            // ensure browsers treat as lazy where possible
            iframe.loading = "lazy";
          } else {
            // If already has src but we want autoplay, ensure autoplay params are present
            if ((autoplayAll || i === activeIndex) && !iframe.src.includes("autoplay=1")) {
              iframe.src = appendAutoplayParams(baseSrc);
            }
          }
        } else {
          // Unload iframe to free memory if it's not in the active window and not marked loaded by IO
          // Keep the dataset.src so we can re-load later
          if (iframe.src) {
            // set to blank to stop network/decoding
            iframe.src = "";
          }
        }
      }
    });
  }, [
    activeIndex,
    autoplayAll,
    normalizeVideo,
    appendAutoplayParams,
    safeCards,
    shouldLoadIndex,
    prefersReducedMotion,
    loaded,
  ]);

  // If autoplayAll toggles from false -> true, force load all media quickly (use requestIdleCallback fallback)
  useEffect(() => {
    if (!autoplayAll) return;
    if (typeof window === "undefined") return;
    const cb = window.requestIdleCallback || function (fn) { return setTimeout(fn, 200); };
    const id = cb(() => {
      safeCards.forEach((_, i) => {
        // mark loaded so effect sets srcs
        setLoaded((prev) => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      });
    });
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, [autoplayAll, safeCards]);

  // Helper to render a lightweight placeholder for iframe/youtube when not loaded (optional improvement)
  const makeIframePlaceholder = (src) => {
    // we will not embed thumbnail generation here; using a simple blank placeholder
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/50 text-white">
        Loading...
      </div>
    );
  };

  return (
    <div className="flex w-full bg-[#121212]">
      <div className="w-[3%] border border-gray-500" />
      <div className="w-[94%] border border-gray-500">
        <section className="w-full bg-[#121212]">
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2
              style={{ fontFamily: "ppneuebitbold" }}
              className="text-5xl md:text-5xl lg:text-7xl xl:text-9xl  text-white leading-tight"
            >
              beta testing people review
            </h2>
          </div>

          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1440: { slidesPerView: 4.5 },
            }}
            navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              // Swiper's activeIndex can be fractional when slidesPerView>1; using Math.round is safer
              setActiveIndex(Math.round(swiper.activeIndex));
            }}
            className="pb-10"
          >
            {safeCards.map((card, index) => {
              const norm = normalizeVideo(card.video);
              const isLoaded = loaded[index] || shouldLoadIndex(index) || autoplayAll;
              return (
                <SwiperSlide key={index}>
                  <article
                    className="relative bg-[#1A1A1A] overflow-hidden border border-gray-500"
                    ref={(el) => (slideRefs.current[index] = el)}
                    data-slide-index={index}
                  >
                    <div className="w-full h-[450px] bg-black/40">
                      {norm?.type === "video" ? (
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          // keep the actual src off DOM until we want to load it
                          data-src={norm.src}
                          muted
                          loop
                          playsInline
                          // autoPlay attribute is set for user agent hint, but playback will be controlled programmatically
                          autoPlay={autoplayAll || index === activeIndex}
                          onLoadedMetadata={() => markLoaded(index)}
                          preload={autoplayAll ? "auto" : "metadata"}
                          className="w-full h-[450px] object-cover"
                          // For devices where autoplayAll is true we still may need to set muted and play() programmatically in effect
                        />
                      ) : (
                        <>
                          {isLoaded ? (
                            <iframe
                              ref={(el) => (iframeRefs.current[index] = el)}
                              data-src={norm?.src}
                              title={`${card.name || "review"} embed`}
                              className="w-full h-[450px]"
                              allow="autoplay; encrypted-media; picture-in-picture"
                              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                              onLoad={() => markLoaded(index)}
                              loading="lazy"
                            />
                          ) : (
                            // lightweight placeholder until the intersection observer marks it loaded
                            <div className="w-full h-[450px]">{makeIframePlaceholder(norm?.src)}</div>
                          )}
                        </>
                      )}
                    </div>

                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/40 to-transparent px-4 pt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="bg-white/10 p-1 rounded-full">
                          {getPlatformIcon(card.platform)}
                        </div>
                        <div className="text-white text-left">
                          <h4 className="font-semibold text-sm">{card.name}</h4>
                          <p className="text-xs text-gray-200">{card.followers}</p>
                        </div>
                      </div>
                    </div>

                    {card.text && (
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <p className="text-white text-sm font-medium">{card.text}</p>
                      </div>
                    )}
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex justify-center mt-8 mb-5">
            <button className="bg-[#1A1A1A] text-white px-6 py-3 text-xl font-semibold">
              See more reviews
            </button>
          </div>
        </section>
      </div>
      <div className="w-[3%] border border-gray-500" />
    </div>
  );
}
