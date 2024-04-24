import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";
import CommentSection from "./components/CommentSection";
import { getProductInfo, getComments } from "../../api/Api";

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

function useCommentData(productID) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getComments(productID)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [productID]);

  return { comments, loading, error };
}

function CommunityFeedPage() {
  const { productID } = useParams();
  const {
    product,
    loading: productLoading,
    error: productError,
  } = useProductData(productID);

  const {
    comments,
    loading: commentLoading,
    error: commentError,
  } = useCommentData(productID);

  if (productLoading || commentLoading) {
    return <div>Loading...</div>;
  }

  if (productError || commentError) {
    return <div>Error: {productError || commentError.message}</div>;
  }

  return (
    <section>
      {product && <ProductInfo product={product} />}
      <CommentSection comments={comments} />
      <button>목록으로 돌아가기</button>
    </section>
  );
}

export default CommunityFeedPage;
