import React, { useState } from "react";

interface DropDownProps {
  orderBySort: (orderby: string) => void;
}

export default function DropdownMenu({ orderBySort }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("최신순");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    if (selectedOption === "최신순") {
      orderBySort("recent");
    } else {
      orderBySort("like");
    }
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {selectedOption}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div
            onClick={() => handleOptionClick("최신순")}
            className="dropdown-item"
          >
            최신순
          </div>
          <div
            onClick={() => handleOptionClick("좋아요순")}
            className="dropdown-item"
          >
            좋아요순
          </div>
        </div>
      )}
    </div>
  );
}
