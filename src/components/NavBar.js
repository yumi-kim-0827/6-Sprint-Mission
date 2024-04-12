import "../styles/NavBar.css";
import pandaLogoImg from "../assets/images/home-logo.svg";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active-category" : "";
  };
  return (
    <nav>
      <ul className="nav-ul">
        <div className="logo-category-container">
          <li>
            <Link to="/" className="logo-container">
              <img className="logo" src={pandaLogoImg} alt="판다마켓 로고" />
            </Link>
          </li>
          <div className="nav-category-container">
            <li>
              <Link
                to="/board"
                className={`nav-category ${isActive("/board")}`}
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                to="/items"
                className={`nav-category ${isActive("/items")}`}
              >
                중고마켓
              </Link>
            </li>
          </div>
        </div>
        <li className="login-btn-container">
          <Link to="/" className="login-btn">
            로그인
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
