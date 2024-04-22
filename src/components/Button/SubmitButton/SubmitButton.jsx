import styled from "styled-components";
import { DefaultButton } from "../Button.style";

export default function SubmitButton({ isActive, children }) {
  return (
    <StyledSubmitButton type="submit" $isActive={isActive}>
      {children}
    </StyledSubmitButton>
  );
}

const StyledSubmitButton = styled.button`
  ${DefaultButton};
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--blue)" : "var(--light-gray)"};

  &:focus,
  &:hover {
    background-color: ${({ $isActive }) => $isActive && "var(--blue600)"};
  }
`;
