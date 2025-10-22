"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RealJourneysRealStoriesComponent() {
  const [selectedModel, setSelectedModel] = useState("Features");

  const option = ["Features", "Specifications"];

  // --- Render Blocks ---
  const renderFeatures = () => (
    <div className="flex flex-wrap w-full border border-gray-500 gap-10 justify-center items-center p-10">
      {[
        {
          title: "Reliable Backup",
          
          desc: "Powers your home for up to a day during outages.",
        },
        {
          title: "Solar Safeguard",
          desc: "Stops charging automatically when the battery is full.",
        },
        {
          title: "Intelligent Modes",
          desc: "Adjusts for power cuts and restores seamlessly.",
        },
        {
          title: "Expandable System",
          desc: "Add modules as your energy needs grow.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-[#1A1A1A] h-[8cm] w-[8cm] border border-gray-500 flex items-center p-4"
        >
          <div>
            <h3 className="text-lg text-white">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSpecifications = () => (
    <div className="flex flex-wrap w-full border border-gray-500 gap-10 justify-center items-center p-10">
      {[
        { title: "Size and Weight", desc: "37 kgs" },
        { title: "Energy Capacity", desc: "5 kWh" },
        { title: "Scalable", desc: "Up to 15 kWh" },
        {
          title: "Certification",
          desc: "IS 17387 · IEC 61000 Series · ROHS/UL 94V0",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-[#1A1A1A] h-[8cm] w-[8cm] border border-gray-500 flex items-center p-4"
        >
          <div>
            <h3 className="text-lg text-white">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );

  // --- Main Component ---
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-[#121212]">
      {/* Top grid row */}
      <div className="flex w-full">
        <div className="w-[20%] border-r border-b border-gray-500 bg-[#1A1A1A]" />
        <div className="w-[60%] flex flex-col justify-center items-center border-b border-gray-500 bg-[#121212] gap-10 p-8" />
        <div className="w-[20%] border-l border-b border-gray-500 bg-[#1A1A1A]" />
      </div>

      {/* Main content */}
      <div className="flex w-full">
        <div className="w-[3%] border-r border-b border-gray-500" />
        <div className="w-[94%] flex border-b border-gray-500 bg-[#121212] gap-10">
          <div className="w-full flex flex-col justify-center items-center">
            {/* Section Heading */}
            <h1
              style={{ fontFamily: "ppneuebitbold" }}
              className="text-9xl text-center text-white p-10 max-w-xl"
            >
              Build with Confidence
            </h1>

            <p className="text-xl text-white">
              From code to content, your data is always accessible and
              verifiable.
            </p>

            {/* Comparison image section */}
            <div className="flex w-full border border-gray-500 text-white mt-20">
              <div className="w-[70%] flex justify-start items-start">
                <img
                  className="w-full h-[55vh] object-cover"
                  src="/xbattery3.jpg"
                  alt="Battery Display"
                />
              </div>

              <div className="w-[30%] flex flex-col justify-center items-start bg-[#1A1A1A] pl-10">
                <h1 className="text-2xl">
                  <span className="text-2xl">
                    Up to <br />
                  </span>
                  <span
                    style={{ fontFamily: "ppneuebitbold" }}
                    className="text-8xl"
                  >
                    8x
                  </span>
                  <br />
                  optical-quality zoom
                </h1>

                <h1 className="text-2xl mt-14">
                  <span className="text-2xl">
                    All
                    <br />
                  </span>
                  <span
                    style={{ fontFamily: "ppneuebitbold" }}
                    className="text-8xl"
                  >
                    48MP
                  </span>
                  <br />
                  rear cameras
                </h1>
              </div>
            </div>

            {/* Apple-style comparison section */}
            <div className="h-[90vh] w-full flex flex-col justify-start items-center bg-[#121212]">
              <div className="w-full flex border-t border-gray-700">
                <div className="w-[70%] h-full flex justify-center items-center bg-[#1A1A1A] pl-6">
                  <h1
                    style={{ fontFamily: "ppneuebitbold" }}
                    className="text-9xl text-white"
                  >
                    Worth the upgrade? 100%.
                  </h1>
                </div>

                <div className="w-[30%] h-full flex flex-col justify-center items-start px-10  border-l border-gray-700">
                  <h1 className="text-white mb-4">
                    Select an iPhone to compare with iPhone 17 Pro
                  </h1>

                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="appearance-none w-full bg-[#121212] text-white text-lg border border-gray-600 p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 cursor-pointer"
                    style={{
                      fontFamily: "ppneuebitregular",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      backgroundImage:
                        'url(\'data:image/svg+xml;utf8,<svg fill="white" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 8l5 5 5-5H5z"/></svg>\')',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1rem",
                    }}
                  >
                    {option.map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>

                  <p className="text-gray-400 text-sm mt-3">
                    Compare every detail and see which iPhone suits you best.
                  </p>
                </div>
              </div>

              {/* CONDITIONAL RENDER: features or specifications */}
              <motion.div
                key={selectedModel}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="w-full"
              >
                {selectedModel === "Features"
                  ? renderFeatures()
                  : renderSpecifications()}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-[3%] border-l border-b border-gray-500" />
      </div>
    </section>
  );
}
