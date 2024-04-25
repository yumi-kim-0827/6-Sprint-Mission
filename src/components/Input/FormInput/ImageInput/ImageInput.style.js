import styled, { css } from "styled-components";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";
import { DEVICE } from "styles/variables";
import { ImageCardCSS } from "components/Card/ImageCard";

const ImageInputCard = css`
  ${ImageCardCSS}
  background-color: var(--cool-gray300);
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const ImageInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 8px;

  @media (min-width: ${DEVICE.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  @media (min-width: ${DEVICE.DESKTOP}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`;

export const ImageInput = styled.div`
  ${ImageInputCard};
  cursor: pointer;

  input {
    display: none;
  }

  .plus__icon {
    width: 48px;
    height: 48px;
  }

  h1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--light-gray);
  }
`;

export const PreviewImage = styled.div`
  ${ImageCardCSS};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const StyledXIcon = styled(XIcon)`
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
  fill: #9ca3af;

  &:hover {
    fill: var(--blue);
  }
`;
