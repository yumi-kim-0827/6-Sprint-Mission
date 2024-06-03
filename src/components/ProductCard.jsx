import React from "react";
import styles from "./ProductCard.module.css";
import heartIcon from "../image/icon_heart.svg";

const ProductCard = ({ item, bestSize }) => {
  const { images, name, price, favoriteCount } = item;

  return (
    <div className={styles.ProductCard}>
      <div>
        <img src={images} alt="product" className={styles.section_image} />
      </div>
      <div className={styles.card}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}원</div>
        <div className={styles.favoriteCount}>
          <img src={heartIcon} />
          {favoriteCount}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
