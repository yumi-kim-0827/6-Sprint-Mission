import { useEffect, useState } from "react";

import styled from "styled-components";

import xButtonIcon from "../assets/icons/ic_X_blue.svg";
import plusIcon from "../assets/icons/ic_plus.svg";
import { BREAKPOINT } from "../module";
import FlexContainer from "../styled-components/FlexContainer";
import {
  H5,
  ImageInput,
  ImageInputContainer,
  ImageInputContent,
  PlusIcon,
} from "../styled-components/ImageInput";

const FlexedImage = styled(FlexContainer)`
  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    justify-content: space-between;
    gap: 8px;
  }
`;

const ShowItemImage = styled(ImageInputContainer)`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  &:hover {
    background-color: var(--gray50);
  }
  ${({ $imageURL }) =>
    $imageURL &&
    `background-image: url(${$imageURL})};
    `}
`;

const Xbutton = styled.img`
  position: absolute;
  top: 10px;
  right: 12px;
`;

function AddItemImage() {
  const [preview, setPreview] = useState(null);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    setValue(nextValue);
  };

  const handleDeleteClick = () => {
    setPreview(null);
    setValue("");
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <FlexedImage $justifyContent={"normal"} $gap={"16px"}>
      <ImageInputContainer as={"label"}>
        <ImageInputContent>
          <PlusIcon src={plusIcon}></PlusIcon>
          <H5>이미지 등록</H5>
        </ImageInputContent>
        <ImageInput
          type="file"
          accept="image/*"
          onChange={handleChange}
        ></ImageInput>
      </ImageInputContainer>
      {value && (
        <ShowItemImage $imageURL={preview}>
          <Xbutton src={xButtonIcon} onClick={handleDeleteClick} />
        </ShowItemImage>
      )}
    </FlexedImage>
  );
}

export default AddItemImage;
