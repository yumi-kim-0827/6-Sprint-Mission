import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../../assets/images/icons/ic_heart.svg';

function ItemCard({ item }) {
  const productLink = `/items/products/${encodeURIComponent(item.id)}`;

  return (
    <Link to={productLink}>
      <div className="itemCard">
        <img src={item.images[0]} alt={item.name} className="itemCardThumbnail" />
        <div className="itemSummary">
          <h2 className="itemName">{item.name}</h2>
          <p className="itemPrice">{item.price.toLocaleString()}원</p>
          <div className="favoriteCount">
            <HeartIcon />
            {item.favoriteCount}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
