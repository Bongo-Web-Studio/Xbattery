import React from "react";

export default function Footer() {
  const products = ["Xbattery 5kWh", "BharatBMS"];
  const resources = ["Blog", "Whitepapers", "Learn", "API"];
  const company = ["About", "Careers", "Contact", "Media", "Support"];

  return (
    <footer className="relative bg-[#0b0b0b] text-gray-300 border-t border-gray-800 w-full h-[80vh] flex justify-end items-end">
      {/* decorative grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          backgroundBlendMode: "overlay",
        }}
      />

      <div className="relative w-[81.5vw] h-[67.7vh] bg-[#1A1A1A] pt-10 pl-10 pr-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
             
              <div>
                <h3 className="text-white font-semibold">Xbattery</h3>
                <p className="text-xs text-gray-400">
                  Engineering and manufacturing advanced BMS technology for EVs
                  and energy storage
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm">
              Powering the next generation of electric mobility and clean
              energy ecosystems with smart, safe, and scalable BMS solutions.
            </p>
          </div>

          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2 lg:grid-cols-3">
            <div>
              <h4 className="text-xs text-white font-semibold tracking-widest mb-4">
                PRODUCTS
              </h4>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li
                    key={p}
                    className="text-gray-400 hover:text-gray-100 transition text-sm"
                  >
                    <a href="#">{p}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs text-white font-semibold tracking-widest mb-4">
                RESOURCES
              </h4>
              <ul className="space-y-3">
                {resources.map((r) => (
                  <li
                    key={r}
                    className="text-gray-400 hover:text-gray-100 transition text-sm"
                  >
                    <a href="#">{r}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs text-white font-semibold tracking-widest mb-4">
                COMPANY
              </h4>
              <ul className="space-y-3">
                {company.map((c) => (
                  <li
                    key={c}
                    className="text-gray-400 hover:text-gray-100 transition text-sm"
                  >
                    <a href="#">{c}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social / Follow */}
          <div className="pt-2">
            <h5 className="text-xs text-gray-400 font-medium mb-2">Follow</h5>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-2 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400 text-center md:text-left">
            © 2025 Xbattery Energy Private Limited. All rights reserved.{" "}
            <span className="text-gray-500">
              Terms, Privacy and Cookies.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a className="text-gray-400 hover:text-white text-sm" href="#">
              Terms
            </a>
            <a className="text-gray-400 hover:text-white text-sm" href="#">
              Privacy
            </a>
            <a className="text-gray-400 hover:text-white text-sm" href="#">
              Cookies
            </a>

            {/* Cosmetic toggle icon */}
            <button
              aria-label="toggle theme"
              className="ml-4 w-10 h-10 rounded bg-transparent border border-gray-700 flex items-center justify-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
