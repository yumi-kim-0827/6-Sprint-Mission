import React from 'react';
import items from '../../img/image 42.png';
import heart from '../../img/heart.svg';

const Items = ({item}) => {
  console.log(item)
  return (
    <div className='Items'>
      <img src={item.images} alt={item.name} className=''/>
    <div>
      <h1>{item.name} </h1>
      <span>아이템가격</span>
      <div>
        <img src={heart}/> 
        <span>{item.favoriteCount}</span>
      </div>
    </div>
    </div>
  );
};

export default Items;