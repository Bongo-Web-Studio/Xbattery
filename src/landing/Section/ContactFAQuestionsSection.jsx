"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactFAQuestionsSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // cleanup previous refs
    cardsRef.current = cardsRef.current.slice(0);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      // Timeline that will scrub with the page and pin the grid container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=80",      // when container top hits 80px from top of viewport
          end: () => `+=${600 + cards.length * 300}`, // length of scroll area (tweak as needed)
          scrub: 0.6,                // smooth scrub — animation follows scroll
          pin: containerRef.current, // pin the whole section/grid while animating
          pinSpacing: true,
          markers: false,            // set true to debug markers
        },
      });

      // initial state offscreen/faded
      gsap.set(cards, { y: 80, opacity: 0, scale: 0.98, transformOrigin: "center center" });

      // staggered entrance as timeline progresses
      tl.to(cards, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.35,   // delay between cards
          from: "left", // stagger order: left -> right
        },
      });

      // optional: a subtle lift or bounce after all cards are visible
      tl.to(cards, {
        y: -8,
        duration: 0.35,
        ease: "power1.out",
        stagger: 0.06,
        yoyo: true,
        repeat: 1,
      }, "+=0.1");

      // If you want each card to animate individually on the pin scroll (one card per portion),
      // you can split the timeline into smaller tweens keyed to progress (advanced).
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: 1,
      title: "Test your whole body",
      desc: "Get a comprehensive blood draw at one of our partner labs.",
      img: "https://images.unsplash.com/photo-1588776814546-efb7bb0b4e4c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "An actionable plan",
      desc: "Easy to understand results and a clear health plan personalized for you.",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "A connected ecosystem",
      desc: "Book additional diagnostics and connect your data for deeper insights.",
      img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0649?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="w-full  py-20 px-6">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-gray-900">How it works</h2>
        </div>

        {/* pinned grid that will animate */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {steps.map((step, i) => (
            <div
              key={step.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="flex flex-col items-center text-center bg-white"
            >
              <div className="rounded-2xl overflow-hidden shadow-md mb-6 w-full aspect-[4/3]">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-center mb-3">
                <span className="text-white bg-orange-500 rounded px-3 py-1 font-semibold">
                  {step.id}
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
