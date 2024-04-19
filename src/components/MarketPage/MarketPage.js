import React, { useState, useEffect } from 'react';
import BestProducts from './BestProducts';
import AllProducts from './AllProducts';
import "./MarketPage.css";


function MarketPage() {
  const [products, setProducts] = useState({ list: [], totalCount: 0 });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://panda-market-api.vercel.app/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="items-page">
      <BestProducts products={products} />
      <AllProducts products={products}  />
    </div>
  );
}

export default MarketPage;
