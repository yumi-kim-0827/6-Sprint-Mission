import React from "react";

function CommentSection({ comments }) {
  console.log(comments);
  return (
    <section>
      <p>문의하기</p>
      <div>
        <textarea />
        <button>댓글 등록</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>
              <p>{comment.content}</p>
            </div>
            <div>
              <img src={comment.writer.image} />
              <p>{comment.writer.nickname}</p>
              <p>{comment.updatedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommentSection;
