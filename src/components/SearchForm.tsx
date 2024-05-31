import Image from "next/image";
import React from "react";
import searchIcon from "@/src/assets/icons/search_icon.svg";

interface SearchFormProps {
  value: string;
  onChange: void;
  onSubmit: void;
}

const SearchForm = ({ value, onChange, onSubmit }: SearchFormProps) => {
  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmitSearch}
      className="w-full py-[9px] px-4 bg-gray-100 rounded-xl flex items-center gap-2"
    >
      <Image src={searchIcon} alt="검색" width={24} height={24} />
      <input
        value={value}
        onChange={onChange}
        className=" text-gray-400 leading-15 bg-transparent flex-1 focus:outline-0"
        placeholder="검색할 상품을 입력해주세요"
      />
    </form>
  );
};

export default SearchForm;
