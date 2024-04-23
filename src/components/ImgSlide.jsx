import React from 'react';

export default function ImgSlide({ imgSrc, imgTitle }) {
  return (
    <div>
      <img src={imgSrc} alt={`상품 이미지 ${imgTitle}`} />
      <button>left</button>
      <button>right</button>
      <div>slide bar</div>
    </div>
  );
}
