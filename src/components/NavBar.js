import "./../styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav-ul">
        <div className="logo-category-container">
          <li>
            <a href="/">
              <img className="logo" src="#" alt="판다마켓 로고" />
            </a>
          </li>
          <div className="nav-category-container">
            <a href="comunity">
              <li>자유게시판</li>
            </a>
            <a href="items">
              <li>중고마켓</li>
            </a>
          </div>
        </div>
        <a href="login">
          <li className="login-btn-container">로그인</li>
        </a>
      </ul>
    </nav>
  );
}

export default NavBar;
