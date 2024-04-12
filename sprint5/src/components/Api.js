export async function getProducts(
  order = "recent",
  page = 1,
  size = 12,
  searchValue = ""
) {
  const query = `page=${page}&pageSize=${size}&orderBy=${order}&keyword=${searchValue}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );

  const data = await response.json();
  console.log(data);
  return data.list;
}
