import { useState } from "react";
import styled from "styled-components";

import heartIcon from "../assets/icon/heart.svg";
import heartActiveIcon from "../assets/icon/heart-active.svg";

function Card({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { name, price, favoriteCount, images } = item;

  const previewImage = images[0];
  const formattedPrice = `${price.toLocaleString()}원`;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const getFavoriteIconClassName = isFavorite
    ? "icon-heart-active"
    : "icon-heart";

  return (
    <StyledCard className="Card">
      <img className="Card__img" src={previewImage} alt="상품 이미지" />
      <p className="Card__name">{name}</p>
      <p className="Card__price">{formattedPrice}</p>
      <span className="Card__favorites">
        <button className="Card__favorites-btn" onClick={handleFavoriteClick}>
          <i className={getFavoriteIconClassName}></i>
        </button>
        {isFavorite ? favoriteCount + 1 : favoriteCount}
        {/* 서버에는 반영 x */}
      </span>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .Card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15%;
    margin: 16px 0;
  }

  .Card__name {
    font-weight: 500;
    font-size: 14px;
    color: #1f2937;
  }

  .Card__price {
    font-weight: 700;
    font-size: 16px;
    color: #1f2937;
  }

  .Card__favorites {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    font-size: 12px;
    color: #4b5563;
  }

  .Card__favorites-btn {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .icon-heart,
  .icon-heart-active {
    display: block;
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  .icon-heart {
    background-image: url(${heartIcon});
  }

  .icon-heart-active {
    background-image: url(${heartActiveIcon});
  }
`;

export default Card;
