// AIWorkflowSection.jsx
// React + Tailwind component — always shows video for the active tab.
// Drop this single-file component into any React project (Vite / CRA / Next.js).
// Usage:
// <AIWorkflowSection />
// or provide per-tab videos:
// <AIWorkflowSection videoSrc="/videos/default.mp4" videos={{"AI Agents":"/videos/agents.mp4"}} />

import React, { useState } from "react";

const DEFAULT_TABS = [
  "AI Workflows",
  "AI Agents",
  "AI Chatbots",
  "Tables",
  "Interfaces",
  "Canvas",
  "Enterprise",
  "Functions",
  "8,000 apps",
];

export default function AIWorkflowSection({
  videoSrc = "https://xbattery.energy/videos/steps/4.mp4", // fallback video if a tab-specific video isn't provided
  videos = {}, // optional: { "AI Workflows": "url", "AI Agents": "url2", ... }
}) {
  const [active, setActive] = useState(DEFAULT_TABS[0]);

  // Always pick a video to play: prefer tab-specific, otherwise fallback to videoSrc
  const activeVideo = videos[active] || videoSrc;

  return (
    <section className="w-full flex flex-col items-center mt-10">
      {/* Top thin announcement bar */}
      <div className="w-full border-b border-transparent">
        <div className="w-full ">
          <div className="flex items-center justify-center text-[12px] uppercase tracking-wider py-3 text-[#6b6b6b]">
            <span className="inline-flex items-center mr-2">
              <span className="w-2 h-2  bg-[#FF5A4F]  inline-block mr-2 shadow-sm" />
            </span>
            YOUR COMPLETE TOOLKIT FOR AI AUTOMATION
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-[1250px] w-full  ">
        <div className="mt-2 bg-white  border border-gray-100 flex justify-center items-center shadow-sm">
          <nav className="flex items-center gap-4 px-4 py-3 overflow-x-auto">
            {DEFAULT_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative px-4 py-2 text-sm font-semibold shadow-sm border ${
                  active === tab
                    ? "text-[#222222] bg-white border-[#f0f0f0]"
                    : "text-[#6b6b6b] bg-transparent border-transparent"
                }`}
                aria-current={active === tab ? "page" : undefined}
              >
                {active === tab && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[92%] h-0.5 bg-[#FF5A4F] rounded" />
                )}
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero / Media area */}
      <div className="max-w-[1250px] w-full">
        <div className="relative mt-6 bg-gradient-to-r from-[#efe9df] via-[#f3efe9] to-[#e6efe8]  overflow-hidden">
          <div className=" flex justify-center">
            <div className="relative w-full">
              <div className=" shadow-[0_6px_30px_rgba(0,0,0,0.06)] overflow-hidden border border-[#e9e6e2] bg-white relative">
                {/* Always render a video for the active tab */}
                <video
                  src={activeVideo}
                  className="w-full h-auto object-cover block"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* Label overlay (optional) */}
                <div className="absolute left-6 top-6 px-3 py-1 rounded-md bg-black/40 text-white text-xs font-medium">
                  {active}
                </div>

                {/* bottom-right play button (decorative) */}
                <button className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-black/70 flex items-center justify-center shadow-lg">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.5L12 8L2 14.5V1.5Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA row under media */}
      <div className="max-w-[1250px] w-full px-6">
        <div className="flex items-center justify-center gap-4 py-8">
          <svg className="w-5 h-5 text-[#ff7a18]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2L3 13h6l-2 9L21 6h-6l-4-4z" fill="#ff7a18" />
          </svg>
          <div className="text-center text-[15px] font-semibold tracking-wide text-[#222222]">GET STARTED FAST WITH PRE-BUILT TEMPLATES</div>
        </div>
      </div>

      {/* bottom spacer */}
      <div className="h-10" />
    </section>
  );
}
