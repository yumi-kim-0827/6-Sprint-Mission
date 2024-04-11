import { Link } from "../components/Link";
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
          <Link href="/signin.html" size="small">로그인</Link>
        </div>
      </div>
    </header>
  );
}