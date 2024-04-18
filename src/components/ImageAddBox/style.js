import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const boxStyle = css`
  width: 17.63rem;
  height: 17.63rem;
  border-radius: 0.75rem;
`;

export const ImageAdd = styled.div`
  ${boxStyle}
  background-color: var(--gray-100);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  & span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--gray-400);
  }
`;

export const ImagePreview = styled.div`
  ${boxStyle}
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;

  position: relative;

  & img {
    position: absolute;
    top: 0.63rem;
    right: 0.63rem;
    cursor: pointer;
  }
`;
