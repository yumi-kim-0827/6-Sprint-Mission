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
      <div className="dropdown-main">
        <button type="button" name={name} value={value} data-onpop={state} onClick={onClick} className="dropdown-main__btn">
          <Default>
            <span>{content[value]}</span>
            <img src={icoArrow} alt="아이콘" aria-hidden="true" className="ico-arrow"/>
          </Default>
          <Mobile>
            <img src={icoSort} alt="아이콘" aria-hidden="true"/>
          </Mobile>
        </button>
      </div>
      {state && 
      <ul aria-hidden={onPop} className="dropdown-lists">
        <li className="dropdown-list">
          <button type="button" value="recent" onClick={handleClick} className="dropdown-list__btn">최신순</button>
        </li>
        <li className="dropdown-list">
          <button type="button" value="favorite" onClick={handleClick} className="dropdown-list__btn">좋아요순</button>
        </li>
      </ul>}
    </div>
  );
}