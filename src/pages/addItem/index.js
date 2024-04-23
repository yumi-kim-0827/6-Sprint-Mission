import React from 'react';
import TopNavigation from 'components/TopNavigation';
import ProductRegister from 'components/ProductRegister';
import ProductImage from 'components/ProductImage';
import './style.css';

const AddItem = () => {
  return (
    <>
      <TopNavigation />
      <main>
        <ProductRegister />
        <ProductImage />
      </main>
    </>
  );
};

export default AddItem;
