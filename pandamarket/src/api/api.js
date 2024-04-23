export async function getProducts({
  page = 1,
  pageSize = 100,
  order = '',
  keyword = '',
}) {
  const query = `page=${page}&pageSize=${pageSize}&order=${order}&keyword=${keyword}`
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  )

  const body = await response.json()
  return body.list
}

// 베스트 상품
export async function getBestProducts() {
  const response = await fetch(
    'https://panda-market-api.vercel.app/products?orderBy=favorite'
  )
  const body = await response.json()
  return body
}

export async function getProductsDetail(id) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${id}`
  )
  const data = await response.json()
  return data
}
