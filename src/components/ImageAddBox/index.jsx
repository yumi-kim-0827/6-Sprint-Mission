import React, { useEffect, useState } from 'react';
import { ImageContainer, ImageAdd, ImagePreview } from './style';
import PlusIcon from 'assets/icons/Plus';
import CloseXIcon from 'assets/icons/CloseX';
import { useImageUrl, useSetImageUrl } from 'contexts/ItemImageContext';

const ImageAddBox = ({ onClick }) => {
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
      <ImageAdd onClick={onClick}>
        <PlusIcon />
        <span>이미지 등록</span>
      </ImageAdd>
      {image && (
        <ImagePreview $imageUrl={image}>
          <CloseXIcon fill="#3692FF" onClick={handleClearImage} />
        </ImagePreview>
      )}
    </ImageContainer>
  );
};

export default ImageAddBox;
