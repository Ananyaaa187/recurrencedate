import {
    addDays,
    addWeeks,
    addMonths,
    addYears,
    isAfter,
    parseISO
  } from "date-fns";
  
  export function generateRecurringDates({
    frequency,
    interval,
    startDate,
    endDate,
    selectedDays = []
  }) {
    if (!startDate || !endDate) return [];
  
    const normalize = (dateStr) => {
      const date = parseISO(dateStr);
      // Create a local date without timezone shift
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };
  
    const formatLocal = (date) => {
      // Format the date manually to avoid timezone issues
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    };
  
    const start = normalize(startDate);
    const end = normalize(endDate);
    const result = [];
  
    if (frequency === "daily") {
      let current = start;
      while (current <= end) {
        result.push(formatLocal(current));
        current = addDays(current, interval);
      }
    } else if (frequency === "weekly") {
      let current = start;
      while (current <= end) {
        selectedDays.forEach((day) => {
          const base = new Date(current);
          const diff = (day - base.getDay() + 7) % 7;
          const next = addDays(base, diff);
          if (next >= start && next <= end) {
            result.push(formatLocal(next));
          }
        });
        current = addWeeks(current, interval);
      }
    } else if (frequency === "monthly") {
      let current = start;
      while (current <= end) {
        result.push(formatLocal(current));
        current = addMonths(current, interval);
      }
    } else if (frequency === "yearly") {
      let current = start;
      while (current <= end) {
        result.push(formatLocal(current));
        current = addYears(current, interval);
      }
    }
  
    return [...new Set(result)].sort();
  }
  