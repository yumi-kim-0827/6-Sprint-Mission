import React from 'react'
import favoriteButton from '../assets/ic_favorite.png'
import styles from '../styles/ProductCard.module.css';
import AllProducts from './AllProducts';
import BestProducts from './BestProducts'

function ProductCard({ item }) {
  let product_img_box;
  if (<BestProducts />) product_img_box = styles.bestProduct_box
  if (<AllProducts />) product_img_box = styles.allProduct_box;

  return (
    <div className={styles.product_wrap}>
      <div className={product_img_box}>
        <img className={styles.product_img} src={item.images[0]} alt={item.name} />
      </div>
      <div className={styles.product_info}>
        <h2>{item.name}</h2>
        <p>{item.price.toLocaleString()}원</p>
        <div className={styles.product_favorite}>
          <div className={styles.product_favoriteButton_box}>
            <img className={styles.product_favoriteButton_img} src={favoriteButton} alt='favoriteButton' />
          </div>
          {item.favoriteCount}
        </div>
      </div>
    </div>
  )
}

export default ProductCard