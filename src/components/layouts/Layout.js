import React from "react";
import styles from "styles/layout.module.scss";

export function MainLayout({ children }) {
  return <div className={styles.main__layout}>{children}</div>;
}
