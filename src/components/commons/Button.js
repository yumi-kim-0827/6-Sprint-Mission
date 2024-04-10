import styles from "styles/Commons.module.scss";
import React from "react";

export default function Button({ text }) {
  return <div className={styles.button}>{text}</div>;
}
