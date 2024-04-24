const apiUrl = process.env.REACT_APP_BASE_URL;

export async function getProduct({ orderBy = "recent", page = 1, pageSize = 10 }) {
  try {
    let query = `orderBy=${orderBy}`;
    if (orderBy !== "recent" && orderBy !== "favorite") {
      query = `keyword=${orderBy}`;
    }
    const response = await fetch(`${apiUrl}?&page=${page}&pageSize=${pageSize}&${query}`);
    return response.json();
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getBestProduct() {
  try {
    const response = await fetch(`${apiUrl}?orderBy=favorite&page=1`);
    return response.json();
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getDetailProduct(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    return response.json();
  } catch (error) {
    console.error(`${error} : error`);
  }
}

export async function getProductComment(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}/comments?limit=10`);
    return response.json();
  } catch (error) {
    console.error(`${error} : error`);
  }
}
