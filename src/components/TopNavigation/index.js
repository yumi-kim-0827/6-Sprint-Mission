import React, { useState, useEffect } from 'react';
import pandoLogo from 'assets/logos/panda-logo.png';
import TextLogo from 'assets/logos/text-logo.png';
import pandaProfile from 'assets/icons/Profile.svg';
import { Link, useLocation } from 'react-router-dom';
import Button from 'components/Button';
import './style.css';

const TopNavigation = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isAddItemPage = location.pathname.includes('/addItem');
  const isItemsPage = location.pathname === '/items';

  return (
    <header>
      <div className='leftContainer'>
        <Link to='/'>
          <img src={isMobile ? TextLogo : pandoLogo} alt='판다마켓 로고' />
        </Link>
        <nav>
          <ul className='navBar'>
            <li>
              <Link
                to='/board'
                className={location.pathname === '/board' ? 'activ-nav' : ''}
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                to='/items'
                className={isItemsPage ? 'activ-nav' : ''}
                style={{ color: isAddItemPage ? '#3692FF' : '' }}
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isAddItemPage && (
        <div className='rightContainer'>
          <img src={pandaProfile} alt='Profile' className='profileIcon' />
        </div>
      )}
      {!isAddItemPage && (
        <Link to='/login'>
          <Button title='로그인' />
        </Link>
      )}
    </header>
  );
};

export default TopNavigation;
