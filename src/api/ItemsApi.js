const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
}) {
  const query = `orderBy=${orderBy}&page=${page}`;
  // console.log(query);
  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);

    const body = await response.json();
    return body;
  } catch (error) {
    console.log("API 오류 ", error);
    throw error;
  }
}
