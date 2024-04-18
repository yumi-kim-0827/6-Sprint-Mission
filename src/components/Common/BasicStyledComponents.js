import styled, { css } from "styled-components";

/* styled components for input */
export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2px;
  color: var(--cool-gray800);
`;

const inputStyle = css`
  width: 100%;
  background-color: var(--cool-gray100);
  border-radius: 12px;
  border: none;
  outline-color: var(--point-blue100);
  outline-width: 2px;
  margin-top: 12px;
  padding: 16px 24px;

  color: var(--cool-gray800);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  &::placeholder {
    color: var(--cool-gray400);
  }
`;

export const Input = styled.input`
  height: 56px;
  ${inputStyle}
`;

export const Textarea = styled.textarea`
  height: 200px;
  resize: none;
  ${inputStyle}
`;
