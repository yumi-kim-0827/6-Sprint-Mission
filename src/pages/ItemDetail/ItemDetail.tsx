import ItemDetailStyles from "./ItemDetail.module.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getProductDetails from "../../api/getProductDetail";
import getProductDetailComments, {
  CommentsResponse,
} from "../../api/getProductDetailComments";
import kebabMenu from "../../assets/icon-kebab-menu.svg";
import likeIcon from "../../assets/icon-like.svg";
import backIcon from "../../assets/icon-back.svg";
import { CONTACT_DESCRIPTION } from "../../constants/contactDescription";
import { Product } from "../../types";

function getTimeAgo(dateString: string): string {
  const date: Date = new Date(dateString);
  const now: Date = new Date();
  const diffInSeconds: number = Math.floor(
    (now.getTime() - date.getTime()) / 1000
  );

  // 계산된 시간을 기준으로 적절한 포맷으로 반환
  if (diffInSeconds < 60) {
    return `${diffInSeconds}초 전`;
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)}분 전`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)}시간 전`;
  } else if (diffInSeconds < 2592000) {
    return `${Math.floor(diffInSeconds / 86400)}일 전`;
  } else if (diffInSeconds < 31536000) {
    return `${Math.floor(diffInSeconds / 2592000)}개월 전`;
  } else {
    return `${Math.floor(diffInSeconds / 31536000)}년 전`;
  }
}

function formatPrice(price: number) {
  return `${price.toLocaleString("ko-KR")}원`;
}

interface Writer {
  id: number;
  nickname: string;
  image: string;
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

const ItemDetail: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const pathId = useLocation().pathname.split("/").pop() || "";
  const [price, setPrice] = useState<string>();
  const navigate = useNavigate();
  const [isTextareaActive, setTextareaActive] = useState(false);

  const handleChange = (e: any) => {
    const { value } = e.target;
    if (value) {
      setTextareaActive(!!value);
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getProductDetails(pathId);
        setProduct(data);
        const commentsData = await getProductDetailComments({ id: pathId });
        if (commentsData?.list) {
          setComments(commentsData.list);
        }
        setPrice(formatPrice(data.price));
      } catch (error) {
        console.error(error);
        alert("데이터를 로드하지 못했습니다. 다시 시도하세요.");
      } finally {
        setLoading(false);
      }
    })();
  }, [pathId]);

  return (
    <div className={ItemDetailStyles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={ItemDetailStyles.productContainer}>
          <div className={ItemDetailStyles.imgBox}>
            <img src={product?.images} alt={product?.name} />
          </div>
          <div className={ItemDetailStyles.titleBox}>
            <h2 className={ItemDetailStyles.title}>{product?.name}</h2>
            <img src={kebabMenu} alt="더보기 옵션 아이콘" />
          </div>
          <span className={ItemDetailStyles.price}>{price}</span>
          <div className={ItemDetailStyles.divider}></div>
          <div className={ItemDetailStyles.descriptionBox}>
            <span className={ItemDetailStyles.descriptionTitle}>상품 소개</span>
            <p>{product?.description}</p>
          </div>
          <div className={ItemDetailStyles.tagContainer}>
            <span>상품 태그</span>
            <div className={ItemDetailStyles.tagBox}>
              {product?.tags.map(tag => (
                <div className={ItemDetailStyles.tag} key={tag}>
                  #{tag}
                </div>
              ))}
            </div>
          </div>
          <div className={ItemDetailStyles.likeBox}>
            <img src={likeIcon} alt="좋아요 아이콘" />
            <span>{product?.favoriteCount}</span>
          </div>
          <div className={ItemDetailStyles.divider}></div>
        </div>
      )}
      <div className={ItemDetailStyles.commentsContainer}>
        <div className={ItemDetailStyles.contactContainer}>
          <span>문의하기</span>
          <textarea
            className={ItemDetailStyles.contactBox}
            placeholder={CONTACT_DESCRIPTION}
            onChange={handleChange}
          />
          <div className={ItemDetailStyles.buttonBox}>
            <button
              className={`${ItemDetailStyles.btn} ${
                isTextareaActive && ItemDetailStyles.active
              }`}
            >
              등록
            </button>
          </div>
        </div>
        {comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment.id}>
              <div className={ItemDetailStyles.contentBox}>
                <p>{comment.content}</p>
                <img src={kebabMenu} alt="더보기 옵션 아이콘" />
              </div>
              <div className={ItemDetailStyles.writerBox}>
                <img
                  className={ItemDetailStyles.userAvatar}
                  src={comment.writer.image}
                  alt="유저 아바타 아이콘"
                />
                <div className={ItemDetailStyles.writerBoxInfo}>
                  <span className={ItemDetailStyles.nickname}>
                    {comment.writer.nickname}
                  </span>
                  <span className={ItemDetailStyles.timeAgo}>
                    {getTimeAgo(comment.updatedAt)}
                  </span>
                </div>
              </div>
              <div className={ItemDetailStyles.divider}></div>
            </div>
          ))
        ) : (
          <p>댓글이 없습니다.</p>
        )}
      </div>
      <button
        className={`${ItemDetailStyles.backToListBtn} ${ItemDetailStyles.btn}`}
        onClick={() => navigate(-1)}
      >
        목록으로 돌아가기
        <img src={backIcon} alt="뒤로 돌아가기 아이콘" />
      </button>
    </div>
  );
};

export default ItemDetail;
