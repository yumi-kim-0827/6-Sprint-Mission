import React, { useState } from "react";
import EmptyComment from "../../../assets/img_inquiry_empty.svg";
import kebabIcon from "../../../assets/ic_kebab.svg";

import "./CommentSection.css";

function formatRelativeDate(dateString) {
  const date = new Date(dateString);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "오늘";
  } else if (diffDays === 1) {
    return "어제";
  } else {
    return `${diffDays}일 전`;
  }
}

function CommentSection({ comments }) {
  const [commentText, setCommentText] = useState("");

  return (
    <section className="commentSection">
      <p className="comment__title">문의하기</p>
      <form className="commentInput">
        <textarea
          className="commentInput__textarea"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          className="commentInput__Button"
          type="submit"
          disabled={!commentText.trim()}
        >
          등록
        </button>
      </form>
      <div className="commentContainer">
        {comments.length === 0 ? (
          <div className="comment--empty">
            <img
              className="comment--empty-Image"
              src={EmptyComment}
              alt="EmptyComment"
            />
            <p className="comment--empty-message">아직 문의가 없습니다.</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div className="comment" key={comment.id}>
              <button className="comment__kebab">
                <img src={kebabIcon} alt="kebabIcon" />
              </button>
              <div>
                <p className="comment__content">{comment.content}</p>
              </div>
              <div className="commentInfo">
                <img className="commentInfo__img" src={comment.writer.image} />
                <div className="commentInfoItems">
                  <p className="commentInfo__nickname">
                    {comment.writer.nickname}
                  </p>
                  <p className="commentInfo__updateAt">
                    {formatRelativeDate(comment.updatedAt)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default CommentSection;
