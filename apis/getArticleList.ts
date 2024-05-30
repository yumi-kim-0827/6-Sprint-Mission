import baseAxios from './baseAxios';

interface GetArticleListParams {
  page?: number;
  pageSize?: number;
  orderBy?: string;
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
    throw new Error('데이터 불러오기 실패');
  }
};
