import React, { useState } from "react";

export default function HeroSection1() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col justify-start items-start text-white overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="https://videos.ctfassets.net/6sce2o5alp4f/4XvTyv2fI9Gv0uBFJNq17G/9e856c6ed770a4be0f72a2a04f5ac382/XBattery_1080p.mp4"
        autoPlay
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      />

      {/* 🔹 Fallback Image while video loads */}
      {!videoLoaded && (
        <img
          src="./home.png"
          alt="Loading..."
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* 🔹 Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* 🔹 Foreground Content */}
      <div className="relative z-10 text-center px-4 mt-[4.8rem] ml-[2.3rem]">
        <h1 className="max-w-2xl  text-5xl md:text-7xl lg:text-7xl font text-start">
          BharatBMS Powering India's Energy Future
        </h1>

        <p className=" max-w-[350px] text-start text-lg  mt-[2.2rem]  ">
          India’s first universal Battery Management System, scaling from 5kWh
          to megawatt applications with modular upgrades and unmatched
          reliability.
        </p>

        <div className=" mt-10 flex justify-start items-center gap-5">
          <button className="px-8  py-3 text-xl  bg-[#97F1E6] text-black  cursor-pointer">
            Pre-order
          </button>
          <button className="relative px-5 py-3 text-xl border-transparent  hover:text-[#F3564C]  cursor-pointer">
            Join waitlist
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F3564C]"></span>
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F3564C]"></span>
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F3564C]"></span>
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F3564C]"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
