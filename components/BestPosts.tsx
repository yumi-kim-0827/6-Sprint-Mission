import { getBestPosts } from '@/api/api'
import React, { useEffect, useState } from 'react'

type bestPostsData = {
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

export default function BestPosts() {
  const [bestPosts, setBestPosts] = useState<bestPostsData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBestPosts()
        setBestPosts(data)
      } catch (error) {
        console.error('posts 가져오는데 문제 발생', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div>
        {bestPosts.map((post) => {
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
