import React from "react";
import { Link } from "react-router-dom";

import * as S from "./HomePage.style.js";

import homeImg01 from "../assets/img/Img_home_01@2x.jpg";
import homeImg01webp from "../assets/img/Img_home_01@2x.webp";
import homeImg02 from "../assets/img/Img_home_02@2x.jpg";
import homeImg02webp from "../assets/img/Img_home_02@2x.webp";
import homeImg03 from "../assets/img/Img_home_03@2x.jpg";
import homeImg03webp from "../assets/img/Img_home_03@2x.webp";
import banner1 from "../assets/img/panda-1.svg";
import banner2 from "../assets/img/panda-2.svg";

const HomePage = () => {
  return (
    <S.MainContainer>
      <S.Banner>
        <div>
          <S.BannerImg src={banner1} alt="판다가 반갑게 손을 흔들고 있어요" />
          <S.BannerDescription isWrap="all">
            일상의 모든 물건을,거래해보세요
          </S.BannerDescription>
          <Link to="/items">
            <S.BannerButton size="large">구경하러 가기</S.BannerButton>
          </Link>
        </div>
      </S.Banner>

      <S.SectionContainer>
        <S.Section>
          <S.SectionImg
            src={homeImg01}
            alt="판다마켓"
            webpSrc={homeImg01webp}
          />
          <S.SectionDescription
            badgeText="Hot item"
            title="인기 상품을,확인해 보세요"
            content="가장 HOT한 중고거래 물품을,판다 마켓에서 확인해보세요"
          />
        </S.Section>
        <S.Section>
          <S.SectionImg
            src={homeImg02}
            alt="판다마켓"
            webpSrc={homeImg02webp}
          />
          <S.SectionDescription
            badgeText="search"
            title="구매를 원하는,상품을 검색하세요"
            content="구매하고 싶은 물품은 검색해서,쉽게 찾아보세요"
          />
        </S.Section>
        <S.Section>
          <S.SectionImg
            src={homeImg03}
            alt="판다마켓"
            webpSrc={homeImg03webp}
          />
          <S.SectionDescription
            badgeText="Register"
            title="판매를 원하는,상품을 등록하세요"
            content="어떤 물건이든 판매하고 싶은 상품을,쉽게 등록하세요"
          />
        </S.Section>
      </S.SectionContainer>

      <S.Banner>
        <div>
          <S.BannerImg
            src={banner2}
            alt="즐거운 중고거래가 끝나고 판다들이 헤어지고 있어요"
          />
          <S.BannerDescription isWrap>
            믿을 수 있는,판다마켓 중고거래
          </S.BannerDescription>
        </div>
      </S.Banner>
    </S.MainContainer>
  );
};

export default HomePage;
