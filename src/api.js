import inctance from "./api/axioxInstance";

export async function getProduct({ orderBy = "recent", page = 1, pageSize = 10 }) {
  try {
    let query = `orderBy=${orderBy}`;
    if (orderBy !== "recent" && orderBy !== "favorite") {
      query = `keyword=${orderBy}`;
    }
    const response = await inctance.get(`?&page=${page}&pageSize=${pageSize}&${query}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getBestProduct() {
  try {
    const response = await inctance.get(`?orderBy=favorite&page=1`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getDetailProduct(id) {
  try {
    const response = await inctance.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getProductComment(id) {
  try {
    const response = await inctance.get(`/${id}/comments?limit=10`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}
