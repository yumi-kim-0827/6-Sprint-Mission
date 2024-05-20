import React, { useRef, useState, useEffect } from "react";
import noninquiry from "../assets/no-inquiry.png";
import "./HandleComment.css";
import { commentValidation } from "./common/validation";
import hamburger from "../assets/hamburger-icon.png";

const HandleComment = ({ comments }) => {
  const [comment, setComment] = useState("");
  const buttonRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setComment(value);
  };

  const handleTimeAgo = (time) => {
    const currentTime = new Date().getTime();
    const agoTime = Math.floor((currentTime - new Date(time).getTime()) / (1000 * 60 * 60));
    const agoDay = Math.floor(agoTime / 24);
    const agoYear = Math.floor(agoDay / 365);
    if (agoTime < 24) {
      return `${agoTime}시간 전`;
    } else if (agoTime >= 24) {
      return `${agoDay}일 전`;
    } else if (agoDay >= 365) {
      return `${agoYear}년 전`;
    }
  };

  useEffect(() => {
    const isValidComment = commentValidation(comment);
    buttonRef.current.disabled = isValidComment;
    buttonRef.current.classList.toggle("active", !isValidComment);
  }, [comment]);

  return (
    <div className="wrapper">
      <div className="inquire-container">
        <label htmlFor="inquire-area">문의하기</label>
        <textarea
          onChange={handleChange}
          className="inquire-container__inquire-area"
          name="inquire-area"
          id="inquire-area"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></textarea>
        <button ref={buttonRef} disabled className="inquire-container__register-btn">
          등록
        </button>
      </div>
      <div className="comment-container">
        {comments.length === 0 ? (
          <div className="non-comment-container">
            <img src={noninquiry} alt="댓글이 없는 경우 출력 이미지" />
            <p>아직 문의가 없습니다.</p>
          </div>
        ) : (
          comments.map((comment) => {
            return (
              <div className="comment" key={comment.id}>
                <div className="comment-top">
                  <p className="comment-top__content">{comment.content}</p>
                  <img className="comment-top__img" src={hamburger} alt="제품 상세 페이지 댓글 수정 버튼" />
                </div>
                <div className="profile">
                  <img className="profile__img" src={comment.writer.image} alt="프로필 이미지" />
                  <div className="profile-info">
                    <span className="profile__id">{comment.writer.nickname}</span>
                    <span className="profile__time">{handleTimeAgo(comment.createdAt)}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HandleComment;
