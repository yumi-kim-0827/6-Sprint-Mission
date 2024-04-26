const API_URL = process.env.REACT_APP_API_URL

export async function getProducts({
  page = 1,
  pageSize = 100,
  order = '',
  keyword = '',
}) {
  const query = `page=${page}&pageSize=${pageSize}&order=${order}&keyword=${keyword}`
  const response = await fetch(
    `${API_URL}/products?${query}`
  )

  const body = await response.json()
  return body.list
}

// 베스트 상품
export async function getBestProducts() {
  const response = await fetch(
    `${API_URL}/products?orderBy=favorite`
  )
  const body = await response.json()
  return body
}

export async function getProductsDetail(id) {
  const response = await fetch(
    `${API_URL}/products/${id}`
  )
  const data = await response.json()
  return data
}

export async function getProductsComments(id) {
  const response = await fetch(
    `${API_URL}/products/${id}/comments?limit=5`
  )
  const comments = await response.json()
  return comments.list
}

