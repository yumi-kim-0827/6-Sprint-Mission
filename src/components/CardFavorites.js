import React from "react";
import styled from "styled-components";

import BaseIcon from "./BaseIcon";

import heartIcon from "../assets/icon/heart.svg";
import heartActiveIcon from "../assets/icon/heart-active.svg";

const CardFavorites = ({ isFavorite, favoriteCount, onClick, className }) => {
  const getFavoriteIcon = isFavorite ? heartActiveIcon : heartIcon;

  return (
    <StyledFavoriteSection className={className}>
      <button onClick={onClick}>
        <BaseIcon src={getFavoriteIcon} />
      </button>
      {isFavorite ? favoriteCount + 1 : favoriteCount}
    </StyledFavoriteSection>
  );
};

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

export default CardFavorites;
