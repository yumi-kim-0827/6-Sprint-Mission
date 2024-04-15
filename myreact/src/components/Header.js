import "./Header.css";

import logoImage from "../asset/logo_face.png";

function Header() {
    return (
                
        <div className="nav">
        <img className="logo" src={logoImage} alt="판다마켓" />
        <ul className="navMenu">
            <li>자유게시판</li>
            <li>중고마켓</li>
        </ul>
        <a href="login.html">
            <div className="loginBtn">
            <p className="loginBtn-text">로그인</p>
            </div>
        </a>
        </div>
    );
}

export default Header;