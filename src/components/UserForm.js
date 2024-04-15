import React from "react";
import "./UserForm.css";

const UserForm = ({ type }) => {
  const [formAction, buttonText] =
    type === "login" ? ["", "로그인"] : ["", "회원가입"];

  return (
    <>
      <form action={formAction} className="user-form">
        <div className="user-form__group">
          <label for="email" className="user-form__label">
            이메일
          </label>
          <div className="input user-form__input">
            <input
              type="email"
              id="email"
              className="input-primary user-form__input-field"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <p id="email-error" className="hidden"></p>
        </div>

        {type === "signup" && (
          <div className="user-form__group">
            <label for="username" className="user-form__label">
              닉네임
            </label>
            <div className="input user-form__input">
              <input
                type="text"
                id="username"
                className="input-primary user-form__input-field"
                placeholder="닉네임을 입력해주세요"
              />
            </div>
            <p id="username-error" className="hidden"></p>
          </div>
        )}

        <div className="user-form__group">
          <label for="password" className="user-form__label">
            비밀번호
          </label>
          <div className="input user-form__input">
            <input
              type="password"
              id="password"
              className="input-primary user-form__input-field"
              placeholder="비밀번호를 입력해주세요"
            />
            <button type="button" className="toggle-password-btn">
              <i className="icon-eye-off"></i>
            </button>
          </div>
          <p id="password-error" className="hidden"></p>
        </div>

        {type === "signup" && (
          <div className="user-form__group">
            <label for="password" className="user-form__label">
              비밀번호 확인
            </label>
            <div className="input user-form__input">
              <input
                type="password"
                id="password-check"
                className="input-primary user-form__input-field"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <button type="button" className="toggle-password-btn">
                <i className="icon-eye-off"></i>
              </button>
            </div>
            <p id="password-check-error" className="hidden"></p>
          </div>
        )}

        <button className="btn user-form__btn">{buttonText}</button>
      </form>
    </>
  );
};

export default UserForm;
