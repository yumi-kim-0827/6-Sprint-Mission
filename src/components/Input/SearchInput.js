import Styles from "./Input.module.scss";
import icoSearch from "../../img/ic_search.svg";

export default function SearchInput({
  name,
  value,
  onChange,
  onSubmit,
  className,
}) {
  return (
    <div className={className}>
      <form onSubmit={onSubmit} className={`${Styles.search}`}>
        <img src={icoSearch} alt="검색" className={Styles.searchIco} />
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className={Styles.searchInput}
          placeholder="검색할 상품을 입력해주세요"
        />
      </form>
    </div>
  );
}
