import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as HeaderLogoPc } from '../assets/header-logo-pc.svg';
import styles from '../styles/Button.module.css';

const Header = styled.div`
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 5;
  border-bottom: 1px solid #d9d9d9;
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
  return (
    <Header>
      <Container>
        <div className="logo">
          <HeaderLogoPc />
        </div>

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
