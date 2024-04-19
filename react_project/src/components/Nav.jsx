import React from 'react'
import logoImage from '../assets/logo.svg';
import Button from './Button';
import styles from '../styles/Nav.module.css';
import { Link, NavLink } from 'react-router-dom';

function getLinkStyle({ isActive }) {
  return {color: isActive ? "#3692FF" : undefined};
}

function Nav() {
  return (
    <header className={styles.nav_wrap}>
      <div className={styles.nav_logo_box}>
        <Link to="/" aria-label='홈으로 이동'>
          <img className={styles.nav_logo} src={logoImage} alt="로고 이미지" />
        </Link>
      </div>
      <nav className={styles.nav_linkList}>
        <NavLink to="/community" style={getLinkStyle}>자유게시판</NavLink>
        <NavLink to="/items" style={getLinkStyle}>중고마켓</NavLink>
      </nav>
      <Button>로그인</Button>
    </header>
  )
}

export default Nav