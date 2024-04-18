import SearchIcon from "assets/icon/ic_search.svg";
import styles from "../Input.module.scss";

export default function SearchInput({ value, onChange }) {
  return (
    <div className={styles.search}>
      <input
        placeholder="검색할 상품을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <img src={SearchIcon} alt="search-icon" />
    </div>
  );
}
