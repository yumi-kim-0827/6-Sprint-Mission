const BASE_URL = `https://panda-market-api.vercel.app/products`;

export async function getProduct({ orderBy = "recent", page = 1, pageSize = 10 }) {
  try {
    let query = `orderBy=${orderBy}`;
    if (orderBy !== "recent" && orderBy !== "favorite") {
      query = `keyword=${orderBy}`;
    }
    const response = await fetch(`${BASE_URL}?&page=${page}&pageSize=${pageSize}&${query}`);
    return response.json();
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getBestProduct() {
  try {
    const response = await fetch(`${BASE_URL}?orderBy=favorite&page=1`);
    return response.json();
  } catch (error) {
    console.error(`${error} : error`);
  }
}
