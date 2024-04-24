import styled, { css } from "styled-components";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";
import { DEVICE } from "styles/variables";

export const ImageBlock = css`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
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
  ${ImageBlock};
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
  ${ImageBlock};

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
