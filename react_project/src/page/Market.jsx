import React, { useEffect, useState } from 'react'
import BestProduct from '../components/BestProduct'
import AllProducts from '../components/AllProducts'
import { getProducts } from '../data/api';


export default function Market() {
  const [order, setOrder] = useState('createdAt');
  const [products, setProducts] = useState([]);
  const sortedProducts = products.sort((a, b) => b[order] - a[order]);

  const handleNewstClick = () => setOrder('createdAt');
  const handleFavoriteClick = () => setOrder('favorite');
  const handleLoad = async () => {
  const { list } = await getProducts();
    setProducts(list);
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <BestProduct products={sortedProducts} order='favorite' />
      <AllProducts products={sortedProducts} onClick={[handleNewstClick, handleFavoriteClick]} />
    </>
  )
}
