import React, {  } from 'react'
import Button from './Button'
import Products from './Products'
import styles from '../styles/AllProducts.module.css'

export default function AllProducts({ products, handleNewstClick, handleFavoriteClick }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.products_nav}>
        <h3>전체 상품</h3>
        <input type="text" placeholder='검색할 상품을 등록해주세요'/>
        <Button>상품 등록하기</Button>
        <select name="" id="">
          <option value="">최신순</option>
          <option value="">좋아요순</option>
        </select>
      </div>
      <div className={styles.productList_container}>
        {products.map((product) => {
          return (
            <div key={product.id}><Products product={product} /></div>
          )
        })}
      </div>
    </div>
  )
}
