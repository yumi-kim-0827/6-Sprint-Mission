import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefaultButton } from "../Button.style";

export default function LinkButton({ children, to = "/", radius }) {
  return (
    <Link to={to}>
      <StyledLinkButton radius={radius}>{children}</StyledLinkButton>
    </Link>
  );
}

const StyledLinkButton = styled.button`
  ${DefaultButton}
  background-color: var(--blue);
  border-radius: ${({ radius }) => radius}px;

  &:focus,
  &:hover {
    background-color: var(--blue600);
  }
`;
