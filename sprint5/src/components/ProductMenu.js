import React, { useState } from "react";
import Button from "./Button";
import DropdownContainer from "./DropdownContainer.js";

function ProductMenu({
  title,
  button,
  dropdown,
  handleNewestClick,
  handleBestClick,
  search,
  handleSearch,
}) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {search && (
          <form onSubmit={handleSubmit}>
            <input
              value={searchValue}
              onChange={handleChange}
              className=""
              type="text"
              placeholder=""
            />
            <button className="" type="submit">
              검색
            </button>
          </form>
        )}
        {button && <Button text="상품 등록하기" link="/additem" />}
        {dropdown && (
          <DropdownContainer
            handleNewestClick={handleNewestClick}
            handleBestClick={handleBestClick}
          />
        )}
      </div>
    </div>
  );
}

export default ProductMenu;
