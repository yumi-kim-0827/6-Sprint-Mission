import { atom } from "recoil";

export const currentPageState = atom({
  key: "currentPageState",
  default: 1,
});

export const totalPagesState = atom({
  key: "totalPagesState",
  default: 1,
});
