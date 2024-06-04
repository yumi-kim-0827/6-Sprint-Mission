export const SortTypeAtUI = {
  Recent: "최신순",
  Like: "좋아요순",
} as const;

export type SortTypeAtUIValue =
  (typeof SortTypeAtUI)[keyof typeof SortTypeAtUI];

export const SortTypeAtAPI = {
  Recent: "recent",
  Like: "like",
} as const;

export type SortTypeAtAPIValue =
  (typeof SortTypeAtAPI)[keyof typeof SortTypeAtAPI];
