"use client";
import React from "react";
import { CheckSquare, Repeat, Zap, FileCheck } from "lucide-react";

export default function IntroducingBharatBMSComponent() {
  const features = [
    {
      id: 1,
      icon: (
        <CheckSquare
          className="text-purple-400 group-hover:text-purple-400 transition-colors duration-300"
          size={40}
        />
      ),
      text: "monitoring & balancing up to 18S, ±2mV",
    },
    {
      id: 2,
      icon: (
        <Repeat
          className="text-[#F3564C] group-hover:text-[#F3564C] transition-colors duration-300"
          size={40}
        />
      ),
      text: "Comm — CAN FD, UART, SPI, Ethernet",
    },
    {
      id: 3,
      icon: (
        <Zap
          className="text-teal-400 group-hover:text-teal-400 transition-colors duration-300"
          size={40}
        />
      ),
      text: "Safety — ISO 26262 & fault diagnostics",
    },
    {
      id: 4,
      icon: (
        <FileCheck
          className="text-green-400 group-hover:text-green-400transition-colors duration-300"
          size={40}
        />
      ),
      text: "Thermal — real-time sensing & runaway detect ",
    },
  ];

  return (
    <div className="w-full h-full bg-[#121212] flex flex-col justify-center items-center border-[#41424A] relative overflow-hidden">
      {/* 🔹 Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="w-full h-full"></div>
      </div>

      {/* Top Border Row */}
      <div className="w-full flex h-[4rem] relative z-10">
        <div className="w-[3%]  border-[#41424A] bg-[#FFFFFF]"></div>
        <div className="w-[94%] border-t border-b border-[#41424A]"></div>
        <div className="w-[3%]  border-[#41424A] bg-[#FFFFFF] "></div>
      </div>

      {/* Main Content */}
      <div className="w-full flex  relative z-10">
        <div className="w-[3%] border-b border-r border-[#41424A]"></div>
        <div className="w-[94%] border-b border-[#41424A]">
          <div>
            {/* Top Section */}
            <div className="w-full  flex lg:flex-row flex-col justify-start items-start ">
              <div className=" w-full lg:w-[75%] text-white  p-2 lg:p-6">
                <h1
                  style={{ fontFamily: "ppneuebitbold" }}
                  className=" text-5xl lg:text-9xl lg:max-w-5xl uppercase leading-[0.6]"
                >
                  Introducing BharatBMS India's scalable 800V BMS
                </h1>
              </div>
              <div className=" w-full lg:w-[25%] border-l border-[#41424A] h-full flex lg:justify-center items-center p-2 lg:p-0">
                <img
                  className="lg:w-full lg:h-full w-[90vw] h-[35vh]"
                  src="./mb3.png"
                  alt="BharatBMS Hero"
                />
              </div>
            </div>

            {/* --- FEATURE GRID SECTION --- */}
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              className="w-full lg:h-[20vh] border-b border-[#41424A] flex lg:flex-row flex-col   justify-between items-start  lg:items-center lg:px-10 backdrop-blur-sm bg-[#1A1A1A] relative z-20"
            >
              {features.map((item) => (
                <div
                  key={item.id}
                  className="group flex pl-10 items-center gap-5 w-[19.2rem] py-5  bg-[#1A1A1A]  transition-all duration-300 cursor-pointer"
                >
                  {item.icon}
                  <p className="text-white text-xl font-medium  transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full lg:h-[35vh]   bg-[#1A1A1A] lg:flex lg:pl-3 text-[#878A9D]">
              <div className="border-r border-[#41424A] w-full lg:w-[33%] h-full flex justify-end items-end p-10 hover:text-[#A56EF1]">
                <h1 className="text-2xl">Scalability — modular expansion</h1>
              </div>

              <div className="border-r border-[#41424A] w-full lg:w-[33%] h-full flex justify-end items-end p-10 hover:text-[#F3564C]">
                <h1 className="text-2xl">Diagnostics — real-time monitoring</h1>
              </div>
              <div className="border-r border-[#41424A] w-full lg:w-[33%] h-full flex justify-end items-end p-10 hover:text-[#97F0E5]">
                <h1 className="text-2xl">
                  Software — SOC/SOH & C-optimized firmware
                </h1>
              </div>
              <div className="border-r border-[#41424A] w-full lg:w-[33%] h-full flex justify-end items-end p-10  hover:text-[#8CF28A]">
                <h1 className="text-2xl">
                  Made in India — OEM partnerships Jan 2025
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[3%] border-b border-l border-[#41424A]"></div>
      </div>

      {/* Top Border Row */}
      <div className="w-full flex h-[4rem] relative z-10">
        <div className="w-[3%] border-t border-r border-[#41424A] bg-[#FFFFFF]"></div>
        <div className="w-[94%] border-t border-b border-[#41424A]"></div>
        <div className="w-[3%] border-t  border-l border-[#41424A] bg-[#FFFFFF] "></div>
      </div>
    </div>
  );
}
