export async function getItems({order, page, pageSize, keyword=""}) {
  const query = `?orderBy=${order}&page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  let response;
  try {
    response = await fetch(
      `https://panda-market-api.vercel.app/products${query}`
    );
  } catch(error) {
    throw new Error("주소가 유효하지 않습니다.");
  }
  if(!response.ok) {
    throw new Error("아이템을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}