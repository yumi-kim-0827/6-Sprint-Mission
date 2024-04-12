import React from 'react';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/productApi';
import ProductItem from '../ProductItem';
import Button from '../Button';
import './style.css';
import { Link } from 'react-router-dom';

const AllProductList = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [pageSize, setPageSize] = useState(10);

  const handleAllProductLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProduct(list);
  };

  const handleClickOrder = (orderType) => setOrderBy(orderType);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setPageSize(4);
    } else if (window.innerWidth <= 1199) {
      setPageSize(6);
    } else {
      setPageSize(10);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleAllProductLoad({ pageSize, orderBy });
  }, [pageSize, orderBy]);

  return (
    <section>
      <div className="top-container">
        <h3>전체 상품</h3>
        <div className="product-control">
          <input />
          <Link to="/addItem">
            <Button title="상품 등록하기" />
          </Link>
          <div>
            <button onClick={() => handleClickOrder('recent')}>최신순</button>
            <button onClick={() => handleClickOrder('favorite')}>
              좋아요순
            </button>
          </div>
        </div>
      </div>
      <ul className="all-container" l>
        {allProduct.map((item) => {
          return (
            <li key={item.id} className="all-item">
              <ProductItem item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AllProductList;
