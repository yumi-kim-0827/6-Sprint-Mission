import { Link } from "react-router-dom";
import Button from "components/Button";
import homeTopImg from "assets/img/home_top_img.png";
import homeBottomImg from "assets/img/home_bottom_img.png";
import hotItemSectionImg from "assets/img/home_section1.png";
import searchSectionImg from "assets/img/home_section2.png";
import registerSectionImg from "assets/img/home_section3.png";
import facebookIcon from "assets/icon/ic_facebook.svg";
import instagramIcon from "assets/icon/ic_instagram.svg";
import twitterIcon from "assets/icon/ic_twitter.svg";
import youtubeIcon from "assets/icon/ic_youtube.svg";
import * as S from "./index.style";

export function HomeTopImgComponent() {
  return (
    <S.HomeTopImgContainer>
      <div>
        <S.HomeTopTitle>
          <span>일상의 모든 물건을 </span>
          <span>거래해 보세요</span>
        </S.HomeTopTitle>
        <S.ButtonBox>
          <Button.Link to="/items" radius={45}>
            <span>구경하러가기</span>
          </Button.Link>
        </S.ButtonBox>
      </div>
      <S.HomeTopImg src={homeTopImg} alt="home-top-img" />
    </S.HomeTopImgContainer>
  );
}

const HOT_ITEM_CONTENT = {
  img: hotItemSectionImg,
  badge: "Hot item",
  title: "<span>인기 상품을 </span><span>확인해보세요</span>",
  description: "가장 HOT한 중고거래 물품을 <br />판다마켓에서 확인해 보세요",
};

const SEARCH_CONTENT = {
  img: searchSectionImg,
  badge: "Search",
  title: "<span>구매를 원하는 </span><span>상품을 검색하세요</span>",
  description: "구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요",
};

const REGISTER_CONTENT = {
  img: registerSectionImg,
  badge: "register",
  title: "<span>판매를 원하는 </span><span>상품을 등록하세요</span>",
  description: "어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요",
};

export function Section({
  type,
  direction = "left",
}: {
  type: "hotitem" | "search" | "register";
  direction?: "left" | "right";
}) {
  let content = { img: "", badge: "", title: "", description: "" };

  if (type === "hotitem") content = HOT_ITEM_CONTENT;
  if (type === "search") content = SEARCH_CONTENT;
  if (type === "register") content = REGISTER_CONTENT;

  return (
    <S.SectionContainer>
      <S.SectionImg src={content.img} />
      <S.SectionScript direction={direction}>
        <span
          className="badge"
          dangerouslySetInnerHTML={{ __html: content.badge }}
        ></span>
        <h1
          className="title"
          dangerouslySetInnerHTML={{ __html: content.title }}
        ></h1>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: content.description }}
        ></p>
      </S.SectionScript>
    </S.SectionContainer>
  );
}

export function HomeBottomImgComponent() {
  return (
    <S.HomeBottomImgContainer>
      <S.HomeBottomTitle>
        믿을 수 있는
        <br />
        판다마켓 중고 거래
      </S.HomeBottomTitle>

      <S.HomeBottomImg src={homeBottomImg} alt="home-bottom-img" />
    </S.HomeBottomImgContainer>
  );
}

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterCopyright>@codeit - 2024</S.FooterCopyright>

      <S.FooterInfo>
        <Link to="/privacy">Privacy Policy</Link> <Link to="/faq">FAQ</Link>
      </S.FooterInfo>

      <S.FooterSNS>
        <Link
          to="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="facebook" />
        </Link>
        <Link
          to="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="twitter" />
        </Link>
        <Link
          to="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeIcon} alt="youtube" />
        </Link>
        <Link
          to="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="instagram" />
        </Link>
      </S.FooterSNS>
    </S.FooterContainer>
  );
}
