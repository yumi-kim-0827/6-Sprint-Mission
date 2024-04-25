import React from 'react';
import Header from './Home/Header';
import BestProduct from './Home/BestProduct';
import Product from './Home/Product';

const Home = () => {
  return (
    <div>
      <Header/>
      <BestProduct/>
      <Product/>
    </div>
  );
};

export default Home;