import { useState } from "react";
import styled from "styled-components";

import BaseIcon from "./BaseIcon";
import BaseCard from "./BaseCard";

import heartIcon from "../assets/icon/heart.svg";
import heartActiveIcon from "../assets/icon/heart-active.svg";

function ItemPageCard({ item, className }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { name, price, favoriteCount, images } = item;

  const previewImage = images[0];
  const formattedPrice = `${price.toLocaleString()}원`;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const getFavoriteIcon = isFavorite ? heartActiveIcon : heartIcon;

  return (
    <CardWrapper className={className}>
      <BaseCard
        src={previewImage}
        alt={name}
        title={name}
        text={formattedPrice}
      />
      <StyledFavoriteSection>
        <button onClick={handleFavoriteClick}>
          <BaseIcon src={getFavoriteIcon} />
        </button>
        {isFavorite ? favoriteCount + 1 : favoriteCount}
        {/* 서버에는 반영 x */}
      </StyledFavoriteSection>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledFavoriteSection = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 12px;
  color: #4b5563;

  button {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  i {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export default ItemPageCard;
