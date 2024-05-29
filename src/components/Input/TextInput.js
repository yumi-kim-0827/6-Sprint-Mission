import { useState } from "react";
import Styles from "./Input.module.scss";

export default function TextInput({
  name,
  value,
  onChange,
  id,
  className,
  required,
  placeholder,
}) {
  const [isEmpty, setIsEmpty] = useState(false);
  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  if (name === "nickname") {
    return (
      <>
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          id={id}
          className={`${Styles.input} ${className}`}
          placeholder={placeholder}
          required={required}
        />
        {isEmpty && <p className="alert">닉네임을 입력하세요.</p>}
      </>
    );
  }
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      className={`${Styles.input} ${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
}
