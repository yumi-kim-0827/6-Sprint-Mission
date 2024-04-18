import React from 'react';
import { ImageContainer, ImageAdd, ImagePreview } from './style';
import PlusIcon from 'assets/icons/Plus.svg';
import XIcon from 'assets/icons/Blue-X.svg';

const ImageAddBox = ({ imageUrl, ...props }) => {
  return (
    <ImageContainer>
      <ImageAdd {...props}>
        <img src={PlusIcon} alt="이미지 추가 아이콘" />
        <span>이미지 등록</span>
      </ImageAdd>
      {imageUrl && (
        <ImagePreview imageUrl={window.URL.createObjectURL(imageUrl)}>
          <img src={XIcon} alt="이미지 삭제 아이콘" />
        </ImagePreview>
      )}
    </ImageContainer>
  );
};

export default ImageAddBox;
