import { useState } from "react";
import Styles from "./Input.module.scss";

export default function EmailInput({
  name,
  value,
  onChange,
  id,
  className,
  required,
  isInvalid,
}) {
  const [isEmpty, setIsEmpty] = useState(false);
  const handleChange = (e) => {
    if (e.target.checkValidity()) {
      isInvalid(false);
    } else {
      isInvalid(true);
    }
    if (e.target.value.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  return (
    <>
      <input
        type="email"
        name={name}
        value={value}
        onChange={handleChange}
        id={id}
        className={`${Styles.input}`}
        placeholder="이메일을 입력해주세요"
        required={required}
      />
      {isEmpty && <p className="alert">이메일을 입력하세요.</p>}
    </>
  );
}
