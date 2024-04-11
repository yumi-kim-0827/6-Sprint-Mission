import ICON_MAGNIFYING from "../../assets/icon_magnifying_glass.svg";
import "../../styles/Items/SearchBox.css";

const SearchBox = () => {
  return (
    <div className={"SearchBox"}>
      <input type="text" placeholder="검색할 상품을 입력해주세요." />
      <img
        className={"SearchBox__icon"}
        src={ICON_MAGNIFYING}
        alt="돋보기 아이콘"
      />
    </div>
  );
};

export default SearchBox;
