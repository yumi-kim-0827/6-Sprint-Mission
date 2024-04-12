import { Link } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa6';
import { useState, useMemo, useEffect } from 'react';
import { styled } from 'styled-components';
import ProductList from './ProductList';
import { getProducts } from '../api';
import styles from '../styles/Button.module.css';

const ListHead = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    grid-column: 1/2;
  }
`;

const SearchBox = styled.div`
  background-color: var(--gray100);
  border-radius: 12px;
  padding: 9px 18px;
  grid-column: 3/5;
`;

const Input = styled.input`
  outline: none;
  border: 0px;
  background-color: transparent;
  color: var(--gray400);
  min-width: 175px;
`;

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
    <>
      <ListHead>
        <h2>전체 상품</h2>
        <SearchBox>
          <FaSistrix />
          <Input placeholder="검색할 상품을 입력해주세요" />
        </SearchBox>
        <Link to="/additem" className={`${styles[`btn-primary`]} ${styles.roundedSm}`}>
          상품 등록하기
        </Link>
        <div>
          <button onClick={handleNewstClick}>최신순</button>
          <button onClick={handleBestClick}>좋아요순</button>
        </div>
      </ListHead>
      <ProductList items={sortedItems} />
    </>
  );
}

export default Items;
