import React from "react";
import "./SelectBox.css";
import selectIcon from "../../assets/images/selectbox_icon.svg";

const SelectBox = (props) => {
  const { text, onBoxClick, onOptionClick, optionClass, options } = props;

  return (
    <div className="select-box">
      <button onClick={onBoxClick} className="label box">
        <span className="option-item">{text}</span>
        <div className="icon">
          <img src={selectIcon} alt="더보기" />
        </div>
      </button>
      <ul className={`option-list box ${optionClass}`}>
        {options.map((option) => {
          const { text, sort } = option;
          return (
            <li
              onClick={onOptionClick}
              key={sort}
              className="option-item cursor-pointer"
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectBox;
