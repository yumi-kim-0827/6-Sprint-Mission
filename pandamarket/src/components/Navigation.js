import "./Navigation.css";
import Button from "./Button";
import logo from "../assets/logo.png";
function Navigation() {
  const src = logo;
  return (
    <>
      <nav>
        <div id="nav">
          <span>
            <img src={src} alt="logo" />
          </span>
          <li>
            <div>자유게시판</div>
          </li>
          <li>
            <div>중고마켓</div>
          </li>
        </div>
        <Button>로그인</Button>
      </nav>
      <hr />
    </>
  );
}

export default Navigation;
