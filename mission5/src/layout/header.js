import iconLogo from "../images/Group 19@3x.png";
import textLogo from "../images/logo@3x.png";

function NavBar() {
  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <img className="icon-logo" src={iconLogo} alt="Logo" />
            <img className="text-logo" src={textLogo} alt="text-logo" />
          </a>
        </div>
        <NavMenuButtons></NavMenuButtons>
        <div className="button-box">
          <button className="button login-button">로그인</button>
        </div>
      </nav>
    </header>
  );
}

function NavMenuButtons() {
  return (
    <div className="menu-box">
      <div>
        <button className="button menu-button">자유게시판</button>
      </div>
      <div>
        <button className="button menu-button" style={{ color: "#3692FF" }}>
          중고마켓
        </button>
      </div>
    </div>
  );
}

export default NavBar;
