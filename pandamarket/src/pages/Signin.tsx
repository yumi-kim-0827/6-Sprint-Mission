import React, { useEffect, useState } from 'react'
import styles from '../styles/auth.module.css'
import { EMAIL_REGEX, EIGHT_NUMBERS_REGEX } from '../utils/regex'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import iconOn from '../assets/icon_visibility_on.png'
import iconOff from '../assets/icon_visibility_off.png'
import iconGoogle from '../assets/icon_google.png'
import iconKakao from '../assets/icon_kakao.png'

function Signin() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const [isVisibilityIcon, setIsVisibilityIcon] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const isRegexValid =
    EMAIL_REGEX.test(email.trim()) && EIGHT_NUMBERS_REGEX.test(password.trim())

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (isRegexValid) {
      navigate('/')
    } else {
      if (email === '') {
        setEmailError('이메일을 입력해주세요.')
      } else if (!EMAIL_REGEX.test(email.trim())) {
        setEmailError('잘못된 이메일 형식입니다.')
      }
      if (password === '') {
        setPasswordError('비밀번호를 입력해주세요.')
      } else if (!EIGHT_NUMBERS_REGEX.test(password.trim())) {
        setPasswordError('비밀번호를 8자 이상 입력해주세요.')
      }
    }
  }

  useEffect(() => {
    setIsDisabled(!isRegexValid)
  }, [email, password, isRegexValid])

  const togglePasswordVisibility = () => {
    setIsVisibilityIcon(!isVisibilityIcon)
  }

  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles['form-section']}>
        <form onSubmit={handleLogin} noValidate>
          <div className={styles['field-wrapper']}>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              onChange={handleEmailChange}
              className={emailError ? styles.error : ''}
            />
            {emailError && <p className={styles.errorMessage}>{emailError}</p>}
          </div>
          <div className={styles['field-wrapper']}>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type={isVisibilityIcon ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePasswordChange}
              className={passwordError ? styles.error : ''}
            />
            <img
              src={isVisibilityIcon ? iconOn : iconOff}
              alt="password icon"
              className={styles['password-visibility-off-icon']}
              onClick={togglePasswordVisibility}
            />
            {passwordError && (
              <p className={styles.errorMessage}>{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            id="btn_large"
            className={styles.login}
            disabled={!isDisabled}
          >
            로그인
          </button>
        </form>
      </div>
      <div className={styles.easylogin}>
        <p className={styles.text}>간편 로그인하기</p>
        <div className={styles.icons}>
          <a href="https://www.google.com/">
            <img src={iconGoogle} alt="google" />
          </a>
          <a href="https://www.kakaocorp.com/page/">
            <img src={iconKakao} alt="kakao" />
          </a>
        </div>
      </div>
      <div className={styles.signup}>
        <p>판다마켓이 처음이신가요?</p>
        <Link to="/signup" className={styles.para}>
          회원가입
        </Link>
      </div>
    </div>
  )
}

export default Signin
