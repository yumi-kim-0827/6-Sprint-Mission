import { useRouter } from 'next/router'
import React from 'react'
import logo_text from '../public/assets/logo_text.png'
import logo from '../public/assets/logo.png'
import Image from 'next/image'
import styles from '../styles/main.module.css'

export default function Header() {
  const router = useRouter()

  const goToMain = () => router.push('/')

  const isItemsPage =
    typeof window !== 'undefined' &&
    (location.pathname === '/items' || location.pathname === '/additem')

  const isBoardPage =
    typeof window !== 'undefined' && location.pathname === '/boards'

  const goToItems = () => {
    router.push('/items')
  }

  const goToBoards = () => {
    router.push('/boards')
  }

  const goToSignin = () => {
    router.push('/signin')
  }

  return (
    <div>
      <div className={styles.header}>
        <div onClick={goToMain}>
          <div className={styles.logo}>
            <picture>
              <source
                srcSet={logo_text.src}
                media="(max-width: 768px)"
                width={81}
                height={40}
              />
              <Image src={logo} alt="로고" width={153} />
            </picture>
          </div>
        </div>
        <nav className={styles['header-nav']}>
          <p
            onClick={goToBoards}
            style={{ color: isBoardPage ? '#3692FF' : 'inherit' }}
          >
            자유게시판
          </p>
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
      </div>
    </div>
  )
}
