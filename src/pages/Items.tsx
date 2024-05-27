import '../styles/ItemsPage.css';
import usePageTitle from '../hooks/usePageTitle';
import BestItems from '../components/BestItems';
import ItemsForSale from '../components/ItemsForSale';
import { useState, useEffect } from 'react';
import { getItems } from '../api/getItems';
import { Item, ItemProps } from 'types/ItemResponse';

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
