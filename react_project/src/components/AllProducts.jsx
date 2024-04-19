import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/ic_search.svg';
import sortIcon from '../assets/ic_sort.svg'
import DropdownList from './DropdownList';
import ProductCard from './ProductCard';
import { getProducts } from '../data/api';
import Pagination from './Pagination';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) return 4;
  else if (width < 1280) return 6;
  else return 10;
}

function AllProducts() {
  // 데이터 받아오기
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [productList, setProductList] = useState([]);
  
  const fetchSortedData = async ({ orderBy, page, pageSize }) => {
    const products = await getProducts({ orderBy, page, pageSize });
    setProductList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  const handleSortSelect = (sortOption) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    fetchSortedData({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, page, pageSize]);

  // 정렬 기준
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // pagination
  const [totalPageNum, setTotalPageNum] = useState();

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <div>
        <h1>판매 중인 상품</h1>
        <Link to="/additem">상품 등록하기</Link>
      </div>
  
      <div>
        <div>
          <img src={searchIcon} alt="검색 아이콘" />
          <input type="text" placeholder='검색할 상품을 입력해 주세요' />
        </div>
        <div>
          <button onClick={toggleDropdown}>
            <img src={sortIcon} alt="정렬 버튼" />
          </button>
          {isDropdownVisible && (
            <DropdownList onSortSelect={handleSortSelect} />
          )}
        </div>
      </div>

      <div>
        {productList?.map((item) => (
          <ProductCard item={item} key={`merket_item_${item.id}`} />
        ))}
      </div>

      <div>
        <Pagination
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default AllProducts