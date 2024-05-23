import "../styles/Home.css";
import homeTop from "../assets/Img-home-top.png";
import homeBottom from "../assets/Img-home-bottom.png";
import mainHotItem from "../assets/main-hot-item.png";
import mainSearch from "../assets/main-search.png";
import mainRegister from "../assets/main-register.png";
import facebookIcon from "../assets/icon-facebook.png";
import twitterIcon from "../assets/icon-twitter.png";
import youtubeIcon from "../assets/icon-youtube.png";
import instagramIcon from "../assets/icon-instagram.png";

function Home() {
  return (
    <>
      {/* 상단 베너 */}
      <header className="home-top-container">
        <div className="home-top">
          <div className="home-top-title-btn">
            <h1 className="home-top-title">
              {`일상의 모든 물건을
              거래해 보세요`}
            </h1>
            <a href="items.html" className="items-btn">
              구경하러 가기
            </a>
          </div>
          <img
            src={homeTop}
            alt="상단 베너 판다 이미지"
            className="home-top-img"
          />
        </div>
      </header>
      {/* 메인 */}
      <main className="home-main">
        <section className="home-section">
          <img src={mainHotItem} alt="메인 이미지1" className="main-img" />
          <div className="main-container">
            <h3 className="main-topic">Hot Item</h3>
            <h2 className="main-title">
              {`인기 상품을
            확인해 보세요`}
            </h2>
            <p className="main-content">
              {`가장 HOT한 중고거래 물품을
              판다 마켓에서 확인해 보세요`}
            </p>
          </div>
        </section>
        <section className="right">
          <div className="main-container-right">
            <h3 className="main-topic">Search</h3>
            <h2 className="main-title">
              {`구매를 원하는
            상품을 검색하세요`}
            </h2>
            <p className="main-content">
              {`구매하고 싶은 물품은 검색해서
              쉽게 찾아보세요`}
            </p>
          </div>
          <img
            src={mainSearch}
            alt="메인 이미지2"
            className="main-img main-img-middle"
          />
        </section>
        <section className="home-section">
          <img src={mainRegister} alt="메인 이미지3" className="main-img" />
          <div className="main-container">
            <h3 className="main-topic">Register</h3>
            <h2 className="main-title">
              {`판매를 원하는
            상품을 등록하세요`}
            </h2>
            <p className="main-content">
              {`어떤 물건이든 판매하고 싶은 상품을
              쉽게 등록하세요`}
            </p>
          </div>
        </section>
      </main>
      <div className="home-bottom-background-color">
        <div className="home-bottom-container">
          <h2 className="home-bottom">
            {`믿을 수 있는
          판다마켓 중고거래`}
          </h2>
          <img
            className="home-bottom-img"
            src={homeBottom}
            alt="판다 중고거래 이미지"
          />
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <p className="footer-codeit">@codeit - 2024</p>
          <div className="footer-center">
            <a href="/privacy.html" className="footer-privacy">
              Privacy Policy
            </a>
            <a href="/faq.html" className="footer-faq">
              FAQ
            </a>
          </div>
          <div className="footer-ic">
            <a href="https://www.facebook.com" target="_blank">
              <img src={facebookIcon} alt="페이스북 로고 아이콘" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src={twitterIcon} alt="트위터 로고 아이콘" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <img src={youtubeIcon} alt="유튜브 로고 아이콘" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src={instagramIcon} alt="인스타그램 로고 아이콘" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Home;
