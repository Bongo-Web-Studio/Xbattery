"use client";
import React, { useState } from "react";
import { FaArrowAltCircleDown, FaArrowCircleDown, FaArrowDown, FaArrowsAlt, FaArrowsAltV, FaBars, FaRegArrowAltCircleDown, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// Telkom-style top navigation component
// - Dark bar
// - Left boxed logo with faint circular mark
// - Middle nav items with numeric prefixes (1.0, 2.0 ...)
// - Right bright CONTACT button

export default function TelkomNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { prefix: "1.0", name: "  Energy Storage", to: "/tools" },
    { prefix: "2.0", name: "BharatBMS", to: "/products" },
    { prefix: "3.0", name: "About ", to: "/machine-park" },
    { prefix: "4.0", name: "Blog", to: "/engineering" },
    { prefix: "5.0", name: "Whitepapers", to: "/about" },
  ];









  return (
    <header className="sticky top-5 left-0 z-50  flex justify-center items-center">
      <div className="w-[92vw] bg-[#1b1b1b]">
        <div className="flex items-center">
          {/* Left: logo box */}
          <div className="flex items-center  w-full h-full ">
            <div className="w-[80%] lg:w-[20%]  h-[3.5rem]   flex justify-start items-center  border-r border-r-gray-500">
              <div className="text-white text-2xl ml-5">
                Xbattery
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="  w-[70%]  hidden lg:flex items-center ">
              {links.map((l) => {
                const active = location.pathname === l.to;
                return (
                  <Link
                    key={l.name}
                    to={l.to}
                    className={`flex items-center gap-2 px-8 h-[3.5rem]  border-r border-r-gray-500  text-sm font-semibold tracking-wide transition-all duration-150 ${
                      active
                        ? "bg-[#393939] text-white"
                        : "text-[#d6d6d6] hover:bg-[#FF5A4F] hover:text-[#1B1B1B]"
                    }`}
                  >
                    <span className="text-xs text-[#9aa0a4]">{l.prefix}</span>
                    <span className="uppercase">{l.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right side: language + contact */}
            <div className="w-[20%] lg:w-[27%]  flex items-center  justify-center  h-[3.5rem]">
              <div className=" flex items-center justify-center text-[#d0d0d0]  w-[50%]  h-[3.5rem]  hover:bg-[#97F1E6] hover:text-[#1B1B1B]    ">
                <div className="px-3 py-2">EN</div>
       
              </div>

              <Link
                to="/contact"
                className=" hidden md:flex   h-[3.5rem] w-[50%] justify-center items-center    bg-[#ff5a4f] text-[#1B1B1B] font-semibold shadow-md hover:opacity-95"
              >
                CONTACT
              </Link>

              {/* mobile menu toggle */}
              <div
                className="lg:hidden text-white text-2xl ml-2"
                onClick={() => setOpen((s) => !s)}
              >
                {open ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {open && (
          <div className="lg:hidden mt-2 bg-[#161616] border border-[#2a2a2a] rounded-md p-4">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.name}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded text-sm text-[#e5e5e5] hover:bg-[#262626]"
                >
                  <span className="text-xs text-[#9aa0a4]">{l.prefix}</span>
                  <span>{l.name}</span>
                </Link>
              ))}

              <Link
                to="/contact"
                className="mt-2 inline-block px-4 py-2 rounded bg-[#ff5a4f] text-white font-semibold text-center"
                onClick={() => setOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
