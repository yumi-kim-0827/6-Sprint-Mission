export async function getData({ page = 1, size = 10, order = "recent" }) {
  const query = `page=${page}&pageSize=${size}&orderBy=${order}`;
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await res.json();
  return body;
}
