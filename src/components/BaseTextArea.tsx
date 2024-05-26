import { TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface BaseTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const BaseTextArea = ({
  className = "",
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyDown,
  autoComplete = "off",
  ...rest
}: BaseTextAreaProps) => {
  return (
    <>
      <StyledTextArea
        className={className}
        id={label}
        name={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        autoComplete={autoComplete}
        {...rest}
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
  font-size: 16px;
  resize: none;

  &::placeholder {
    color: var(--color-cool-gray-400);
  }
  &:focus {
    outline: #3692ff solid 1.5px;
  }
`;
export default BaseTextArea;
