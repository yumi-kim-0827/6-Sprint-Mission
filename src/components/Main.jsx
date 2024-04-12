import React, { useState, useEffect } from 'react';
import BestItems from './BestItems';
import ItemsForSale from './ItemsForSale';
import { getItems } from '../services/api';
import './style/Main.css';

const LIMIT = 10;

export default function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async options => {
      try {
        const { list } = await getItems(options);
        setItems(list);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchItems({ offset: 0, limit: LIMIT });
  }, [items]);

  const getBestItems = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => b.favoriteCount - a.favoriteCount);
    return sortedItems.slice(0, 4);
  };

  return (
    <div className='main'>
      <BestItems items={getBestItems()} />
      <ItemsForSale items={[...items]} />
    </div>
  );
}
