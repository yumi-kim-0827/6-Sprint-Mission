import React from 'react';
import { getProducts } from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductItem from 'components/ProductItem';
import Grid from '@mui/material/Grid';
import './style.css';

const BestProductList = () => {
  const [originProduct, setOriginProduct] = useState([]);
  const [bestProduct, setBestProduct] = useState([]);
  const [loadingError, setLoadingError] = useState(null);

  const handleBestItemLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      result = await getProducts({ orderBy: 'favorite' });
    } catch (error) {
      setLoadingError(error);
      return;
    }
    const { list } = result;

    setOriginProduct(list);
    setBestProduct(list.slice(0, 4));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setBestProduct(originProduct.slice(0, 1));
      } else if (window.innerWidth < 900) {
        setBestProduct(originProduct.slice(0, 2));
      } else {
        setBestProduct(originProduct.slice(0, 4));
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [originProduct]);

  useEffect(() => {
    handleBestItemLoad();
  }, []);

  return (
    <section>
      <h3>베스트 상품</h3>
      {loadingError?.message && <span>{loadingError.message}</span>}
      <Grid container spacing={2}>
        {bestProduct.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <ProductItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default BestProductList;
