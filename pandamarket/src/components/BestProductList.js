/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "../styles/bestproductlist.module.css";

function BestProductList({ products }) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <img
            src={product.images[0]}
            alt={product.name}
            className={styles["product-img"]}
          />
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.price}</div>
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

export default BestProductList;
