import React from "react";
import iPad from "../../assets/img/mock/ipad.svg";
import HeartIcon from "../../assets/icon/ic_heart.svg";
import addCommas from "../../features/lib/addCommas";
import styles from "./Card.module.scss";

export default function Card({ title, price, likeCount }) {
  return (
    <div className={styles.container}>
      <img className={styles.productImg} src={iPad} alt="ipad" />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>{`${addCommas(price)}원`}</span>
      <div className={styles.like}>
        <img src={HeartIcon} alt="heart-icon" />
        <span>{likeCount}</span>
      </div>
    </div>
  );
}
