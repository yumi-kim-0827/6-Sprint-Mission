import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Back from 'assets/icons/Back.svg';
import './style.css';

const ProductComments = () => {
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
    <>
      <div className='product-comments'>
        <p>{product.content}</p>
        <div>
          <img src={product.image} alt='작성자 이미지' />
          <p>닉네임: {product.nickname}</p>
          <span>마지막 업데이트 시간: {product.updatedAt}</span>
        </div>
      </div>
      <div className='product-comments'>
        <p>{product.content}</p>
        <div>
          <img src={product.image} alt='작성자 이미지' />
          <p>닉네임: {product.nickname}</p>
          <span>마지막 업데이트 시간: {product.updatedAt}</span>
        </div>
      </div>
      <div className='product-comments'>
        <p>{product.content}</p>
        <div>
          <img src={product.image} alt='작성자 이미지' />
          <p>닉네임: {product.nickname}</p>
          <span>마지막 업데이트 시간: {product.updatedAt}</span>
        </div>
      </div>
      <button type='button' className='back-button'>
        목록으로 돌아가기
        <img src={Back} className='back-icon' />
      </button>
    </>
  );
};

export default ProductComments;
