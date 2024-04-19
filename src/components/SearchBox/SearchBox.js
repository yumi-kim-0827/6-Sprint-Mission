import React from "react";
import "./SearchBox.css";
// image
import searchIcon from "../../assets/images/search_icon.svg";

const SearchBox = (props) => {
  const { value, placeholder, onChange, onSubmit } = props;

  return (
    <form className="search-box flex-center" onSubmit={onSubmit}>
      <button type="submit" className="search-icon">
        <img src={searchIcon} alt="검색" />
      </button>
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </form>
  );
};

export default SearchBox;
