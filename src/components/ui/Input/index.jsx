import styles from "./styles.module.css";

function Input({
  className,
  id,
  placeholder,
  onChange = null,
  onKeyUp = null,
  value,
}) {
  return (
    <input
      className={styles[className]}
      id={id}
      name={id}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={value}
    ></input>
  );
}

export default Input;
