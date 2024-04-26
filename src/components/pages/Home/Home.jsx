import React from 'react';
import Header from '../../context/Header';
import BestProduct from './BestProduct';
import Product from './Product';
const Home = () => {
  return (
    <>
    <Header/>
    <div>
      <BestProduct/>
      <Product/>
    </div> 
    </>
  );
};

export default Home;