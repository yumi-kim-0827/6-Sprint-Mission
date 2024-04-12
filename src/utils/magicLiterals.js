export const MOBILE = 0;
export const TABLET = 1;
export const PC = 2;

export const BASE_API_URL = "https://panda-market-api.vercel.app/";
export const PRODUCT_API_URL = `${BASE_API_URL}products/`;

export const NUM_BEST_ITEMS = {
  [MOBILE]: 1,
  [TABLET]: 2,
  [PC]: 4,
};

export const NUM_ALL_ITEMS = {
  [MOBILE]: 4,
  [TABLET]: 6,
  [PC]: 10,
};
