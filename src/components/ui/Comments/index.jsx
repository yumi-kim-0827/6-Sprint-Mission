import AddCommentContainer from "../../container/AddCommentContainer";
import CommentsPresenter from "../CommentsPresenter";
import styles from "./styles.module.css";

function Comments({ comments, setIsAdded }) {
  return (
    <div className={styles.layout}>
      <AddCommentContainer setIsAdded={setIsAdded} />
      <CommentsPresenter comments={comments} />
    </div>
  );
}

export default Comments;
