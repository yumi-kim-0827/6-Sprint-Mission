import React from 'react';
import './style/SelectBox.css';

export default function SelectBox() {
  return (
    <div class='select-box'>
      <button class='select-box__btn'>
        <picture>
          <source srcSet='/imgs/ic_select.png' alt='' />
          <img src='/imgs/ic_select.png' alt='' />
        </picture>
        <p class='select-box__btn__p'>
          <span>최신순</span>
          <img class='select-box__btn__img' src='/imgs/ic_arrow_down.png' alt='아래 화살표' />
        </p>
      </button>
      <ul class='select-box__list'>
        <li>
          <button className='select-box__list__newest-btn' type='button'>
            최신순
          </button>
        </li>
        <li>
          <button className='select-box__list__like-btn' type='button'>
            좋아요순
          </button>
        </li>
      </ul>
    </div>
  );
}
