import React from 'react';
import './style.css';
import RegisterButton from 'components/RegisterButton';

const ProductRegister = () => {
  return (
    <section>
      <div className='top-container'>
        <h1 className='product-register-title'>상품 등록하기</h1>
        <RegisterButton />
      </div>
    </section>
  );
};

export default ProductRegister;
