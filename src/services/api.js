export async function getItems({ orderQuery = "recent" }) {
  const query = `orderBy=${orderQuery}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("리뷰를 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
