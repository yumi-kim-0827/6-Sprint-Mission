import usePageTitle from '../hooks/usePageTitle';
import BestItems from '../components/BestItems';
import ItemsForSale from '../components/ItemsForSale';
import { useState, useEffect } from 'react';
import { getItems } from '../api/getItems';

import '../styles/ItemsPage.css';

export default function Items() {
  usePageTitle('판다마켓: 중고마켓');
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        if (data && data.list) {
          const wholeItems = data.list;
          setItems(wholeItems);
        } else {
          console.error('정보를 불러오는데 실패했습니다.');
        }
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchItems();
  }, []);

  interface Props {
    name: string;
    description: string;
    images: string;
    price: number;
    tags: string[];
    favoriteCount: number;
    id: number;
  }

  const getBestItems = () => {
    const sortedItems: Props[] = [...items];
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
