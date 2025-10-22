"use client";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import LandingPage from "./landing/LandingPage";
import NavbarSection from "./landing/Section/NavbarSection";
import StartBooking from "./StartBooking/StartBooking";
import Footer from "./landing/Section/FooterSection";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-[#0C0D0E] to-[#040201] overflow-hidden relative min-h-screen flex flex-col"
    
    >
      {/* 🔹 Top News Bar
      <div className="h-[5vh]  bg-[#A46FF1] flex  justify-center items-center gap-2 sm:gap-5 text-center px-3">
        <h1 className="text-base sm:text-lg md:text-2xl text-white font-medium leading-tight">
          Xbattery Raises{" "}
          <span
            style={{ fontFamily: "ppneuebitbold" }}
            className="text-2xl sm:text-3xl md:text-4xl ml-1 sm:ml-2 mr-1 sm:mr-2 text-white"
          >
            $2.3M
          </span>{" "}
          in Seed Round
        </h1>

        <button className="text-xs sm:text-sm md:text-lg bg-black text-white px-3 py-1  hover:bg-black/90 transition">
          Read More
        </button>
      </div> */}

      {/* 🔹 Navbar */}
        <NavbarSection />
    

      {/* 🔹 Main Content Routes */}
]
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/startbooking" element={<StartBooking />} />
        </Routes>
    

 
        <Footer />
   
    </div>
  );
}
