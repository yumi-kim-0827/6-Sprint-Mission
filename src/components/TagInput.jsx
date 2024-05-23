import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import './style/TagInput.css';
import { v4 as uuidv4 } from 'uuid';

export default function TagInput({ name, tagList, setTagList }) {
  const [tag, setTag] = useState('');

  const handleKeyDown = e => {
    if (tag.trim() !== '' && e.key === 'Enter') {
      if (e.nativeEvent.isComposing === false) {
        setTagList([tag, ...tagList]);
        e.preventDefault();
        setTag('');
      }
    }
  };

  const handleInputChange = e => {
    setTag(e.target.value);
  };

  const handleDeleteClick = tagValue => {
    const remainTags = tagList.filter(tag => tag.key !== tagValue);
    setTagList(remainTags);
  };

  return (
    <div>
      <label htmlFor=''>
        태그
        <input
          name={name}
          value={tag}
          type='text'
          placeholder='태그를 입력해주세요'
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </label>
      <div className='tag__container'>
        {tagList.map(tagItem => {
          return (
            <div key={uuidv4()} className='tag'>
              <p className='tag__text'>{tagItem}</p>
              <DeleteButton deleteItem={'tag'} onClick={() => handleDeleteClick(tagItem)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
