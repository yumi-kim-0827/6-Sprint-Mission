import styled from "styled-components";

export const FormInput = styled.input`
  width: 100%;
  height: 56px;
  background-color: var(--input-bg);
  outline: none;
  border: none;
  border-radius: 12px;
  text-indent: 24px;
  &::placeholder {
    color: var(--light-gray);
    font-size: 16px;
    font-weight: 400;
  }
`;

export const TextareaInput = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: var(--input-bg);
  padding: 16px 24px;
  &::placeholder {
    color: var(--light-gray);
    font-size: 16px;
    font-weight: 400;
  }
`;
