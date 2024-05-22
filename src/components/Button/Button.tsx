import styled from "styled-components";
import { DefaultButton } from "./Button.style";
import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  ${DefaultButton}
`;
