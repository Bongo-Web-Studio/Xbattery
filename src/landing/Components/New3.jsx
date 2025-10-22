import React, { useState } from "react";

// Place your news images next to this component (e.g. ./news-1.jpg, ./news-2.jpg ...)
// If you want to use the provided dd.png, put it in the same folder and import like:
// import dd from './dd.png'

export default function NewsSection({ items }) {
  // fallback sample items — replace image paths with your own files
  const sample = [
    {
      id: 1,
      date: "OCTOBER 10, 2025",
      title: "Heimdall Power’s Neuron Named One of TIME’s Best Inventions of 2025",
      image: "./news-1.jpg",
      headlineStyle: true,
    },
    {
      id: 2,
      date: "SEPTEMBER 2, 2025",
      title: "Heimdall Power Strengthens Executive Leadership Team",
      image: "./news-2.jpg",
    },
    {
      id: 3,
      date: "AUGUST 21, 2025",
      title: "Meet our new CPO, Brian Berry",
      image: "./news-3.jpg",
    },
    {
      id: 4,
      date: "AUGUST 7, 2025",
      title:
        "[Whitepaper] Grid Optimization Gets Real: One Year Inside America's Largest DLR Deployment",
      image: "./news-4.jpg",
    },
  ];

  const news = items && items.length ? items : sample;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full max-w-6xl mx-auto px-8 py-12">
      <h2 className="text-5xl font-bold mb-8">News</h2>

      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Left: large image panel */}
        <div className="col-span-5">
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-lg">
            {/* background panel to emulate blue filled card from screenshot */}
            <div className="absolute inset-0 bg-[#3f6fae]" />

            {/* image (changes with activeIndex). The image is centered and has smooth transition */}
            <div className="relative w-full h-[430px] flex items-center justify-center p-6">
              <img
                src={news[activeIndex].image}
                alt={news[activeIndex].title}
                className="max-w-full max-h-full object-contain transition-transform duration-500 ease-out transform hover:scale-[1.02]"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Right: list */}
        <div className="col-span-7">
          <div className="space-y-6">
            {news.map((n, i) => (
              <div
                key={n.id}
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                className={`flex items-start gap-6 p-4 rounded-sm transition-all duration-200 ${
                  i === 0
                    ? "bg-black text-white p-6 rounded-sm"
                    : "bg-transparent text-gray-900"
                }`}
              >
                {/* date badge */}
                <div className="flex-shrink-0">
                  <span
                    className={`inline-block text-xs tracking-widest font-semibold px-3 py-1 border-2 border-black rounded-sm ${
                      i === 0 ? "bg-orange-400 text-black border-transparent" : "bg-black text-white"
                    }`}
                  >
                    {n.date}
                  </span>
                </div>

                {/* title */}
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-extrabold leading-tight transition-colors duration-150 ${
                      i === 0 ? "text-white" : "text-black"
                    }`}
                  >
                    {n.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Small notes to help you make it pixel perfect:
        - Put actual images in the same folder (news-1.jpg...news-4.jpg) or pass `items` prop
        - To use the dd.png you uploaded, import it at top and set the image property to that import
        - Tweak spacing and sizes (the image container height uses h-[430px]) to match exact pixel height
        - If you want the first item to stick as the "active" header (black background), set headlineStyle: true
      */}
    </section>
  );
}
