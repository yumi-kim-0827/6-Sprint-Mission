import React from "react";
import "../styles/style.css";
import styles from "../styles/main.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
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
          srcset="assets/logo_text.png"
          media="all and (max-width: 768px)"
        />
        <img src="assets/logo.png" className={styles.logo} alt="로고" />
      </picture>
      <nav className={styles['header-nav']}>
        <p>자유게시판</p>
        <p onClick={goToItems}>중고마켓</p>
      </nav>
      <button id="btn_small" onClick={goToSignin}>
        로그인
      </button>
    </header>
  );
}

export default Header;
