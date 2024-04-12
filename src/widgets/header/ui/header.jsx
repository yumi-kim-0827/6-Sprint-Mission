import "./header.scss";
import "../../../shared/style/link.scss";
import logoUrl from "../../../shared/asset/headerLogo.png";
import { Button } from "../../../shared/ui/Button";

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header--wrap">
          <div className="header__logo">
            <img
              src={logoUrl}
              alt="Panda Market Main Logo"
              className="header__logo-image"
            />
            <a href="/" className="link header__text">
              판다마켓
            </a>
          </div>
          <div className="header__nav--wrap">
            <a
              href="/freeBoard"
              className="link header__nav header__nav--not-active"
            >
              자유게시판
            </a>
            <a href="/market" className="link header__nav header__nav--active">
              중고마켓
            </a>
          </div>
        </div>
        <a href="/login" className="link">
          <Button
            classNames={["button--small", "button--blue", "button"]}
            value={"로그인"}
          />
        </a>
      </div>
    </header>
  );
};
