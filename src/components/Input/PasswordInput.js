import { useState } from "react";
import Styles from "./Input.module.scss";

export default function PasswordInput({
  id,
  className,
  required,
  inputRef,
  isInvalid,
}) {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleCheck = (e) => {
    if (e.target.checked) {
      inputRef.current.type = "text";
    } else {
      inputRef.current.type = "password";
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length < 8) {
      isInvalid(true);
    } else {
      isInvalid(false);
    }
    if (e.target.value.length < 8) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  return (
    <>
      <span className="section-form__pw-box">
        <input
          type="password"
          className={`${Styles.input} ${className}`}
          placeholder="비밀번호를 입력해주세요"
          minLength="8"
          required={required}
          ref={inputRef}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          id={id}
          className="blind chk-visibility"
          onChange={handleCheck}
        />
        <label htmlFor={id} className="spr visibility-off">
          <span className="blind">비밀번호 보기/숨기기</span>
        </label>
      </span>
      {isEmpty && <p className="alert">비밀번호를 8자 이상 입력하세요.</p>}
    </>
  );
}
