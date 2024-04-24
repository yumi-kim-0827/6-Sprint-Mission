import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";
import { getProductInfo } from "../../api/Api";

function useProductData(productID) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductInfo(productID)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [productID]);

  return { product, loading, error };
}

function CommunityFeedPage() {
  const { productID } = useParams();
  const {
    product,
    loading: productLoading,
    error: productError,
  } = useProductData(productID);

  if (productLoading) {
    return <div>Loading...</div>;
  }

  if (productError) {
    return <div>Error: {productError.message}</div>;
  }

  return (
    <section>
      {product && <ProductInfo product={product} />}
      <button>목록으로 돌아가기</button>
    </section>
  );
}

export default CommunityFeedPage;
