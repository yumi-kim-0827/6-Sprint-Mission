/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/commentnotfound.module.css'

function CommentNotFound() {
  return (
    <div className={styles.container}>
      <img src={require('../assets/img_empty.png')} className={styles.notfoundimg} />
      <p className={styles.notfound}>아직 문의가 없습니다.</p>
    </div>
  );
}

export default CommentNotFound;