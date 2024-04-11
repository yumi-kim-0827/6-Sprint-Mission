import styles from "styles/commons.module.scss";
import React from "react";

export default function Button({ children }) {
  return <div className={styles.button}>{children}</div>;
}
