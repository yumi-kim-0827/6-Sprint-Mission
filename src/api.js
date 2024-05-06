export async function getBestProducts({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("리스트를 불러오는데 실패했습니다");
  }
  const result = await response.json();
  console.log("bestItems", result);
  return result;
}

export async function getAllProducts({
  allPage = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  const query = `page=${allPage}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("리스트를 불러오는데 실패했습니다");
  }
  const result = await response.json();
  console.log("allItems", result);
  return result;
}
