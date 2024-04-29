import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import BaseButton from "./BaseButton";

import logo from "../assets/img/panda-logo.svg";
import logoTypo from "../assets/img/panda-logo-typo.svg";

function AppLayoutNavbar() {
  const { pathname } = useLocation();

  return (
    <StyledNavbar>
      <NavLink to="/">
        <StyledNavLogo src={logo} alt="판다마켓" />
        <StyledNavLogoTypo src={logoTypo} alt="판다마켓" />
      </NavLink>
      <StyledNavLink to="/community">자유게시판</StyledNavLink>
      <StyledNavLink
        to="/items"
        className={
          pathname === "/items" || pathname === "/additem" ? "active" : ""
        }
      >
        중고마켓
      </StyledNavLink>
      <NavLink to="/login">
        <NavLoginButton size="small">로그인</NavLoginButton>
      </NavLink>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 70px;
  padding: 0 16px;
  border-bottom: 1px solid #dfdfdf;
  background-color: #fff;
  z-index: 2;

  a:last-of-type {
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    gap: 0px;
    padding: 0 24px;
  }

  @media screen and (min-width: 1200px) {
    gap: 0px;
    padding: 0 200px;
  }
`;

const StyledNavLogo = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`;

const StyledNavLogoTypo = styled.img`
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 16px;
  color: var(--color-cool-gray-600);

  &.active {
    color: var(--color-blue);
  }

  @media screen and (min-width: 768px) {
    width: 109px;
    font-size: 18px;
    text-align: center;
  }
`;

const NavLoginButton = styled(BaseButton)`
  width: 88px;
  height: 42px;
`;

export default AppLayoutNavbar;
