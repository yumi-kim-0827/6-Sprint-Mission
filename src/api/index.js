import { PRODUCT_API_URL } from "../utils/constants";

export async function getItems({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${PRODUCT_API_URL}${query}`);
  if (!response.ok) {
    throw new Error("상품을 불러오는 데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export function getBestItems() {
  return getItems({ page: 1, pageSize: 4, orderBy: "favorite" });
}
