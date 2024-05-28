import { useState } from "react";
import Styles from "./Input.module.scss";

export default function TextInput({ id, className, required }) {
  const [type, setType] = useState("password");
  const handleChange = (e) => {
    if(e.target.checked) {
      setType("text");
    }
    else {
      setType("password");
    }
  }

  return (
    <span className="section-form__pw-box">
      <input
        type={type}
        id={id}
        className={`${Styles.input} ${className}`}
        data-form="password"
        placeholder="비밀번호를 입력해주세요"
        minlength="8"
        required={required}
      />
      <input
        type="checkbox"
        id="login-pw-show"
        className="blind chk-visibility" onChange={handleChange}
      />
      <label for="login-pw-show" className="spr visibility-off">
        <span className="blind">비밀번호 보기/숨기기</span>
      </label>
    </span>
  );
}
