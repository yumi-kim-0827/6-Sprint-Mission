import React, { useState } from "react";

const Dropdown = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState("최신순");
  const options = ["최신순", "좋아요순"];
  const optionsValue = ["createdAt", "favoriteCount"];

  //   const handleDropdownClick = (clickOption) => {
  //     handleDropdown(optionsValue[clickOption]);
  //   };

  const handleSelect = (clickOption) => {
    setSelectedOption(options[clickOption]);
    onChange(optionsValue[clickOption]);
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.key)}
      >
        {options.map((option, index) => (
          <option key={index} value={options}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
