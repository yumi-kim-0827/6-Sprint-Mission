import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import BaseTag from "./BaseTag";

interface CardTagsProps {
  tags: string[];
  onClick: MouseEventHandler;
}

const CardTags = ({ tags }: CardTagsProps) => {
  return (
    <StyledCardTags>
      <p>상품태그</p>
      <TagBox>
        {tags.map((tag) => (
          <BaseTag key={tag} tag={tag} />
        ))}
      </TagBox>
    </StyledCardTags>
  );
};

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

export default CardTags;
