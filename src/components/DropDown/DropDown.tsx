import React from "react";
import styles from "./DropDown.module.scss";

interface DropDownProps {
  orderBy: (value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ orderBy }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    orderBy(e.target.value);
  };

  return (
    <div>
      <label htmlFor="orderBy">정렬 기준: </label>
      <select id="orderBy" onChange={handleChange}>
        <option value="recent">최신 순</option>
        <option value="like">좋아요 순</option>
      </select>
    </div>
  );
};

export default DropDown;
