"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RealJourneysRealStoriesComponent() {
  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <div className="flex w-full">
        <div className="w-[20%]  border-r border-b border-gray-500 bg-[#1A1A1A] "></div>
        <div className="w-[60%] flex flex-col justify-center items-center  border-b border-gray-500  bg-[#121212]  gap-10 p-5">
          {" "}
          {/* Heading */}
          <h1
            style={{ fontFamily: "ppneuebitbold" }}
            className="text-white text-[180px] "
          >
            Xbattery 5 kWh
          </h1>
          {/* Features */}
          <div className="flex gap-5 justify-start items-start w-full ">
            <div className="w-[3rem] h-[3rem] bg-[#FF5A4F]"></div>
            <h1 className="text-white text-xl h-[3rem] flex justify-center items-center bg-[#1A1A1A] p-4">
              Reliable Backup – Powers your home for up to a day during outages.
            </h1>
          </div>
          <div className="flex gap-5 justify-end items-end w-full pr-[rem]">
            <h1 className="text-white text-xl h-[3rem] flex justify-center items-center bg-[#1A1A1A] p-4">
              Solar Safeguard – Stops charging automatically when the battery is
              full.
            </h1>
            <div className="w-[3rem] h-[3rem] bg-[#05DF72]"></div>
          </div>
          <div className="flex gap-5 justify-start items-start w-full ">
            <div className="w-[3rem] h-[3rem] bg-[#FF5A4F]"></div>
            <h1 className="text-white text-xl h-[3rem] flex justify-center items-center bg-[#1A1A1A] p-4">
              Intelligent Modes – Adjusts for power cuts and restores
              seamlessly.
            </h1>
          </div>
          <div className="flex gap-5 justify-end items-end w-full pr-[rem]">
            <h1 className="text-white text-xl h-[3rem] flex justify-center items-center bg-[#1A1A1A] p-4">
              Expandable System – Add modules as your energy needs grow.
            </h1>
            <div className="w-[3rem] h-[3rem] bg-[#05DF72]"></div>
          </div>
          {/* Specifications */}
          <div className="flex gap-5 justify-start items-start w-full ">
            <div className="w-[3rem] h-[3rem] bg-[#05DF72]"></div>
            <h1 className="text-white text-xl h-[3rem] flex justify-center items-center bg-[#1A1A1A] p-4">
              Size and Weight – 37 kgs
            </h1>
          </div>
          <div className="flex gap-5 justify-end items-end w-full pr-[rem]">
            <h1 className="text-white text-xl h-[3rem] flex justify-center items-center bg-[#1A1A1A] p-4">
              Energy Capacity – 5 kWh
            </h1>
            <div className="w-[3rem] h-[3rem] bg-[#05DF72]"></div>
          </div>
          <div className="flex gap-5 justify-start items-start w-full ">
            <div className="w-[3rem] h-[3rem] bg-[#05DF72]"></div>
            <h1 className="text-white text-xl h-[3rem] flex justify-center items-center bg-[#1A1A1A] p-4">
              Scalable – Up to 15 kWh
            </h1>
          </div>
          <div className="flex gap-5 justify-end items-end w-full pr-[rem]">
            <h1 className="text-white text-xl h-[3rem] flex justify-center items-center bg-[#1A1A1A] p-4">
              Certification – IS 17387 | IEC 61000 Series | ROHS / UL 94V0
            </h1>
            <div className="w-[3rem] h-[3rem] bg-[#05DF72]"></div>
          </div>
        </div>
        <div className="w-[20%]   border-l border-b border-gray-500 bg-[#1A1A1A] "></div>
      </div>
    </section>
  );
}
