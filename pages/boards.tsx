import React from 'react'
import styles from '../styles/boards.module.css'
import BestPosts from '@/components/BestPosts'
import Posts from '@/components/Posts'

export default function boards() {
  return (
    <div className={styles.container}>
      <h3>베스트 게시글</h3>
      <BestPosts />
      <div className={styles.postsNav}>
        <h3>게시글</h3>
        <button>글쓰기</button>
      </div>
      <Posts />
    </div>
  )
}
