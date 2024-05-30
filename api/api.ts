import instance from '@/lib/axios'

export async function getPosts({
  page = 1,
  pageSize = 100,
  order = '',
  keyword = '',
}) {
  const query = `page=${page}&pageSize=${pageSize}&order=${order}&keyword=${keyword}`
  const response = await instance.get('/articles?${query}')

  return response.data.list
}

export async function getBestPosts() {
  const response = await instance.get('/articles?orderBy=like')
  return response.data.list
}
