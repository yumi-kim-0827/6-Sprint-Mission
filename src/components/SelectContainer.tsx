import { useRouter } from 'next/router';
import React, {
  ChangeEvent,
  SelectHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import SearchBar from './SearchBar';

const SelectContainer = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedOption, setSelectedOption] = useState('recent');
  useEffect(() => {
    router.push(`/boards?page=1&pageSize=5&orderBy=${selectedOption}`);
  }, [selectedOption]);
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  return (
    <SearchBar
      selectOption={selectedOption}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default SelectContainer;

