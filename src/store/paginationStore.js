import { create } from "zustand";

export default create((set) => ({
  startPage: 1,
  currentPage: 1,
  setStartPage: (count) => set({ startPage: count }),
  setCurrentPage: (count) => set({ currentPage: count }),
}));
