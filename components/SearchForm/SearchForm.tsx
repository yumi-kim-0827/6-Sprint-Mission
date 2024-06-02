import { useRouter } from 'next/router';
import { FormEvent, useState } from "react";
import SearchIC from "public/icon/ic_search.png";
import Sort from "components/SortIcon";
import * as S from "./SearchFormStyles";

interface SearchFormProps {
  initialValue?: string,
  handleSortChange: (value: string) => void;
}

export default function SearchForm({ initialValue = "", handleSortChange }: SearchFormProps) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const [isLike, setIsLike] = useState(false);

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!value) {
      router.push('/boards');
      return;
    }

    router.push(`search?keyword=${value}`)
  }

  const handleSortedData = () => {
    setIsLike((prev) => !prev);
    handleSortChange(isLike ? "like" : "recent");
  }

  return (
    <>
      <S.SearchLayout onSubmit={handleSubmit}>
        <S.Input name="keyword" value={value} onChange={handleChange} placeholder="검색할 상품을 입력해주세요" />
        <S.SearchIcon src={SearchIC} width={15} height={15} alt="돋보기 아이콘" />
        <S.IconContainer onClick={handleSortedData}>
          <Sort isLike={isLike} />
        </S.IconContainer>
      </S.SearchLayout>
    </>
  );
}
