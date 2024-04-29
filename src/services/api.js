const BASE_URL = "https://panda-market-api.vercel.app";

export const fetcher = async ({
  resource,
  query = {},
  body = null,
  headers = {},
}) => {
  const queryString = new URLSearchParams(query).toString();
  const url = `${BASE_URL}/${resource}${queryString ? `?${queryString}` : ""}`;

  try {
    const response = await fetch(url, {
      method: body ? "POST" : "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`${resource}를 가져오는데 실패했습니다.`);
    }

    return response.json();
  } catch (error) {
    console.error(`${resource}를 가져오는 중 오류가 발생했습니다.`, error);
    throw error;
  }
};

export async function getItems(query = {}) {
  try {
    const data = await fetcher({ resource: "products", query });
    return data;
  } catch (error) {
    throw error;
  }
}

export const getItem = async (productId) => {
  try {
    const data = await fetcher({ resource: `products/${productId}` });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getItemComments = async (productId, limit = 3) => {
  try {
    const data = await fetcher({
      resource: `products/${productId}/comments`,
      query: { limit },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export async function postItemComment(comment, productId) {
  try {
    const response = await fetcher({
      resource: `products/${productId}/comments`,
      method: "POST",
      body: { comment },
    });

    if (!response.ok) {
      throw new Error("서버에 댓글을 전송하는 중 오류가 발생했습니다.");
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}
