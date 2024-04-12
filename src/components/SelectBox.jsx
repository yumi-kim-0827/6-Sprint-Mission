import React, { useRef, useState, useEffect } from 'react';
import './style/SelectBox.css';

export default function SelectBox({ items, handleSort }) {
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

  const ulClassName = isDisplay ? 'select-box__list display' : 'select-box__list display-none';

  return (
    <div class='select-box'>
      <button class='select-box__btn' onClick={handleButtonClick}>
        <picture>
          <source srcSet='/imgs/ic_select.png' alt='드롭다운' />
          <img src='/imgs/ic_select.png' alt='드롭다운' />
        </picture>
        <p class='select-box__btn__p'>
          <span>{title}</span>
          <img class='select-box__btn__arrow' src='/imgs/ic_arrow_down.png' alt='아래 화살표' />
        </p>
      </button>
      <ul class={ulClassName} ref={ulRef}>
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
    </div>
  );
}
