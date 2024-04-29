import React from "react";
import styled from "styled-components";
import BaseTag from "./BaseTag";
import SquareImage from "./SquareImage";
import CardFavorites from "./CardFavorites";

const ItemDetailPageCardLarge = ({ data }) => {
  const { name, price, description, tags, images, isFavorite, favoriteCount } =
    data;

  const formatPrice = price.toLocaleString();

  return (
    <StyledCardWrapper>
      <StyledCardImage src={images} alt={name} />
      <div>
        <StyledCardTitle>
          <p>{name}</p>
          <p>{formatPrice}</p>
        </StyledCardTitle>
        <StyledCardDescription>
          <p>상품 소개</p>
          <p>{description}</p>
        </StyledCardDescription>
        <StyledCardTags>
          <p>상품태그</p>
          <TagBox>
            {tags.map((tag) => (
              <BaseTag key={tag} tag={tag} />
            ))}
          </TagBox>
        </StyledCardTags>
        <StyledCardFavorites
          favoriteCount={favoriteCount}
          isFavorite={isFavorite}
          onClick
        />
      </div>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #e5e7eb;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledCardImage = styled(SquareImage)`
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    flex-shrink: 0;
    width: 340px;
    height: 340px;
    border-radius: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 486px;
    height: 486px;
  }
`;

const StyledCardTitle = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;

  p:first-of-type {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
  }

  p:last-of-type {
    display: block;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    p:first-of-type {
      font-size: 20px;
      margin-bottom: 12px;
    }

    p:last-of-type {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1200px) {
    p:first-of-type {
      font-size: 24px;
      margin-bottom: 16px;
    }

    p:last-of-type {
      font-size: 40px;
    }
`;

const StyledCardDescription = styled.div`
  margin-bottom: 24px;

  p:first-of-type {
    display: inline-block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #4b5563;
  }

  p:last-of-type {
    font-weight: 400;
    font-size: 16px;
    color: #1f2937;

    white-space: pre-wrap;
  }
`;

const StyledCardTags = styled.div`
  margin-bottom: 24px;

  > p:first-of-type {
    font-weight: 500;
    font-size: 14px;
    color: #4b5563;
  }

  > div > div {
    height: 36px;
    padding: 0 16px;
  }
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  height: auto;
  margin-top: 8px;
`;

const StyledCardFavorites = styled(CardFavorites)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: auto;
  height: 32px;
  margin-bottom: 16px;
  padding: 0 16px;
  border: 1px solid var(--color-cool-gray-200);
  border-radius: 35px;
  font-weight: 500;
  font-size: 16px;
`;

export default ItemDetailPageCardLarge;
