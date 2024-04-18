import styles from "./Tag.module.scss";
import { ReactComponent as XIcon } from "assets/icon/ic_X.svg";

export default function Tag({ children, onDelete }) {
  return (
    <div className={styles.tag}>
      {children}
      <XIcon fill="#9CA3AF" className={styles.icon} onClick={onDelete} />
    </div>
  );
}
