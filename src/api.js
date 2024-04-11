// products api 불러오기
export const getProducts = async (orderBy = "recent") => {
  const query = `?orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`
  );
  const body = response.json();
  return body;
};
