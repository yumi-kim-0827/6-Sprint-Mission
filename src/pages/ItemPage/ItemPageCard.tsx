import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BaseCard from "../../components/BaseCard";
import CardFavorites from "../../components/CardFavorites";

interface ItemPageCardProps {
  className?: string;
  item: Item;
}

function ItemPageCard({ item, className }: ItemPageCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { id, name, price, favoriteCount, images } = item;

  const previewImage = images[0];
  const formattedPrice = `${price.toLocaleString()}원`;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <CardWrapper className={className}>
      <Link to={`${id}`}>
        <BaseCard
          src={previewImage}
          alt={name}
          title={name}
          text={formattedPrice}
        />
      </Link>
      <Favorites
        isFavorite={isFavorite}
        favoriteCount={favoriteCount}
        onClick={handleFavoriteClick}
      />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Favorites = styled(CardFavorites)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 42px;
  height: 16px;
`;

export default ItemPageCard;
