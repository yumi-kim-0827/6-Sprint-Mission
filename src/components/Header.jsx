import React, { useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './style/Header.css';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonStyle = useCallback(() => {
    const freeboardButton = document.querySelector('.Header__free-board');
    const fleaMarketButton = document.querySelector('.Header__flea-market');

    if (location.pathname === '/free-board') {
      freeboardButton.classList.add('blue-font');
      freeboardButton.classList.remove('gray-font');
    } else {
      freeboardButton.classList.add('gray-font');
      freeboardButton.classList.remove('blue-font');
    }

    if (location.pathname === '/items') {
      fleaMarketButton.classList.add('blue-font');
      fleaMarketButton.classList.remove('gray-font');
    } else {
      fleaMarketButton.classList.add('gray-font');
      fleaMarketButton.classList.remove('blue-font');
    }
  }, [location.pathname]);

  useEffect(() => {
    handleButtonStyle();
  }, [handleButtonStyle]);

  const onClickFreeboard = () => {
    navigate('/free-board');
  };

  const onClickFleaMarket = () => {
    navigate('/items');
  };

  return (
    <div className='Header'>
      <div className='Header__menu'>
        <picture className='Header__logo'>
          <source srcSet='/imgs/logo.webp' media='(max-width: 767px)' width={81} type='image/webp' />
          <source srcSet='/imgs/img_logo.webp' width={153} type='image/webp' />
          <img src='/imgs/img_logo.webp' alt='판다마켓로고' />
        </picture>

        <button className='Header__free-board' onClick={onClickFreeboard}>
          자유게시판
        </button>
        <button className='Header__flea-market' onClick={onClickFleaMarket}>
          중고마켓
        </button>
      </div>
      <button className='Header__login-btn'>로그인</button>
    </div>
  );
}
