import { API_BASE_URL } from "../constants/common";
interface QueryParams {
  [key: string]: string | number;
}

interface Headers {
  [key: string]: string;
}

interface FetchOptions<T = unknown> {
  resource?: string;
  query?: QueryParams;
  method?: "GET" | "POST";
  headers?: Headers;
  body?: T;
}

export const fetcher = async <T>({
  resource = "",
  query = {},
  body,
  headers = {},
}: FetchOptions<T>) => {
  const queryString = new URLSearchParams(
    query as Record<string, string>
  ).toString();
  const url = `${API_BASE_URL}/${resource}${
    queryString ? `?${queryString}` : ""
  }`;

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
  const data = await fetcher({ resource: "products", query });
  return data;
}

export const getItem = async (productId: ID) => {
  const data = await fetcher({ resource: `products/${productId}` });
  return data;
};

export const getItemComments = async (productId: ID, limit = 3) => {
  const data = await fetcher({
    resource: `products/${productId}/comments`,
    query: { limit },
  });
  return data;
};

export async function postItemComment(comment: string, productId: ID) {
  try {
    const response = await fetcher({
      resource: `products/${productId}/comments`,
      method: "POST",
      body: comment,
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
