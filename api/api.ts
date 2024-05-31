import instance from '@/lib/axios'

export async function getPosts({ orderBy = '', keyword = '' }) {
  const query = `orderBy=${orderBy}&keyword=${keyword}`
  const response = await instance.get(`/articles?${query}`)
  return response.data.list
}

export async function getBestPosts({ pageSize = 3 }) {
  const response = await instance.get(
    `/articles?&pageSize=${pageSize}&orderBy=like`
  )
  return response.data.list
}
