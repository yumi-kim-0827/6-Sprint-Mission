const BASEURL = `https://panda-market-api.vercel.app/products`;

export async function getDatum({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  let searchParams = new URLSearchParams({ page, pageSize, orderBy, keyword });
  const response = await fetch(BASEURL + `?${searchParams.toString()}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const data = await response.json();
  return data;
}
