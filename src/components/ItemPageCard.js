import { useState } from "react";
import styled from "styled-components";

import BaseCard from "./BaseCard";
import CardFavorites from "./CardFavorites";
import { Link } from "react-router-dom";

function ItemPageCard({ item, className }) {
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
      <CardFavorites
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

export default ItemPageCard;
