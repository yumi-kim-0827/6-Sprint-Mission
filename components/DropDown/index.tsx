import React, { useState } from 'react';
import { SortType, SORT_TYPE_DICT } from '@/constants/sortOption';
import SortIcon from '@/public/svgs/sort-icon.svg';
import style from './style.module.scss';

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
    <div className={style.wrapper}>
      <button className={style.button} onClick={() => setIsVisible(!isVisible)}>
        <SortIcon />
      </button>

      {isVisible && (
        <ul className={style.container}>
          {options.map((option) => (
            <li
              className={style.item}
              key={option.label}
              onClick={() => onClickItem(option.label)}
            >
              {SORT_TYPE_DICT[option.label]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
