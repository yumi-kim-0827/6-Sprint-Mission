import { NavLink, useLocation, Link } from 'react-router-dom';
import './style/Header.css';

export default function Header() {
  const location = useLocation();
  const isItemsActive = location.pathname.startsWith('/items') || location.pathname === '/additem';

  return (
    <div className='Header'>
      <div className='Header__menu'>
        <Link to='/'>
          <picture className='Header__logo'>
            <source srcSet='/imgs/logo.webp' media='(max-width: 767px)' width={81} type='image/webp' />
            <source srcSet='/imgs/img_logo.webp' width={153} type='image/webp' />
            <img src='/imgs/img_logo.webp' alt='판다마켓로고' />
          </picture>
        </Link>
        <NavLink to='/freeboard'>
          {({ isActive }) => (
            <button className='Header__free-board' style={{ color: isActive ? '#3692FF' : '#4B5563' }}>
              자유게시판
            </button>
          )}
        </NavLink>
        <NavLink to='/items'>
          <button className='Header__flea-market' style={{ color: isItemsActive ? '#3692FF' : '#4B5563' }}>
            중고마켓
          </button>
        </NavLink>
      </div>
      <button className='Header__login-btn'>로그인</button>
    </div>
  );
}
