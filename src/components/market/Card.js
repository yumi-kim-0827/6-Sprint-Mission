import React from "react";
import HeartIcon from "assets/icon/ic_heart.svg";
import { addCommas } from "utils/commas";
import styles from "styles/markets.module.scss";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  const { images = [], name: title, price, favoriteCount } = data;

  return (
    <Link>
      <div className={styles.card}>
        <img className={styles.productImg} src={images[0]} alt="product-img" />
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>{`${addCommas(price)}원`}</span>
        <div className={styles.like}>
          <img src={HeartIcon} alt="heart-icon" />
          <span>{favoriteCount}</span>
        </div>
      </div>
    </Link>
  );
}
