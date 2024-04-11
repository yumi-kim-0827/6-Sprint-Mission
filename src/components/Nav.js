import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <img
              src="../assets/logo-panda.svg"
              className="logo-icon"
              alt="로고"
            />
            <Link to="/" className="logo-title">
              판다마켓
            </Link>
          </div>
          <Link to="/" className="board-btn">
            자유게시판
          </Link>
          <Link to="/items" className="items-btn">
            중고마켓
          </Link>
          <Link to="/login" className="btn login-btn">
            로그인
          </Link>
        </div>
      </header>
    </>
  );
}
