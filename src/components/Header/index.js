import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Header() {
  const navigationList = [
    { link: "/", name: "자유게시판" },
    { link: "/items", name: "중고마켓" },
  ];

  const location = useLocation();
  const isThisPage = (link) => {
    return location.pathname === link;
  };

  return (
    <header className="header">
      <div className="header-contents">
        <a className="full-height" href="/">
          <img
            className="logo-small"
            src="images/logo_small.svg"
            alt="판다마켓 로고"
          />
          <img
            className="logo-big"
            src="images/logo_big.svg"
            alt="판다마켓 로고"
          />
        </a>
        <nav className="header-menu">
          <ul className="header-menu-container">
            {navigationList.map((navigation) => (
              <li
                className={`header-menu-item ${
                  isThisPage(navigation.link) && "selected"
                }`}
                key={navigation.link}
              >
                <Link to={navigation.link}>{navigation.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="button button-small" href="/signin.html">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;
