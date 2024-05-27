import styled from "styled-components";
import { onPc, onTablet, onTabletAndPc } from "styles/mediaQuery";
import COLORS from "styles/palette";
import zIndex from "styles/zIndex";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid #dfdfdf;
  position: sticky;
  top: 0;
  z-index: ${zIndex.GNB};
  background-color: white;

  ${onTablet} {
    padding: 10px 34px;
  }

  ${onPc} {
    padding: 10px 200px;
  }
`;

export const NavbarLinkContainer = styled.div`
  flex-grow: 1;
  font-weight: 700;
  font-size: 16px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 8px;

  ${onTabletAndPc} {
    font-size: 18px;
    gap: 38px;
    margin-left: 32px;
  }

  a {
    color: ${COLORS.COOL_GRAY_600};
    &:hover,
    &:focus {
      color: ${COLORS.COOL_GRAY_700};
    }
  }
`;
