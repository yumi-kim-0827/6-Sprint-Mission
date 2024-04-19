import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import { PAGES } from "../../constants/paths";
import "./index.css";

function Header() {
  const navigationList = Object.values(PAGES);

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
            {navigationList.map(
              ({ link, navName }) =>
                navName && (
                  <li
                    className={`header-menu-item ${
                      isThisPage(link) && "selected"
                    }`}
                    key={link}
                  >
                    <Link to={link}>{navName}</Link>
                  </li>
                )
            )}
          </ul>
        </nav>
        <Button to="/signin">로그인</Button>
      </div>
    </header>
  );
}

export default Header;
