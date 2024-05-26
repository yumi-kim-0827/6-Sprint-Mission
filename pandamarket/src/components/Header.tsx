import React from 'react'
import '../styles/style.css'
import styles from '../styles/main.module.css'
import { useNavigate, useLocation } from 'react-router-dom'

import logo_text from '../assets/logo_text.png'
import logo from '../assets/logo.png'

function Header() {
  const location = useLocation()

  const isItemsPage =
    location.pathname === '/items' || location.pathname === '/additem'

  const navigate = useNavigate()

  const goToItems = () => {
    navigate('/items')
  }

  const goToMain = () => {
    navigate('/')
  }

  const goToSignin = () => {
    navigate('/signin')
  }

  return (
    <header>
      <picture onClick={goToMain}>
        <source srcSet={logo_text} media="all and (max-width: 768px)" />
        <img src={logo} className={styles.logo} alt="로고" />
      </picture>
      <nav className={styles['header-nav']}>
        <p>자유게시판</p>
        <p
          onClick={goToItems}
          style={{ color: isItemsPage ? '#3692FF' : 'inherit' }}
        >
          중고마켓
        </p>
      </nav>
      <button id="btn_small" onClick={goToSignin}>
        로그인
      </button>
    </header>
  )
}

export default Header
