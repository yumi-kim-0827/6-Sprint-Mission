export const BASE_URL: string = "https://panda-market-api.vercel.app";

export const SORT_OBJECT = {
  recent: "최신 순",
  like: "좋아요 순",
} as const;

export type SORT_OBJECT_KEY_TYPE = keyof typeof SORT_OBJECT;
