import { Link } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa6';
import { useState, useMemo, useEffect } from 'react';
import { styled } from 'styled-components';
import { FaCaretDown } from 'react-icons/fa6';
import ProductList from './ProductList';
import { getProducts } from '../api';
import styles from '../styles/Button.module.css';

const BestListBox = styled.div`
  margin-bottom: 40px;
`;
const AllListHead = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    grid-column: 1/3;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(5, 1fr);

    h2 {
      grid-column: 1;
    }
  }
`;

const SearchBox = styled.div`
  background-color: var(--gray100);
  border-radius: 12px;
  padding: 9px 18px;
  grid-column: 4/6;

  @media (max-width: 767px) {
    grid-column: 2/4;
  }
`;

const Input = styled.input`
  outline: none;
  border: 0px;
  background-color: transparent;
  color: var(--gray400);
  min-width: 175px;
`;

const SelectWrapper = styled.div`
  position: relative;
  border: 1px solid var(--gray200);
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
`;

const SelectButton = styled.button`
  background-color: transparent;
  border: 0px;
  width: 100%;
  cursor: pointer;
  padding: 12px 24px;
  font-size: 1rem;
  line-height: 1;
  display: flex;
  justify-content: space-between;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  background-color: #fff;
  border: 1px solid var(--gray200);
  border-radius: 8px;
  width: 100%;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid var(--gray200);
  &:last-child {
    border-bottom: 0px;
  }
`;

function Items() {
  const [order, setOrder] = useState('recent');
  const [items, setItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('createdAt');
  const [searchTerm, setSearchTerm] = useState('');

  // const sortedItems = useMemo(() => {
  //   return [...items].sort((a, b) => b[order] - a[order]);
  // }, [items, order]);

  const sortedItems = useMemo(() => {
    let filteredItems = items.filter((item) => {
      // 필터링을 위해 상품명을 소문자로 변환하여 검색어와 비교합니다.
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // 필터된 상품들을 정렬합니다.
    return filteredItems.sort((a, b) => b[order] - a[order]);
  }, [items, order, searchTerm]);

  // 서버에서 정렬한 데이터 불러오기
  const handleLoad = async (orderQuery) => {
    const products = await getProducts(orderQuery);
    setItems(products.list);
  };

  // 좋아요순으로 데이터 불러오기
  const handleLoadFavorites = async () => {
    const favoriteProducts = await getProducts('favorite');
    setFavoriteItems(favoriteProducts.list.slice(0, 4));
  };

  useEffect(() => {
    handleLoad(order);
    handleLoadFavorites();
  }, [order]);

  const handleSortChange = (option) => {
    setOrder(option);
    // setSelectedOption(option);
  };

  return (
    <>
      <BestListBox>
        <h2>베스트 상품</h2>
        <ProductList items={favoriteItems} className="bestProductList" />
      </BestListBox>
      <AllListHead>
        <h2>전체 상품</h2>
        <SearchBox>
          <FaSistrix />
          {/* <Input placeholder="검색할 상품을 입력해주세요" /> */}
          <Input
            placeholder="검색할 상품을 입력해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>
        <Link to="/additem" className={`${styles[`btn-primary`]} ${styles.roundedSm}`}>
          상품 등록하기
        </Link>
        <SelectWrapper>
          <SelectButton onClick={() => setDropdownOpen(!dropdownOpen)}>
            {order === 'createdAt' ? '최신순' : '좋아요순'} <FaCaretDown />
          </SelectButton>
          {dropdownOpen && (
            <DropdownMenu>
              <DropdownItem onClick={() => handleSortChange('recent')}>최신순</DropdownItem>
              <DropdownItem onClick={() => handleSortChange('favorite')}>좋아요순</DropdownItem>
            </DropdownMenu>
          )}
        </SelectWrapper>
      </AllListHead>
      <ProductList items={sortedItems} />
    </>
  );
}

export default Items;
