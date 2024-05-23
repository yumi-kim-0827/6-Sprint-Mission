import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import homeTop from "image/home_top.png";
import homeBottom from "image/home_bottom.png";
import card1 from "image/home_01.png";
import card2 from "image/home_02.png";
import card3 from "image/home_03.png";
import ic_youtube from "image/ic_youtube.png";
import ic_facebook from "image/ic_facebook.png";
import ic_twitter from "image/ic_twitter.png";
import ic_instagram from "image/ic_instagram.png";

const Main = () => {
  return (
    <>
      <main className="main-container">
        <section className="banner top">
          <div className="banner-content">
            <div className="banner-txt">
              <p>
                일상의 모든 물건을
                <br />
                거래해 보세요
              </p>
              <Link to="/items" className="action-btn">
                구경하러 가기
              </Link>
            </div>
            <img
              src={homeTop}
              className="banner-img"
              alt="판다 하나 배너 이미지"
            />
          </div>
        </section>

        <section className="info-section">
          <div className="info-card hot-item">
            <img
              src={card1}
              className="info-card-img"
              alt="인기 상품 카드 이미지"
            />
            <div className="info-card-txt">
              <span className="info-title">Hot item</span>
              <p className="big-info">
                인기 상품을
                <br /> 확인해 보세요
              </p>
              <p className="small-info">
                가장 hot한 중고거래물품을
                <br /> 판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div className="info-card search">
            <div className="info-card-txt">
              <span className="info-title">Search</span>
              <p className="big-info">
                구매를 원하는
                <br />
                상품을 검색하세요
              </p>
              <p className="small-info">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
            <img
              src={card2}
              className="info-card-img"
              alt="상품 검색 카드 이미지"
            />
          </div>
          <div className="info-card register">
            <img
              src={card3}
              className="info-card-img"
              alt="상품 등록 카드 이미지"
            />
            <div className="info-card-txt">
              <span className="info-title">Register</span>
              <p className="big-info">
                판매를 원하는
                <br />
                상품을 등록하세요
              </p>
              <p className="small-info">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        <section className="banner bottom">
          <div className="banner-content">
            <div className="banner-txt">
              <p>
                믿을 수 있는
                <br />
                판다마켓 중고거래
              </p>
            </div>
            <img
              src={homeBottom}
              className="banner-img"
              alt="판다 둘 배너 이미지"
            />
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <span className="footer-company flex-row-center">codeit - 2024</span>
          <div className="footer-policy-faq flex-row-center">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="footer-sns flex-row-center">
            <Link to="https://facebook.com" target="_blank">
              <img src={ic_facebook} alt="페이스북 로고" />
            </Link>
            <Link to="https://youtube.com" target="_blank">
              <img src={ic_youtube} alt="유튜브 로고" />
            </Link>
            <Link to="https://twitter.com" target="_blank">
              <img src={ic_twitter} alt="트위터 로고" />
            </Link>
            <Link to="https://instagram.com" target="_blank">
              <img src={ic_instagram} alt="인스타그램 로고" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
