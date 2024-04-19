import { addCommas } from "utils/commas";
import styles from "../Input.module.scss";
import { useEffect, useState } from "react";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";

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
    if (Number.isNaN(number) || !Number.isFinite(number)) return;
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

export function TagInput({
  name,
  value,
  tagList,
  handleTagDelete,
  onChange,
  onKeyUp,
  placeholder,
}) {
  return (
    <>
      <div className={styles.form__input}>
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
      </div>
      <div className={styles.tag__list}>
        {[...tagList].reverse().map((tag) => (
          <Tag key={tag} onDelete={() => handleTagDelete(tag)}>
            {tag}
          </Tag>
        ))}
      </div>
    </>
  );
}

function Tag({ children, onDelete }) {
  return (
    <div className={styles.tag}>
      {children}
      <XIcon fill="#9CA3AF" className={styles.icon} onClick={onDelete} />
    </div>
  );
}
