import { baseAxios } from "./api";

export async function getProducts({
  page = 1,
  pageSize = 10,
  order = "recent",
  keyword = "",
}) {
  const response = await baseAxios.get(`/products`, {
    params: { page, pageSize, orderBy: order, keyword },
  });

  if (response.status !== 200) {
    throw new Error("제품 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.data;

  return body;
}
