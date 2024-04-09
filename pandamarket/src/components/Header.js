import React from 'react';
import '../styles/style.css'
import styles from '../styles/main.module.css'

function Header() {
  return (
    <header>
        <picture>
          <source
            srcset="assets/logo_text.png"
            media="all and (max-width: 768px)"
          />
          <img src="assets/logo.png" className={styles.logo} alt="로고" />
        </picture>
      <button id="btn_small" onclick="location.href='/signin.html'">
        로그인
      </button>
    </header>
  );
}

export default Header;