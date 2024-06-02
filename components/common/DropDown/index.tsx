import React, { useState } from 'react';
import { SortType, SORT_TYPE_DICT } from '@/constants/sortOption';
import SortIcon from '@/public/svgs/sort-icon.svg';
import style from './style.module.scss';
import useIsMobile from '@/hooks/useIsMobile';
import cn from 'classnames';

interface OptionProps {
  label: SortType;
}

interface DropdownProps {
  options: OptionProps[];
  handleClickItem: (label: SortType) => void;
}

const DropDown = ({ options, handleClickItem }: DropdownProps) => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [labelName, setLabelName] = useState<SortType>('recent');

  const onClickItem = (label: SortType) => {
    setIsVisible(false);
    setLabelName(label);
    handleClickItem(label);
  };

  return (
    <div className={style.wrapper}>
      <button
        className={cn(style.button, { [style.mobile]: isMobile })}
        onClick={() => setIsVisible(!isVisible)}
      >
        {!isMobile && <span>{SORT_TYPE_DICT[labelName]}</span>}
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
