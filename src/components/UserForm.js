import React from "react";
import styled from "styled-components";

import Button from "./Button";

import eyeIcon from "../assets/icon/eye.svg";
import eyeOffIcon from "../assets/icon/eye-off.svg";

const UserFormInput = ({ label, placeholder, className }) => {
  const labelName = {
    email: "이메일",
    username: "닉네임",
    password: "비밀번호",
    passwordCheck: "비밀번호 확인",
  };

  let type;
  switch (label) {
    case "email":
      type = "email";
      break;
    case "password" || "passwordCheck":
      type = "password";
      break;
    default:
      type = "text";
      break;
  }

  return (
    <div className={`${className} user-form__group`}>
      <label for={label} className="user-form__label">
        {labelName[label]}
      </label>
      <div className="user-form__input">
        <input
          type={type}
          id={label}
          className="user-form__input-field"
          placeholder={placeholder}
        />
        {label.includes("password") && (
          <button type="button" className="toggle-password-btn">
            <i className="icon-eye hidden"></i>
            <i className="icon-eye-off"></i>
          </button>
        )}
      </div>
      <p id={`${label}-error`} className="hidden"></p>
    </div>
  );
};

const StyledUserFormInput = styled(UserFormInput)`
  input &::placeholder {
    color: var(--color-cool-gray-400);
  }
  &:focus {
    outline: #3692ff solid 1.5px;
  }

  .user-form__input {
    position: relative;
  }

  .user-form__label {
    display: block;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.48px;
    color: var(--color-cool-gray-800);
  }

  .user-form__input-field {
    position: relative;
    width: 640px;
    height: 56px;
    padding: 16px;
    border-radius: 12px;
    background-color: var(--color-cool-gray-100);
  }

  .toggle-password-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    background: transparent;
  }

  i.icon-eye,
  i.icon-eye-off {
    display: block;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  i.icon-eye {
    background-image: url(${eyeIcon});
  }

  i.icon-eye-off {
    background-image: url(${eyeOffIcon});
  }

  @media screen and (max-width: 767px) {
    .user-form__input-field,
    .user-form__btn {
      width: 100%;
    }

    .user-form__label {
      font-size: 14px;
      margin-bottom: 8px;
    }

    .user-form__input {
      margin-bottom: 16px;
    }
  }

  /* input 자동완성 시 자동 스타일 적용 초기화 */

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  input:autofill,
  input:autofill:hover,
  input:autofill:focus,
  input:autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const UserForm = ({ type, isValidation = false }) => {
  const [formAction, buttonText] =
    type === "login" ? ["", "로그인"] : ["", "회원가입"];

  return (
    <>
      <StyledUserForm action={formAction} className="user-form">
        <StyledUserFormInput
          label="email"
          placeholder="이메일을 입력해주세요"
        />
        {type === "signup" && (
          <StyledUserFormInput
            label="username"
            placeholder="닉네임을 입력해주세요"
          />
        )}
        <StyledUserFormInput
          label="password"
          placeholder="비밀번호를 입력해주세요"
        />
        {type === "signup" && (
          <StyledUserFormInput
            label="passwordCheck"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
          />
        )}
        <Button
          className="user-form__btn"
          size="large"
          type="submit"
          disabled={!isValidation}
        >
          {buttonText}
        </Button>
      </StyledUserForm>
    </>
  );
};

const StyledUserForm = styled.form`
  .user-form__group {
    max-width: 640px;
    margin-bottom: 24px;
  }

  .user-form__btn {
    width: 640px;
  }
`;

export default UserForm;
