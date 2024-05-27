import React, { useRef, useState } from 'react';
import './style/SelectBox.css';

type Props = {
  handleSort: (sortType: string) => void;
};

export default function SelectBox({ handleSort }: Props) {
  const [isDisplay, setIsDisplay] = useState(false);
  const ulRef = useRef(null);
  const [title, setTitle] = useState('최신순');

  const handleButtonClick = () => {
    setIsDisplay(prevIsDisplay => !prevIsDisplay);
  };

  const handleNewestClick = () => {
    setTitle('최신순');
    setIsDisplay(false);
    handleSort('최신순');
  };

  const handleLikesClick = () => {
    setTitle('좋아요순');
    setIsDisplay(false);
    handleSort('좋아요순');
  };

  return (
    <div className='select-box'>
      <button className='select-box__btn' onClick={handleButtonClick}>
        <picture>
          <img src='/imgs/ic_select.png' alt='드롭다운' />
        </picture>
        <p className='select-box__btn__p'>
          <span>{title}</span>
          <img className='select-box__btn__arrow' src='/imgs/ic_arrow_down.png' alt='아래 화살표' />
        </p>
      </button>
      {isDisplay && (
        <ul className='select-box__list' ref={ulRef}>
          <li>
            <button className='select-box__list__newest-btn' type='button' onClick={handleNewestClick}>
              최신순
            </button>
          </li>
          <li>
            <button className='select-box__list__like-btn' type='button' onClick={handleLikesClick}>
              좋아요순
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
