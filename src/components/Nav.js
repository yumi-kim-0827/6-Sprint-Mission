import LoginLink from "./LoginLink";
import Logo from "./Logo";
import Menus from "./Menus";
import "../css/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <Logo />
        <Menus />
      </div>
      <LoginLink />
    </div>
  );
}

export default Nav;
