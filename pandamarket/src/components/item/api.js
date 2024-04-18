const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProductsInfo({
  page = 1,
  pageSize = 10,
  orderBy = "favorite",
  keyword = "",
} = {}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw new Error("못받은듯?");
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    return {};
  }
}
