import React from "react";
import styled from "styled-components";
import HeartIcon from "../assets/icon/heart.svg?react";
import HeartActiveIcon from "../assets/icon/heart-active.svg?react";

interface CardFavoritesProps {
  isFavorite: boolean;
  favoriteCount: number;
  onClick?: () => void;
  className?: string;
}

const CardFavorites = ({
  isFavorite,
  favoriteCount,
  onClick,
  className,
}: CardFavoritesProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledFavorite className={className} onClick={handleClick}>
      {isFavorite ? <HeartActiveIcon /> : <HeartIcon />}
      {favoriteCount}
    </StyledFavorite>
  );
};

const StyledFavorite = styled.button`
  padding: 0;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  color: #4b5563;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export default CardFavorites;
