import { useState, useRef, useEffect } from "react";
import { FaSearch, FaCalendarAlt, FaClock } from "react-icons/fa";
import CalendarComponent from "./CalenderComponent";
import ClockComponent from "./ClockComponent";
export default function FromCompoenent() {
  const [tripType, setTripType] = useState("oneway");
  const [tripCategory, setTripCategory] = useState("outstation");

  const [pickupDate, setPickupDate] = useState("2025-07-13");
  const [pickupTime, setPickupTime] = useState("08:00 AM");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  // Close pickers when clicking outside (supports touch & mouse)
  useEffect(() => {
    const handler = (event) => {
      const target = event.target;
      if (
        showDatePicker &&
        dateRef.current &&
        !dateRef.current.contains(target)
      ) {
        setShowDatePicker(false);
      }
      if (
        showTimePicker &&
        timeRef.current &&
        !timeRef.current.contains(target)
      ) {
        setShowTimePicker(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showDatePicker, showTimePicker]);

  // Close pickers on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setShowDatePicker(false);
        setShowTimePicker(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Helpers that open one picker and close the other (toggle if already open)
  const toggleDatePicker = () => {
    setShowDatePicker((s) => !s);
    setShowTimePicker(false);
  };

  const toggleTimePicker = () => {
    setShowTimePicker((s) => !s);
    setShowDatePicker(false);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="bg-white backdrop-blur text-black w-full max-w-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative">
        {/* Trip Category */}
        <div className="flex flex-wrap gap-4 mb-4">
          {["outstation", "local"].map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-md font-medium ${
                tripCategory === cat
                  ? "bg-[#A3E635] text-black"
                  : "bg-white/10 text-white border border-white/30"
              }`}
              onClick={() => setTripCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Trip Type */}
        <div className="flex flex-wrap gap-6 mb-2">
          {[
            { value: "oneway", label: "Oneway Trip" },
            { value: "round", label: "Round Trip" },
          ].map((type) => (
            <label key={type.value} className="flex items-center gap-2">
              <input
                type="radio"
                name="tripType"
                value={type.value}
                checked={tripType === type.value}
                onChange={() => setTripType(type.value)}
              />
              {type.label}
            </label>
          ))}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pickup City */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Pickup City</label>
            <input
              type="text"
              placeholder="pickup city"
              className="bg-white/20 p-3 rounded placeholder-white focus:outline-none"
            />
          </div>

          {/* Destination City */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Destination City</label>
            <input
              type="text"
              placeholder="destination city"
              className="bg-white/20 p-3 rounded placeholder-white focus:outline-none"
            />
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col relative">
            <label className="text-sm font-medium mb-1">Pickup Date</label>
            <div
              className="flex items-center bg-white/20 p-3 rounded cursor-pointer"
              onClick={toggleDatePicker}
              role="button"
              aria-expanded={showDatePicker}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleDatePicker()}
            >
              <span className="flex-1">{pickupDate}</span>
              <FaCalendarAlt />
            </div>

            {showDatePicker && (
              <div
                ref={dateRef}
                className="absolute top-[100%] mt-2 z-50 left-0"
              >
                <CalendarComponent
                  value={pickupDate}
                  onChange={(date) => {
                    setPickupDate(date);
                    setShowDatePicker(false);
                  }}
                />
              </div>
            )}
          </div>

          {/* Pickup Time */}
          <div className="flex flex-col relative">
            <label className="text-sm font-medium mb-1">Pickup Time</label>
            <div
              className="flex items-center bg-white/20 p-3 rounded cursor-pointer"
              onClick={toggleTimePicker}
              role="button"
              aria-expanded={showTimePicker}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleTimePicker()}
            >
              <span className="flex-1">{pickupTime}</span>
              <FaClock />
            </div>

            {showTimePicker && (
              <div
                ref={timeRef}
                className="absolute top-[100%] mt-2 z-50 left-0"
              >
                <ClockComponent
                  value={pickupTime}
                  onChange={(time) => {
                    setPickupTime(time);
                    setShowTimePicker(false);
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button className="bg-lime-400 hover:bg-lime-300 p-4 mt-4 rounded-full text-black flex items-center justify-center gap-2 text-lg font-semibold">
          <FaSearch />
          Check Prices & Book Cab
        </button>
      </div>
    </div>
  );
}
