import React from "react";
import styles from "styles/commons.module.scss";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";

export default function Tag({ children }) {
  return (
    <div className={styles.tag}>
      {children}
      <XIcon fill="#9CA3AF" className={styles.icon} />
    </div>
  );
}
