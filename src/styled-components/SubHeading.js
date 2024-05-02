import styled from "styled-components";

import { BREAKPOINT } from "../module";

const SubHeading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--gray800);

  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    font-size: 20px;
  }
`;

export default SubHeading;
