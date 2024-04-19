import "./main.css";
import headerPanda from "./assets/header-panda.png";
import section1Img from "./assets/section1-img.png";
import section2Img from "./assets/section2-img.png";
import section3Img from "./assets/section3-img.png";
import footerPanda from "./assets/footer-Panda.png";
import icFacebook from "./assets/ic-facebook.png";
import icTwitter from "./assets/ic-twitter.png";
import icInstagram from "./assets/ic-instagram.png";
import icYoutube from "./assets/ic-youtube.png";
import Nav from "./components/Nav";
import Market from "./Market";
import Login from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addItem" element={<Market />} />
        </Routes>
      </BrowserRouter>

      <Nav />
      <header>
        <div className="header-title">
          <p>일상의 모든 물건을 거래해 보세요</p>
          <a href="../items.html" style={{ textDecorationLine: "none" }}>
            <button className="headerButton">구경하러 가기</button>
          </a>
        </div>
        <img className="headerPanda" src={headerPanda} />
      </header>
      <main>
        <section className="section1">
          <img src={section1Img} />
          <div className="sectionText1">
            <p className="category">Hot item</p>
            <h1 className="sectionTitle">
              인기 상품을
              <br />
              확인해 보세요
            </h1>
            <p className="sectionContent">
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </section>
        <section className="section2">
          <img src={section2Img} />
          <div className="sectionText2">
            <p className="category-section2">Search</p>
            <h1 className="sectionTitle">
              구매를 원하는
              <br />
              상품을 검색하세요
            </h1>
            <p className="sectionContent">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </section>
        <section className="section3">
          <img src={section3Img} />
          <div className="sectionText3">
            <p className="category">Register</p>
            <h1 className="sectionTitle">
              판매를 원하는
              <br />
              상품을 등록하세요
            </h1>
            <p className="sectionContent">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-banner">
          <p>
            믿을 수 있는
            <br />
            판다마켓 중고거래
          </p>
          <img src={footerPanda} />
        </div>
        <div className="real-footer">
          <div className="footer-content">
            <p>©codeit - 2024</p>
            <div className="footer-link">
              <a className="policy-link" href="../policy.html">
                <p className="policy-text">Privacy Policy</p>
              </a>
              <a className="faq-link" href="../faq.html">
                <p className="faq-text">FAQ</p>
              </a>
            </div>
            <div className="footer-image">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icFacebook} />
              </a>
              <a
                href="https://twitter.com/?lang=ko"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icTwitter} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icYoutube} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icInstagram} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;
