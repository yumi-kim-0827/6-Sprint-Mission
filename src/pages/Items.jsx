import React, { useState, useEffect } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import BestItems from '../components/BestItems';
import ItemsForSale from '../components/ItemsForSale';
import { getItems } from '../services/api';
import '../styles/ItemsPage.css';

const LIMIT = 10;

export default function Items() {
  const [items, setItems] = useState([]);
  usePageTitle('판다마켓: 중고마켓');

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
  }, []);

  const getBestItems = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => b.favoriteCount - a.favoriteCount);
    return sortedItems.slice(0, 4);
  };

  return (
    <div className='main'>
      <BestItems items={getBestItems()} />
      <ItemsForSale items={items} />
    </div>
  );
}
