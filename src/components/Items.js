import { useState, useMemo } from 'react';
import ProductList from './ProductList';
import { getProducts } from '../api';

function Items() {
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState([]);
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => b[order] - a[order]);
  }, [items, order]);

  // 최신순, 좋아요순 클릭 핸들러
  const handleNewstClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('favoriteCount');

  // 데이터 불러오기 클릭 핸들러
  const handleLoadClick = async () => {
    const products = await getProducts();
    setItems(products.list);
  };

  return (
    <div>
      <div>
        <button onClick={handleNewstClick}>최신순</button>
        <button onClick={handleBestClick}>좋아요순</button>
      </div>
      <ProductList items={sortedItems} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default Items;
