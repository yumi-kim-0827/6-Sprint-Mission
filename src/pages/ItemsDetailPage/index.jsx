import React from 'react';
import TopNavigation from 'components/TopNavigation';
import ProductDetail from './components/ProductDetail';
import InquiryComment from './components/InquiryComment';
import { useParams } from 'react-router-dom';

const ItemsDetailPage = () => {
  const { productId } = useParams();

  return (
    <>
      <TopNavigation />
      <main>
        <ProductDetail productId={productId} />
        <InquiryComment productId={productId} />
      </main>
    </>
  );
};

export default ItemsDetailPage;
