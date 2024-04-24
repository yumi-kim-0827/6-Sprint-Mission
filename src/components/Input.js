import React from "react";
import styled from "styled-components";

const Input = ({
  label = "",
  type = "text",
  placeholder = "",
  onChange,
  onBlur,
  accept = null,
  value,
  autoComplete = "off",
}) => {
  return (
    <>
      <InputEl
        id={label}
        name={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        accept={accept}
        autoComplete={autoComplete}
      />
    </>
  );
};

const TextAreaInput = ({
  label = "",
  placeholder = "",
  onChange,
  value,
  className,
}) => {
  return (
    <>
      <TextAreaEl
        className={className}
        id={label}
        name={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

const InputEl = styled.input`
  position: relative;
  width: 100%;
  // height: 56px;
  // padding: 16px;
  border-radius: 12px;
  background-color: var(--color-cool-gray-100);

  &::placeholder {
    color: var(--color-cool-gray-400);
  }
  &:focus {
    outline: #3692ff solid 1.5px;
  }

  /* input 자동완성 시 자동 스타일 적용 초기화 */

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  :autofill,
  :autofill:hover,
  :autofill:focus,
  :autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    box-shadow: 0 0 0px 1000px var(--color-cool-gray-100) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const TextAreaEl = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background-color: var(--color-cool-gray-100);
  resize: none;

  &::placeholder {
    color: var(--color-cool-gray-400);
  }
  &:focus {
    outline: #3692ff solid 1.5px;
  }
`;

export { Input, TextAreaInput };
