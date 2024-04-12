import React from 'react'
import favorite from '../assets/favorite.png'
import styles from '../styles/Products.module.css';

export default function Products({ product }) {
  const { images, name, price, favoriteCount } = product;
  return (
    <>
      <div className={styles.product_box}>
        <img className={styles.product} src={images} alt="상품 사진" />
      </div>
      <div>
        <p>{name} 팝니다</p>
        <h3>{price}</h3>
        <div className={styles.favorite_box}>
          <img className={styles.favorite} src={favorite} alt="좋아요 버튼" />
        </div>
        <span>{favoriteCount}</span>
      </div>
    </>
  )
}
