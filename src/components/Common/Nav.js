import { Link, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo/panda_logo.png";
import "./Nav.css";

const PATH_LIST = {
  freeboard: ["/freeboard"],
  market: ["/items", "/additem"],
};

function Nav() {
  const pathName = useLocation().pathname;

  const getLinkClass = (value) => {
    return PATH_LIST[value].includes(pathName) ? "active" : "basic";
  };

  return (
    <nav className="home-nav">
      <div className="container-menu">
        <Link to="/">
          <img className="logo" alt="판다마켓 로고" src={logoImg} />
        </Link>
        <ul className="menu">
          <li>
            <Link to="/freeboard" className={getLinkClass("freeboard")}>
              자유게시판
            </Link>
          </li>
          <li>
            <Link to="/items" className={getLinkClass("market")}>
              중고마켓
            </Link>
          </li>
        </ul>
      </div>
      <Link className="button button-login" to="/login">
        로그인
      </Link>
    </nav>
  );
}

export default Nav;
