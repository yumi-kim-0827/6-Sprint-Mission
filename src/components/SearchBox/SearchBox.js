import React from "react";
import "./SearchBox.css";
// image
import searchIcon from "../../assets/images/search_icon.svg";

const SearchBox = (props) => {
  const { placeholder, onInput } = props;

  return (
    <div className="search-box flex-center">
      <div className="search-icon">
        <img src={searchIcon} alt="검색" />
      </div>
      <input onInput={onInput} placeholder={placeholder} />
    </div>
  );
};

export default SearchBox;
