"use client";
import { useRecurrenceStore } from "../store/recurrenceStore";

const DateRangeSelector = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-1">
        Select Start Date:
      </label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)} // ✅ Using it safely
        className="w-full border border-gray-300 p-2 rounded"
      />

      <label className="block text-gray-700 font-semibold mb-1 mt-4">
        Select End Date:
      </label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)} // ✅ Using it safely
        className="w-full border border-gray-300 p-2 rounded"
      />
    </div>
  );
};

export default DateRangeSelector;
