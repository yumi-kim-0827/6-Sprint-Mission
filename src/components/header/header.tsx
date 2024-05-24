import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import "../../index.css";
import ImgHomeLogo from "../../assets/logo/img_logo.svg";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCommunityPage = location.pathname === "/board";
  const isMarketPage = location.pathname === "/items";

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <img src={ImgHomeLogo} alt="Logo" className="logo" />
        </a>
        <nav className="header-nav">
          <ul className="nav-container">
            <li>
              <a
                href="/board"
                className={`nav-link ${isCommunityPage ? "active" : ""}`}
              >
                자유게시판
              </a>
            </li>
            <li>
              <a
                href="/items"
                className={`nav-link ${isMarketPage ? "active" : ""}`}
              >
                중고마켓
              </a>
            </li>
          </ul>
        </nav>
        <button className="login-btn" onClick={handleLoginButtonClick}>
          로그인
        </button>
      </div>
    </div>
  );
}
