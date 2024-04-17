import React from "react";
import styled from "styled-components";

const WebpLoader = ({ className, src, alt, webpSrc }) => {
  return (
    <picture className={className}>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <CoveredImg src={src} alt={alt} />
    </picture>
  );
};

const CoveredImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default WebpLoader;
