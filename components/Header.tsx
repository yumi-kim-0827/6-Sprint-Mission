import { useRouter } from 'next/router'
import React from 'react'

export default function Header() {
  const router = useRouter()

  const goToMain = () => router.push('/')

  return (
    <div>
      <header>
        <picture onClick={goToMain}>
          <source srcSet={logo_text} media="all and (max-width: 768px)" />
          <img src={logo} className={styles.logo} alt="로고" />
        </picture>
        <nav>
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
    </div>
  )
}
