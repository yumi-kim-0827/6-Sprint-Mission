/* eslint-disable jsx-a11y/alt-text */
import { Link, useParams } from 'react-router-dom'
import styles from '../styles/itemsdetail.module.css'
import { useEffect, useState } from 'react'
import { getProductsComments, getProductsDetail } from '../api/api'
import { CommentNotFound } from '../components'

function ItemsDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [comments, setComments] = useState(null)

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getProductsDetail(id)
        setItem(data)
      } catch (error) {
        console.error('상품 정보를 가져오는데 실패했습니다', error)
      }
    }
    fetchItem()

    const fetchComments = async () => {
      try {
        const comments = await getProductsComments(id)
        setComments(comments)
        console.log(comments)
      } catch (error) {
        console.log('댓글을 가져오는데 실패했습니다', error)
      }
    }
    fetchComments()
  }, [id])

  if (!item) {
    return <div>Loading...</div>
  }

  if (!comments) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <img
          src={item.images[0]}
          alt={item.name}
          className={styles['item-img']}
        />
        <div className={styles['detail-description']}>
          <div className={styles['detail-nav']}>
            <p className={styles['detail-name']}>{item.name}</p>
            <img
              src={require('../assets/icon_optionbar.png')}
              className={styles.navimg}
            ></img>
          </div>
          <h1>
            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </h1>
          <div className={styles['border-bottom']}></div>
          <p className={styles['detail-description']}>상품소개</p>
          <p className={styles.description}>{item.description}</p>

          <p className={styles['detail-tags']}>상품 태그</p>
          <div className={styles.tags}>
            {item.tags.map((tag, index) => (
              <div key={index} className={styles.tag}>
                #{tag}
              </div>
            ))}
          </div>
          <div className={styles.favoriteCount}>
            <img src={require('../assets/icon_favorite.png')} />
            {item.favoriteCount}
          </div>
        </div>
      </div>

      <div className={styles.question}>
        <div className={styles['border-bottom']}></div>
        <h5>문의하기</h5>
        <textarea
          className={styles['question-input']}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></textarea>
        <button className={styles['button-disabled']}>등록</button>
      </div>

      {comments.length === 0 ? (
        <CommentNotFound />
      ) : (
        <div className={styles.comments}>
          {comments.map((comment, index) => (
            <>
              <p>{comment.content}</p>
              <div key={index} className={styles.user}>
                <img src={comment.writer.image} className={styles.userimg} />
                <div className={styles['user-info']}>
                  <p className={styles.nickname}>{comment.writer.nickname}</p>
                  <p className={styles.time}>시간 전</p>
                </div>
              </div>
              <div className={styles['border-bottom']}></div>
            </>
          ))}
        </div>
      )}

      <div className={styles.backtolist}>
        <Link to={'/items'}>
          <button className={styles.back}>
            목록으로 돌아가기
            <img
              src={require('../assets/icon_back.png')}
              className={styles.backimg}
            />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ItemsDetail
