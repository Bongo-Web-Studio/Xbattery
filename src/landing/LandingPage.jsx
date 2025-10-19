"use client";
import { useEffect, useState } from "react";

// Sections
import HeroSection1 from "./Section/HeroSection1";
import HeroSection from "./Section/HeroSection";
import FooterSection from "./Section/FooterSection";
import FooterSectionMobile from "./Section/FooterSectionMobile";
import ContactFAQuestionsSection from "./Section/ContactFAQuestionsSection";
import JourneyCountSection from "./Section/JourneyCountSection";

// Components
import BookingComponent from "./Components/BookingComponent";
import ChooseYourPerfectRideComponent from "./Components/ChooseYourPerfectRideComponent";
import RealJourneysRealStoriesComponent from "./Components/RealJourneysRealStoriesComponent";
import PopularCabRoutesComponent from "./Components/PopularCabRoutesComponent";
import CTASection from "./Components/CTASection";
import CTASectionMobile from "./Components/CTASectionMobile";

/**
 * LandingPage Component
 * ----------------------------------------
 * Main entry page that assembles all hero, booking,
 * journey, story, and contact sections together.
 *
 * - Handles mobile vs desktop layout dynamically
 * - Uses responsive CTA/footer components
 * - Includes promotional video in between sections
 */

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen width for responsive layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full bg-black overflow-hidden">
      {/* 🌟 Hero Section */}
      <HeroSection1 />
      {/* Optional alternate hero */}
  

      {/* 🚕 Booking */}
      <BookingComponent />

      {/* 🛞 Choose Your Ride */}
      <ChooseYourPerfectRideComponent />
    {/* <HeroSection /> */}
   

      {/* 📊 Journey Count */}
      <JourneyCountSection />

      {/* 🌍 Real Stories */}
      {/* <RealJourneysRealStoriesComponent /> */}

      {/* 🛣️ Popular Routes */}
      {/* <PopularCabRoutesComponent /> */}

      {/* 📞 Contact & FAQ */}
      {/* <ContactFAQuestionsSection /> */}

      {/* ⚡ Responsive CTA */}
      {/* {isMobile ? <CTASectionMobile /> : <CTASection />} */}

      {/* 🧭 Footer */}
      {/* {isMobile ? <FooterSectionMobile /> : <FooterSection />} */}
    </main>
  );
}
