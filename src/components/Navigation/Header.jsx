import { Link } from "react-router-dom";
import Logo from "../Logo";
import NavMain from "./NavMain";
import "../../assets/styles/Root.css";
import "./Header.css";

function Header({ site = "" }) {
  return (
    <header className="top_navigation">
      <div className="top_container">
        <div className="top_navigation_wrap">
          <Logo />
        </div>
        <div className="top_navigation_main">
          <NavMain site={site} />
        </div>
        <div className="top_navigation_login">
          <Link to={"/SignIn"} className="login_btn blue">
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
