const BASE_URL = `https://panda-market-api.vercel.app/products`;

export async function getProduct({ order = "recent", page = 1, pageSize = 10 }) {
  try {
    let query = `orderBy=${order}`;
    if (order !== "recent" && order !== "favorite") {
      query = `keyword=${order}`;
    }
    const response = await fetch(`${BASE_URL}?&page=${page}&pageSize=${pageSize}&${query}`);
    return response.json();
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getBestProduct(pageSize = 4) {
  try {
    const response = await fetch(`${BASE_URL}?orderBy=favorite&page=1&pagesize=${pageSize}`);
    return response.json();
  } catch (error) {
    console.error(`${error} : error`);
  }
}
