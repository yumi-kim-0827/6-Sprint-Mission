import { useResponsive } from "../../hooks/useResponsive";
import Styles from "./Input.module.scss";
import icoArrow from "../../img/ic_arrow_down.svg";
import icoSort from "../../img/ic_sort.svg";

export default function Select({
  isShow,
  selectOptions,
  name,
  value,
  onPop,
  onClick,
  onChange,
  className,
}) {
  const [isPC, isTablet, isMobile] = useResponsive();
  const OPTIONS = selectOptions;

  const handleClick = (e) => {
    onChange(name, e.target.value);
    onPop(false);
  };

  return (
    <div className={`${Styles.select} ${className}`}>
      <form onChange={handleClick}>
        <div className={Styles["select-main"]}>
          <button
            type="button"
            name={name}
            value={value}
            aria-expanded={isShow}
            aria-controls="select-box"
            onClick={onClick}
            className={Styles["select-main__btn"]}
          >
            {(isPC || isTablet) && (
              <>
                <span aria-hidden="true">
                  {OPTIONS.find((el) => el.value === value).name}
                </span>
                <img
                  src={icoArrow}
                  alt="아이콘"
                  aria-hidden="true"
                  className="ico-arrow"
                />
              </>
            )}
            {isMobile && (
              <>
                <img src={icoSort} alt="아이콘" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
        {isShow && (
          <ul
            id="select-box"
            aria-hidden={onPop}
            className={Styles["select-lists"]}
          >
            {OPTIONS.map((option, index) => {
              return (
                <li className={Styles["select-list"]}>
                  <input
                    type="radio"
                    name={name}
                    id={`select-${index + 1}`}
                    value={option.value}
                    onClick={handleClick}
                    className={Styles.radio}
                  />
                  <label
                    type="radio"
                    htmlFor={`select-${index + 1}`}
                    className={Styles["select-list__btn"]}
                  >
                    {option.name}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
}
