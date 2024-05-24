import styled from "styled-components";
import COLORS from "styles/palette";

export const FormInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  height: 56px;
  background-color: ${COLORS.COOL_GRAY_300};
  outline: none;
  border: ${({ $error = false }) =>
    $error ? `2px solid ${COLORS.ERROR}` : "none"};
  border-radius: 12px;
  text-indent: 24px;
  &::placeholder {
    color: ${COLORS.LIGHT_GRAY};
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    border: ${({ $error = false }) =>
      $error ? `2px solid ${COLORS.ERROR}` : `2px solid ${COLORS.BLUE}`};
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
  background-color: ${COLORS.COOL_GRAY_300};
  padding: 16px 24px;
  &::placeholder {
    color: ${COLORS.LIGHT_GRAY};
    font-size: 16px;
    font-weight: 400;
  }

  &:focus {
    border: 2px solid ${COLORS.BLUE};
  }
`;
