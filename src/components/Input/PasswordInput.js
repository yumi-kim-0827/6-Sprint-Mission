import Styles from "./Input.module.scss";

export default function TextInput({ id, className, required }) {
  return (
    <span className="section-form__pw-box">
      <input
        type="password"
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
        className="blind chk-visibility"
      />
      <label for="login-pw-show" className="spr visibility-off">
        <span className="blind">비밀번호 보기/숨기기</span>
      </label>
    </span>
  );
}
