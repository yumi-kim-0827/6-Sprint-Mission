import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='Header'>
      <div className='Header__menu'>
        <a href='#'>
          <picture className='Header__logo'>
            <source srcSet='/imgs/logo.webp' media='(max-width: 767px)' width={81} type='image/webp' />
            <source srcSet='/imgs/img_logo.webp' width={153} type='image/webp' />
            <img src='/imgs/img_logo.webp' alt='판다마켓로고' />
          </picture>
        </a>
        <button className='Header__free-board'>자유게시판</button>
        <button className='Header__flee-market'>중고마켓</button>
      </div>
      <button className='Header__login-btn'>로그인</button>
    </div>
  );
}
