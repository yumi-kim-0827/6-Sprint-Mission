import inctance from "./axioxInstance";

export async function getProduct({ orderBy = "recent", page, pageSize, keyword = "" }) {
  try {
    const response = await inctance.get(`?&page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getBestProduct(pageSize) {
  try {
    const response = await inctance.get(`?orderBy=favorite&page=1&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getTotalCount() {
  try {
    const response = await inctance.get();
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
    return response.data.list;
  } catch (error) {
    console.error(`${error} : error`);
  }
}
