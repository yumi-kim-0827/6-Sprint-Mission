// products api 불러오기
export const getProducts = async (options = {}) => {
  const { orderBy = "", keyword = "" } = options;
  const queryParams = [];

  if (orderBy) {
    queryParams.push(`orderBy=${orderBy}`);
  }

  if (keyword) {
    queryParams.push(`keyword=${encodeURIComponent(keyword)}`);
  }

  const query = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
  const response = await fetch(
    `https://panda-market-api.vercel.app/products${query}`
  );

  const body = await response.json();
  return body;
};
