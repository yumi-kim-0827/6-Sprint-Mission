import React from "react";
import HomeSection from "../components/HomeSection";
import HomeBanner from "../components/HomeBanner";
import main1 from "../assets/img/main-img-1.svg";
import main2 from "../assets/img/main-img-2.svg";
import main3 from "../assets/img/main-img-3.svg";
import banner1 from "../assets/img/panda-1.svg";
import banner2 from "../assets/img/panda-2.svg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="main">
      <HomeBanner
        imgUrl={banner1}
        imgAlt="판다가 반갑게 손을 흔들고 있어요"
        textFirstLine="일상의 모든 물건을"
        textSecondLine="거래해보세요"
        buttonText="구경하러 가기"
      />

      <div className="section">
        <HomeSection
          imgUrl={main1}
          imgAlt="판다마켓"
          badgeText="Hot item"
          titleFirstLine="인기 상품을"
          titleSecondLine="확인해 보세요"
          descriptionFirstLine="가장 HOT한 중고거래 물품을"
          descriptionSecondLine="판다 마켓에서 확인해보세요"
        />
        <HomeSection
          imgUrl={main2}
          imgAlt="판다마켓"
          badgeText="search"
          titleFirstLine="구매를 원하는"
          titleSecondLine="상품을 검색하세요"
          descriptionFirstLine="구매하고 싶은 물품은 검색해서"
          descriptionSecondLine="쉽게 찾아보세요"
        />
        <HomeSection
          imgUrl={main3}
          imgAlt="판다마켓"
          badgeText="Register"
          titleFirstLine="판매를 원하는"
          titleSecondLine="상품을 등록하세요"
          descriptionFirstLine="어떤 물건이든 판매하고 싶은 상품을"
          descriptionSecondLine="쉽게 등록하세요"
        />
      </div>

      <HomeBanner
        imgUrl={banner2}
        imgAlt="즐거운 중고거래가 끝나고 판다들이 헤어지고 있어요"
        textFirstLine="믿을 수 있는"
        textSecondLine="판다마켓 중고거래"
      />
    </main>
  );
};

export default HomePage;
