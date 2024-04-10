import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HeaderLogoPc } from '../assets/header-logo-pc.svg';

function Navbar() {
  return (
    <header>
      <div className="logo">
        <HeaderLogoPc />
      </div>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/board">자유게시판</Link>
          </li>
          <li>
            <Link to="/items">중고마켓</Link>
          </li>
        </ul>
      </nav>

      <div className="signin-btn">
        <Link to="/signin">로그인</Link>
      </div>
    </header>
  );
}

export default Navbar;
