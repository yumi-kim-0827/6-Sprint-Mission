import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../api/itemApi';
import { ReactComponent as HeartIcon } from '../../assets/images/icons/ic_heart.svg';

function ProductPage() {
  const { productId } = useParams(); // Get productId from URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProductDetails(productId);
      setProduct(data);
    }
    fetchData();
  }, [productId]); // Fetch data whenever productId changes

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="productImage">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="productDetails">
        <div>
          <h2>{product.name}</h2>
          <p className="itemPrice">{product.price.toLocaleString()}원</p>
        </div>
        <div>
          <h3>상품 소개</h3>
          <p>{product.description}</p>
        </div>
        <div>
          <h3>상품 태그</h3>
          {product.tags.map((tag) => (
            <span key={`tag-${tag}`}>{tag}</span>
          ))}
        </div>
        <div className="favoriteCount">
          <HeartIcon />
          {product.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
