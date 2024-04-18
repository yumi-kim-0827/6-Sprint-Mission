import { addCommas } from "utils/commas";
import styles from "../Input.module.scss";
import { useEffect, useState } from "react";

export function FormInputMain({ name, value, onChange, placeholder }) {
  return (
    <div className={styles.form__input}>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export function NumberInput({ name, value: number, onChange, placeholder }) {
  const [priceStr, setPriceStr] = useState("");

  useEffect(() => {
    if (isNaN(number)) return;
    if (number === 0) setPriceStr("");
    else setPriceStr(addCommas(String(number)));
  }, [number]);

  return (
    <div className={styles.form__input}>
      <input
        name={name}
        placeholder={placeholder}
        value={priceStr}
        onChange={onChange}
        required
      />
    </div>
  );
}

export function FormTextarea({ name, content, onChange, placeholder }) {
  return (
    <div className={styles.form__textarea}>
      <textarea
        name={name}
        placeholder={placeholder}
        value={content}
        onChange={onChange}
        required
      />
    </div>
  );
}

export function TagInput({ name, value, onChange, onKeyUp, placeholder }) {
  return (
    <div className={styles.form__input}>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}
