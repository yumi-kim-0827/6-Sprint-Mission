import React from "react";
import "../styles/style.css";
import styles from "../styles/main.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation()

  const isItemsPage = location.pathname === "/items" || location.pathname === "/additem"

  const navigate = useNavigate()

  const goToItems = () => {
    navigate("/items")
  }

  const goToMain = () => {
    navigate("/")
  }

  const goToSignin = () => {
    navigate("/signin")
  }

  return (
    <header>
      <picture onClick={goToMain}>
        <source
          srcset={require('../assets/logo_text.png')}
          media="all and (max-width: 768px)"
        />
        <img src={require('../assets/logo.png')} className={styles.logo} alt="로고" />
      </picture>
      <nav className={styles['header-nav']}>
        <p>자유게시판</p>
        <p onClick={goToItems} style={{color: isItemsPage ? '#3692FF': 'inherit'}}>중고마켓</p>
      </nav>
      <button id="btn_small" onClick={goToSignin}>
        로그인
      </button>
    </header>
  );
}

export default Header;
