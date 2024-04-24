import React from "react";
import "../styles/style.css";
import styles from "../styles/main.module.css";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate()

  const goToItems = () => {
    navigate("/items")
  }

  return (
    <div>
      <section className={styles.s1}>
        <div className={styles.banner}>
          <div className={styles.bannertext}>
            <h1>
              일상의 모든 물건을
              <br />
              거래해보세요
            </h1>
            <button id="btn_large" onClick={goToItems}>
              구경하러 가기
            </button>
          </div>
          <img
            src={require('../assets/img_home_top.png')}
            className={styles.home_img1}
            alt="메인이미지1"
          />
        </div>
      </section>

      <main>
        <div className={styles.para}>
          <img
            src={require('../assets/img_home_01.png')}
            alt="home1"
            className={styles.imgs}
          />
          <div className={styles.text}>
            <span className={styles.badge}>Hot item</span>
            <h1>
              인기상품을
              <br />
              확인해 보세요
            </h1>
            <p className={styles.description}>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>

        <div className={`${styles.para} ${styles.left}`}>
          <div className={styles.text_left}>
            <span className={styles.badge}>search</span>
            <h1>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h1>
            <p className={styles.description}>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
          <img
            src={require('../assets/img_home_02.png')}
            alt="home1"
            className={styles.imgs}
          />
        </div>
        <div className={styles.para}>
          <img
            src={require('../assets/img_home_03.png')}
            alt="home1"
            className={styles.imgs}
          />
          <div className={styles.text}>
            <span className={styles.badge}>Register</span>
            <h1>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h1>
            <p className={styles.description}>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </main>
      <section className={styles.s2}>
        <div className={styles.banner2}>
          <div className={styles.bannertext2}>
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h2>
          </div>
          <img
            src={require('../assets/img_home_bottom.png')}
            className={styles.home_img2}
            alt="메인이미지2"
          />
        </div>
      </section>
    </div>
  );
}

export default Main;
