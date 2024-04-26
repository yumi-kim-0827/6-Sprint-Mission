import { useNavigate, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { useEffect, useState } from 'react';
import "./ProductDetailPage.css";
import ProductComments from './ProductComments';

function ProductDetailPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
      console.log('확인');
      console.log(product);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <div className='product-detail-page'>
      <h1>안녕하세용</h1>
      <ProductDetails product={product}/>
      <ProductComments product={product} />
      <button onClick={() => navigate('/items')}>목록으로 돌아가기</button>
    </div>
  );
}

export default ProductDetailPage;