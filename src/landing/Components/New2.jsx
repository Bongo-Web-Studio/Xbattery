"use client";
import React from "react";

export default function New2() {
  const speakers = [
    {
      name: "Satish Reddy ",
      title: "Founder & CEO of Xbattery ",
      tag: "Ex-Microsoft",
      bg: "bg-[#96F1E8]",
      img: "./ceo.png",
    },
    {
      name: "Sonu Mishra",
      title: "Co-Founder & CTO of Xbattery",
      company: "CTO",
      bg: "bg-[#A46FF1]",
      img: "./cto.png",
    },
    {
      name: "Varshith Rao",
      title: "Co-founder  of Xbattery ",
      companyLogo:
        "https://xbattery.energy/_next/image?url=%2Fimages%2Flogo1.webp&w=384&q=75",
      bg: "bg-[#8DF28B]",
      img: "./cmo.png",
    },
    {
      name: "Xbattery Team",
      title: "ower Whole Team ",
      companyLogo:
        "https://xbattery.energy/_next/image?url=%2Fimages%2Flogo1.webp&w=384&q=75",
      bg: "bg-[#FF5A4F]",
      img: "./team.png",
    },
  ];

  return (
    <section className="w-full bg-[#E8EBEF] flex flex-col">
      {/* Speaker Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 bg-[#E8EBEF]">
        {speakers.map((spk, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-full bg-[#E8EBEF] flex justify-center">
              <img
                src={spk.img}
                alt={spk.name}
                className="w-full h-[320px] object-cover grayscale"
              />
            </div>
            <div
              className={`${spk.bg} text-left w-full px-6 py-6 h-full flex flex-col justify-between`}
            >
              <div>
                <h2 className="text-2xl font-bold text-black mb-2">
                  {spk.name}
                </h2>
                <p className="text-sm text-black whitespace-pre-line">
                  {spk.title}
                </p>
              </div>
              {spk.tag && (
                <div className="mt-4 inline-block border border-black px-3 py-1 text-xs font-semibold rounded-full">
                  {spk.tag}
                </div>
              )}
              {spk.company && (
                <div className="mt-4 font-semibold text-black">
                  {spk.company}
                </div>
              )}
              {spk.companyLogo && (
                <img
                  src={spk.companyLogo}
                  alt="logo"
                  className="mt-4 h-6 object-contain "
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Colored Footer Band */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-[#FC45AC]" />
        <div className="flex-1 bg-[#8DF28B]" />
        <div className="flex-1 bg-[#97F1E6]" />
        <div className="flex-1 bg-[#FF5A4F]" />
        <div className="flex-1 bg-[#A46FF1]" />
      </div>
    </section>
  );
}
