import React, { useState, useEffect } from 'react';
import BestItems from '../components/BestItems';
import ItemsForSale from '../components/ItemsForSale';
import { getItems } from '../services/api';
import '../styles/ItemsPage.css';

const LIMIT = 10;

export default function Items() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');
  const [offset, setOffset] = useState(0);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('favoriteCount');

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

  // const handleLoad = async options => {
  //   const { list } = await getItems(options);
  //   if (options.offset === 0) {
  //     setItems(list);
  //   } else {
  //     setItems([...items, ...list]);
  //   }
  //   setOffset(options.offset + list.length);
  // };

  // const handleLoadMore = () => {
  //   handleLoad({ order, offset, limit: 10 });
  // };

  // useEffect(() => {
  //   handleLoad({ order, offset: 0, limit: 10 });
  // }, [order]);

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

// handleLoadMore={handleLoadMore}
