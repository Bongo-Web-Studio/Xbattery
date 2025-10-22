"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FeaturesAndSpecificationsComponent() {
  const [selectedModel, setSelectedModel] = useState("Features");

  const options = ["Features", "Specifications"];

  const featuresList = [
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
  ];

  const specsList = [
    { title: "Size and Weight", desc: "37 kgs" },
    { title: "Energy Capacity", desc: "5 kWh" },
    { title: "Scalable", desc: "15 kWh" },
    {
      title: "Certification",
      desc: "IS 17387 · IEC 61000 Series · ROHS/UL 94V0",
    },
  ];

  const renderFeatures = () => (
    <div className="flex flex-wrap w-full border border-gray-500 gap-10 justify-center items-center p-10">
      {featuresList.map((item, idx) => (
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
      {specsList.map((item, idx) => (
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
              className=" text-7xl mt-5 lg:mt-0 lg:text-[200px] text-center text-white  max-w-5xl"
            >
              Xbattery 5 kWh
            </h1>

            <p className="text-xl text-white p-2">
              High-performance lithium battery packs designed for India.
            </p>

            {/* Comparison image section */}
            <div className="flex lg:flex-row flex-col  w-full border border-gray-500 text-white lg:mt-20">
              <div className=" w-full lg:w-[70%] flex justify-start items-start">
                <img
                  className="w-full h-[25vh] lg:h-[55vh] object-cover"
                  src="/xbattery3.jpg"
                  alt="Xbattery 5 kWh"
                />
              </div>

              <div className="lg:w-[30%] flex lg:flex-col justify-center items-start bg-[#1A1A1A] p-2  lg:pl-10">
                <h1 className="text-2xl  w-[50%] lg:w-full">
                  <span className="text-xl">Capacity</span>
                  <br />
                  <span
                    style={{ fontFamily: "ppneuebitbold" }}
                    className=" text-7xl lg:text-8xl"
                  >
                    5 kWh
                  </span>
                </h1>

                <h1 className="text-2xl lg:mt-10 w-[50%] lg:w-full">
                  <span className="text-xl">Expandable   Up to </span>
                  <br />
                  <span
                    style={{ fontFamily: "ppneuebitbold" }}
                    className="text-7xl lg:text-8xl"
                  >
                  15 kWh
                  </span>
                </h1>
              </div>
            </div>

            {/* Apple-style comparison section */}
            <div className=" w-full flex flex-col justify-start items-center bg-[#121212]">
              <div className="w-full flex lg:flex-row flex-col  border-t border-gray-700">
                {/* 🔹 DYNAMIC LEFT TITLE */}
                <div className=" w-full lg:w-[70%] h-full flex justify-center items-center bg-[#1A1A1A] pl-6">
                  <motion.h1
                    key={selectedModel}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontFamily: "ppneuebitbold" }}
                    className=" text-7xl lg:text-9xl text-white"
                  >
                    {selectedModel}
                  </motion.h1>
                </div>

                {/* Right side dropdown */}
                <div className=" w-full mb-5 lg:mb-0 lg:w-[30%] h-full flex flex-col justify-center items-start px-10  border-l border-gray-700">
                  <h1 className="text-white mb-4">
                    Select with Xbattery 5 kWh
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
                    {options.map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Conditional render */}
              <motion.div
                key={selectedModel}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="w-full "
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
