import React from 'react';
import TopNavigation from 'components/TopNavigation';
import ProductIntroduce from 'components/ProductIntroduce';
import './style.css';

const ProductDetailPage = () => {
  return (
    <>
      <TopNavigation />
      <main>
        <ProductIntroduce />
        {/* <ProductFaq />
        <ProductComments /> */}
      </main>
    </>
  );
};

export default ProductDetailPage;
