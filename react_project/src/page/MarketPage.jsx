import React from 'react';
import BestProducts from '../components/BestProducts';
import AllProducts from '../components/AllProducts';
import styles from '../styles/MarketPage.module.css';

function MarketPage() {
  return (
    <div className={styles.marketPage_wrap}>
      <BestProducts />
      <AllProducts />
    </div>
  )
}

export default MarketPage