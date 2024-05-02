import styled from "styled-components";

import { BREAKPOINT } from "../module";

const ImageInputContainer = styled.div`
  display: block;
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--gray50);

  &:hover {
    background-color: var(--gray200);
  }
  @media (max-width: ${BREAKPOINT.TABLET}px) {
    width: 162px;
    height: 162px;
  }
`;

const ImageInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`;

const ImageInputContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const PlusIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const H5 = styled.h5`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray400);
`;

export { ImageInputContainer, ImageInput, ImageInputContent, PlusIcon, H5 };
