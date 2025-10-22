"use client";
import React from "react";

export default function New2() {
  const speakers = [
    {
      name: "Tabitha Brown",
      title: "ACTRESS, ENTREPRENEUR, 4X BESTSELLING AUTHOR",
      tag: "KEYNOTE SPEAKER",
      bg: "bg-[#00C8FF]",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Tabitha_Brown_2021.jpg",
    },
    {
      name: "Ravi Rajamani",
      title: "HEAD OF GEN AI\nGOOGLE CLOUD",
      company: "Google Cloud",
      bg: "bg-[#CEFF00]",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Blank_portrait_placeholder.png",
    },
    {
      name: "Jo Redfern",
      title: "FOUNDER\nFUTRHOOD MEDIA",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Blank_portrait_placeholder.png",
      bg: "bg-white",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Blank_portrait_placeholder.png",
    },
    {
      name: "Andy Pearson",
      title: "VP OF CREATIVE\nLIQUID DEATH",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Blank_portrait_placeholder.png",
      bg: "bg-[#DCE1E8]",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Blank_portrait_placeholder.png",
    },
  ];

  return (
    <section className="w-full bg-[#E8EBEF] flex flex-col">
      {/* Header */}
      <div className="bg-[#CEFF00] text-black flex flex-wrap items-center justify-between px-8 py-6">
        <div className="text-3xl font-bold">
          Hurry! Tickets are almost gone.
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 text-base">
          <div className="flex items-center gap-2">
            <span>📅</span> <span>10/23/2025</span>
          </div>
          <span>/</span>
          <div className="flex items-center gap-2">
            <span>📍</span> <span>NYC AND VIRTUAL</span>
          </div>
        </div>
        <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800">
          Register now →
        </button>
      </div>

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
                  className="mt-4 h-6 object-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Colored Footer Band */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-pink-500" />
        <div className="flex-1 bg-lime-400" />
        <div className="flex-1 bg-blue-600" />
        <div className="flex-1 bg-red-500" />
        <div className="flex-1 bg-purple-600" />
      </div>
    </section>
  );
}
