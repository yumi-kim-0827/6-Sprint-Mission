import styles from "./styles.module.css";

function Button({ children, className, isDisabled, handleClick }) {
  return (
    <button
      className={styles[className]}
      disabled={isDisabled}
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
