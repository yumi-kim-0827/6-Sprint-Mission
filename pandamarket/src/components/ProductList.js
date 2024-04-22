/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "../styles/productList.module.css";

function ProductList({ products }) {
  return (
    <div className={styles.products}>
      {/* products는 map을 통해 배열 내의 각 상품을 순회하면서 상품 정보 렌더링 */}
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <img
            src={product.images[0]}
            alt={product.name}
            className={styles["product-img"]}
          />
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
          <div className={styles.favoritecount}>
            <img src="/assets/icon_favorite.png"></img>
            <div className={styles["favoritecount-number"]}>
              {product.favoriteCount}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
