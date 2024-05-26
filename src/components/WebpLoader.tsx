import styled from "styled-components";

interface WebpLoaderProps {
  className?: string;
  src: string;
  alt: string;
  webpSrc?: string;
}

const WebpLoader = ({ className, src, alt, webpSrc }: WebpLoaderProps) => {
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
