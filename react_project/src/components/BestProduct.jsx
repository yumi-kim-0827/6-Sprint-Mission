import React from 'react'
import Products from './Products'
import styles from '../styles/BestProduct.module.css'

export default function BestProduct({ products }) {
  return (
    <div className={styles.wrap}>
      <h3>베스트 상품</h3>
      <div className={styles.productList_container}>
        {products.slice(0, 4).map((product) => {
          return (
            <div key={product.id}><Products product={product} /></div>
          )
        })}
      </div>
    </div>
  )
}
