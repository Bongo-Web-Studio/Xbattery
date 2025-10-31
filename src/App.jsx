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
     

      {/* 🔹 Navbar */}
        <NavbarSection />
    

      {/* 🔹 Main Content Routes */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/startbooking" element={<StartBooking />} />
        </Routes>
    

 
        <Footer />
   
    </div>
  );
}
