export const SORT_TYPE_DICT = {
  recent: '최신순',
  like: '좋아요순',
} as const;

export type SortType = keyof typeof SORT_TYPE_DICT;
