import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Heart from 'assets/icons/Heart.svg';

const ProductIntroduce = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://panda-market-api.vercel.app/products/${productId}`
        );
        if (!response.ok) {
          throw new Error('상품 정보를 불러오는데 실패했습니다.');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>상품을 불러오는 중입니다...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className='product-container'>
      <img src={product.images} className='product-image' />
      <section className='product-info'>
        <div className='product-description'>
          <h1 className='product-title'>{product.name} 팔아요</h1>
          <h2 className='product-price'>500,000원</h2>
        </div>
        <div className='product-detail-box'>
          <h3 className='product-detail'>상품 소개</h3>
          <p>{product.description}</p>
        </div>
        <div className='product-tag-box'>
          <h3 className='product-detail'>상품 태그</h3>
          <span className='product-tag'>#{product.tags}</span>
          <span className='product-tag'> #애플</span>
          <span className='product-tag'> #가성비</span>
        </div>
        <div className='product-like'>
          <img src={Heart} className='heart-icon' />
          <span className='like'>{product.favoriteCount}</span>
        </div>
      </section>
    </div>
  );
};

export default ProductIntroduce;
