import { useNavigate, Link } from "react-router-dom";

import BestSection from "../components/ItemSection/BestSection";
import AllSection from "../components/ItemSection/AllSection";

import Logo from "../assets/logo.png";
import "../styles/MarketPage.css"


export default function MarketPage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <img src={Logo} alt="판다마켓 로고" />
          </Link>
          <span>자유게시판</span>
          <span>중고마켓</span>
        </nav>

        <button
          className="login_button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </header>

      <div className="wrapper">
        <BestSection></BestSection>

        <AllSection></AllSection>
      </div>
    </div>
  );
}
