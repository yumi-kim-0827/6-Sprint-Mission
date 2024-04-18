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

/* styled button */
export const PureButton = styled.button`
  border: none;
`;

export const RoundStyledButton = styled(PureButton)`
  border-radius: 12px;

  &:hover {
    box-shadow: 0px 0px 2px var(--cool-gray500);
  }
`;

export const buttonEffect = css`
  background-color: var(--point-blue100);
  color: var(--white);

  &:hover {
    background-color: var(--point-blue300);
  }

  &:active {
    background-color: var(--point-blue400);
  }

  &:disabled {
    background-color: var(--cool-gray400);
  }
`;

export const smallButton = css`
  width: 88px;
  height: 42px;
  padding: 12px 20px;
  border-radius: 8px;
`;
