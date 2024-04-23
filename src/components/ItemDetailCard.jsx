import React from 'react';
import ImgSlide from './ImgSlide';

export default function ItemDetailCard({ imgSrc, imgTitle, price, description, tagList }) {
  return (
    <div>
      <div>
        <ImgSlide imgSrc={imgSrc} imgTitle={imgTitle} />
      </div>

      <div>
        <div>제목</div>
        <div>{price}</div>
        <div>
          <img src='' alt='드롭다운 메뉴바' />
        </div>
        <div>horizontal line</div>
      </div>

      <div>
        <div>상품소개</div>
        <p>{description}</p>
      </div>

      <div>
        <div>상품 태그</div>
        <div>{tagList}</div>
      </div>
    </div>
  );
}
