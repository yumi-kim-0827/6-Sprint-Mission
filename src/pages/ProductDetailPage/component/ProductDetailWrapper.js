import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../../api/api";
import heartIcon from "../../../assets/heart.svg";

function ProductDetailWrapper() {
  const [productDetail, setProductDetail] = useState({});

  const { productId } = useParams();
  const fetchData = async () => {
    const productDetail = await getProductDetail(productId);
    setProductDetail(productDetail);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-detail-wrapper">
      <img src={productDetail.images} alt={productDetail.name} />
      <div className="product-detail-information">
        <div className="product-name">{productDetail.name}</div>
        <div className="product-price">{Number(productDetail.price).toLocaleString('ko-KR')}원</div>
        <div className="product-introduce">상품 소개</div>
        <div className="product-description">{productDetail.description}</div>
        <div className="product-tags">상품 태그</div>
        <div className="product-tag">
          <ul>
            {productDetail.tags?.map((tag) => {
                return(
                  <li key={productDetail.id}>
                    #{tag}
                  </li>
                );
            })}
          </ul>
        </div>
        <div className="product-like-count">
          <img src={heartIcon} alt="좋아요아이콘" />
          {productDetail.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailWrapper;
