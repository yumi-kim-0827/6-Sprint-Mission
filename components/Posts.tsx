import { getPosts } from '@/api/api'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/posts.module.css'
import formatDate from '@/utils/formatDate'
import Image from 'next/image'
import icon_favorite from '@/public/assets/icon_favorite.png'
import img_profile from '@/public/assets/img_profile.png'
import icon_search from '@/public/assets/icon_search.png'
import icon_order from '@/public/assets/icon_order.png'
import icon_dropdown from '@/public/assets/icon_dropdown.png'

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
  const selectOptions = [
    { value: 'createdAt', label: '최신순' },
    { value: 'favoriteCount', label: '좋아요순' },
  ]

  const [posts, setPosts] = useState<PostsData[]>([])
  const [keyword, setKeyword] = useState('')
  const [isDropdownView, setDropdownView] = useState(false)
  const [order, setOrder] = useState(selectOptions[0].value)

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
  }, [order, keyword])

  const handleKeywordSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const toggleDropdown = () => {
    setDropdownView(!isDropdownView)
  }

  const selectOption = (value: string) => {
    setOrder(value)
    setDropdownView(false)
  }

  return (
    <div>
      <div className={styles.navSearch}>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <Image src={icon_search} alt="검색 아이콘" width={24} height={24} />
          </div>
          <input
            className={styles.searchInput}
            placeholder="검색할 상품을 입력해주세요"
            onChange={handleKeywordSearch}
          />
        </div>
        <div className={styles.dropdown} onClick={toggleDropdown}>
          <picture>
            <source
              srcSet={icon_order.src}
              media="all and (max-width: 768px)"
            />
            <span className={styles.valueName}>
              {selectOptions.find((option) => option.value === order)?.label}
            </span>
            <Image src={icon_dropdown} alt="드롭다운" width={24} height={24} />
          </picture>
          {isDropdownView && (
            <ul className={styles.dropdownMenu}>
              {selectOptions.map((option) => (
                <li
                  key={option.value}
                  onClick={() => selectOption(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
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
