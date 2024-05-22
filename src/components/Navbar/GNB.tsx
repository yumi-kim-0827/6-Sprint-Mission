import { NavLink, useLocation } from "react-router-dom";
import SmallMainLogo from "assets/icon/main_logo_small.svg";
import MainLogo from "assets/icon/main_logo.svg";
import Button from "components/Button";
import useDeviceState from "hooks/useDeviceState";
import * as S from "./Navbar.style";

export default function GNB() {
  const { pathname } = useLocation();
  const { isMobileWidth } = useDeviceState();

  return (
    <S.NavbarContainer>
      <NavLink to="/">
        <img src={isMobileWidth ? SmallMainLogo : MainLogo} alt="main-logo" />
      </NavLink>
      <S.NavbarLinkContainer>
        <NavLink
          to="/free-board"
          style={({ isActive }) => ({ color: isActive ? "var(--blue)" : "" })}
        >
          자유게시판
        </NavLink>
        <NavLink
          to="/items"
          style={({ isActive }) => ({
            color: isActive || pathname === "/additem" ? "var(--blue)" : "",
          })}
        >
          중고마켓
        </NavLink>
      </S.NavbarLinkContainer>
      <Button.Link to="/login">로그인</Button.Link>
    </S.NavbarContainer>
  );
}
