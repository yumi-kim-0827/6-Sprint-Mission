import axios from '@/lib/axios';

export interface ILoadArticlesParams {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'like';
  keyword?: string;
}

export async function loadArticles({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}: ILoadArticlesParams) {
  try {
    const res = await axios.get('/articles', {
      params: { page, pageSize, orderBy, keyword },
    });
    return res.data.list;
  } catch (error) {
    console.error('Error get Articles', error);
  }
}
