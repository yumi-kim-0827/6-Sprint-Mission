import emptyCommentImage from "../../../assets/comment_empty.png";
import Comment from "../Comment";
import styles from "./styles.module.css";

function CommentsPresenter({ comments }) {
  return (
    <div className={styles.layout}>
      {comments.length !== 0 ? (
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))
      ) : (
        <div className={styles.empty}>
          <img
            className={styles.emptyImage}
            src={emptyCommentImage}
            alt="문의가 없습니다."
          />
          <div className={styles.emptyInfo}>아직 문의가 없습니다.</div>
        </div>
      )}
    </div>
  );
}

export default CommentsPresenter;
