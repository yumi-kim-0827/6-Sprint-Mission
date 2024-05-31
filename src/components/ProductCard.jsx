import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  const { images, name, price, favoriteCount } = item;

  return (
    <div className={styles.ProductCard}>
      <div>
        <img src={images} alt="product" className={styles.section_image} />
      </div>
      <div className={styles.section_content}>
        <div>{name}</div>
        <div>{price}</div>
        <div>{favoriteCount}</div>
      </div>
    </div>
  );
};

export default ProductCard;
