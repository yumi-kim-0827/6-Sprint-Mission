import { useResponsive } from "../../hooks/useResponsive";
import Styles from "./Input.module.scss";
import icoArrow from "../../img/ic_arrow_down.svg";
import icoSort from "../../img/ic_sort.svg";
import { ChangeEvent, MouseEventHandler } from "react";

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  isShow: boolean;
  selectOptions: Option[];
  name: string;
  value: string;
  onPop: (value: boolean) => void;
  onClick: () => void;
  onChange: (name: string, value: string) => void;
  className?: string;
}

export default function Select({
  isShow,
  selectOptions,
  name,
  value,
  onPop,
  onClick,
  onChange,
  className,
}: SelectProps) {
  const [isPC, isTablet, isMobile] = useResponsive();
  const OPTIONS = selectOptions;

  const handleClick: MouseEventHandler<HTMLInputElement> = (e) => {
    onChange(name, e.currentTarget.value);
    onPop(false);
  };

  return (
    <div className={`${Styles.select} ${className}`}>
      <form>
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
                  {OPTIONS.find((el) => el.value === value)?.name}
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
          <ul id="select-box" className={Styles["select-lists"]}>
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
