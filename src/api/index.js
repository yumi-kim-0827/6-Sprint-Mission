import axios from "axios";
const base_url = process.env.REACT_APP_PANDAMARKET_BASE_URL;

export async function getProducts({
  page = 1,
  pageSize = 10,
  order = "recent",
  keyword = "",
}) {
  const response = await axios.get(`${base_url}/products`, {
    params: { page, pageSize, orderBy: order, keyword },
  });

  if (response.status !== 200) {
    throw new Error("제품 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.data;

  return body;
}
