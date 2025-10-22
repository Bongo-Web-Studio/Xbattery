"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaInstagram, FaYoutube, FaXTwitter, FaFacebook } from "react-icons/fa6";

export default function CTASection() {
  const cards = [
    {
      name: "@mytechceo",
      followers: "254k followers",
      video: "/videos/video1.mp4", // replace with real URLs
      text: "you're going to feed them Maca Root",
      platform: "instagram",
    },
    {
      name: "@emmyxtech",
      followers: "368k followers",
      video: "/videos/video2.mp4",
      text: "and early cancer markers,",
      platform: "youtube",
    },
    {
      name: "@stefarmstead",
      followers: "90.2k followers, Alo wellness club trainer",
      video: "/videos/video3.mp4",
      text: "and I scored a 69 out of 100, which makes a whole lot of sense.",
      platform: "x",
    },
    {
      name: "@avnibarman_",
      followers: "228k followers",
      video: "/videos/video4.mp4",
      text: "and...",
      platform: "facebook",
    },
    {
      name: "Quentin Johnston",
      followers: "NFL player",
      video: "/videos/video5.mp4",
      text: "",
      platform: "instagram",
    },
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "instagram":
        return <FaInstagram className="text-pink-500 text-xl" />;
      case "youtube":
        return <FaYoutube className="text-red-500 text-xl" />;
      case "x":
        return <FaXTwitter className="text-gray-900 text-xl" />;
      case "facebook":
        return <FaFacebook className="text-blue-600 text-xl" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
       beta testing people review
        </h2>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
          1440: { slidesPerView: 4.5 },
        }}
        navigation
        className="pb-10"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
              <video
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[450px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/40 to-transparent px-4 pt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="bg-white/10 backdrop-blur-md p-1 rounded-full">
                    {getPlatformIcon(card.platform)}
                  </div>
                  <div className="text-white text-left">
                    <h4 className="font-semibold text-sm">{card.name}</h4>
                    <p className="text-xs text-gray-200">{card.followers}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <p className="text-white text-sm font-medium">{card.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          See more reviews
        </button>
      </div>
    </section>
  );
}
