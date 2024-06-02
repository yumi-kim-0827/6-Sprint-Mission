import React from "react";

const Dropdown = ({ setOrder }) => {
  const handleChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
};

export default Dropdown;
