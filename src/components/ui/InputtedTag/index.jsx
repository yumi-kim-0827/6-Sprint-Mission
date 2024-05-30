import xIcon from "../../../assets/icons/ic_X.svg";
import styles from "./styles.module.css";

function Tag({ tag, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(tag);
  };

  return (
    <span className={styles.tagBox}>
      {tag}
      <img
        className={styles.xButton}
        src={xIcon}
        onClick={handleDeleteClick}
        alt="x-icon"
      ></img>
    </span>
  );
}

export default Tag;
