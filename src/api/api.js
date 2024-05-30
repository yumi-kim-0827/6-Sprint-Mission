const BASE_URL = "https://panda-market-api.vercel.app";

function fetcher(order, page, pageSize) {
  let url = BASE_URL + "/products";
  if ((order, page, pageSize !== "")) {
    url += "?";

    if (order !== "") url += `orderBy=${order}`;
    if (url[-1] !== "?") url += "&";
    if (page !== "") url += `page=${page}`;
    if (url[-1] !== "?") url += "&";
    if (pageSize !== "") url += `pageSize=${pageSize}`;
  }
  return url;
}

export async function getItems({ order, page = "1", pageSize = "10" }) {
  try {
    const url = fetcher(order, page, pageSize);
    const response = await fetch(url);
    if (response.ok) {
      const body = await response.json();
      return body;
    } else {
      console.log("Promise resolved but HTTP status failed");
    }
  } catch {
    console.log("Promise rejected");
  }
}

const getProduct = async (productId) => {
  let response;
  try {
    const url = BASE_URL + `/products/${productId}`;
    response = await fetch(url);
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = "HttpError";
    error.status = response.status;
    console.error(error);
    throw error;
  }

  const body = await response.json();
  return body;
};

const postComment = async ({ productId, content }) => {
  if (!content) return;

  let response;
  try {
    const url = BASE_URL + `/products/${productId}/comments/`;
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 콘텐츠임을 명시
      },
      body: JSON.stringify({ content: content }),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = "HttpError";
    error.status = response.status;
    console.error(error);
    throw error;
  }
};

const getComments = async ({ productId, limit }) => {
  let response;
  try {
    const url = BASE_URL + `/products/${productId}/comments/?limit=${limit}`;
    response = await fetch(url);
  } catch (error) {
    console.error(error);
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`HTTP error! status: ${response.status}`);
    error.name = "HttpError";
    error.status = response.status;
    console.error(error);
    throw error;
  }

  const body = await response.json();
  return body.list;
};

export { getProduct, postComment, getComments };
