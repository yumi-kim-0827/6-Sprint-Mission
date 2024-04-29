import React from "react";
import styled from "styled-components";

const BaseTextArea = ({
  className = "",
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyDown,
  accept = null,
  autoComplete = "off",
  ...rest
}) => {
  return (
    <>
      <StyledTextArea
        className={className}
        id={label}
        name={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        accept={accept}
        autoComplete={autoComplete}
      />
    </>
  );
};

const StyledTextArea = styled.textarea`
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
export default BaseTextArea;
