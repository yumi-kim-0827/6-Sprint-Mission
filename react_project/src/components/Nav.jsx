import React from 'react'
import logoImage from '../assets/logo.svg';
import Button from './Button';
import styles from '../styles/Nav.module.css';

function Nav() {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_logo_box}>
        <img className={styles.nav_logo} src={logoImage} alt="로고 이미지" />
      </div>
      <div className={styles.nav_linkList}>
        <span>자유게시판</span>
        <span>중고마켓</span>
      </div>
      <Button>로그인</Button>
    </div>
  )
}

export default Nav