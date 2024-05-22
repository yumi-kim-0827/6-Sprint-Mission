import { Link } from "react-router-dom";
import "./home.css";
import "./auth.css";
import "./global.css";

const Home = () => {
  return (
    <>
      <main class="with-header">
        <section id="hero" class="banner">
          <div class="wrapper">
            <h1>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <Link to="/items" class="button pill-button">
              구경하러 가기
            </Link>
          </div>
        </section>

        <section id="features" class="wrapper">
          <div class="feature">
            <img src="/images/home/popularpanda.png" alt="인기 상품" />
            <div class="feature-content">
              <h2>Hot item</h2>
              <h1>
                인기 상품을{" "}
                <span class="break-on-desktop">
                  <br />
                </span>
                확인해 보세요
              </h1>
              <p class="feature-description">
                가장 HOT한 중고거래 물품을
                <br />
                판다마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div class="feature">
            <img src="/images/home/searchpanda.png" alt="검색 기능" />
            <div class="feature-content">
              <h2>Search</h2>
              <h1>
                구매를 원하는{" "}
                <span class="break-on-desktop">
                  <br />
                </span>
                상품을 검색하세요
              </h1>
              <p class="feature-description">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
          <div class="feature">
            <img src="/images/home/registerpanda.png" alt="판매 상품 등록" />
            <div class="feature-content">
              <h2>Register</h2>
              <h1>
                판매를 원하는{" "}
                <span class="break-on-desktop">
                  <br />
                </span>
                상품을 등록하세요
              </h1>
              <p class="feature-description">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section id="bottomBanner" class="banner">
          <div class="wrapper">
            <h1>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h1>
          </div>
        </section>
      </main>

      <footer>
        <div id="copyright">©codeit - 2024</div>
        <div id="footerMenu">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div id="socialMedia">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="판다마켓 페이스북"
          >
            <img src="/images/social/facebook.png" alt="페이스북" width="20" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="판다마켓 트위터"
          >
            <img src="/images/social/twitter.png" alt="트위터" width="20" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="판다마켓 유튜브"
          >
            <img src="/images/social/youtube.png" alt="유튜브" width="20" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="판다마켓 인스타그램"
          >
            <img
              src="/images/social/instagram.png"
              alt="인스타그램"
              width="20"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
