import React from "react";
import styled from "styled-components";

const BaseCard = ({ className, src, alt, title, text }) => {
  return (
    <StyledCard className={className}>
      <img src={src} alt={alt} />
      <p>{title}</p>
      <p>{text}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15%;
    margin: 16px 0;
  }

  p:first-of-type {
    font-weight: 500;
    font-size: 14px;
    color: #1f2937;
  }

  p:nth-of-type(2) {
    font-weight: 700;
    font-size: 16px;
    color: #1f2937;
  }
`;

export default BaseCard;
