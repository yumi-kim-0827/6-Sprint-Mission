import "./header.scss";
import "/src/shared/style/link.scss";
import logoUrl from "/src/shared/asset/headerLogo.png";
import { Button } from "/src/shared/ui/Button";
import { Link } from "react-router-dom";

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
            <Link
              to="/freeBoard"
              className="link header__nav header__nav--not-active"
            >
              자유게시판
            </Link>
            <Link to="/market" className="link header__nav header__nav--active">
              중고마켓
            </Link>
          </div>
        </div>
        <a href="/login" className="link">
          <Button
            classNames={["button--small", "button--blue", "button"]}
            value="로그인"
          />
        </a>
      </div>
    </header>
  );
};
