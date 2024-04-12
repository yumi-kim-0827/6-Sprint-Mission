import "./header.scss";

export const Header = () => {
  return (
    <header className="header-main header-main--fixed-top">
      <div className="header-main__content">
        <div className="header-main__logo">
          <img
            src="./image/main-page/mainLogo.jpg"
            alt="Panda Market Main Logo"
          />
          <a href="/">
            <img src="./image/main-page/판다마켓.jpg" alt="Panda Market Logo" />
          </a>
        </div>
        <a href="./login.html">
          <button
            className="button button--theme-blue button__login description-login"
            type="button"
          >
            로그인
          </button>
        </a>
      </div>
    </header>
  );
};
