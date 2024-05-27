import React from "react";
import "./ShowDetail.css";
import likeicon from "../../assets/like-icon.png";
import hamburger from "../../assets/hamburger-icon.png";

export interface ShowDetailValues {
  images: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  favoriteCount: number;
}

const ShowDetail = ({ images, name, price, description, tags, favoriteCount }: ShowDetailValues) => {
  return (
    <div className="show-item-detail">
      <img className="show-item-detail__img" src={images} alt="제품 상세 페이지 내부 제품 이미지" />
      <div className="show-item-details">
        <div className="show-item-details-top">
          <h3 className="show-item-details-top__name">{name} 팔아요</h3>
          <button className="show-item-details-top__button">
            <img src={hamburger} alt="제품 상세 페이지 디테일 요소 버튼" />
          </button>
        </div>
        <h2 className="show-item-details__price">{price.toLocaleString()}원</h2>
        <h4>상품 소개</h4>
        <p className="show-item-details__description">{description}</p>
        <h4>상품 태그</h4>
        <div className="show-item-details__tags">
          {tags.map((tag) => {
            return <p key={tag}>{`#${tag}`}</p>;
          })}
        </div>
        <div className="show-item-details-icon">
          <img className="show-item-details-icon__likeicon" src={likeicon} alt="제품 상세 페이지 내부 좋아요 아이콘" />
          <p className="show-item-details-icon__favoritecount">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
