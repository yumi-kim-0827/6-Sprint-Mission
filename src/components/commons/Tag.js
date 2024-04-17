import React from "react";
import styles from "styles/commons.module.scss";
import XIcon from "assets/icon/ic_X.svg";

export default function Tag({ children }) {
  return (
    <div className={styles.tag}>
      {children}
      <img src={XIcon} alt="x-icon" />
    </div>
  );
}
