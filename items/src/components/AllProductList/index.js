import React from 'react';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/productApi';

const AllProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');

  const handleAllProductLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProduct(list);
  };

  const handleClickOrder = (orderType) => setOrderBy(orderType);

  useEffect(() => {
    handleAllProductLoad({ orderBy });
  }, [orderBy]);

  return (
    <section>
      <div>
        <h3>전체 상품</h3>
        <button onClick={() => handleClickOrder('recent')}>최신순</button>
        <button onClick={() => handleClickOrder('favorite')}>좋아요순</button>
      </div>
      {/* 여기에 아이템  */}
      <ul>
        {allProduct.map((item) => {
          return (
            <li key={item.id}>
              <div>{item.name}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AllProductList;
