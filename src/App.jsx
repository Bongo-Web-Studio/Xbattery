import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import LandingPage from "./landing/LandingPage";
import NavbarSection from "./landing/Section/NavbarSection";
import StartBooking from "./StartBooking/StartBooking";
import FooterSectionMobile from "./landing/Section/FooterSectionMobile";
import FooterSection from "./landing/Section/FooterSection";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // ✅ run once

  return (
    <div className="bg-gradient-to-r from-[#0C0D0E] to-[#040201] overflow-hidden">
      <NavbarSection />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/startbooking" element={<StartBooking />} />
      </Routes>

      {isMobile ? <FooterSectionMobile /> : <FooterSection />}

      <img
        className="w-full h-screen object-contain"
        src="./Screenshot 2025-10-18 051528.png"
        alt=""
      />
    </div>
  );
}
