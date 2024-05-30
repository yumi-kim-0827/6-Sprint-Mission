/* eslint-disable jsx-a11y/alt-text */
import { getBestPosts } from '@/api/api'
import React, { useEffect, useState } from 'react'
import icon_medal from '@/public/assets/icon_medal.png'
import icon_favorite from '@/public/assets/icon_favorite.png'
import Image from 'next/image'
import styles from '@/styles/posts.module.css'
import formatDate from '@/utils/formatDate'

type bestPostsData = {
  id: number
  title: string
  content: string
  image?: string | null
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
    <>
      {bestPosts.map((post) => {
        return (
          <>
            <div className={styles.bestPostBox}>
              <div key={post.id}>
                <div className={styles.medal}>
                  <Image src={icon_medal} alt="메달" width={16} height={16} />
                  <p>Best</p>
                </div>
                <div className={styles.titleImage}>
                  <h3 className={styles.titleP}>{post.title}</h3>
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
                <div className={styles.bestPostFooter}>
                  <div className={styles.writerContent}>
                    <p className={styles.writer}>{post.writer.nickname}</p>
                    <Image
                      src={icon_favorite}
                      alt="하트"
                      width={16}
                      height={16}
                    />
                    <p className={styles.writer}>{post.likeCount}</p>
                  </div>
                  <p className={styles.date}>{formatDate(post.createdAt)}</p>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
