import { getPosts } from '@/api/api'
import React, { useEffect, useState } from 'react'

type PostsData = {
  id: number
  title: string
  content: string
  image: string
  likeCount: number
  createdAt: string
  updatedAt: string
  writer: {
    id: number
    nickname: string
  }
}

export default function Posts() {
  const [posts, setPosts] = useState<PostsData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts({
          page: 1,
          pageSize: 10,
          order: 'recent',
          keyword: '',
        })
        setPosts(data)
      } catch (error) {
        console.error('posts 가져오는데 문제 발생:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div>
      <div>
        {posts.map((post) => {
          return (
            <>
              <div key={post.id}>
                <p>{post.title}</p>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
