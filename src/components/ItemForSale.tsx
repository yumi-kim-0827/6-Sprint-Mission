import React from 'react';
import './style/ItemForSale.css';
import { useNavigate } from 'react-router-dom';

type Props = {
  favoriteCount: number;
  images: string[];
  price: number;
  name: string;
  id: number;
};

export default function ItemForSale({ price, images, favoriteCount, name, id }: Props) {
  const formattedPrice = price.toLocaleString();
  const nav = useNavigate();

  return (
    <div className='item'>
      <div onClick={() => nav(`/items/${id}`)} className='item-for-sale__img-wrap'>
        <img className='item-for-sale__img' src={images[0]} alt={name} />
      </div>
      <div className='item-for-sale__description'>
        <p className='item-for-sale__title' onClick={() => nav(`/items/${id}`)}>
          {name}
        </p>
        <p className='item-for-sale__price'>{formattedPrice}원</p>
        <div className='item-for-sale__heart'>
          <img className='item-for-sale__heart__img' src='/imgs/small_grayHeart.webp' alt='' />
          <span className='item-for-sale__heart__count'>{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}
