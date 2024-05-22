import styled from "styled-components";
import { DEVICE } from "styles/variables";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid #dfdfdf;
  position: sticky;
  top: 0;
  z-index: var(--GNB);
  background-color: white;

  @media (min-width: ${DEVICE.TABLET}) {
    padding: 10px 34px;
  }

  @media (min-width: ${DEVICE.DESKTOP}) {
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

  @media (min-width: ${DEVICE.TABLET}) {
    font-size: 18px;
    gap: 38px;
    margin-left: 32px;
  }

  a {
    color: var(--cool-gray600);
    &:hover,
    &:focus {
      color: var(--cool-gray700);
    }
  }
`;
