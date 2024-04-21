import React, { useEffect, useState } from 'react';
import { ImageContainer, ImageAdd, ImagePreview } from './style';
import PlusIcon from 'assets/icons/Plus.svg';
import XIcon from 'assets/icons/Blue-X.svg';
import { useImageUrl, useSetImageUrl } from 'contexts/ItemImageContext';

const ImageAddBox = ({ ...props }) => {
  const [image, setImage] = useState(null);

  const imageUrl = useImageUrl();
  const setImageUrl = useSetImageUrl();

  const handleClearImage = () => {
    setImageUrl(null);
  };

  useEffect(() => {
    if (!imageUrl) return;

    const nextPreview = URL.createObjectURL(imageUrl);
    setImage(nextPreview);

    return () => {
      setImage(null);
      URL.revokeObjectURL(nextPreview);
    };
  }, [imageUrl]);

  return (
    <ImageContainer>
      <ImageAdd {...props}>
        <img src={PlusIcon} alt="이미지 추가 아이콘" />
        <span>이미지 등록</span>
      </ImageAdd>
      {image && (
        <ImagePreview $imageUrl={image}>
          <img
            src={XIcon}
            onClick={handleClearImage}
            alt="이미지 삭제 아이콘"
          />
        </ImagePreview>
      )}
    </ImageContainer>
  );
};

export default ImageAddBox;
