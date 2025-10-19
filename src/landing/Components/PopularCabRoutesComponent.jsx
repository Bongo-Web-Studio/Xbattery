"use client";
import React, { useMemo, useState, useEffect } from "react";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCarSide,
  FaPlane,
  FaUmbrellaBeach,
  FaMountain,
  FaHistory,
  FaStar,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";

// ---------- Data ----------
const rawRoutes = [
  "Pune to Mumbai cab",
  "Lonavala to mumbai cab",
  "Nashik to pune cab",
  "Pune to Solapur cab",
  "Pune to Bhimashankar cab",
  "Pune to Nashik cab",
  "Pune to Aurangabad cab",
  "Pune to Navi Mumbai cab",
  "Pune to Shirdi cab",
  "Pune to Ahmednagar cab",
  "Pune to Goa cab",
  "Pune to Dombivli cab",
  "Pune to Thane cab",
  "Pune to Mahabaleshwar cab",
  "Pune to Lonavala cab",
  "Pune to Kalyan cab",
  "Mumbai to Pune cab",
  "Mumbai to Ahmedabad cab",
  "Mumbai to Daman cab",
  "Mumbai to Surat cab",
  "Mumbai to Goa cab",
  "Mumbai to Shirdi cab",
  "Mumbai to Kolhapur cab",
  "Mumbai to Vadodara cab",
  "Mumbai to Lonavala cab",
  "Mumbai to Mahabaleshwar cab",
  "Mumbai to Nashik cab",
  "Mumbai to Vapi cab",
  "Mumbai Darshan cab",
  "Mumbai to Pune taxi",
  "Bangalore to Pune cab",
  "Bangalore to Chennai cab",
  "Bangalore to Coimbatore cab",
  "Bangalore to Coonoor cab",
  "Bangalore to Coorg cab",
  "Bangalore to Mumbai cab",
  "Bangalore to Goa cab",
  "Bangalore to Mysore cab",
  "Bangalore to Hyderabad cab",
  "Bangalore to Ooty cab",
  "Bangalore to Pondicherry cab",
  "Bangalore to Salem cab",
  "Bangalore to Tirupati cab",
  "Hyderabad to Srisailam cab",
  "Delhi to Jaipur cab",
  "Delhi to Agra cab",
  "Delhi to Chandigarh cab",
  "Delhi to Manali cab",
  "Delhi to Shimla cab",
  "Delhi to Rishikesh cab",
  "Pune Darshan cab",
  "Return Booking",
  "Car Rental",
  "Cab",
  "Taxi",
  "Airport Taxi",
  "One way Cab",
  "Full day Cab",
];

// ---------- Helpers ----------
function seededValues(route) {
  const seed = route.split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  const price = 800 + (seed % 12000);
  const distanceKm = 20 + (seed % 800);
  const rating = 3 + (seed % 3);
  return { price, distanceKm, rating };
}

function pickMeta(route) {
  const text = route.toLowerCase();
  const base = seededValues(route);
  if (text.includes("goa") || text.includes("pondicherry"))
    return { icon: FaUmbrellaBeach, tag: "Beach", ...base };
  if (text.includes("mount") || text.includes("mahaba"))
    return { icon: FaMountain, tag: "Scenic", ...base };
  if (text.includes("airport") || text.includes("flight"))
    return { icon: FaPlane, tag: "Airport", ...base };
  if (text.includes("darshan") || text.includes("shirdi"))
    return { icon: FaHistory, tag: "Pilgrim", ...base };
  if (text.includes("taxi") || text.includes("cab") || text.includes("rental"))
    return { icon: FaCarSide, tag: "Drive", ...base };
  return { icon: FaMapMarkerAlt, tag: "Route", ...base };
}

// ---------- Component ----------
export default function PopularCabRoutesComponent() {
  const [query, setQuery] = useState("");
  const [filterTag, setFilterTag] = useState("All");
  const [showCount, setShowCount] = useState(10);

  const routes = useMemo(
    () => rawRoutes.map((r) => ({ title: r, ...pickMeta(r) })),
    []
  );
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(routes.map((r) => r.tag)))],
    [routes]
  );

  const filtered = useMemo(() => {
    return routes.filter((r) => {
      const matchQ = r.title.toLowerCase().includes(query.toLowerCase());
      const matchTag = filterTag === "All" || r.tag === filterTag;
      return matchQ && matchTag;
    });
  }, [routes, query, filterTag]);

  useEffect(() => {
    setShowCount(10);
  }, [query, filterTag]);

  const visible = filtered.slice(0, showCount);

  // ---------- UI ----------
  return (
    <section
      className="relative w-full bg-[#0F0F0F] text-white flex justify-center items-center overflow-hidden py-12 px-4 md:px-16"
      aria-label="Popular cab routes"
    >
      <div className="max-w-[1400px] w-full flex flex-col justify-center items-center">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8 w-full px-2">
          <h2 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            Popular Cab Routes
          </h2>

          {/* Search + Filters */}
          <div className="lg:flex   justify-center items-center w-full lg:pl-[4cm] lg:pr-[4cm]">
            {/* Search Box */}
            <div className="flex items-center gap-3 border border-dashed border-white/50 p-2 w-full max-w-md bg-[#0f1112] -md">
              <FaSearch size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search routes, city or service..."
                className="w-full bg-transparent placeholder:opacity-60 focus:outline-none text-sm md:text-base"
                aria-label="Search routes"
              />
            </div>

            {/* Tag Filters */}
            <div className="w-full overflow-x-auto scrollbar-none md:overflow-visible py-1 px-1 md:px-0 scroll-smooth snap-x snap-mandatory">
              <div className="flex gap-2 min-w-max justify-start md:justify-center">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilterTag(t)}
                    aria-pressed={filterTag === t}
                    className={`snap-start px-4 py-1.5 text-lg  font-medium transition-all whitespace-nowrap  cursor-pointer  focus:outline-none focus:ring-2 focus:ring-[#26CC6B] ${
                      filterTag === t
                        ? "bg-[#26CC6B] text-black shadow-lg"
                        : "bg-[#0f1112] border border-dashed border-[#26CC6B] text-white/90"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-2">
          {visible.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.article
                key={r.title + idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.45 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  transition: { duration: 0.25 },
                }}
                whileTap={{ scale: 0.995, y: 2 }}
                className="relative w-full min-h-[110px] border border-white/50 border-dashed hover:border-[#26CC6B] p-4 transition-all cursor-pointer bg-[#0F0F0F] -lg"
                tabIndex={0}
                role="button"
                aria-label={`Open route ${r.title}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 sm:p-3 bg-[#26CC6B] -md flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#0F0F0F]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-2xl leading-tight group-hover:text-[#26CC6B] line-clamp-1">
                        {r.title}
                      </h3>
                      <p className="text-sm sm:text-lg opacity-60 mt-1 truncate">
                        {r.tag} - {r.distanceKm} km
                      </p>
                    </div>
                  </div>

                  <FaArrowRight className="text-[#26CC6B] mt-1 w-5 h-5" />
                </div>

                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span className="inline-block text-sm md:text-lg px-2 py-1 border border-[#DD9FFE] border-dashed">
                    Price ₹{r.price.toLocaleString()}
                  </span>
                  <span className="text-sm md:text-lg px-2 py-1 border border-[#DD9FFE] border-dashed flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    {r.rating}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="mt-10 text-center opacity-70">
            No matching routes — try another search or clear filters.
          </div>
        )}

        {/* Show More */}
        {filtered.length > visible.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowCount((s) => s + 10)}
              className="px-5 py-2 border border-dashed border-[#DD9FFE] hover:bg-[#DD9FFE] hover:text-[#0F0F0F] text-[#DD9FFE] font-semibold shadow-md transition-all cursor-pointer"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
