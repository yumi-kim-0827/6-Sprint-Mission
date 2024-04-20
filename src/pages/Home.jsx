import bannerTopImg from "../assets/images/home/Img_home_top.svg";
import bannerBottomImg from "../assets/images/home/Img_home_bottom.svg";
import homeImg1 from "../assets/images/home/Img_home_01.svg";
import homeImg2 from "../assets/images/home/Img_home_02.svg";
import homeImg3 from "../assets/images/home/Img_home_03.svg";

import "./Home.css";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <article className="container">
          {/* 상단 배너 */}
          <section className="banner_top">
            <div className="banner_top_content">
              <h1 className="banner_top_text">
                일상의 모든 물건을
                <br />
                거래해 보세요
              </h1>

              <NavLink to={"/items"} className="banner_top_btn blue">
                구경하러 가기
              </NavLink>
            </div>

            <img
              className="banner_top_img"
              src={bannerTopImg}
              alt="상단 배너"
            />
          </section>

          {/* 메인 콘텐츠 */}
          <section className="container_content">
            <div className="content_item">
              <img className="content_item_img" src={homeImg1} alt="이미지1" />

              <div className="content_item_sub">
                <h2 className="content_tag">Hot item</h2>

                <h1 className="content_title">
                  인기 상품을
                  <br />
                  확인해보세요
                </h1>

                <p className="content_description">
                  가장 HOT한 중고거래 물품을
                  <br />
                  판다 마켓에서 확인해 보세요
                </p>
              </div>
            </div>

            <div className="content_item right_item">
              <img className="content_item_img" src={homeImg2} alt="이미지2" />
              <div className="content_item_sub right_item">
                <h2 className="content_tag">Search</h2>

                <h1 className="content_title">
                  구매를 원하는
                  <br />
                  상품을 검색하세요
                </h1>

                <p className="content_description">
                  구매하고 싶은 물품은 검색해서
                  <br />
                  쉽게 찾아보세요
                </p>
              </div>
            </div>

            <div className="content_item">
              <img className="content_item_img" src={homeImg3} alt="이미지3" />

              <div className="content_item_sub">
                <h2 className="content_tag">Register</h2>

                <h1 className="content_title">
                  판매를 원하는
                  <br />
                  상품을 등록하세요
                </h1>

                <p className="content_description">
                  어떤 물건이든 판매하고 싶은 상품을
                  <br />
                  쉽게 등록하세요
                </p>
              </div>
            </div>
          </section>

          {/* 하단 배너 */}
          <section className="banner_floor">
            <div className="banner_floor_content">
              <h1 className="banner_floor_text">
                믿을 수 있는 <br />
                판다마켓 중고거래
              </h1>
            </div>

            <img
              className="banner_floor_img"
              src={bannerBottomImg}
              alt="하단 배너"
            />
          </section>
        </article>
      </main>
    </>
  );
};

export default Home;
