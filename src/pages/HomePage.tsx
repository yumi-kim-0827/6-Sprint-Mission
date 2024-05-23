import { useNavigate, Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import TopBanner from "../assets/top_banner.png";
import Home1 from "../assets/home_01.png";
import Home2 from "../assets/home_02.png";
import Home3 from "../assets/home_03.png";
import BottonBanner from "../assets/bottom_banner.png";
import Meta from "../assets/icons/ic_meta.png";
import Twitter from "../assets/icons/ic_twitter.png";
import Youtube from "../assets/icons/ic_youtube.png";
import Instagram from "../assets/icons/ic_instagram.png";

import "../styles/HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <Link to="/">
          <img src={Logo} alt="판다마켓 로고" />
        </Link>

        <button
          className="login_button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </button>
      </header>
      <div className="top_banner">
        <div className="top_banner_wrapper">
          <p className="top_banner_description">
            일상의 모든 물건을 <br />
            거래해보세요
          </p>
          <button
            className="top_banner_button"
            onClick={() => {
              navigate("/items");
            }}
          >
            구경하러 가기
          </button>
        </div>
        <img src={TopBanner} alt="상단배너이미지" />
      </div>

      <main>
        <section>
          <img src={Home1} alt="홈 이미지1" />
          <div className="section_text_wrapper">
            <p>Hot Item</p>
            <h1>
              인기상품을 <br />
              확인해보세요
            </h1>
            <h3>
              가장 HOT한 중고거래 물품을 <br />
              판다 마켓에서 확인해보세요
            </h3>
          </div>
        </section>

        <section>
          <div className="section_text_wrapper">
            <p>Search</p>
            <h1>
              구매를 원하는 <br />
              상품을 검색하세요
            </h1>
            <h3>
              구매하고 싶은 물품은 검색해서 <br />
              쉽게 찾아보세요
            </h3>
          </div>
          <img src={Home2} alt="홈 이미지2" />
        </section>
        <section>
          <img src={Home3} alt="홈 이미지3" />
          <div className="section_text_wrapper">
            <p>Register</p>
            <h1>
              판매를 원하는 <br />
              상품을 등록하세요
            </h1>
            <h3>
              어떤 물거이든 판매하고 싶은 상품을 <br />
              쉽게 등록하세요
            </h3>
          </div>
        </section>
      </main>
      <div className="botton_banner">
        <p>
          믿을 수 있는 <br />
          판다마켓 중고 거래
        </p>
        <img src={BottonBanner} alt="바텀 배너 이미지" />
      </div>
      <footer>
        <div className="page_info">©codeit - 2024</div>
        <div className="important_info">
          <div>Privacy Policy</div>
          <div>FAQ</div>
        </div>
        <div className="fotter_icons">
          <img src={Meta} alt="메타 아이콘" />
          <img src={Twitter} alt="트위터 아이콘" />
          <img src={Youtube} alt="유튜브 아이콘" />
          <img src={Instagram} alt="인스타그램 아이콘" />
        </div>
      </footer>
    </div>
  );
}
