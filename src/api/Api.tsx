async function fetchData(url: string) {
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

interface URLSearchParamsProps {
  page: number;
  limit: number;
  order: string;
  keyword: string;
}

export async function getProducts({
  page = 1,
  limit = 12,
  order = "recent",
  keyword = "",
}: URLSearchParamsProps) {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
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

export async function getProductInfo(productID: number) {
  const url = `https://panda-market-api.vercel.app/products/${productID}`;
  return await fetchData(url);
}

export async function getComments(productID: number) {
  const url = `https://panda-market-api.vercel.app/products/${productID}/comments?limit=10`;
  const data = await fetchData(url);
  return data.list;
}
