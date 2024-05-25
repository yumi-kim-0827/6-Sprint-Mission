import usePageTitle from '../hooks/usePageTitle';
import BestItems from '../components/BestItems';
import ItemsForSale from '../components/ItemsForSale';
import { useState, useEffect } from 'react';
import { getItems } from '../api/getItems';

import '../styles/ItemsPage.css';

interface Item {
  updatedAt: string;
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

interface ItemProps {
  totalCount: number;
  list?: Item[];
}

export default function Items() {
  usePageTitle('판다마켓: 중고마켓');
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data: ItemProps = await getItems();
        const wholeItems = data.list ?? [];
        setItems(wholeItems);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchItems();
  }, []);

  const getBestItems = (): Item[] => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => b.favoriteCount - a.favoriteCount);
    return sortedItems.slice(0, 4);
  };

  return (
    <div className='main'>
      <BestItems list={getBestItems()} />
      <ItemsForSale items={items} />
    </div>
  );
}
