import "./index.css";

function Header() {
  return (
    <header className="header">
      <div className="header-contents">
        <a className="full-height" href="/">
          <img
            className="logo-small"
            src="images/logo_small.svg"
            alt="판다마켓 로고"
          />
          <img
            className="logo-big"
            src="images/logo_big.svg"
            alt="판다마켓 로고"
          />
        </a>
        <a className="button button-small" href="/signin.html">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;
