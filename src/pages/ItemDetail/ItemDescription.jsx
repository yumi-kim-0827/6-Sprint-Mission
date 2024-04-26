import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../itemApi";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import "./ItemDetail.css";

const ItemDescription = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {product ? (
        <div className="product">
          <div className="product-wrapper">
            <div className="product-image">
              <img src={product.images} alt="ProductImg" />
            </div>
            <div className="product-detail-wrapper">
              <div className="product-detail">
                <h1>{product.name}</h1>
                <p>{Number(product.price).toLocaleString()}원</p>
              </div>
              <hr />
              <div className="product-description">
                <h3>상품 소개</h3>
                <p>{product.description}</p>
              </div>
              <div className="product-tag">
                <h3>상품 태그</h3>
                <div className="product-tag-wrapper">
                  {product.tags?.map((tag) => (
                    <p className="product-tag-detail" key={`${product.id}`}>
                      #{tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className="product-favoriteCount">
                <p>
                  <HeartIcon /> {product.favoriteCount}
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDescription;
