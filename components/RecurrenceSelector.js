"use client";
import { useState } from "react";
import { useRecurrenceStore } from "../store/recurrenceStore";
import DateRangeSelector from "./DateRangeSelector";
import PreviewCalendar from "./PreviewCalendar";

const daysOfWeek = [
  { label: "Sun", value: 0 },
  { label: "Mon", value: 1 },
  { label: "Tue", value: 2 },
  { label: "Wed", value: 3 },
  { label: "Thu", value: 4 },
  { label: "Fri", value: 5 },
  { label: "Sat", value: 6 },
];

const RecurrenceSelector = () => {
  const { frequency, setFrequency, selectedDays, setSelectedDays } =
    useRecurrenceStore();

  useRecurrenceStore();
  const [interval, setInterval] = useState(1);

  const displayFrequency =
    frequency.charAt(0).toUpperCase() + frequency.slice(1);

  // Handler for toggling days
  const handleDayToggle = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Select Recurrence Type:
        </label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Repeat Every:
        </label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded"
          min="1"
        />
        <p className="text-sm text-gray-500 mt-1">
          Every {interval} {displayFrequency}(s)
        </p>
      </div>

      {/* Show day-of-week checkboxes for weekly recurrence */}
      {frequency === "weekly" && (
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Select Days of the Week:
          </label>
          <div className="flex gap-2">
            {daysOfWeek.map((day) => (
              <label key={day.value} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day.value)}
                  onChange={() => handleDayToggle(day.value)}
                />
                {day.label}
              </label>
            ))}
          </div>
        </div>
      )}

      <DateRangeSelector />
      <PreviewCalendar />
    </div>
  );
};

export default RecurrenceSelector;
