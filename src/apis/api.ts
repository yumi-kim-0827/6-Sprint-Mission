import inctance from "./axioxInstance";

interface ApiTypeValues {
  orderBy: string;
  page: number;
  pageSize: number;
  keyword: string;
}

export async function getProduct({ orderBy = "recent", page, pageSize, keyword = "" }: ApiTypeValues) {
  try {
    const response = await inctance.get(`?&page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getBestProduct(pageSize: number) {
  try {
    const response = await inctance.get(`?orderBy=favorite&page=1&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getTotalCount() {
  try {
    const response = await inctance.get(``);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getDetailProduct(id: string | undefined) {
  try {
    const response = await inctance.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getProductComment(id: string | undefined) {
  try {
    const response = await inctance.get(`/${id}/comments?limit=10`);
    return response.data.list;
  } catch (error) {
    console.error(`${error} : error`);
  }
}
