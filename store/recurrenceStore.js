import { create } from "zustand";

export const useRecurrenceStore = create((set) => ({
  frequency: "daily",
  setFrequency: (val) => set({ frequency: val }),

  interval: 1,
  setInterval: (val) => set({ interval: val }),

  selectedDays: [],
  setSelectedDays: (val) => set({ selectedDays: val }),

  startDate: "",
  setStartDate: (val) => set({ startDate: val }),

  endDate: "",
  setEndDate: (val) => set({ endDate: val }),
}));
