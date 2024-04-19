import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "../Button/LinkButton";
import pandaLogo from "../../assets/images/panda_face.svg";

const Header = () => {
  const getLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "var(--blue)" : "#4b5563",
    };
  };

  return (
    <HeaderBox>
      <Inner className="inner">
        <div className="left flex-center">
          <Logo className="flex-center" to="/">
            <LogoImg className="mobile-hidden">
              <img src={pandaLogo} alt="판다마켓 로고 이미지" />
            </LogoImg>
            <span className="logo-text font-rokaf">판다마켓</span>
          </Logo>

          <NavList className="flex-center">
            <NavItem>
              <NavItemLink to="/free" style={getLinkStyle}>
                자유게시판
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink to="/items" style={getLinkStyle}>
                중고마켓
              </NavItemLink>
            </NavItem>
          </NavList>
        </div>

        <LinkButton to="/signin">로그인</LinkButton>
      </Inner>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  padding: 11px 0;
  display: flex;
  position: sticky;
  top: 0;
  background-color: var(--white);
  border-bottom: 1px solid #dfdfdf;
  z-index: 10;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const NavList = styled.ul`
  margin-left: 3.2rem;
`;

const NavItem = styled.li`
  min-width: 110px;
  padding: 0 1.5rem;
  text-align: center;
`;

const NavItemLink = styled(NavLink)`
  font-size: var(--font-18);
  font-weight: 700;
  color: #4b5563;
`;

const Logo = styled(Link)`
  gap: 0 0.8rem;
`;

const LogoImg = styled.div`
  width: 40px;
  height: 40px;
`;

export default Header;
