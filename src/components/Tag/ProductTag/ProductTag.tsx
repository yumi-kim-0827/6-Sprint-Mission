import { ReactNode } from "react";
import styled from "styled-components";
import COLORS from "styles/palette";

export default function ProductTag({ children }: { children: ReactNode }) {
  return <StyledTag>{children}</StyledTag>;
}

const StyledTag = styled.div`
  background-color: ${COLORS.COOL_GRAY_300};
  width: max-content;
  padding: 6px 16px;
  border-radius: 26px;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  color: ${COLORS.COOL_GRAY_800};
  user-select: none;
`;
