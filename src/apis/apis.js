export const getData = async (order = "recent") => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?orderBy=${order}`
  );
  const result = await response.json();
  return result;
};

export const getFavoriteData = async () => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?orderBy=favorite`
  );
  const result = await response.json();
  return result.list.slice(0, 4);
};
