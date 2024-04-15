import { Default, Mobile } from "../common/responsive";
import icoArrow from "../img/ic_arrow_down.svg";
import icoSort from "../img/ic_sort.svg";

export function DropDown ({state, name, value, onPop, onClick, onChange, className}) {
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
          <button type="button" name={name} value={value} aria-label="페이지 정렬 바꾸기" aria-expanded={state} aria-controls="dropdown-sort" onClick={onClick} className="dropdown-main__btn">
            <Default>
              <span aria-hidden="true">{content[value]}</span>
              <img src={icoArrow} alt="아이콘" aria-hidden="true" className="ico-arrow"/>
            </Default>
            <Mobile>
              <img src={icoSort} alt="아이콘" aria-hidden="true"/>
            </Mobile>
          </button>
        </div>
        {state && 
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