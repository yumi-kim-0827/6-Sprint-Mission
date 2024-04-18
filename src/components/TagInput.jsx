import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import './style/TagInput.css';

export default function TagInput({ name, value, onChange, textClear }) {
  const [tagList, setTagList] = useState([]);

  const handleKeyDown = e => {
    if (value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
      textClear(e);
    }
  };

  const submitTagItem = () => {
    setTagList([value, ...tagList]);
  };

  const handleDeleteClick = tagValue => {
    const remainTags = tagList.filter(tag => tag !== tagValue);
    setTagList(remainTags);
  };

  return (
    <div>
      <label htmlFor=''>
        태그
        <input
          name={name}
          value={value}
          type='text'
          placeholder='태그를 입력해주세요'
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </label>
      <div className='tag__container'>
        {tagList.map((tagItem, index) => {
          return (
            <div key={index} className='tag'>
              <span className='tag__text'>{tagItem}</span>
              <DeleteButton deleteItem={'tag'} onClick={() => handleDeleteClick(tagItem)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
