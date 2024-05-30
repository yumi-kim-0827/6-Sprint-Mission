import baseAxios from './baseAxios';

interface GetArticleListParams {
  page?: number;
  pageSize?: number;
  orderBy?: string;
}

export const getArticleList = async ({
  page = 1,
  pageSize = 3,
  orderBy = 'like',
}: GetArticleListParams) => {
  try {
    const response = await baseAxios.get('/articles', {
      params: { page, pageSize, orderBy },
    });
    return response.data;
  } catch (error) {
    throw new Error('데이터 불러오기 실패');
  }
};
