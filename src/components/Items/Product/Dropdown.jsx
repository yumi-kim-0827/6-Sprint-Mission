import "./Dropdown.css";

import React, { useState } from "react";
import { Desktop, Mobile, Tablet } from "../../MediaQuery";

import PropTypes from "prop-types";

import iconArrow from "../../../assets/images/items/ic_arrow_down.svg";
import iconSort from "../../../assets/images/items/ic_sort.svg";

function Dropdown({ options, className, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <div className={`dropdown ${className}`}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <Desktop>
          {selectedOption.label || "최신순"}
          <img className="arrow-icon" src={iconArrow} alt="iconArrow" />
        </Desktop>
        <Tablet>
          {selectedOption.label || "최신순"}
          <img className="arrow-icon" src={iconArrow} alt="iconArrow" />
        </Tablet>
        <Mobile>
          <img className="arrow-icon" src={iconSort} alt="iconSort" />
        </Mobile>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className={`option ${option.className}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Dropdown;
