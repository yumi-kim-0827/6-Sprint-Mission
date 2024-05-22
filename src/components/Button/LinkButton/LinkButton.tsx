import { Link } from "react-router-dom";
import styled from "styled-components";
import { DefaultButton } from "../Button.style";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to: string;
  radius?: number;
}

export default function LinkButton({ children, to = "/", radius = 8 }: Props) {
  return (
    <Link to={to}>
      <StyledLinkButton radius={radius}>{children}</StyledLinkButton>
    </Link>
  );
}

const StyledLinkButton = styled.button<{ radius: number }>`
  ${DefaultButton}
  background-color: var(--blue);
  border-radius: ${({ radius }) => radius}px;

  &:focus,
  &:hover {
    background-color: var(--blue600);
  }
`;
