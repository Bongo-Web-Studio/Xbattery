import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

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
  }, []); // ✅ run once

  return (
    <div className="bg-gradient-to-r from-[#0C0D0E] to-[#040201] overflow-hidden relative">
      <div className="h-[7vh] bg-[#A46FF1] flex justify-center items-center gap-5 ">
        <h1 className="text-2xl">Xbattery Raises <span           style={{ fontFamily: "ppneuebitbold" }} className="text-4xl ml-2 mr-2 text-white"> $2.3M </span> in Seed Round</h1>

        <h1 className="text-xl bg-black text-white p-1">Read More</h1>
      </div>
      <NavbarSection />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/startbooking" element={<StartBooking />} />
      </Routes>

      <Footer />
    </div>
  );
}
