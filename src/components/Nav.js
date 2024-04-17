import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import logo from "../assets/pandaLogo.svg";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 200px;
  border: 1px solid #DFDFDF;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const Img = styled.img`
`;

const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  color: var(--nav-text-color);
  margin-left: 47px;

  &:not(:first-of-type) {
    margin-left: 39px;
  }

  &.active {
    color: var(--main-color);
  }
`;

function Nav() {
  return (
    <StyledNav>
      <ListContainer>
        <LogoContainer>
          <Img src={logo} alt="판다마켓 로고" />
        </LogoContainer>
        <StyledNavLink to="/board">
          자유게시판
        </StyledNavLink>
        <StyledNavLink to="/fleamarket">
          중고마켓
        </StyledNavLink>
      </ListContainer>
      <Link to='/login'>
        <Button>
          로그인
        </Button>
      </Link>
    </StyledNav>
  );
}

export default Nav;
