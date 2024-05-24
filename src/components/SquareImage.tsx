import React from "react";
import styled from "styled-components";

interface SquareImageProps {
  src: string;
  alt: string;
  className?: string;
}

const SquareImage = ({ src, alt, className }: SquareImageProps) => {
  return (
    <SquareImageWrapper className={className}>
      <img src={src} alt={alt} />
    </SquareImageWrapper>
  );
};

const SquareImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default SquareImage;
