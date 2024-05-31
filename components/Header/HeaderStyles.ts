import Link from "next/link";
import styled from "styled-components";

type IsActiveProps = {
  $isActive: boolean;
}

export const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colorPalette.tertiary};
  background-color: #fff;

  @media ${({ theme }) => theme.windowSize.tablet} {
    padding: 15px 24px;
  }

  @media ${({ theme }) => theme.windowSize.desktop} {
    padding: 15px 200px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
`

export const LogoWrapper = styled.div`
position: relative;

.mobile-logo {
  display: block;
}

.desktop-logo {
  display: none;
}

@media ${({ theme }) => theme.windowSize.tablet} {
  .mobile-logo {
    display: none;
  }

  .desktop-logo {
    display: block;
  }
}
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-left: 16px;

  &:not(:first-of-type) {
    margin-left: 8px;
  }

  @media ${({ theme }) => theme.windowSize.tablet} {
    margin-left: 35px;

    &:not(:first-of-type) {
    margin-left: 39px;
    }
  }

  @media ${({ theme }) => theme.windowSize.tablet} {
    margin-left: 48px;

`;

export const NavLink = styled(Link)<IsActiveProps>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
  line-height: 1.9rem;
  text-align: center;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colorPalette.primary : theme.colorPalette.fontPrimary)};

  @media ${({ theme }) => theme.windowSize.tablet} {
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 2.1rem;
  }
`