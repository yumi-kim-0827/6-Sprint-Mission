import { Default, Mobile } from "../common/responsive";
import { useResponsive } from "../hooks/useResponsive";
import icoArrow from "../img/ic_arrow_down.svg";
import icoSort from "../img/ic_sort.svg";

export function DropDown ({isShow, name, value, onPop, onClick, onChange, className}) {
  const [isPC, isTablet, isMobile] = useResponsive();
  const content = {
    recent : "최신순",
    favorite : "좋아요순"
  }

  const handleClick = (e) => {
    onChange(name, e.target.value);
    onPop(false);
  }

  return (
    <div className={`dropdown ${className}`}>
      <form onChange={handleClick}>
        <div className="dropdown-main">
          <button type="button" name={name} value={value} aria-label="페이지 정렬 바꾸기" aria-expanded={isShow} aria-controls="dropdown-sort" onClick={onClick} className="dropdown-main__btn">
            { (isPC || isTablet) && <>
              <span aria-hidden="true">{content[value]}</span>
              <img src={icoArrow} alt="아이콘" aria-hidden="true" className="ico-arrow"/>
            </>}
            { isMobile && <>
              <img src={icoSort} alt="아이콘" aria-hidden="true"/>
            </>}
          </button>
        </div>
        {isShow && 
        <ul id="dropdown-sort" aria-hidden={onPop} className="dropdown-lists">
          <li className="dropdown-list">
            <input type="radio" id="order-recent" name="order" value="recent" onClick={handleClick} className="dropdown-list__radio"/>
            <label type="radio" htmlFor="order-recent" className="dropdown-list__btn">최신순</label>
          </li>
          <li className="dropdown-list">
            <input type="radio" id="order-favorite" name="order" value="favorite" onClick={handleClick} className="dropdown-list__radio"/>
            <label type="button" htmlFor="order-favorite" className="dropdown-list__btn">좋아요순</label>
          </li>
        </ul>}
      </form>
    </div>
  );
}