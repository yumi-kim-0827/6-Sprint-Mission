import React from "react";
import EmptyHeart from "../assets/heart-empty.png";

export default function ItemCard({ item }) {
  return (
    <div className="w-64  p-5">
      <img
        src={item.images}
        alt="product"
        className="w-100 h-52 mb-2 rounded-lg"
      />
      <div className="text-sm">{item.name}</div>
      <div className="font-bold">{item.price.toLocaleString()}원</div>
      <div className="flex items-center gap-1 text-sm">
        <img src={EmptyHeart} alt="emptyHeart" className="w-4 h-4" />
        {item.favoriteCount}
      </div>
    </div>
  );
}
