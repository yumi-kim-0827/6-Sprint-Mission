export const INITIAL_VALUE = {
  isLoading: false,
  errorMessage: null,
};

export const PLACEHOLDER_LIST_FOR_REGISTER = [
  ["상품명", "상품명을 입력해주세요", "text", "title"],
  ["상품 소개", "상품 소개를 입력해주세요", "textarea", "description"],
  ["판매가격", "판매 가격을 입력해주세요", "number", "price"],
  ["태그", "태그를 입력해주세요", "text", "tags"],
];

export const FORM_DATA = {
  title: null,
  image: null,
  description: null,
  price: null,
  tags: null,
};

export const BASE_URL = `https://panda-market-api.vercel.app`;
