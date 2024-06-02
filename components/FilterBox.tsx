import { useState } from 'react';
import Image from 'next/image';

import ICON_ARROW_DOWN from '@/public/icon-arrow-down.svg';
import ICON_FILTER from '@/public/icon-filter.svg';

interface IFilterBoxProps {
  orderBy: 'recent' | 'like';
  paramsHandler: (key: 'orderBy', value: 'recent' | 'like') => void;
  displaySize: 'desktop' | 'tablet' | 'mobile';
}

export default function FilterBox({
  orderBy = 'recent',
  paramsHandler,
  displaySize,
}: IFilterBoxProps) {
  const [showOption, setShowOption] = useState(false);

  function handleShowOption() {
    setShowOption(!showOption);
  }

  return (
    <div className="relative">
      {displaySize === 'mobile' ? (
        <div
          onClick={handleShowOption}
          className="flex justify-center item-center w-[42px] h-[42px] border border-[#e5e7eb] rounded-lg cursor-pointer"
        >
          <Image src={ICON_FILTER} alt="정렬 버튼 이미지" />
        </div>
      ) : (
        <div
          onClick={handleShowOption}
          className="flex justify-between items-center pt-[12px] pr-[20px] pb-[12px] pl-[20px] w-[130px] h-[100%] border border-[#e5e7eb] rounded-lg cursor-pointer"
        >
          <p>{orderBy === 'recent' ? '최신순' : '좋아요순'}</p>
          <Image
            className={`${showOption ? 'transform rotate-180' : ''} `}
            src={ICON_ARROW_DOWN}
            alt={'필터 버튼'}
          />
        </div>
      )}
      <div
        className={`${
          showOption ? '' : 'hidden'
        } absolute top-[48px] lg:w-[130px] md:w-[130px] sm:w-[100px] text-nowrap flex-row items-center pt-[12px] pr-[20px] pb-[12px] pl-[20px] border border-[#e5e7eb] rounded-lg bg-[#ffffff]`}
      >
        <p
          className="cursor-pointer"
          onClick={() => {
            paramsHandler('orderBy', 'recent');
            handleShowOption();
          }}
        >
          최신순
        </p>
        <hr className="mt-[3px] mb-[3px]" />
        <p
          className="cursor-pointer"
          onClick={() => {
            paramsHandler('orderBy', 'like');
            handleShowOption();
          }}
        >
          좋아요순
        </p>
      </div>
    </div>
  );
}
