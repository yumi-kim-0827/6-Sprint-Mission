export async function getItems({ order = 'createdAt', offset = 0, limit = 10 }) {
  const query = `order=${order}`;
  const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
  if (!response.ok) {
    throw new Error('정보를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
