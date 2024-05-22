import styled, { css } from "styled-components";

export const ImageCardCSS = css`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  object-fit: cover;
`;

export const ImageCard = styled.img`
  ${ImageCardCSS}
`;
