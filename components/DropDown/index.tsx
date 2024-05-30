import React, { useState } from 'react';
import { SortType, SORT_TYPE_DICT } from '@/constants/sortOption';
import SortIcon from '@/public/svgs/sort-icon.svg';

interface OptionProps {
  label: SortType;
}

interface DropdownProps {
  options: OptionProps[];
  handleClickItem: (label: SortType) => void;
}

const DropDown = ({ options, handleClickItem }: DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickItem = (label: SortType) => {
    setIsVisible(false);
    handleClickItem(label);
  };

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        <SortIcon />
      </button>

      {isVisible && (
        <ul>
          {options.map((option) => (
            <li key={option.label} onClick={() => onClickItem(option.label)}>
              {SORT_TYPE_DICT[option.label]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
