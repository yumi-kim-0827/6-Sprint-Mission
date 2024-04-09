import React from 'react';

function Header() {
  return (
    <div>
      <a href="./index.html">
        <picture>
          <source
            srcset="../img/logo_text.png"
            media="all and (max-width: 768px)"
          />
          <img src="../img/logo.png" class="logo" alt="로고" />
        </picture>
      </a>
      <button id="btn_small" onclick="location.href='/signin.html'">
        로그인
      </button>
    </div>
  );
}

export default Header;