import { useState, useMemo, useEffect } from 'react';
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

  // 서버에서 정렬한 데이터 불러오기
  const handleLoad = async (orderQuery) => {
    const products = await getProducts(orderQuery);
    setItems(products.list);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewstClick}>최신순</button>
        <button onClick={handleBestClick}>좋아요순</button>
      </div>
      <ProductList items={sortedItems} />
    </div>
  );
}

export default Items;
