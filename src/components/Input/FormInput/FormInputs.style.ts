import styled from "styled-components";

export const FormInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  height: 56px;
  background-color: var(--cool-gray300);
  outline: none;
  border: ${({ $error = false }) =>
    $error ? "2px solid var(--error)" : "none"};
  border-radius: 12px;
  text-indent: 24px;
  &::placeholder {
    color: var(--light-gray);
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    border: ${({ $error = false }) =>
      $error ? "2px solid var(--error)" : "2px solid var(--blue)"};
  }
`;

export const PWInputBox = styled.div`
  position: relative;

  .pw-eye {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
  }
`;

export const TextareaInput = styled.textarea<{ height?: number }>`
  width: 100%;
  height: ${({ height = 200 }) => height}px;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: var(--cool-gray300);
  padding: 16px 24px;
  &::placeholder {
    color: var(--light-gray);
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    border: 2px solid var(--blue);
  }
`;
