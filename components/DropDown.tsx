import { useState } from "react";

export default function DropDown({ order = "recent", onChangeOrder }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [localOrder, setLocalOrder] = useState(order);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };
  const handleOptionClick = (order) => {
    setLocalOrder(order);
    onChangeOrder(order);
    setIsDropDown(false);
  };

  return (
    <>
      <div onClick={handleDropDown}>
        {localOrder == "recent" ? "최신순" : "좋아요순"}
      </div>
      {isDropDown && (
        <div>
          <div onClick={() => handleOptionClick("recent")}>최신순</div>
          <div onClick={() => handleOptionClick("like")}>좋아요순</div>
        </div>
      )}
    </>
  );
}
