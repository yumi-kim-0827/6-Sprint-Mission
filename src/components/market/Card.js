import React from "react";
import HeartIcon from "assets/icon/ic_heart.svg";
import addCommas from "features/lib/addCommas";
import styles from "styles/items.module.scss";

export default function Card({ data }) {
  const { img, title, price, likeCount } = data;

  return (
    <div className={styles.container}>
      <img className={styles.productImg} src={img} alt="ipad" />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>{`${addCommas(price)}원`}</span>
      <div className={styles.like}>
        <img src={HeartIcon} alt="heart-icon" />
        <span>{likeCount}</span>
      </div>
    </div>
  );
}
