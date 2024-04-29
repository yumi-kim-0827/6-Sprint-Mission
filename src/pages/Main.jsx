import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import hometop from "../assets/home_top.png";
import home01 from "../assets/home01.png";
import home02 from "../assets/home02.png";
import home03 from "../assets/home03.png";
import homebottom from "../assets/home_bottom.png";

function Main() {
  const navigate = useNavigate();

  const goItems = () => {
    navigate("./Items");
  };

  return (
    <main>
      <section className="top">
        <div className="home-top">
          <h2>
            일상의 모든 물건을
            <br />
            거래해보세요
          </h2>
          <button onClick={goItems}>구경하러 가기</button>
        </div>
        <div className="img-top">
          <img src={hometop} alt="메인홈 이미지" />
        </div>
      </section>

      <section className="section container">
        <div className="section-img">
          <img src={home01} alt="섹션1 이미지" />
        </div>
        <div className="section-description">
          <p>Hot item</p>
          <h2>
            인기 상품을
            <br />
            확인해 보세요
            <br />
          </h2>
          <h3>
            가장 HOT한 중고거래 물품을
            <br />
            판다 마켓에서 확인해 보세요
          </h3>
        </div>
      </section>

      <section className="section-reverse container">
        <div className="section-reverse-img">
          <img src={home02} alt="섹션2 이미지" />
        </div>
        <div className="section-reverse-description">
          <p>Search</p>
          <h2>
            구매를 원하는
            <br />
            상품을 검색하세요
            <br />
          </h2>
          <h3>
            구매하고 싶은 물품은 검색해서
            <br />
            쉽게 찾아보세요
          </h3>
        </div>
      </section>

      <section className="section container">
        <div className="section-img">
          <img src={home03} alt="섹션3 이미지" />
        </div>
        <div className="section-description">
          <p>register</p>
          <h2>판매를 원하는 상품을 등록하세요</h2>
          <h3>
            어떤 물건이든 판매하고 싶은 상품을
            <br />
            쉽게 등록하세요
          </h3>
        </div>
      </section>

      <section className="bottom">
        <h2>
          믿을수 있는
          <br />
          판다마켓 중고거래
        </h2>
        <div className="img-bottom">
          <img src={homebottom} alt="메인홈 이미지" />
        </div>
      </section>
    </main>
  );
}

export default Main;
