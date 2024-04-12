import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from 'api/productApi';
import ProductItem from 'components/ProductItem';
import Button from 'components/Button';
import Search from 'assets/icons/Search.svg';
import DropDown from 'components/Dropdown';
import ArrowDown from 'assets/icons/ArrowDown.svg';
import Sort from 'assets/icons/Sort.svg';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import './style.css';

const AllProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const handleAllProductLoad = async (options) => {
    const { list, totalCount } = await getProducts(options);
    setTotal(totalCount);
    setAllProduct(list);
  };

  const handleClickOrder = (orderType) => setOrderBy(orderType);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePagination = (_, value) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setPage(value);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setPageSize(4);
      } else if (window.innerWidth < 900) {
        setPageSize(6);
      } else {
        setPageSize(10);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleAllProductLoad({ page, pageSize, orderBy });
  }, [page, pageSize, orderBy]);

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
          <div className="order-container">
            <DropDown
              triggerComponent={
                <div className="dropdown-container">
                  {pageSize === 4 ? (
                    <button className="dropdown-simple-icon">
                      <img alt="드롭다운 아이콘" src={Sort} />
                    </button>
                  ) : (
                    <>
                      <button className="dropdown-trigger">
                        {orderBy === 'recent' ? '최신순' : '좋아요순'}
                      </button>
                      <img
                        alt="드롭다운 아이콘"
                        src={ArrowDown}
                        className="dropdown-icon"
                      />
                    </>
                  )}
                </div>
              }
              options={[
                {
                  label: '최신순',
                  onClick: () => handleClickOrder('recent'),
                },
                {
                  label: '좋아요순',
                  onClick: () => handleClickOrder('favorite'),
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Grid container spacing={2}>
        {allProduct.map((item) => {
          return (
            <Grid item xs={6} sm={4} md={2.4} key={item.id}>
              <ProductItem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <div className="pagination">
        <Pagination
          count={Math.ceil(total / pageSize)}
          page={page}
          onChange={handlePagination}
          color="primary"
        />
      </div>
    </section>
  );
};

export default AllProductList;
