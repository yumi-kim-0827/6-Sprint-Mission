import React from 'react';
import TopNavigation from 'components/TopNavigation';
import ProductDetail from './components/ProductDetail';
import InquiryComment from './components/InquiryComment';

const ItemsDetailPage = () => {
  return (
    <>
      <TopNavigation />
      <main>
        <ProductDetail />
        <InquiryComment />
      </main>
    </>
  );
};

export default ItemsDetailPage;
