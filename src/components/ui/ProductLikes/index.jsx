import heartIcon from "../../../assets/icons/ic_heart.svg";
import styles from "./styles.module.css";

function ProductLikes({ likes }) {
  return (
    <div className={styles.likes}>
      <img className={styles.icon} src={heartIcon} alt="좋아요 수" />
      <div className={styles.count}>{likes}</div>
    </div>
  );
}

export default ProductLikes;
