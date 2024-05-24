import React from "react";
import styled from "styled-components";
import SquareImage from "./SquareImage";

interface BaseCardProps {
  className?: string;
  src: string;
  alt: string;
  title: string;
  text: string;
}

const BaseCard = ({ className, src, alt, title, text }: BaseCardProps) => {
  return (
    <StyledCard className={className}>
      <SquareImage src={src} alt={alt} />
      <p>{title}</p>
      <p>{text}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  border-radius: 15%;

  img {
    border-radius: 15%;
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
