import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../api/productApi';
import ProductItem from '../ProductItem';
import Button from '../Button';
import Search from '../../assets/icons/Search.svg';
import './style.css';

const AllProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');

  const handleAllProductLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProduct(list);
  };

  const handleClickOrder = (orderType) => setOrderBy(orderType);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setPageSize(4);
    } else if (window.innerWidth <= 1199) {
      setPageSize(6);
    } else {
      setPageSize(10);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleAllProductLoad({ pageSize, orderBy });
  }, [pageSize, orderBy]);

  return (
    <section>
      <div className="top-container">
        <h3>전체 상품</h3>
        <div className="product-control">
          <div className="search-container">
            <img src={Search} alt="검색 아이콘" className="search-icon" />
            <input
              placeholder="검색할 상품을 입력해주세요"
              value={search}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <Link to="/addItem">
            <Button title="상품 등록하기" />
          </Link>
          <div>
            <button onClick={() => handleClickOrder('recent')}>최신순</button>
            <button onClick={() => handleClickOrder('favorite')}>
              좋아요순
            </button>
          </div>
        </div>
      </div>
      <ul className="all-container" l>
        {allProduct.map((item) => {
          return (
            <li key={item.id} className="all-item">
              <ProductItem item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AllProductList;
