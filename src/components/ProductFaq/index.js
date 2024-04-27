import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

const ProductFaq = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [buttonColor, setButtonColor] = useState('#CCCCCC');

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

  const handleChange = (event) => {
    setInputValue(event.target.value);

    if (event.target.value.trim() !== '') {
      setButtonColor('#3692FF'); //
    } else {
      setButtonColor('#CCCCCC'); //
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      console.log('입력된 내용:', inputValue);

      setInputValue('');

      setButtonColor('#CCCCCC');
    }
  };

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
    <div>
      <h3 className='product-faq-title'>문의하기</h3>
      <textarea
        className='product-faq'
        value={inputValue}
        onChange={handleChange}
        placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
      />
      <button
        type='button'
        className='product-button'
        style={{ backgroundColor: buttonColor }}
        onClick={handleSubmit}
      >
        등록
      </button>
    </div>
  );
};

export default ProductFaq;
