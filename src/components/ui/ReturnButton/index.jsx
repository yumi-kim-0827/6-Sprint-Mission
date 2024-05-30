import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function ReturnButton() {
  return (
    <Link className={styles.link} to="/items">
      목록으로 돌아가기
    </Link>
  );
}

export default ReturnButton;
