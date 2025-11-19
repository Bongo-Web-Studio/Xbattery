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
       
        </div>
      </div>

      {/* bottom spacer */}
      <div className="h-10" />
    </section>
  );
}
