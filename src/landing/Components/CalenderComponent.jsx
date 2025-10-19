import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { motion } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Ensure ISO week (weeks start on Monday)
dayjs.extend(isoWeek);

export default function CalendarComponent({ value, onChange }) {
  // initialize selected date and current month from `value` (or today)
  const initial = dayjs(value || dayjs());
  const [selectedDate, setSelectedDate] = useState(initial);
  const [currentMonth, setCurrentMonth] = useState(() =>
    initial.startOf("month")
  );

  // Keep internal state in sync when `value` prop changes
  useEffect(() => {
    if (!value) return;
    const d = dayjs(value);
    setSelectedDate(d);
    setCurrentMonth(d.startOf("month"));
  }, [value]);

  // Generate calendar grid (always full weeks starting Monday)
  const calendar = useMemo(() => {
    const start = currentMonth.startOf("month").startOf("isoWeek");
    const end = currentMonth.endOf("month").endOf("isoWeek");

    const days = [];
    let cursor = start;

    while (cursor.isBefore(end, "day") || cursor.isSame(end, "day")) {
      days.push(cursor);
      cursor = cursor.add(1, "day");
    }

    return days;
  }, [currentMonth]);

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return dayjs(d1).isSame(dayjs(d2), "day");
  };

  const handleSelect = (date) => {
    setSelectedDate(date);
    if (typeof onChange === "function") onChange(date.format("YYYY-MM-DD"));
  };

  const prevMonth = () => setCurrentMonth((m) => m.subtract(1, "month"));
  const nextMonth = () => setCurrentMonth((m) => m.add(1, "month"));
  const gotoToday = () => {
    const today = dayjs();
    setCurrentMonth(today.startOf("month"));
    setSelectedDate(today);
    if (typeof onChange === "function") onChange(today.format("YYYY-MM-DD"));
  };

  return (
    <motion.div
      className="rounded-3xl p-6 w-full bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] text-white shadow-xl backdrop-blur-md max-w-md mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button
            aria-label="Previous month"
            onClick={prevMonth}
            className="p-2 rounded-md hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <IoChevronBack size={20} />
          </button>

          <h2 className="text-lg font-semibold tracking-wide">
            {currentMonth.format("MMMM YYYY")}
          </h2>

          <button
            aria-label="Next month"
            onClick={nextMonth}
            className="p-2 rounded-md hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <IoChevronForward size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={gotoToday}
            className="text-xs px-3 py-1 rounded-full bg-white/8 hover:bg-white/12 transition text-white"
            aria-label="Go to today"
            title="Today"
          >
            Today
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} className="text-center font-medium">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendar.map((date) => {
          const isCurrentMonth = date.month() === currentMonth.month();
          const isToday = isSameDay(date, dayjs());
          const isSelected = isSameDay(date, selectedDate);

          const key = date.format("YYYY-MM-DD");

          return (
            <button
              key={key}
              onClick={() => handleSelect(date)}
              aria-pressed={isSelected}
              aria-label={date.format("YYYY-MM-DD")}
              className={`text-sm rounded-full h-10 w-10 flex items-center justify-center transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-500
                ${
                  isSelected
                    ? "bg-purple-500 text-white font-semibold"
                    : isToday
                    ? "border border-purple-500 text-purple-300"
                    : isCurrentMonth
                    ? "text-white"
                    : "text-gray-600"
                }`}
            >
              {date.date()}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

CalendarComponent.propTypes = {
  // `value` can be a string parseable by dayjs, a Date or undefined
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  // onChange receives a formatted string YYYY-MM-DD
  onChange: PropTypes.func,
};

CalendarComponent.defaultProps = {
  value: dayjs().format("YYYY-MM-DD"),
  onChange: undefined,
};
