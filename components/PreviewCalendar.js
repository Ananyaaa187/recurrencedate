"use client";
import { useRecurrenceStore } from "../store/recurrenceStore";
import { generateRecurringDates } from "../utils/recurrenceUtils";
import { useState } from "react";

const PreviewCalendar = () => {
  const {
    frequency,
    interval,
    selectedDays,
    startDate,
    endDate,
  } = useRecurrenceStore();

  const recurringDates = generateRecurringDates({
    frequency,
    interval,
    startDate,
    endDate,
    selectedDays,
  });

  return (
    <div>
      <h3 className="text-lg font-semibold">Recurring Dates Preview:</h3>
      <ul className="list-disc pl-5">
        {recurringDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewCalendar;
