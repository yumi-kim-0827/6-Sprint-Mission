import React from "react";
import Profile from "./Profile";
import Image from "next/image";
import likeImg from "@/src/assets/icons/favorite_icon.svg";

const BoardList = () => {
  return (
    <li className="grid gap-4 py-6 border-b border-b-gray-200">
      <div className="flex justify-between gap-2">
        <p className="flex-1 font-semibold text-lg md:text-xl leading-12">
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </p>
        <div className="w-[72px] h-[72px] rounded-lg border border-gray-100 bg-gray-900"></div>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center flex-wrap gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Profile />
          </div>
          <h6 className="text-sm text-gray-600 leading-12">총명한판다</h6>
          <span className="text-sm leading-12 text-gray-400">2024. 04. 16</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <Image src={likeImg} alt="좋아요" width={20} />
          <span className="leading-12 text-gray-500">9999+</span>
        </div>
      </div>
    </li>
  );
};

export default BoardList;
