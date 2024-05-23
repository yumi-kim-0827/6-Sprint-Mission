import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";
import CommentSection from "./components/CommentSection";
import { getProductInfo, getComments } from "../../api/Api";
import backIcon from "../../assets/ic_back.png";
import "./CommunityFeedPage.css";

interface Comment {
  id: number;
  content: string;
  updatedAt: number;
  writer: {
    image: string;
    nickname: string;
  };
}

interface Product {
  images: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  favoriteCount: number;
}

function useProductData(productID: number) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    setisLoading(true);
    setError(null);

    getProductInfo(productID)
      .then((data) => {
        setProduct(data);
        setisLoading(false);
      })
      .catch((error) => {
        setError({ message: error.message || "Unknown error" });
        setisLoading(false);
      });
  }, [productID]);
  return { product, isLoading, error };
}

function useCommentData(productID: number) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    setisLoading(true);
    setError(null);

    getComments(productID)
      .then((data) => {
        setComments(data);
        setisLoading(false);
      })
      .catch((error) => {
        setError({ message: error.message || "Unknown error" });
        setisLoading(false);
      });
  }, [productID]);

  return { comments, isLoading, error };
}

function CommunityFeedPage() {
  const { productID } = useParams<{ productID: string }>();

  const {
    product,
    isLoading: productLoading,
    error: productError,
  } = useProductData(Number(productID));
  const {
    comments,
    isLoading: commentLoading,
    error: commentError,
  } = useCommentData(Number(productID));

  if (productLoading || commentLoading) {
    return <div>Loading...</div>;
  }

  if (productError || commentError) {
    return <div>Error: {productError?.message || commentError?.message}</div>;
  }

  return (
    <section className="CommunitySection">
      <div className="CommunitySection-wrapper">
        {product && <ProductInfo product={product} />}
        <CommentSection comments={comments} />
        <Link to="/items" className="CommunitySection__link">
          <p>목록으로 돌아가기</p>
          <img src={backIcon} alt="backIcon" />
        </Link>
      </div>
    </section>
  );
}

export default CommunityFeedPage;
