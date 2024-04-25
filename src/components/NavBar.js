import "./../styles/NavBar.css";
import Logo from "../assets/images/logo/logo.svg";

function NavBar() {
  return (
    <header className="header">
      <div className="nav-left-container">
        <a href="/">
          <img className="logo" src={Logo} alt="판다마켓 로고" />
        </a>

        <nav className="nav-category-container">
          <ul>
            <li>
              <a href="comunity">자유게시판</a>
            </li>
            <li>
              <a href="items">중고마켓</a>
            </li>
          </ul>
        </nav>
      </div>
      <a className="login-btn-container" href="login">
        로그인
      </a>
    </header>
  );
}

export default NavBar;
