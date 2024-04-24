export async function getProducts({
  page = 1,
  limit = 12,
  order = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${limit}&orderBy=${order}&keyword=${keyword}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );

  const data = await response.json();
  return data;
}

export async function getBestProducts(order = "favorite") {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?orderBy=${order}`
  );

  const data = await response.json();
  return data.list;
}

export const getProductInfo = async (productID) => {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${productID}`
    );
    if (!response.ok) {
      throw new Error("상품 정보를 가져오는데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
