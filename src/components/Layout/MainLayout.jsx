import styles from "./Layout.module.scss";

export default function MainLayout({ children }) {
  return <div className={styles.main__layout}>{children}</div>;
}
