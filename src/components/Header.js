import "./Header.css";

export default function Header() {
  return (
    <header>
      <div class="header">
        <div class="logo">
          <img src="/assets/pandaFace.svg" class="logo_icon" alt="로고" />
          <a href="/" class="logo_title">
            판다마켓
          </a>
        </div>
        <a class="login_btn" href="/login.html">
          로그인
        </a>
      </div>
    </header>
  );
}
