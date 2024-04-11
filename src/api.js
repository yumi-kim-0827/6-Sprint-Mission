// products api 불러오기
export const getProducts = async (orderBy = "recent", keyword = "") => {
  const query = `?orderBy=${orderBy}&keyword=${encodeURIComponent(keyword)}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`
  );
  const body = response.json();
  return body;
};
