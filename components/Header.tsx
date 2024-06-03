import { useRouter } from 'next/router'
import React from 'react'
import logo_text from '../public/assets/logo_text.png'
import logo from '../public/assets/logo.png'
import Image from 'next/image'
import styles from '../styles/main.module.css'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()

  const goToMain = () => router.push('/')

  const goToSignin = () => {
    router.push('/signin')
  }

  const pathName = router.pathname

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
          <Link
            href={'/boards'}
            style={{ color: pathName === '/boards' ? '#3692FF' : 'inherit' }}
          >
            자유게시판
          </Link>
          <Link
            href={'/items'}
            style={{ color: pathName === '/items' ? '#3692FF' : 'inherit' }}
          >
            중고마켓
          </Link>
        </nav>
        <button id="btn_small" onClick={goToSignin}>
          로그인
        </button>
      </div>
    </div>
  )
}
