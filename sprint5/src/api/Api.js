async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    throw error;
  }
}

export async function getProducts({
  page = 1,
  limit = 12,
  order = "recent",
  keyword = "",
}) {
  const query = new URLSearchParams({
    page,
    pageSize: limit,
    orderBy: order,
    keyword,
  }).toString();
  const url = `https://panda-market-api.vercel.app/products?${query}`;
  return await fetchData(url);
}

export async function getBestProducts(order = "favorite") {
  const url = `https://panda-market-api.vercel.app/products?orderBy=${order}`;
  const data = await fetchData(url);
  return data.list;
}

export async function getProductInfo(productID) {
  const url = `https://panda-market-api.vercel.app/products/${productID}`;
  return await fetchData(url);
}

export async function getComments(productID) {
  const url = `https://panda-market-api.vercel.app/products/${productID}/comments?limit=10`;
  const data = await fetchData(url);
  return data.list;
}
