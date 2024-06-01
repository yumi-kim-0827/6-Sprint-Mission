import React, { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";
type name = "email" | "password" | "passwordVerify" | "nickName";

interface CustomInputProps {
  id: name;
  type?: "text" | "password";
  name: name;
  children: ReactNode;
  placeholder?: string;
  value: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  color: var(--gray-800);
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
`;

const Input = styled.input`
  height: 56px;
  border-radius: 12px;
  border: 1px solid transparent;
  background-color: var(--gray-100);
  padding-left: 24px;
  &:focus {
    border: 2px solid #3691ff;
    outline: none;
  }
`;

const CustomInput = ({
  id,
  type = "text",
  name,
  children,
  placeholder,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <InputContainer>
      <Label id={id}>{children}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default CustomInput;
