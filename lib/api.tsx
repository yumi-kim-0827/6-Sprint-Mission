import axiosInstance from "./axios";

async function fetchData(url: string) {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    throw error;
  }
}

interface URLSearchParamsProps {
  page?: number;
  limit?: number;
  order?: string;
  keyword?: string;
}

export async function getArticles({
  page = 1,
  limit = 10,
  order = "recent",
  keyword = "",
}: Partial<URLSearchParamsProps> = {}) {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    orderBy: order,
    keyword,
  }).toString();
  const url = `/articles?${query}`;

  try {
    const data = await fetchData(url);
    return data.list;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    throw error;
  }
}
