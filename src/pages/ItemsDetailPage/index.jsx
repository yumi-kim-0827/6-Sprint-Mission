import React from 'react';
import TopNavigation from 'components/TopNavigation';
import ProductDetail from './components/ProductDetail';

const ItemsDetailPage = () => {
  return (
    <>
      <TopNavigation />
      <main>
        <ProductDetail />
      </main>
    </>
  );
};

export default ItemsDetailPage;
