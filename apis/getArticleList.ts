import baseAxios from './baseAxios';
import { articleErrorMessage } from '@/constants/errorMessage';
import { SortType } from '@/constants/sortOption';

interface GetArticleListParams {
  page?: number;
  pageSize?: number;
  orderBy?: SortType;
  keyword?: string;
}

export const getArticleList = async ({
  page = 1,
  pageSize = 3,
  orderBy = 'like',
  keyword,
}: GetArticleListParams) => {
  try {
    const response = await baseAxios.get('/articles', {
      params: { page, pageSize, orderBy, keyword },
    });
    return response.data;
  } catch (error) {
    throw new Error(articleErrorMessage);
  }
};
