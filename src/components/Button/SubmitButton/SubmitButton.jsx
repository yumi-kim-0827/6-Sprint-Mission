import styles from "../Button.module.scss";

export default function SubmitButton({ className, children }) {
  return (
    <button
      type={styles.submitBtn}
      className={`${styles.submitBtn} ${className}`}
    >
      {children}
    </button>
  );
}
