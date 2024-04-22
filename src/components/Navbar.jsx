import React from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import Btnprofile from '../assets/images/btn_profile.png';  

function Navbar() {
  return (
    <div className='navbar'>
      <ul className="navbar-menu">
      <img src={logo} alt='logo' className='logo' />
        <li>자유게시판</li>
        <li>중고마켓</li>
      </ul>
      <div className='navbar-right'>
        <img src={Btnprofile} alt='' />
      </div>
    </div>
  );
}

export default Navbar;
