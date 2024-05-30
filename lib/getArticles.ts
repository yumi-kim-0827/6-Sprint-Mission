import instance from './axios';

export interface ListProps {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  content: string;
  title: string;
  id: number;
}

interface Writer {
  nickname: string;
  id: number;
}

export const getArticles = async (
  page: number,
  pageSize: number,
  orderBy: string,
  keyword?: string
): Promise<ListProps[]> => {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  try {
    const response = await instance.get(`/articles?${query}`);
    return response.data.list ?? [];
  } catch (error) {
    console.error(`Failed to fetch items: ${error}`);
    throw new Error('정보를 불러오는데 실패했습니다');
  }
};
