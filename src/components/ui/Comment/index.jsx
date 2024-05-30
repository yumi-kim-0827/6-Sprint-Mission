import { elapsedTime } from "../../../utils/calculateTimeDifference";
import { isMobile, isTablet } from "../../../utils/module";
import Kebab from "../Kebab";
import styles from "./styles.module.css";

function Comment({ comment }) {
  return (
    <div className={styles.layout}>
      <div className={styles.alignKebab}>
        <div className={styles.comment}>{comment.content}</div>
        {(isTablet() || isMobile()) && <Kebab />}
      </div>
      <div className={styles.aligner}>
        <img
          className={styles.profileImage}
          src={comment.writer.image}
          alt="프로필 사진"
        />
        <div>
          <div className={styles.nickname}>{comment.writer.nickname}</div>
          <div className={styles.elapsedTime}>
            {elapsedTime(comment.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
