import React from 'react';
import styles from '../styles/Nav.module.css';
import Button from './Button';
import pandaMarketLogo from '../assets/logo.svg'

export default function Nav() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_logo_box}>
        <img className={styles.nav_logo} src={pandaMarketLogo} alt="판다마켓 로고" />
      </div>
      <div className={styles.nav_link}>
        <a href>자유게시판</a>
        <a href="/items">중고마켓</a>
      </div>
      <Button>로그인</Button>
    </div>
  )
}
