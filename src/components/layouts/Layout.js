import React from "react";
import styles from "styles/layout.module.scss";

export function MarketLayout({ children }) {
  return <div className={styles.market__layout}>{children}</div>;
}
