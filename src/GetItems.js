export async function GetItems(order = "recent") {
  const query = `orderBy=${order}`;
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await res.json();
  return data;
}

export async function GetBestItems() {
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?pageSize=4&orderBy=favorite`
  );
  const data = await res.json();
  return data;
}
