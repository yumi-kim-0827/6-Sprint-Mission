import { GNB } from "../components/GNB";
import { Logo } from "./Logo";

export function Header() {
  
  return (
    <header className="header">
      <div className="header-wrap">
        <div className="section-header">
          <Logo>판다마켓</Logo>
          <GNB/>
        </div>
        <div>
          <a href="/signin.html" className="btn-login btn-small">로그인</a>
        </div>
      </div>
    </header>
  );
}