import React from "react";
import "./styles/style.css";

const HomePage = () => {
  return (
    <body>
      <main>
        <section id="hero" className="banner">
          <div className="wrapper">
            <h1 className="banner__title">
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <a href="items.html" className="btn main_banner-btn">
              구경하러 가기
            </a>
          </div>
        </section>

        <section id="features" className="wrapper">
          <div className="feature">
            <img
              className="feature__image"
              src="images/home/popularpanda.png"
              alt="인기 상품"
            />
            <div className="feature__frame">
              <h2 className="feature__tag">Hot item</h2>
              <h1 className="feature__title">
                인기 상품을
                <br />
                확인해 보세요
              </h1>
              <p className="feature__description">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature__frame txt-right">
              <h2 className="feature__tag">Search</h2>
              <h1 className="feature__title">
                구매를 원하는
                <br />
                상품을 검색하세요
              </h1>
              <p className="feature__description">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <img
              className="feature__image img-mid"
              src="images/home/searchpanda.png"
              alt="상품 검색"
            />
          </div>

          <div className="feature">
            <img
              className="feature__image img-btm"
              src="images/home/registerpanda.png"
              alt="상품 등록"
            />
            <div className="feature__frame">
              <h2 className="feature__tag">Register</h2>
              <h1 className="feature__title">
                판매를 원하는
                <br />
                상품을 등록하세요
              </h1>
              <p className="feature__description">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section id="bottomBanner" className="banner">
          <div className="wrapper">
            <h1>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h1>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>©codeit - 2024</div>
        <div className="footer__menu">
          <a href="/privacy">Privacy Policy</a>
          <a href="/html">FAQ</a>
        </div>
        <div className="footer__social-media">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              className="feature__social-media-image"
              src="images/social/facebook.png"
              alt="페이스북"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img
              className="feature__social-media-image"
              src="images/social/twitter.png"
              alt="트위터"
            />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img
              className="feature__social-media-image"
              src="images/social/youtube.png"
              alt="유튜브"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              className="feature__social-media-image"
              src="images/social/instagram.png"
              alt="인스타그램"
            />
          </a>
        </div>
      </footer>
    </body>
  );
};

export default HomePage;
