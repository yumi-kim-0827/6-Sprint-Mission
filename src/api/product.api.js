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
    console.error("API 오류 \n", error);
  }
}

export async function getProductId({ productId }) {
  const response = await fetch(`${BASE_URL}/products/${productId}`);
  const body = await response.json();
  // console.log(body);
  return body;
}

export async function getComment({ productId, limit = 3 }) {
  const response = await fetch(
    `${BASE_URL}/products/${productId}/comments?limit=${limit}`
  );
  const body = await response.json();
  // console.log(body);
  return body;
}
