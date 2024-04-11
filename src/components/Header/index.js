import "./index.css";

function Header() {
  return (
    <header class="header">
      <div class="header-contents">
        <a class="full-height" href="/">
          <img
            class="logo-small"
            src="images/logo_small.svg"
            alt="판다마켓 로고"
          />
          <img class="logo-big" src="images/logo_big.svg" alt="판다마켓 로고" />
        </a>
        <a class="button button-small" href="/signin.html">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;
