import styles from "@/styles/Board.module.css";
import searchIC from "@/public/icon/ic_Search.svg";
import Image from "next/image";

interface SearchProps {
  searchTerm: string;
  onSearchChange: Function;
}

export default function SearchInput({
  searchTerm,
  onSearchChange,
}: SearchProps) {
  return (
    <div className={styles.SearchContainer}>
      <Image width={15} height={15} src={searchIC} alt="검색 아이콘" className={styles.SearchIcon}/>
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.SearchInput}
      />
    </div>
  );
}
