import { ReactNode } from "react";
import styled from "styled-components";
import DefaultButton from "../Button.style";

interface Props {
  isActive: boolean;
  children: ReactNode;
  round?: boolean;
  handleSubmit?: () => void;
}

export default function SubmitButton({
  isActive,
  children,
  round = false,
  handleSubmit = () => {},
}: Props) {
  return (
    <StyledSubmitButton
      type="button"
      $isActive={isActive}
      disabled={!isActive}
      $round={round}
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {children}
    </StyledSubmitButton>
  );
}

const StyledSubmitButton = styled.button<{
  $isActive: boolean;
  $round?: boolean;
}>`
  ${DefaultButton};
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--blue)" : "var(--light-gray)"};
  border-radius: ${({ $round = false }) => ($round ? 40 : 8)}px;

  &:focus,
  &:hover {
    background-color: ${({ $isActive }) => $isActive && "var(--blue600)"};
  }
`;
