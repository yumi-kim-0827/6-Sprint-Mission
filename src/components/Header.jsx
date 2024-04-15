import { NavLink } from 'react-router-dom';
import './style/Header.css';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#3692FF' : '#4B5563',
  };
}

export default function Header() {
  return (
    <div className='Header'>
      <div className='Header__menu'>
        <picture className='Header__logo'>
          <source srcSet='/imgs/logo.webp' media='(max-width: 767px)' width={81} type='image/webp' />
          <source srcSet='/imgs/img_logo.webp' width={153} type='image/webp' />
          <img src='/imgs/img_logo.webp' alt='판다마켓로고' />
        </picture>
        <NavLink to='/free-board' style={getLinkStyle}>
          <button className='Header__free-board'>자유게시판</button>
        </NavLink>
        <NavLink to='/items' style={getLinkStyle}>
          <button className='Header__flea-market'>중고마켓</button>
        </NavLink>
      </div>
      <button className='Header__login-btn'>로그인</button>
    </div>
  );
}
