import { getPosts } from '@/api/api'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/posts.module.css'
import formatDate from '@/utils/formatDate'
import Image from 'next/image'
import icon_favorite from '@/public/assets/icon_favorite.png'
import img_profile from '@/public/assets/img_profile.png'

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
              <div className={styles.postBox}>
                <div key={post.id}>
                  <div className={styles.titleImageWide}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    {post.image && (
                      <div className={styles.postImg}>
                        <Image
                          src={post.image}
                          alt="포스트 이미지"
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.postFooter}>
                  <div className={styles.writerProfile}>
                    <Image
                      src={img_profile}
                      alt="프로필 이미지"
                      width={24}
                      height={24}
                    />
                    <p className={styles.writer}>{post.writer.nickname}</p>
                    <p className={styles.date}>{formatDate(post.createdAt)}</p>
                  </div>
                  <div className={styles.writerContent}>
                    <Image
                      src={icon_favorite}
                      alt="하트"
                      width={16}
                      height={16}
                    />
                    <p className={styles.writer}>{post.likeCount}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
