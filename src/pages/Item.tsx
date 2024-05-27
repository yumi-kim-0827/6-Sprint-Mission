// 이미지
import iconHeart from "../assets/images/items/ic_heart.svg";
import iconBack from "../assets/images/icon/ic_back.svg";
import iconKebab from "../assets/images/icon/ic_kebab.svg";
import emptyQuestion from "../assets/images/items/question-empty.svg";

// API
import { getComment, getProductId } from "../api/product.api";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import Comments from "../components/Items/Product/Comments";

import "./Item.css";

interface Products {
  price: number;
  images: string;
  name: string;
  description: string;
  favoriteCount: number;
  tags: string[];
}

interface Comment {
  id: string;
  content: string;
  updatedAt: string;
  writer: {
    image: string;
    nickname: string;
  };
}

const Item: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const [products, setProducts] = useState<Products | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [question, setQuestion] = useState(false);

  const handleValidQuestion = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setQuestion(!!value);
  };

  const handleLoad = async (itemId: string | undefined) => {
    if (itemId) {
      const item = await getProductId(itemId);
      const { list } = await getComment(itemId);

      setComments(list);
      setProducts(item);
    }
  };

  useEffect(() => {
    handleLoad(productId);
  }, [productId]);

  if (!products) return null;

  const price = products.price
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const isQuestionEmpty = !comments.length;

  return (
    <article className="item_container">
      {/* 상품 */}
      <section className="item_wrap">
        <img className="item_img" src={products.images} alt={products.name} />

        <div className="item_top">
          <span className="item_name">{products.name}</span>

          <button className="item_kebab_btn">
            <img className="item_kebab_img" src={iconKebab} alt="더보기" />
          </button>
        </div>

        <div className="item_price">{price}원</div>

        <div className="item_description_wrap">
          <span className="item_description_title">상품 소개</span>
          <span className="item_description">{products.description}</span>
        </div>

        <div className="item_tags_wrap">
          <span className="item_tags_title">상품 태그</span>
          <div className="item_tags">
            {products.tags.map((tag) => (
              <span key={tag} className="item_tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="item_heart">
          <button className="item_heart_btn">
            <img className="item_heart_icon" src={iconHeart} alt="icon_heart" />
            <span className="item_heart_count">{products.favoriteCount}</span>
          </button>
        </div>
      </section>

      {/* 질문 */}
      <section className="question_wrap">
        <form className="question_form">
          <label htmlFor="question_id" className="question_title">
            문의하기
          </label>
          <textarea
            id="question_id"
            className="question_input"
            onInput={handleValidQuestion}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />

          <div className="question_btn_wrap">
            <button className="question_btn" type="submit" disabled={!question}>
              등록
            </button>
          </div>
        </form>

        <div className="questions">
          {isQuestionEmpty ? (
            <div className="question_empty">
              <img
                className="question_empty_img"
                src={emptyQuestion}
                alt="문의가 없음"
              />
              <span className="question_empty_text">아직 문의가 없습니다.</span>
            </div>
          ) : (
            <Comments productId={productId} />
          )}
        </div>
      </section>

      <div className="item_back">
        <Link to="/Items" className="item_back_btn">
          목록으로 돌아가기
          <img className="item_back_img" src={iconBack} alt="돌아가기" />
        </Link>
      </div>
    </article>
  );
};

export default Item;
