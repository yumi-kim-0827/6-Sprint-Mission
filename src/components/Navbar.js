import "../css/Navbar.css";
import Logo from "./Logo";
import Menus from "./Menus";

function Navbar() {
  return (
    <div className="header__navbar">
      <Logo />
      <Menus />
    </div>
  );
}

export default Navbar;
