import React from "react";

export default function Dropdown({ onChangeSort }) {
  const handleRecentClick = (e) => {
    e.stopPropagation();
    onChangeSort("recent");
  };
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onChangeSort("favorite");
  };

  return (
    <div
      onClick={handleRecentClick}
      className="w-32 flex flex-col justify-center items-center border border-coolGray400 rounded-xl px-4 py-3 bg-white z-10"
    >
      <div className="w-32 pb-2 text-center border-b-2 cursor-pointer">
        <p>최신순</p>
      </div>
      <div
        onClick={handleFavoriteClick}
        className="w-32 pt-2 text-center cursor-pointer"
      >
        <p>좋아요순</p>
      </div>
    </div>
  );
}
