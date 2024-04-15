import { PRODUCT_API_URL } from "../utils/constants";

export async function getItems({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
}) {
  const query = `?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${PRODUCT_API_URL}${query}`);
  const body = await response.json();
  return body;
}

export function getBestItems() {
  return getItems({ page: 1, pageSize: 4, orderBy: "favorite" });
}
