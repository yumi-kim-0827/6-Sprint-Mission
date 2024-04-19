import React, { useEffect, useState } from 'react'
import { getProducts } from '../data/api';
import ProductCard from './ProductCard';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) return 1;
  else if (width < 1280) return 2;
  else return 4;
};

function BestProducts() {
  const [productList, setProductList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const porducts = await getProducts({ orderBy, pageSize });
    setProductList(porducts.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    fetchSortedData({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pageSize]);

  return (
    <div>
      <h1>베스트 상품</h1>
      <div>
        {productList?.map((item) => (
          <ProductCard item={item} key={`bestItem_${item.id}`} />
        ))}
      </div>
    </div>
  )
}

export default BestProducts