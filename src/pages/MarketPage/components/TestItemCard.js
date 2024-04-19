import React from 'react';

const TestItemCard = () => {
  return (
    <div className="item-card">
      <img src="assets/test_image.png" alt="Product" className="product-image" />
      <div className="product-details">
        <p className="description">아이패드 미니 팝니다</p>
        <p className="price">500,000원</p>
        <img src="assets/ic_heart.svg" alt="heart" className="heart-icon" />
        <span className="like-count">300</span>
      </div>
    </div>
  );
};

export default TestItemCard;
