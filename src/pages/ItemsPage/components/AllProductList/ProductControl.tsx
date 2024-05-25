import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import SearchIcon from 'assets/icons/Search';
import DropDown from 'components/Dropdown';
import ArrowDownIcon from 'assets/icons/ArrowDown';
import SortIcon from 'assets/icons/Sort';
import './style.css';
import { OrderBy } from 'types/order';

interface ProductControlProps {
  search: string;
  setSearch: (value: string) => void;
  orderBy: OrderBy;
  setOrderBy: (value: OrderBy) => void;
  pageSize: number;
}

const ProductControl = ({
  search,
  setSearch,
  orderBy,
  setOrderBy,
  pageSize,
}: ProductControlProps) => {
  const navigate = useNavigate();

  const DROP_DOWN_OPTIONS = [
    {
      label: '최신순',
      onClick: () => handleClickOrder(OrderBy.최신순),
    },
    {
      label: '좋아요순',
      onClick: () => handleClickOrder(OrderBy.좋아요순),
    },
  ];

  const handleClickOrder = (orderType: OrderBy) => setOrderBy(orderType);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="product-control">
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input
          placeholder="검색할 상품을 입력해주세요"
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <Button title="상품 등록하기" onClick={() => navigate('/addItem')} />
      <div className="order-container">
        <DropDown
          triggerComponent={
            <div className="dropdown-container">
              {pageSize === 4 ? (
                <button className="dropdown-simple-icon">
                  <SortIcon />
                </button>
              ) : (
                <>
                  <button className="dropdown-trigger">
                    {orderBy === OrderBy.최신순 ? '최신순' : '좋아요순'}
                  </button>
                  <ArrowDownIcon className="dropdown-icon" />
                </>
              )}
            </div>
          }
          options={DROP_DOWN_OPTIONS}
        />
      </div>
    </div>
  );
};

export default ProductControl;
