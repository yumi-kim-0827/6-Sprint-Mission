import React, { useEffect, useState } from 'react';
import { ImageContainer, ImageAdd, ImagePreview } from './style';
import PlusIcon from 'assets/icons/Plus.svg';
import XIcon from 'assets/icons/Blue-X.svg';
import { useImageUrl } from 'contexts/ItemImageContext';

const ImageAddBox = ({ ...props }) => {
  const imageUrl = useImageUrl();
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!imageUrl) return;

    // 사이드 이펙트 발생
    const nextPreview = URL.createObjectURL(imageUrl);
    setImage(nextPreview);

    /**
     * 사이드 이펙트 정리
     * 사용하지 않는 거 정리해줌
     */
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
      {image !== null && (
        <ImagePreview imageUrl={image}>
          <img src={XIcon} alt="이미지 삭제 아이콘" />
        </ImagePreview>
      )}
    </ImageContainer>
  );
};

export default ImageAddBox;
