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

export async function getProductById(productId) {
  const item_response = await axios.get(`${base_url}/products/${productId}`);
  const comment_response = await axios.get(
    `${base_url}/products/${productId}/comments/?limit=10`
  );

  if (item_response.status !== 200) {
    throw new Error("제품 정보를 불러오는데 실패했습니다.");
  } else if (comment_response.status !== 200) {
    throw new Error("댓글 정보를 불러오는데 실패했습니다.");
  }

  const itemDetail = await item_response.data;
  const itemComments = await comment_response.data;

  return [itemDetail, itemComments];
}
