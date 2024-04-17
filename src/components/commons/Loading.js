import React from "react";
import styles from "styles/commons.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading__container}>
      <div className={styles.loading}></div>
    </div>
  );
}
