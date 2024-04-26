import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../itemApi";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";

const ItemDescription = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const productData = await getProductById(productId);
    setProduct(productData);
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div className="Product">
          <div className="Product-wrapper">
            <div className="Product-image">
              <img src={product.images} alt="Product" />
            </div>
            <div className="Product-detail">
              <h2>{product.name}</h2>
              <p>{Number(product.price).toLocaleString()}원</p>
            </div>
            <div className="Product-description">
              <h3>상품 소개</h3>
              <p>{product.description}</p>
            </div>
            <div className="Product-tag">
              <h3>상품 태그</h3>
              <p>
                {product.tags?.map((tag) => (
                  <p key={`${product.id}`}>#{tag}</p>
                ))}
              </p>
            </div>
            <div className="Product-favoriteCount">
              <p>
                <HeartIcon /> {product.favoriteCount}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDescription;
