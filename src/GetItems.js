export async function GetItems(order = "recent") {
  const query = `orderBy=${order}`;
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await res.json();
  return data;
}
