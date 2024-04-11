import styles from "styles/commons.module.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, to = "/" }) {
  return (
    <Link to={to}>
      <div className={styles.button}>{children}</div>
    </Link>
  );
}
