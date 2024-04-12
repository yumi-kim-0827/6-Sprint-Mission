import React from 'react';
import { getProducts } from '../../api/productApi';
import { useEffect, useState } from 'react';

const BestItemList = () => {
  const [bestItems, setBestItems] = useState([]);

  const handleBestItemLoad = async (options) => {
    const { list } = await getProducts({ orderBy: 'favorite' });
    const bestTop4 = list.slice(0, 4);
    setBestItems(bestTop4);
  };

  useEffect(() => {
    handleBestItemLoad();
  }, []);

  return (
    <section>
      <h3>베스트 상품</h3>
      {/* 여기에 아이템  */}
      <ul>
        {bestItems.map((item) => {
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

export default BestItemList;
