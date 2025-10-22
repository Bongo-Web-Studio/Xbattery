"use client";
import { useEffect, useState } from "react";

// Sections
import HeroSection1 from "./Section/HeroSection1";
import HeroSection from "./Section/HeroSection";
import FooterSection from "./Section/FooterSection";
import FooterSectionMobile from "./Section/FooterSectionMobile";
import ContactFAQuestionsSection from "./Section/ContactFAQuestionsSection";
import JourneyCountSection from "./Section/PreOrderSection";

// Components
import BookingComponent from "./Components/TrustedByMarqueeComponent";
import ChooseYourPerfectRideComponent from "./Components/IntroducingBharatBMSComponent";
import RealJourneysRealStoriesComponent from "./Components/FeaturesAndSpecificationsComponent";
import PopularCabRoutesComponent from "./Components/PopularCabRoutesComponent";
import CTASection from "./Components/CTASection";
import CTASectionMobile from "./Components/CTASectionMobile";
import New2 from "./Components/New2";
import NewsSection from "./Components/New3";
import Footer from "./Section/FooterSection";
import TrustedByMarqueeComponent from "./Components/TrustedByMarqueeComponent";
import IntroducingBharatBMSComponent from "./Components/IntroducingBharatBMSComponent";
import FeaturesAndSpecificationsComponent from "./Components/FeaturesAndSpecificationsComponent";
import PreOrderSection from "./Section/PreOrderSection";

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
      <TrustedByMarqueeComponent />

      {/* 🛞 Choose Your Ride */}
      <IntroducingBharatBMSComponent />
      {/* <HeroSection /> */}

      {/* 📊 Journey Count */}
      <PreOrderSection />

      {/* 🌍 Real Stories */}
      <FeaturesAndSpecificationsComponent />

      {/* 🛣️ Popular Routes */}
      <PopularCabRoutesComponent />

      {/* 📞 Contact & FAQ */}
      <ContactFAQuestionsSection />

      {/* ⚡ Responsive CTA */}
      <CTASection />
      <New2/>
      <NewsSection/>

    </main>
  );
}
