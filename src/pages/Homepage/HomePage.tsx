import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import hotItem from "../../assets/hotItem.svg";
import searchItem from "../../assets/search_item.svg";
import registerItem from "../../assets/register_item.svg";
import twitterLogo from "../../assets/ic_twitter.svg";
import facebookLogo from "../../assets/ic_facebook.svg";
import instaLogo from "../../assets/ic_instagram.svg";
import youtubeLogo from "../../assets/ic_youtube.svg";

function Homepage() {
  return (
    <section>
      <main className="withHeader">
        <section className="topBanner">
          <div>
            <h1 className="topBannerDescription">
              일상의 모든 물건을&nbsp;
              <br />
              거래해 보세요
            </h1>
            <Link to="/items" className="pillButton">
              구경하러 가기
            </Link>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <img src={hotItem} alt="인기 상품" />
            <div className="featureContent">
              <h2 className="featureSubtitle">Hot item</h2>
              <h1 className="featureTitle">
                인기 상품을{" "}
                <span className="breakOnDesktop">
                  <br />
                </span>
                확인해 보세요
              </h1>
              <p className="featureDescription">
                가장 HOT한 중고거래 물품을
                <br />
                판다마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={searchItem} alt="검색 기능" />
            <div className="featureContent">
              <h2 className="featureSubtitle">Search</h2>
              <h1 className="featureTitle">
                구매를 원하는
                <span className="breakOnDesktop">
                  <br />
                </span>
                상품을 검색하세요
              </h1>
              <p className="searchDescription">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
          <div className="feature">
            <img src={registerItem} alt="판매 상품 등록" />
            <div className="featureContent">
              <h2 className="featureSubtitle">Register</h2>
              <h1 className="featureTitle">
                판매를 원하는{" "}
                <span className="breakOnDesktop">
                  <br />
                </span>
                상품을 등록하세요
              </h1>
              <p className="featureDescription">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="bottomBanner">
            <h1 className="bottomBannerDescription">
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h1>
          </div>
        </section>
      </main>

      <footer className="footerSection">
        <div id="copyright">©codeit - 2024</div>
        <div id="footerMenu">
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div id="socialMedia">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="판다마켓 페이스북"
          >
            <img src={facebookLogo} alt="페이스북" width="20" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="판다마켓 트위터"
          >
            <img src={twitterLogo} alt="트위터" width="20" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="판다마켓 유튜브"
          >
            <img src={youtubeLogo} alt="유튜브" width="20" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="판다마켓 인스타그램"
          >
            <img src={instaLogo} alt="인스타그램" width="20" />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Homepage;
