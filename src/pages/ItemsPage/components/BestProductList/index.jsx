import React from 'react';
import { getProducts } from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductItem from 'components/ProductItem';
import Grid from '@mui/material/Grid';
import { MOBILE_SIZE, TABLET_SIZE } from 'constants/windowSize';
import { BEST } from 'constants/productItems';
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

      const { list } = result;

      setOriginProduct(list);
      setBestProduct(list.slice(0, 4));
    } catch (error) {
      setLoadingError(error);
      return;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE_SIZE) {
        setBestProduct(originProduct.slice(0, BEST.MOBILE_CNT));
      } else if (window.innerWidth < TABLET_SIZE) {
        setBestProduct(originProduct.slice(0, BEST.TABLET_CNT));
      } else {
        setBestProduct(originProduct.slice(0, BEST.DEFAULT_CNT));
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
