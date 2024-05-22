import { ReactNode } from "react";
import styled from "styled-components";
import DefaultButton from "../Button.style";

interface Props {
  isActive: boolean;
  children: ReactNode;
}

export default function SubmitButton({ isActive, children }: Props) {
  return (
    <StyledSubmitButton type="submit" $isActive={isActive} disabled={isActive}>
      {children}
    </StyledSubmitButton>
  );
}

const StyledSubmitButton = styled.button<{ $isActive: boolean }>`
  ${DefaultButton};
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--blue)" : "var(--light-gray)"};

  &:focus,
  &:hover {
    background-color: ${({ $isActive }) => $isActive && "var(--blue600)"};
  }
`;
