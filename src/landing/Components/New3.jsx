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
      title: "Your Battery Management System Is Cooking Itself to Death",
      image:
        "https://xbattery.energy/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6sce2o5alp4f%2F7gdTcp5H14GYZa4n7MQDjy%2F93237926734abb5b81a208cb7ec85e66%2FSBC_Xbattery.png&w=1920&q=75",
      headlineStyle: true,
    },
    {
      id: 2,
      date: "SEPTEMBER 2, 2025",
      title: "How AI is Shaping Safer EV Batteries",
      image:
        "https://xbattery.energy/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6sce2o5alp4f%2F6gyEK4m5R9QKNIg0PgrXht%2Fedfa19985bcb40c27eb99a249d371ec8%2FAI_Xbattery.png&w=1920&q=75",
    },
    {
      id: 3,
      date: "AUGUST 21, 2025",
      title: "Switched Capacitor Based Active Balancing",
      image:
        "https://xbattery.energy/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6sce2o5alp4f%2F7LuvrunxJ2nMo3viCtnCcm%2F1413000cee99d2dae7530a9a35709128%2Fdownload__11_.png&w=1920&q=75",
    },
    {
      id: 4,
      date: "AUGUST 7, 2025",
      title:
        "Active Charge Balancing of Li-ion Battery Packs: An In-Depth Guide",
      image:
        "https://images.ctfassets.net/6sce2o5alp4f/4bn9xernnfJCHuBofttzEr/006c314e3fa442339fac7663757b6d21/Active_Charge.png",
    },
  ];

  const news = items && items.length ? items : sample;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex border-t border-gray-500 w-full h-full bg-[#121212] ">
      <div className="w-[3%] border-r  border-gray-500"></div>
      <div className="w-[94%] flex justify-center items-center  border-gray-500">
        {" "}
        <section className="w-full bg-[#1A1A1A]  p-2 lg:p-10">
          <h2
            style={{ fontFamily: "ppneuebitbold" }}
            className=" text-7xl lg:text-9xl font-bold mb-8 text-white"
          >
            Latest Blogs
          </h2>

          <div className="flex lg:flex-row flex-col  gap-8 items-start">
            {/* Left: large image panel */}
            <div className="">
              <div className="relative overflow-hidden border-3 border-white shadow-lg">
                {/* background panel to emulate blue filled card from screenshot */}
                <div className="absolute inset-0 bg-[#3f6fae]" />

                {/* image (changes with activeIndex). The image is centered and has smooth transition */}
                <div className="relative w-full h-[430px] flex items-center justify-center ">
                  <img
                    src={news[activeIndex].image}
                    alt={news[activeIndex].title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-[1.02]"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            {/* Right: list */}
            <div className="">
              <div className="space-y-6">
                {news.map((n, i) => (
                  <div
                    key={n.id}
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    className={`flex lg:flex-row flex-col items-start gap-6 p-4 transition-all duration-200  hover:text-black   ${
                      i === 0
                        ? "bg-[#96F1E8] text-black p-6  hover:text-black "
                        : "hover:bg-[#96F1E8]  hover:text-black   text-black"
                    }`}
                  >
                    {/* date badge */}
                    <div className="flex-shrink-0 ">
                      <span
                        className={`inline-block text-xs tracking-widest font-semibold px-3 py-1  ${
                          i === 0
                            ? "bg-[#A46FF1] text-black "
                            : "bg-[#A46FF1] text-black "
                        }`}
                      >
                        {n.date}
                      </span>
                    </div>

                    {/* title */}
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-extrabold leading-tight transition-colors duration-150 ${
                          i === 0 ? "text-black" : "text-white"
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
      </div>
      <div className="w-[3%] border-l border-gray-500"></div>
    </div>
  );
}
