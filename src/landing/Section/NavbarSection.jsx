"use client";
import React, { useState, useMemo, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Lazy load icons to reduce initial JS bundle
const FaBars = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaBars })));
const FaTimes = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaTimes })));

// ✅ Framer Motion animation variants
const fadeSlide = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function TelkomNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // ✅ useMemo to prevent re-creating link array each render
  const links = useMemo(
    () => [
      { prefix: "1.0", name: "Energy Storage", to: "/tools" },
      { prefix: "2.0", name: "BharatBMS", to: "/products" },
      { prefix: "3.0", name: "About", to: "/machine-park" },
      { prefix: "4.0", name: "Blog", to: "/engineering" },
      { prefix: "5.0", name: "Whitepapers", to: "/about" },
    ],
    []
  );

  return (
    <motion.header
      className="sticky top-4 left-0 z-50 flex justify-center items-center w-full"
      initial="hidden"
      animate="visible"
      variants={fadeSlide}
    >
      <div className="w-full max-w-[1415px] bg-[#1b1b1b] overflow-hidden  shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between w-full h-[8vh]">
          {/* Left: Logo */}
          <div className="flex items-center justify-start w-[60%] sm:w-[40%] md:w-[25%] h-full border-r border-gray-600 px-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl sm:text-2xl font-semibold"
            >
              Xbattery
            </motion.span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center w-[60%]">
            {links.map((l, i) => {
              const active = location.pathname === l.to;
              return (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className={`flex items-center gap-2 px-6 xl:px-8 h-[3.5rem] border-r border-gray-600 text-sm font-semibold tracking-wide transition-all duration-150 ${
                      active
                        ? "bg-[#393939] text-white"
                        : "text-[#d6d6d6] hover:bg-[#FF5A4F] hover:text-[#1B1B1B]"
                    }`}
                  >
                    <span className="text-xs text-[#9aa0a4]">{l.prefix}</span>
                    <span className="uppercase whitespace-nowrap">{l.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center justify-end w-[40%] sm:w-[35%] md:w-[25%] h-full">
            {/* Language */}
            <motion.div
              whileHover={{ backgroundColor: "#97F1E6", color: "#1B1B1B" }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-[40%] sm:w-[35%] md:w-[40%] h-full text-[#d0d0d0] cursor-pointer"
            >
              <span className="px-3 py-2 text-sm sm:text-base">EN</span>
            </motion.div>

            {/* Contact Button (Desktop) */}
            <Link
              to="/contact"
              className="hidden md:flex h-full w-[60%] justify-center items-center bg-[#ff5a4f] text-[#1B1B1B] font-semibold hover:opacity-95 transition-all text-sm sm:text-base"
            >
              CONTACT
            </Link>

            {/* Mobile Menu Toggle */}
            <Suspense fallback={<div className="text-white px-4">...</div>}>
              <button
                className="lg:hidden text-white text-2xl px-4 md:px-6 focus:outline-none"
                onClick={() => setOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </Suspense>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden bg-[#161616] border-t border-[#2a2a2a] p-4"
            >
              <div className="flex flex-col gap-3">
                {links.map((l, i) => {
                  const active = location.pathname === l.to;
                  return (
                    <motion.div
                      key={l.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded text-sm ${
                          active
                            ? "bg-[#393939] text-white"
                            : "text-[#e5e5e5] hover:bg-[#262626]"
                        }`}
                      >
                        <span className="text-xs text-[#9aa0a4]">{l.prefix}</span>
                        <span className="uppercase">{l.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-block px-4 py-2  bg-[#ff5a4f] text-white font-semibold text-center text-sm"
                  >
                    CONTACT
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
