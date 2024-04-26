import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../api/itemApi';
import InputItem from '../../components/UI/InputItem';
import ProductComments from './components/ProductComments';
import { Button } from '../../styles/CommonStyles';
import './ProductPage.css';
import { ReactComponent as HeartIcon } from '../../assets/images/icons/ic_heart.svg';

function ProductPage() {
  const { productId } = useParams(); // Get productId from URL params
  const [product, setProduct] = useState(null);
  const [inquiry, setInquiry] = useState('');

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

  // form 제출 버튼 활성화 조건: input에 값이 입력되어야 함
  const isSubmitDisabled = !inquiry;

  return (
    <div className="wrapper">
      <div className="productDetailWrap">
        <div className="productImageBox">
          <img src={product.images[0]} alt={product.name} className="productImage" />
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
      <form>
        <label htmlFor="inqury">문의하기</label>
        <InputItem
          id="inqury"
          label="상품 소개"
          onChange={(e) => setInquiry(e.target.value)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 헤손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          isTextArea
        />
        <Button type="submit" disabled={isSubmitDisabled}>
          등록
        </Button>
      </form>
      <div>
        <ProductComments />
      </div>
    </div>
  );
}

export default ProductPage;
