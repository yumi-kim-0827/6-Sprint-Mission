import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "@/api";
import useAsync from "@/hooks/useAsync";
import styles from "./styles.module.scss";

import { elapsedTime } from "@/utils/time";

import moreButtonImg from "../assets/images/itemDetailsPage/more-button.svg";
import ReturnButtonImg from "../assets/images/itemDetailsPage/return-button.svg";
import NoCommentImg from "../assets/images/itemDetailsPage/no-comment.svg";

type Writer = {
  image: string;
  nickname: string;
};

type Comment = {
  id: number;
  writer: Writer;
  content: string;
  updatedAt: Date;
};

const INITIAL_VALUES = {
  createdAt: "",
  favoriteCount: 0,
  ownerId: 0,
  images: [],
  tags: [],
  price: 0,
  description: "",
  name: "",
  id: 0,
  isFavorite: false,
};

function ItemDetailPage() {
  let { productId } = useParams();
  const [loading, error, onGetProductIdAsync] = useAsync(getProductById);
  const [item, setItem] = useState(INITIAL_VALUES);
  const [comments, setComments] = useState<Comment[]>([]);
  const [like, setLike] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [btnActive, setBtnActive] = useState(false);

  const tRef = useRef<HTMLTextAreaElement>(null);

  const handleLoad = useCallback(async (productId: string | undefined) => {
    const result = await onGetProductIdAsync(productId);
    if (!result) return;

    const [itemDetail, itemComments] = result;
    const { list } = itemComments;

    setItem({ ...itemDetail });
    setComments(list);
  }, []);

  const handleLike = () => {
    setLike(!like);
    const favoriteCount = like
      ? item.favoriteCount + 1
      : item.favoriteCount - 1;
    setItem((prevItem) => {
      return { ...prevItem, favoriteCount };
    });
  };

  const handleComment = () => {
    if (tRef.current?.value === "") {
      setBtnActive(false);
    } else {
      setBtnActive(true);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleLoad(productId);
    window.addEventListener("resize", handleResize);
  }, [productId]);

  return (
    <div className={styles.PageContainer}>
      <div className={styles.HeaderContainer}>
        <div className={styles.itemDetailImage}>
          <img src={item.images[0]} alt={item.name}></img>
        </div>
        <div className={styles.itemDetailContent}>
          <div
            className={`${styles.itemDetailContentElement} ${styles.itemDetailHeader}`}
          >
            <div className={styles.itemDetailTitle}>
              <h2 className={styles.itemDetailTitleContent}>{item.name}</h2>
              <img src={moreButtonImg} alt="더 보기" />
            </div>
            <p className={styles.itemDetailPrice}>
              {item.price.toLocaleString("ko-KR")}원
            </p>
          </div>
          <div className={styles.itemDetailContentElement}>
            <h2 className={styles.itemDetailLabel}>상품 소개</h2>
            <p className={styles.itemDetailDescription}>{item.description}</p>
          </div>
          <div className={styles.itemDetailContentElement}>
            <h2 className={styles.itemDetailLabel}>상품 태그</h2>
            <ul className={styles.itemDetailTagList}>
              {item.tags.map((tag, index) => {
                return (
                  <li key={index} className={styles.itemDetailTag}>
                    #{tag}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`${styles.itemDetailContentElement} ${styles.itemDetailLikeElement}`}
          >
            <button className={styles.LikeCountButton} onClick={handleLike}>
              {like ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.12025 18.1482C6.1133 18.1421 6.1065 18.1361 6.09984 18.1302V18.0272L5.83623 17.7636C4.39552 16.3229 3.5665 14.4149 3.5665 12.4V12.1474C3.69211 8.24257 7.02101 5.03333 10.9332 5.03333C11.5506 5.03333 12.3377 5.24515 13.1065 5.65909C13.8429 6.0556 14.4984 6.60339 14.9351 7.22713C15.4083 8.27379 16.9116 8.25737 17.3525 7.17788C17.7207 6.52332 18.3603 5.95126 19.1049 5.53603C19.873 5.10766 20.656 4.9 21.1998 4.9C25.2271 4.9 28.4406 8.09104 28.5665 12.1469V12.4C28.5665 14.563 27.7281 16.4504 26.325 17.7366L26.0332 18.0041V18.0985C26.0191 18.1104 26.0047 18.1225 25.99 18.1349C25.782 18.3102 25.4997 18.5534 25.1634 18.8459C24.49 19.4314 23.5879 20.225 22.6048 21.0915C22.2897 21.3692 21.9663 21.6543 21.6393 21.9427C19.9255 23.454 18.1132 25.0522 16.885 26.113C16.4204 26.4957 15.7125 26.4957 15.2479 26.1129C13.783 24.8477 11.4555 22.8195 9.47542 21.089C8.48406 20.2226 7.58041 19.4314 6.91646 18.8486C6.5844 18.5571 6.31276 18.3182 6.12025 18.1482Z"
                    stroke="#6B7280"
                    stroke-width="1.8"
                  />
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.fillLikeButton}
                >
                  <path
                    d="M6.12025 18.1482C6.1133 18.1421 6.1065 18.1361 6.09984 18.1302V18.0272L5.83623 17.7636C4.39552 16.3229 3.5665 14.4149 3.5665 12.4V12.1474C3.69211 8.24257 7.02101 5.03333 10.9332 5.03333C11.5506 5.03333 12.3377 5.24515 13.1065 5.65909C13.8429 6.0556 14.4984 6.60339 14.9351 7.22713C15.4083 8.27379 16.9116 8.25737 17.3525 7.17788C17.7207 6.52332 18.3603 5.95126 19.1049 5.53603C19.873 5.10766 20.656 4.9 21.1998 4.9C25.2271 4.9 28.4406 8.09104 28.5665 12.1469V12.4C28.5665 14.563 27.7281 16.4504 26.325 17.7366L26.0332 18.0041V18.0985C26.0191 18.1104 26.0047 18.1225 25.99 18.1349C25.782 18.3102 25.4997 18.5534 25.1634 18.8459C24.49 19.4314 23.5879 20.225 22.6048 21.0915C22.2897 21.3692 21.9663 21.6543 21.6393 21.9427C19.9255 23.454 18.1132 25.0522 16.885 26.113C16.4204 26.4957 15.7125 26.4957 15.2479 26.1129C13.783 24.8477 11.4555 22.8195 9.47542 21.089C8.48406 20.2226 7.58041 19.4314 6.91646 18.8486C6.5844 18.5571 6.31276 18.3182 6.12025 18.1482Z"
                    stroke="#6B7280"
                    stroke-width="1.8"
                  />
                </svg>
              )}
              <span className={styles.LikeCount}>{item.favoriteCount}</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.BottomContainer}>
        <div className={styles.AskContainer}>
          <form className={styles.AskContainerForm}>
            <label className={styles.AskLabel}>문의하기</label>
            <textarea
              onChange={handleComment}
              className={styles.AskTextarea}
              ref={tRef}
              placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            <button
              className={
                btnActive
                  ? `${styles.AskSubmitbuttonActive}`
                  : `${styles.AskSubmitbutton}`
              }
            >
              등록
            </button>
          </form>
        </div>
        <div>
          {comments.length !== 0 ? (
            <ul>
              {comments.map((comment) => {
                return (
                  <li key={comment.id} className={styles.CommentContainer}>
                    <div className={styles.CommentBox}>
                      <p className={styles.CommentContent}>{comment.content}</p>
                      {windowWidth < 1200 ? (
                        <img src={moreButtonImg} alt="더 보기" />
                      ) : null}
                    </div>
                    <div className={styles.ProfileBox}>
                      <img
                        src={comment.writer.image}
                        alt={comment.writer.nickname}
                        className={styles.ProfileImage}
                      />
                      <div className={styles.profileNicknameBox}>
                        <p className={styles.profileNickname}>
                          {comment.writer.nickname}
                        </p>
                        <p className={styles.UploadDate}>
                          {elapsedTime(comment.updatedAt)}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className={styles.NoMoreCommentContainer}>
              <img
                src={NoCommentImg}
                className={styles.NoMoreCommentImage}
                alt="문의 없음"
              />
              <h2 className={styles.NoMoreCommentContent}>
                아직 문의가 없습니다.
              </h2>
            </div>
          )}
        </div>
        <div className={styles.ReturnItemButtonContainer}>
          <Link to="/items" className={styles.ReturnItemButton}>
            <span className={styles.ReturnItemButtonContent}>
              목록으로 돌아가기
            </span>
            <img
              className={styles.ReturnItemButtonImage}
              src={ReturnButtonImg}
              alt="아이템 페이지로 돌아가기"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;
