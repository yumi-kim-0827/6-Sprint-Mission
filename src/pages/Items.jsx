import usePageTitle from '../hooks/usePageTitle';
import BestItems from '../components/BestItems';
import ItemsForSale from '../components/ItemsForSale';
import '../styles/ItemsPage.css';
import { useContext } from 'react';
import { ItemStateContext } from '../App';

export default function Items() {
  usePageTitle('판다마켓: 중고마켓');
  const data = useContext(ItemStateContext);
  const items = Array.isArray(data) ? data : [];

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
