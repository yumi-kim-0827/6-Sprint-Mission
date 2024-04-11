import React from 'react';
import BestItems from './BestItems';
import ItemsForSale from './ItemsForSale';
import './style/Main.css';

export default function Main() {
  return (
    <div className='main'>
      <BestItems />
      <ItemsForSale />
    </div>
  );
}
