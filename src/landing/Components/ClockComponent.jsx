import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import clsx from "clsx";

const INDIAN_TIMES = [
  { value: "05:00 AM", label: "Subah 5 AM" },
  { value: "08:00 AM", label: "Subah 8 AM" },
  { value: "10:00 AM", label: "Savera 10 AM" },
  { value: "12:00 PM", label: "Dopahar 12 PM" },
  { value: "01:00 PM", label: "Dopahar 1 PM" },
  { value: "04:00 PM", label: "Shaam 4 PM" },
  { value: "06:00 PM", label: "Shaam 6 PM" },
  { value: "08:00 PM", label: "Raat 8 PM" },
  { value: "10:00 PM", label: "Raat 10 PM" },
];

export default function ClockComponent({
  value = INDIAN_TIMES[1].value,
  onChange,
}) {
  const [selected, setSelected] = useState(value);
  const itemRefs = useRef({});
  const containerRef = useRef(null);

  // Sync prop -> internal state when `value` prop changes (do NOT call onChange here)
  useEffect(() => {
    if (value !== selected) setSelected(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // When user selects a value, update state and notify parent
  const handleSelect = useCallback(
    (val) => {
      setSelected(val);
      if (typeof onChange === "function") onChange(val); // <-- only notify when user selects
    },
    [onChange]
  );

  // Scroll selected into view on selection change
  useEffect(() => {
    const node = itemRefs.current[selected];
    if (node && node.scrollIntoView) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [selected]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      const idx = INDIAN_TIMES.findIndex((t) => t.value === selected);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = INDIAN_TIMES[Math.min(INDIAN_TIMES.length - 1, idx + 1)];
        if (next) setSelected(next.value);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = INDIAN_TIMES[Math.max(0, idx - 1)];
        if (prev) setSelected(prev.value);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        // Confirm current focused/selected value
        if (selected) handleSelect(selected);
      }
    },
    [selected, handleSelect]
  );

  return (
    <motion.div
      className="rounded-3xl p-4 w-full bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] text-white shadow-xl backdrop-blur-md max-w-md mx-auto relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div
        ref={containerRef}
        role="listbox"
        aria-label="Indian times"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative h-48 overflow-y-auto scroll-smooth snap-y snap-mandatory no-scrollbar"
      >
        {INDIAN_TIMES.map((time) => (
          <div
            key={time.value}
            role="option"
            aria-selected={selected === time.value}
            tabIndex={-1}
            ref={(el) => (itemRefs.current[time.value] = el)}
            onClick={() => handleSelect(time.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelect(time.value);
              }
            }}
            className={clsx(
              "snap-center text-center py-3 cursor-pointer text-lg font-medium transition transform mx-2 rounded-md",
              selected === time.value
                ? "text-white scale-110"
                : "text-gray-400 hover:scale-105"
            )}
          >
            {time.label}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-12 w-full border-y border-white/20 absolute top-1/2 -translate-y-1/2" />
      </div>

      <div className="mt-4 text-center text-xs text-gray-300">
        Selected: {selected}
      </div>
    </motion.div>
  );
}

ClockComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

ClockComponent.defaultProps = {
  value: INDIAN_TIMES[1].value,
  onChange: undefined,
};
