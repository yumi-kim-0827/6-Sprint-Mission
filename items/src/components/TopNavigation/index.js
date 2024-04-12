import React from 'react';
import pandoLogo from '../../assets/logos/panda-logo.png';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './style.css';

const TopNavigation = () => {
  return (
    <header>
      <div className='leftContainer'>
        <Link to='/'>
          <img src={pandoLogo} alt='판다마켓 로고' />
        </Link>
        <nav>
          <ul className='navBar'>
            <li>
              <Link to='/board'>자유게시판</Link>
            </li>
            <li>
              <Link to='/items'>중고마켓</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link to='/login'>
        <Button title='로그인' />
      </Link>
    </header>
  );
};

export default TopNavigation;
