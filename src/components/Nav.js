import pandalogo from "../imgs/pandalogo.png";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container_nav">
        <a href="/">
          <img src={pandalogo} />
        </a>
        <ul className="nav_menu">
          <a>자유게시판</a>
          <a>중고마켓</a>
        </ul>
      </div>
      <button>로그인</button>
    </div>
  );
};

export default Nav;
