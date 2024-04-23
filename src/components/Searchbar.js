import React from "react";
import styled from "styled-components";

import searchIcon from "../assets/icon/search.svg";

function Searchbar({ className, placeholder, value, onChange }) {
  const handleChange = (e) => {
    value = e.target.value;
    onChange(value);
  };

  return (
    <StyledInput className={className}>
      <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
      <i className="icon-search"></i>
    </StyledInput>
  );
}

const StyledInput = styled.div`
  position: relative;

  input {
    width: 294px;
    height: 42px;
    padding: 9px 44px;
    font-size: 16px;
    background-color: var(--color-cool-gray-100);
    border-radius: 12px;
    &::placeholder {
      color: var(--color-cool-gray-400);
    }
  }

  i.icon-search {
    position: absolute;
    top: 9px;
    left: 16px;
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(${searchIcon});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;

export default Searchbar;
