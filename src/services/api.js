const BASE_URL = 'https://panda-market-api.vercel.app/';

export async function getItems({ order = 'createdAt', offset = 0, limit = 10 }) {
  const query = `order=${order}`;
  const response = await fetch(`${BASE_URL}products?${query}`);
  if (!response.ok) {
    throw new Error('정보를 불러오는데 실패했습니다');
  }
  return response.json();
}
