const BASE_URL = "https://panda-market-api.vercel.app/products";

export default async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const res = await fetch(`${BASE_URL}?${query}`);
  const data = await res.json();
  // console.log(data);

  return data.list;
}
