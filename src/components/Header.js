import { Link, NavLink, useLocation } from "react-router-dom";
import profileImg from "../assets/images/additemPage/user-profile-image.svg";
import styles from "../styles/Header.module.css";
import { PandaMarketLogo } from "./PandaMarketLogo";

const BRAND_BLUE_COLOR = "#3692FF";
const BLACK_COLOR = "#000";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? BRAND_BLUE_COLOR : BLACK_COLOR,
  };
}

function HeaderLogo() {
  return (
    <div>
      <div className={styles.headerLogo}>
        <PandaMarketLogo />
        <h1 className={styles.headerLogoTitle}>
          <Link to="/">판다마켓</Link>
        </h1>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className={styles.navList}>
      <NavLink to="/board" style={getLinkStyle} className={styles.navItem}>
        자유게시판
      </NavLink>
      <NavLink to="/items" style={getLinkStyle} className={styles.navItem}>
        중고마켓
      </NavLink>
    </div>
  );
}

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <HeaderLogo />
          <Nav />
        </div>
        <div>
          {pathname === "/additem" ? (
            <img src={profileImg} alt="프로필 이미지" />
          ) : (
            <Link to="/signin" className={styles.headerLoginButton}>
              로그인
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
