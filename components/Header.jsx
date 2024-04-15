import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from './src/assets/img/logo.png';
import btn from './src/assets/img/btn_login.png';

const Header = () => {
    return (
        <header id = 'header' role='banner'>
            <div className="header__logo"></div>
                <a href = "/">
                    <img src={logo} alt="Logo"/>
                </a>
            <nav className="header__menu">
                <ul>
                    <li>
                        자유게시판 
                    </li>
                    <li>
                        <NavLink to="/items" className='nav-link' activeClassName='active'>중고마켓</NavLink>
                    </li>
                </ul>
            </nav>
            <img src={btn} alt="login"></img>
        </header>
    )
}

export default Header