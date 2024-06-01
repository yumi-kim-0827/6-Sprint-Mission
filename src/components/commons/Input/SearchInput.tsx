import { ChangeEvent, KeyboardEvent } from "react";
import Image from "next/image";
import { Query } from "@/models/api_response";

interface Props {
  value: Query;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (value: Query) => void;
}

export default function SearchInput({
  value,
  placeholder,
  onChange,
  handleSearch,
}: Props) {
  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleSearch(e.currentTarget.value);
  };

  return (
    <div className="relative w-full">
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onEnterPress}
        className="h-[42px] w-full min-w-[242px] rounded-xl border-none bg-cool-gray-300 indent-[44px] font-normal outline-none placeholder:text-cool-gray-400"
      />
      <Image
        src="/images/ic_search.svg"
        alt="search-icon"
        width={15}
        height={15}
        className="absolute left-5 top-[13px] cursor-pointer"
        onClick={() => {
          handleSearch(value);
        }}
      />
    </div>
  );
}
