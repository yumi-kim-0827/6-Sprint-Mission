import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as HeaderLogoPc } from '../assets/header-logo-pc.svg';
import { ReactComponent as HeaderLogoMobile } from '../assets/header-logo-mobile.svg';
import styles from '../styles/Button.module.css';

const Header = styled.div`
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 5;
  border-bottom: 1px solid #d9d9d9;

  .logo img {
    width: 100%;
  }

  nav li {
    font-weight: 600;
    font-size: 1.125rem;
  }

  @media (max-width: 375px) {
    .logo img {
      width: 80px;
    }

    nav li {
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  padding: 15px 24px;
  position: relative;
  display: grid;
  grid-template-columns: 200px 2fr 1fr;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 375px) {
    padding: 15px 16px;
  }
`;

const Siginin = styled.div`
  display: flex;
  justify-content: end;
`;

const NavUl = styled.ul`
  display: flex;
  gap: 1rem;
`;

function Navbar() {
  // 모바일 사이즈일 때 헤더 로고 변경
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Header>
      <Container>
        <div className="logo">{isMobile ? <HeaderLogoMobile /> : <HeaderLogoPc />}</div>

        <nav>
          <NavUl>
            <li>
              <Link to="/board">자유게시판</Link>
            </li>
            <li>
              <Link to="/items">중고마켓</Link>
            </li>
          </NavUl>
        </nav>

        <Siginin>
          <Link to="/signin" className={`${styles[`btn-primary`]} ${styles.roundedSm}`}>
            로그인
          </Link>
        </Siginin>
      </Container>
    </Header>
  );
}

export default Navbar;
