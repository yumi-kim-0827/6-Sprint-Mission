import React from 'react';
import { useEffect, useState } from 'react';
import { getProducts } from 'api/productApi';
import ProductItem from 'components/ProductItem';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import ProductControl from './ProductControl';
import { MOBILE_SIZE, TABLET_SIZE } from 'constants/windowSize';
import { ALL } from 'constants/productItems';
import './style.css';

const AllProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loadingError, setLoadingError] = useState(null);

  const handleAllProductLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      result = await getProducts(options);

      const { list, totalCount } = result;

      setTotal(totalCount);
      setAllProduct(list);
    } catch (error) {
      setLoadingError(error);
      return;
    }
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
      if (window.innerWidth < MOBILE_SIZE) {
        setPageSize(ALL.MOBILE_CNT);
      } else if (window.innerWidth < TABLET_SIZE) {
        setPageSize(ALL.TABLET_CNT);
      } else {
        setPageSize(ALL.DEFAULT_CNT);
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
        <ProductControl
          search={search}
          setSearch={setSearch}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          pageSize={pageSize}
        />
      </div>
      {loadingError?.message && <span>{loadingError.message}</span>}
      <Grid container spacing={2}>
        {allProduct.map((item) => (
          <Grid item xs={6} sm={4} md={2.4} key={item.id}>
            <ProductItem item={item} />
          </Grid>
        ))}
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
